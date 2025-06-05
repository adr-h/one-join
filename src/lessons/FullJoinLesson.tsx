import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";

type FullJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function FullJoinLesson({ execQuery, resetDbState } : FullJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Full Join
         </h1>
         <div className="collapse-content text-sm">
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
               {/* <!-- White background --> */}
               <rect width="100%" height="100%" fill="white" />

               {/* <!-- Left circle --> */}
               <circle cx="100" cy="100" r="60" fill="green" fill-opacity="0.4" stroke="black" stroke-width="2" />
               <text x="60" y="100" font-size="14" text-anchor="middle" fill="black">Left</text>

               {/* <!-- Right circle --> */}
               <circle cx="180" cy="100" r="60" fill="green" fill-opacity="0.4" stroke="black" stroke-width="2" />
               <text x="220" y="100" font-size="14" text-anchor="middle" fill="black">Right</text>

               {/* <!-- Annotation --> */}
               <text x="150" y="180" font-size="14" text-anchor="middle" fill="black">FULL OUTER JOIN</text>
            </svg>

            <SqlRunner execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
