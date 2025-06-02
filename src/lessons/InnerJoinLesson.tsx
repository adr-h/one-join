import type { ComponentProps } from "react";
import { Editor } from "../components/Editor";
import { INNER_JOIN_QUERY } from "../consts/sql";

type InnerJoinLessonProps = Omit<
   ComponentProps<typeof Editor>, 'initialValue'
>

export function InnerJoinLesson({ execQuery, resetDbState } : InnerJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Inner Joins
         </h1>
         <div className="collapse-content text-sm">
            <article className="prose prose-base">
               <p>
                  An <code>INNER JOIN</code> only returns rows where there is a <b>match in both tables</b>.
               </p>

               <div>
                  The syntax for a basic <code>INNER JOIN</code> might look like this:
                  <pre className="block whitespace-pre-wrap overflow-x-scroll">{`
SELECT [results] from table_a
INNER JOIN table_b
   ON table_a.[key] = table_b.[foreign_key];
                  `}</pre>

                  Where:
                  <ul>
                     <li><code>[results]</code> are the columns you want to retrieve from either tables.</li>
                     <li><code>table_a</code> and <code>table_b</code> are the tables you want to join. </li>
                     <li><code>[key]</code> is a key in <code>table_a</code>.</li>
                     <li><code>[foreign_key]</code> is the foreign key in <code>table_b</code> that references <code>table_a</code>.</li>
                  </ul>
               </div>

               <p>
                  For instance, the following query will return all jobs posted by an employer named "Zeek Ltd";
               </p>
            </article>
            <div className="max-w-3/4">
               <Editor execQuery={execQuery} initialValue={INNER_JOIN_QUERY} resetDbState={resetDbState} />
            </div>
         </div>
      </div>
   )
}
