import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { RIGHT_JOIN_QUERY } from "../consts/sql";
import { Warning } from "../components/Warning";

type RightJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function RightJoinLesson({ execQuery, resetDbState }: RightJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Right Join
         </h1>
         <div className="collapse-content text-sm gap-8">
            <div className="my-5">
               <Warning>
                  <span>You should use <b>LEFT JOIN</b> instead of <b>RIGHT JOIN</b> as much as possible, as it is more widely used and easier to understand.</span>
               </Warning>
            </div>
            <section className="flex flex-column gap-8">
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

            <article className="prose prose-base">

               <h2> Practice </h2>
               <p>
                  Consider this scenario:
               </p>
               <ul>
                  <li>
                     you have a <code>candidates</code> table for candidate data
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>name</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Alice Smith</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>Bob Johnson</td>
                           </tr>
                           <tr>
                              <td>3</td>
                              <td>Charlie Brown</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>
                     you have a <code>resumes</code> table that stores the resumes of candidates
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>candidate_id</th>
                              <th>file_path</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>1</td>
                              <td>alice_resume.pdf</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>2</td>
                              <td>bob_resume.pdf</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>the <code>resumes</code> are optional, so some <code>candidates</code> don't have one.</li>
                  <li>
                     you want a list of ALL candidates, alongside their resumes (if they have one), like so:

                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>candidate_name</th>
                              <th>resume_file</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Alice Smith</td>
                              <td>alice_resume.pdf</td>
                           </tr>
                           <tr>
                              <td>Bob Johnson</td>
                              <td>bob_resume.pdf</td>
                           </tr>
                           <tr>
                              <td>Charlie Smith</td>
                              <td>NULL</td>
                           </tr>
                        </tbody>
                     </table>

                  </li>
               </ul>
               <p>
                  The following SQL should accomplish the above:
               </p>
            </article>
            <SqlRunner execQuery={execQuery} resetDbState={resetDbState} initialValue={RIGHT_JOIN_QUERY} />
         </div>
      </div>
   )
}
