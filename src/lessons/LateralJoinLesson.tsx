import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";

type LateralJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function LateralJoinLesson({ execQuery, resetDbState } : LateralJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Lateral Join
         </h1>
         <div className="collapse-content text-sm">
            <Editor execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
