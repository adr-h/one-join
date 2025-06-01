import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";

type OuterJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function OuterJoinLesson({ execQuery, resetDbState } : OuterJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Outer Joins
         </h1>
         <div className="collapse-content text-sm">
            <Editor execQuery={execQuery} resetDbState={resetDbState} initialValue={''} />
         </div>
      </div>
   )
}
