import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { Warning } from "../components/Warning";

type CrossJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function CrossJoinLesson({ execQuery, resetDbState } : CrossJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Cross Join
         </h1>
         <div className="collapse-content text-sm">
            <div className="my-5">
               <Warning>
                  <span>
                     <b>CROSS JOIN</b> can produce very large results, and should be used cautiously.
                  </span>
               </Warning>
            </div>

            <section className="flex flex-column gap-8">
               <div>
                 <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                     {/* <!-- White background --> */}
                     <rect width="100%" height="100%" fill="white" />

                     {/* <!-- Left circle (left_table) --> */}
                     <circle cx="90" cy="100" r="60" fill="#a0d8a0" fill-opacity="0.3" stroke="black" stroke-width="2" />
                     <text x="75" y="60" font-size="14" fill="black">Left</text>

                     {/* <!-- Right circle (right_table) --> */}
                     <circle cx="210" cy="100" r="60" fill="#87cefa" fill-opacity="0.3" stroke="black" stroke-width="2" />
                     <text x="195" y="60" font-size="14" fill="black">Right</text>

                     {/* <!-- Left table rows --> */}
                     <rect x="63" y="75" width="54" height="18" fill="white" stroke="#2f4f2f" />
                     <text x="70" y="89" font-size="14" fill="#2f4f2f">L1</text>

                     <rect x="63" y="105" width="54" height="18" fill="white" stroke="#2f4f2f" />
                     <text x="70" y="119" font-size="14" fill="#2f4f2f">L2</text>

                     {/* <!-- Right table rows --> */}
                     <rect x="183" y="75" width="54" height="18" fill="white" stroke="#1f3f5f" />
                     <text x="190" y="89" font-size="14" fill="#1f3f5f">R1</text>

                     <rect x="183" y="105" width="54" height="18" fill="white" stroke="#1f3f5f" />
                     <text x="190" y="119" font-size="14" fill="#1f3f5f">R2</text>

                     {/* <!-- Criss-cross lines --> */}
                     <line x1="117" y1="84" x2="183" y2="84" stroke="#888" stroke-dasharray="3 2"/>
                     <line x1="117" y1="84" x2="183" y2="114" stroke="#888" stroke-dasharray="3 2"/>
                     <line x1="117" y1="114" x2="183" y2="84" stroke="#888" stroke-dasharray="3 2"/>
                     <line x1="117" y1="114" x2="183" y2="114" stroke="#888" stroke-dasharray="3 2"/>

                     {/* <!-- Annotation --> */}
                     <text x="150" y="180" font-size="14" text-anchor="middle" fill="black">CROSS JOIN</text>
                  </svg>
               </div>
               <article className="prose prose-base">

                  <pre className="block whitespace-pre-wrap overflow-x-scroll">
                     SELECT <code className="text-green-400">left_table.*</code>, <code className="text-green-400">right_table.*</code>
                     <br />
                     FROM <code className="text-green-400">left_table</code>
                     <br />
                     CROSS JOIN <code className="text-green-400">right_table</code>;
                  </pre>

                  <ul>
                     <li>
                        A <code>CROSS JOIN</code> returns <b>every possible combination</b> of <i>every row</i> from the <code className="text-green-400">left_table</code> with <i>every row</i> from the <code className="text-green-300">right_table</code> (AKA: a <b>Cartesian product</b>).

                        <ul>
                           <li>
                              E.g: If the <code>left_table</code> has <code>3</code> rows and the <code>right_table</code> has <code>4</code> rows, the result will have <code className="text-blue-400">12 (3 x 4)</code> rows.
                           </li>
                        </ul>
                     </li>
                     <li>
                        As a <code>CROSS JOIN</code> returns every possible combination of the rows of each table, it does not require a join condition
                     </li>
                  </ul>
               </article>
            </section>



            <SqlRunner execQuery={execQuery} initialValue={''} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
