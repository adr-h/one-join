import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";

type FullJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function FullJoinLesson({ execQuery, resetDbState } : FullJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Full Joins
         </h1>
         <div className="collapse-content text-sm">
            <Editor execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
