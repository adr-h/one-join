import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { INTRO_QUERY } from "../consts/sql";

type SetupLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

const modal_id = 'intro_modal';

export function Intro({ execQuery, resetDbState }: SetupLessonProps) {
   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" defaultChecked={true} />
         <h1 className="collapse-title text-4xl font-bold">
            <span className="underline">One Join Cheatsheet</span> <span className="text-xs no-underline">(out of many)</span>
         </h1>
         <div className="collapse-content text-sm">
            <article className="prose prose-base">
               <ul>
                  <li>
                     A humble collection of notes on common SQL <code>JOIN</code>s
                  </li>
                  <li>
                     The <button className="btn btn-accent btn-l mr-3" onClick={()=> document.getElementById(modal_id)?.showModal()}>Click to Practice</button>

                      buttons allow you to <b>exec real queries</b> on a PG-based database
                  </li>
                  <li>
                     Powered by <a href="https://pglite.dev/" target="_blank" >PgLite</a>
                  </li>
                  {/* <li>
                     A <code>LEFT JOIN</code> returns <i>all rows</i> from the <code className="text-green-400">left_table</code> (the first table), along with any <i className="text-green-300">matching rows</i> from the <code>right_table</code> (the second table).
                  </li>
                  <li>
                     If there is no matching row in the <code>right_table</code>, the result will include <code className="text-red-400">NULL</code> values for its columns.
                  </li> */}
               </ul>
            </article>


            <dialog id={modal_id} className="modal">
               <div className="modal-box w-2xl max-w-full">

                  <div className="flex flex-row">
                     <div className="prose prose-base">
                        <h2>Intro</h2>
                     </div>
                     <form method="dialog" className="grow">
                        <button className="btn float-right">✕</button>
                     </form>
                  </div>

                     <article className="prose prose-base">
                        <ul>
                           <li>Click on the "Execute" button below to exec a <b>real</b> SQL query</li>
                           <li>Click on "Reset" button below to reset the DB state</li>
                           <li>All queries run against an in-browser instance of <a href="https://pglite.dev/" target="_blank" >PgLite</a></li>
                        </ul>
                     </article>
                     <SqlRunner
                     resetDbState={resetDbState}
                     execQuery={execQuery}
                     initialValue={INTRO_QUERY} />
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
