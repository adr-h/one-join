import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { FullJoinPractice } from "./FullJoinPractice";

type FullJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

const modal_id = 'full_join_practice';


export function FullJoinLesson({ execQuery, resetDbState }: FullJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" defaultChecked={true} />
         <h1 className="collapse-title text-3xl font-bold underline">
            Full Join
         </h1>
         <div className="collapse-content text-sm gap-8">
            <section className="flex flex-column gap-8">
               <div>
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
                  <button className="btn btn-accent btn-l w-full" onClick={()=> (document.getElementById(modal_id) as HTMLDialogElement)?.showModal()}>Click to Practice</button>
               </div>

               <article className="prose prose-base">

                  <pre className="block whitespace-pre-wrap overflow-x-scroll">
                     SELECT <code className="text-green-400">left_table.*</code>, <code className="text-green-400">right_table.*</code>
                     <br />
                     FROM <code className="text-green-400">left_table</code>
                     <br />
                     FULL JOIN <code className="text-green-400">right_table</code> ON <code className="text-green-400">left_table.key</code> = <code className="text-green-400">right_table.fkey</code>;
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
            </section>

            <dialog id={modal_id} className="modal">
               <div className="modal-box w-2xl max-w-full">

                  <div className="flex flex-row">
                     <div className="prose prose-base">
                        <h2>FULL JOIN Practice </h2>
                     </div>
                     <form method="dialog" className="grow">
                        <button className="btn float-right">✕</button>
                     </form>
                  </div>

                  <FullJoinPractice execQuery={execQuery} resetDbState={resetDbState}/>
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
