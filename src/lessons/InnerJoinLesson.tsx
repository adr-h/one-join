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

              <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  {/* <!-- White background --> */}
                  <rect width="100%" height="100%" fill="white" />

                  {/* <!-- Left circle --> */}
                  <circle cx="100" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                  <text x="60" y="100" font-size="14" text-anchor="middle" fill="black">Left</text>

                  {/* <!-- Right circle --> */}
                  <circle cx="180" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                  <text x="220" y="100" font-size="14" text-anchor="middle" fill="black">Right</text>

                  {/* <!-- Intersection lens --> */}
                  <path
                     d="
                        M 140 55.279
                        A 60 60 0 0 1 140 144.721
                        A 60 60 0 0 0 140 144.721
                        A 60 60 0 0 1 140 55.279
                        Z
                     "
                     fill="green"
                     fill-opacity="0.4"
                     stroke="none"
                  />

                  {/* <!-- Annotation --> */}
                  <text x="150" y="180" font-size="14" text-anchor="middle" fill="black">INNER JOIN</text>
               </svg>



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
