import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";

type CrossJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function CrossJoinLesson({ execQuery, resetDbState } : CrossJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Cross Joins
         </h1>
         <div className="collapse-content text-sm">
            Not sure if I should cover Cross Joins since they're rarely used - adding this placeholder anyway just in case I decide to
            <Editor execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
