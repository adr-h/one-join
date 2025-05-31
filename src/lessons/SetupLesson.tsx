import { Editor } from "../components/Editor";
import { CREATE_DEFAULT_TABLES } from "../consts/sql";

type SetupLessonProps = {
  execQuery: (query: string) => Promise<any>;
}

export function SetupLesson(props: SetupLessonProps) {
   const { execQuery } = props;

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Setup [Temp]
         </h1>
         <div className="collapse-content text-sm">
            <div>
               Needing to run the below code is temporary; in future, the getDbConn method will automatically
               run initial table migrations + seeding upon first initialisation.
            </div>
            <Editor execQuery={execQuery} initialValue={CREATE_DEFAULT_TABLES} />
         </div>
      </div>
   )
}
