import { Editor } from "../components/Editor";

type FullJoinLessonProps = {
  execQuery: (query: string) => Promise<any>;
}

export function FullJoinLesson(props: FullJoinLessonProps) {
   const { execQuery } = props;

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Full Joins
         </h1>
         <div className="collapse-content text-sm">
            <Editor execQuery={execQuery} initialValue={''} />
         </div>
      </div>
   )
}
