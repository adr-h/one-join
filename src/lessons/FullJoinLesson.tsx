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
            <article className="prose prose-base">
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

               <pre className="block whitespace-pre-wrap overflow-x-scroll">
                  SELECT <code className="text-green-400">left_table.*</code>, <code className="text-green-400">right_table.*</code>
                  <br />
                  FROM <code className="text-green-400">left_table</code>
                  <br />
                  FULL JOIN right_table ON <code className="text-green-400">left_table.key</code> = <code className="text-green-400">right_table.fkey</code>;
               </pre>

               <ul>
                  <li>A <code>FULL JOIN</code> (or <code>FULL OUTER JOIN</code>) is a type of <code>OUTER JOIN</code></li>
                  <li>
                     A <code>FULL JOIN</code> returns all rows from <code className="text-green-400">both tables</code>, including those that do not have matching rows in the other table.
                  </li>
                  <li>
                     For rows with no match in one of the tables, the result will contain <code className="text-red-400">NULL</code> values for the columns from the unmatched table.
                  </li>
               </ul>
            </article>
            <SqlRunner execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
