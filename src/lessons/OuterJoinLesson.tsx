import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";
import { LEFT_JOIN_QUERY } from "../consts/sql";
import { Tip } from "../components/Tip";

type OuterJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function OuterJoinLesson({ execQuery, resetDbState } : OuterJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Left Joins / Right Joins
         </h1>
         <div className="collapse-content text-sm">

            <article className="prose prose-base">
               <p>
                  <code>LEFT JOIN</code> and <code>RIGHT JOIN</code> are 2 types of basic <code>OUTER JOIN</code>s in SQL. An <code>OUTER JOIN</code> is used when you want to include all data from one table, regardless of whether a matching record exists in the other table.
               </p>

               <ul>
                  <li>
                     <code>LEFT JOIN</code> (or <code>LEFT OUTER JOIN</code>) - returns all rows from the <code>left_table</code> (1st table) and matched rows from the <code>right_table</code> (2nd table).
                     <pre className="block whitespace-pre-wrap overflow-x-scroll">{`
SELECT [results] from left_table
LEFT JOIN right_table ON left_table.key = right_table.fkey;
                  `}
                     </pre>
                  </li>
                  <li>
                     <code>RIGHT JOIN</code> (or <code>RIGHT OUTER JOIN</code>) - returns all rows from the <code>right_table</code>(2nd table) and matched rows from the <code>left_table</code> (1st table).
                     <pre className="block whitespace-pre-wrap overflow-x-scroll">{`
SELECT [results] from left_table
RIGHT JOIN right_table ON left_table.key = right_table.fkey;
                  `}
                     </pre>
                  </li>
               </ul>

               <Tip>
                  <span>TIP: generally, you should choose to use <code>LEFT JOIN</code> instead of <code>RIGHT JOIN</code> as much as possible, as it is more commonly used and easier to understand.</span>
               </Tip>

               <p>
                 For instance, you might want to retrieve all <code>candidates</code>, and also optionally include their <code>resumes</code> if they uploaded any. You can do so using a <code>LEFT JOIN</code>:
               </p>
            </article>
            <Editor execQuery={execQuery} resetDbState={resetDbState} initialValue={LEFT_JOIN_QUERY} />
         </div>
      </div>
   )
}
