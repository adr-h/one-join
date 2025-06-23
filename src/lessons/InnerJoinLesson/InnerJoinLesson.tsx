import type { ComponentProps } from "react";
import { InnerJoinPractice } from "./InnerJoinPractice";

type InnerJoinLessonProps = ComponentProps<typeof InnerJoinPractice>

const modal_id = 'inner_join_practice';

export function InnerJoinLesson({ execQuery, resetDbState }: InnerJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" defaultChecked={true} />
         <h1 className="collapse-title text-3xl font-bold underline">
            Inner Join
         </h1>
         <div className="collapse-content text-sm gap-8">
            <section className="flex flex-column gap-8">
               <div>
                  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                     {/* <!-- White background --> */}
                     <rect width="100%" height="100%" fill="white" />

                     {/* <!-- Left circle --> */}
                     <circle cx="100" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                     <text x="60" y="100" font-size="14" text-anchor="middle" fill="black">A</text>

                     {/* <!-- Right circle --> */}
                     <circle cx="180" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                     <text x="220" y="100" font-size="14" text-anchor="middle" fill="black">B</text>

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
                  <button className="btn btn-accent btn-l w-full" onClick={()=> (document.getElementById(modal_id) as HTMLDialogElement)?.showModal()}>Click to Practice</button>
               </div>


               <article className="prose prose-base">
                  <pre className="block whitespace-pre-wrap overflow-x-scroll">
                     SELECT table_a.*, table_b.*
                     <br />
                     FROM table_a
                     <br />
                     INNER JOIN table_b ON table_a.key = table_b.fkey;
                  </pre>

                  <ul>
                     <li>
                        An <code>INNER JOIN</code> returns <i>only</i> the <code className="text-green-400">rows that have matching values in both tables</code>.
                     </li>
                     <li>
                        If a row in <code>table_a</code> does not have a corresponding match in <code>table_b</code> (and vice versa), it will be <b className="text-red-400">excluded</b> from the result.
                     </li>
                  </ul>

               </article>
            </section>

            <dialog id={modal_id} className="modal">
               <div className="modal-box w-2xl max-w-full">

                  <div className="flex flex-row">
                     <div className="prose prose-base">
                        <h2>INNER JOIN Practice </h2>
                     </div>
                     <form method="dialog" className="grow">
                        <button className="btn float-right">✕</button>
                     </form>
                  </div>

                  <InnerJoinPractice  execQuery={execQuery} resetDbState={resetDbState}/>
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
