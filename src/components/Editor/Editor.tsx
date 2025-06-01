import {useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import './userWorker';
import { LanguageIdEnum } from 'monaco-sql-languages';

type EditorProps = {
	initialValue: string;
	execQuery: (query: string) => Promise<any>;
	resetDbState: () => Promise<void>;
}

// Note: does not work correctly with React.StrictMode. will re-render the editor twice, despite the dispose call in useEffect
// No clue why. This is pretty similar to the example from the official Monaco Editor repo, which also uses StrictMode without issue
// https://github.com/microsoft/monaco-editor/blob/main/samples/browser-esm-vite-react/src/components/Editor.tsx
export const Editor = ({ resetDbState, execQuery, initialValue }: EditorProps) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	const [queryResult, setQueryResult] = useState<any>(null);

	useEffect(() => {
		console.log('Editor useEffect called 1');
		if (monacoEl) {
			console.log('Editor useEffect called 2');
			setEditor((editor) => {
				if (editor) return editor;

				// TODO:
				// setup autocomplete for tables/dbs
				// https://github.com/DTStack/monaco-sql-languages?tab=readme-ov-file#usage

				return monaco.editor.create(monacoEl.current!, {
					value: initialValue,
					language: LanguageIdEnum.PG,
					minimap: { enabled: false }
				});
			});
		}

		return () => {
			console.log('Dispose called');
			editor?.dispose()
		};
	}, [monacoEl.current]);

	const execQueryHandler = async () => {
		if (!editor) return;

		try {
			const query = editor.getModel()?.getValue() || '';
			const result = await execQuery(query);

			setQueryResult(result);
		} catch (error) {
			setQueryResult(`Error executing query: ${error}`);
		}
	}

	const execResetHandler = async () => {
		try {
			await resetDbState();
			setQueryResult(`Successfully reset database.`);
		} catch (error) {
			setQueryResult(`Error resetting database: ${error}`);
		}
	}


	return(
		<div className="w-full">
			{/* <button onClick={e => editor?.dispose()}> Delete Editor </button> */}
			<button className="btn" onClick={execQueryHandler}> Execute Query </button>
			<button className="btn" onClick={execResetHandler}> Reset Database </button>

			<div className="h-[250px] w-full" ref={monacoEl}></div>
			<pre className="h-[250px] w-full overflow-scroll">
				<code>
					{queryResult ? JSON.stringify(queryResult, null, 2) : 'No query result yet.'}
				</code>
			</pre>
		</div>
	);
};