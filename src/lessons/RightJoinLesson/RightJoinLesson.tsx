import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { Warning } from "../../components/Warning";
import { RightJoinPractice } from "./RightJoinPractice";

type RightJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

const modal_id = 'right_join_practice';

export function RightJoinLesson({ execQuery, resetDbState }: RightJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" defaultChecked={true} />
         <h1 className="collapse-title text-3xl font-bold underline">
            Right Join
         </h1>
         <div className="collapse-content text-sm gap-8">
            <div className="my-5">
               <Warning>
                  <span>While <b>RIGHT JOIN</b> can occasionally be useful, you should use <b>LEFT JOIN</b> instead of <b>RIGHT JOIN</b> whenever possible, as it tends to be easier to reason about.</span>
               </Warning>
            </div>
            <section className="flex flex-column gap-8">
               <div>
                  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                     {/* <!-- White Background --> */}
                     <rect width="100%" height="100%" fill="white" />

                     {/* <!-- Left Circle --> */}
                     <circle cx="100" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                     <text x="60" y="100" font-size="14" text-anchor="middle" fill="black">Left</text>

                     {/* <!-- Right Circle --> */}
                     <circle cx="180" cy="100" r="60" fill="green" fill-opacity="0.4" stroke="black" stroke-width="2" />
                     <text x="220" y="100" font-size="14" text-anchor="middle" fill="black">Right</text>

                     {/* <!-- RIGHT OUTER JOIN Highlight (reapply right fill for emphasis) --> */}
                     <circle cx="180" cy="100" r="60" fill="green" fill-opacity="0.2" stroke="none" />

                     {/* <!-- Annotation --> */}
                     <text x="150" y="180" font-size="14" text-anchor="middle" fill="black">RIGHT OUTER JOIN</text>
                  </svg>
                  <button className="btn btn-accent btn-l w-full" onClick={()=> (document.getElementById(modal_id) as HTMLDialogElement)?.showModal()}>Click to Practice</button>
               </div>

               <article className="prose prose-base">

                  <pre className="block whitespace-pre-wrap overflow-x-scroll">
                     SELECT left_table.*, <code className="text-green-400">right_table.*</code>
                     <br />
                     FROM left_table
                     <br />
                     RIGHT JOIN <code className="text-green-400">right_table</code> ON left_table.fkey = <code className="text-green-400">right_table.key</code>;
                  </pre>

                  <ul>
                     <li>A <code>RIGHT JOIN</code> (or <code>RIGHT OUTER JOIN</code>) is a type of <code>OUTER JOIN</code></li>
                     <li>
                        A <code>RIGHT JOIN</code> returns <i>all rows</i> from the <code className="text-green-400">right_table</code> (the second table), and any <i className="text-green-300">matching rows</i> from the <code>left_table</code> (the first table).
                     </li>
                     <li>
                        If there is no matching row in the <code>left_table</code>, the result will include <code className="text-red-400">NULL</code> values for its columns.
                     </li>
                  </ul>


               </article>
            </section>

            <dialog id={modal_id} className="modal">
               <div className="modal-box w-2xl max-w-full">

                  <div className="flex flex-row">
                     <div className="prose prose-base">
                        <h2>RIGHT JOIN Practice </h2>
                     </div>
                     <form method="dialog" className="grow">
                        <button className="btn float-right">✕</button>
                     </form>
                  </div>

                  <RightJoinPractice execQuery={execQuery} resetDbState={resetDbState}/>
                  <div className="modal-action">
                     <form method="dialog">
                        <button className="btn">Close</button>
                     </form>
                  </div>
               </div>
               <form method="dialog" className="modal-backdrop">
                  <button>close</button>
               </form>
            </dialog>
         </div>
      </div>
   )
}
