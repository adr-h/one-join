import {useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import './userWorker';
import { LanguageIdEnum } from 'monaco-sql-languages';
import type { Result } from '../../service/database/Result';
import { ResultTable } from '../ResultTable';

type EditorProps = {
	initialValue: string;
	execQuery: (query: string) => Promise<Result<any>>;
	resetDbState: () => Promise<void>;
}

// Note: does not work correctly with React.StrictMode. will re-render the editor twice, despite the dispose call in useEffect
// No clue why. This is pretty similar to the example from the official Monaco Editor repo, which also uses StrictMode without issue
// https://github.com/microsoft/monaco-editor/blob/main/samples/browser-esm-vite-react/src/components/Editor.tsx
export const Editor = ({ resetDbState, execQuery, initialValue }: EditorProps) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	const [queryResult, setQueryResult] = useState<Result<any>>();

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

			setQueryResult({
				rows: [ { message: `Executing query ...` } ],
				fields: [ { name: 'message' } ]
			});

			const result = await execQuery(query);

			setQueryResult(result);
		} catch (error) {
			setQueryResult({
				rows: [ { message: `Error occurred: ${error}` } ],
				fields: [ { name: 'message' } ]
			});
		}
	}

	const execResetHandler = async () => {
		try {
			setQueryResult({
				rows: [ { message: `Resetting DB ...` } ],
				fields: [ { name: 'message' } ]
			});

			await resetDbState();

			setQueryResult({
				rows: [ { message: `Successfully reset database` } ],
				fields: [ { name: 'message' } ]
			});
		} catch (error) {
			setQueryResult({
				rows: [ { message: `Error occurred: ${error}` } ],
				fields: [ { name: 'message' } ]
			});
		}
	}


	return(
		<div className="w-full">
			{/* <button onClick={e => editor?.dispose()}> Delete Editor </button> */}
			<div className="join">
				<button className="btn btn-primary rounded-b-none join-item" onClick={execQueryHandler}> Execute Query </button>
				<button className="btn btn-warning rounded-b-none join-item" onClick={execResetHandler}> Reset Database </button>
			</div>
			<div className="h-[250px] w-full max-w-2xl border-4 border-primary" ref={monacoEl}></div>

			<br />

			<ul className="menu bg-success rounded-t-sm">
				<li className="font-semibold px-3">Results
					{ queryResult?.rows ? ` (${queryResult?.rows.length})` : '' }
				</li>
			</ul>
			<div className="max-h-[250px] w-full max-w-2xl overflow-scroll border-4 border-success p-3">
				{
					queryResult ? <ResultTable
						rows={queryResult.rows}
						fields={queryResult.fields}
					/> : <code> No results yet </code>
				}
			</div>
		</div>
	);
};