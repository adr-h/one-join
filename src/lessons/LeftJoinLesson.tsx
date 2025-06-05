import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { LEFT_JOIN_QUERY } from "../consts/sql";

type LeftJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function LeftJoinLesson({ execQuery, resetDbState } : LeftJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Left Join
         </h1>
         <div className="collapse-content text-sm">

            <article className="prose prose-base">
               <h2> Theory </h2>

               <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  {/* <!-- White Background --> */}
                  <rect width="100%" height="100%" fill="white" />

                  {/* <!-- Left Circle --> */}
                  <circle cx="100" cy="100" r="60" fill="green" fill-opacity="0.4" stroke="black" stroke-width="2" />
                  <text x="60" y="100" font-size="14" text-anchor="middle" fill="black">Left</text>

                  {/* <!-- Right Circle --> */}
                  <circle cx="180" cy="100" r="60" fill="gray" fill-opacity="0.2" stroke="black" stroke-width="2" />
                  <text x="220" y="100" font-size="14" text-anchor="middle" fill="black">Right</text>

                  {/* <!-- LEFT OUTER JOIN Highlight (reapply left fill for emphasis) --> */}
                  <circle cx="100" cy="100" r="60" fill="green" fill-opacity="0.2" stroke="none" />

                  {/* <!-- Annotation --> */}
                  <text x="150" y="180" font-size="14" text-anchor="middle" fill="black">LEFT OUTER JOIN</text>
               </svg>

               <pre className="block whitespace-pre-wrap overflow-x-scroll">
                  SELECT <code className="text-green-400">left_table.*</code>, right_table.*
                  <br />
                  FROM <code className="text-green-400">left_table</code>
                  <br />
                  LEFT JOIN right_table ON <code className="text-green-400">left_table.key</code> = right_table.fkey;
               </pre>

               <ul>
                  <li>A <code>LEFT JOIN</code> (or <code>LEFT OUTER JOIN</code>) is a type of <code>OUTER JOIN</code></li>
                  <li>
                     A <code>LEFT JOIN</code> returns <i>all rows</i> from the <code className="text-green-400">left_table</code> (the first table), along with any <i className="text-green-300">matching rows</i> from the <code>right_table</code> (the second table).
                  </li>
                  <li>
                     If there is no matching row in the <code>right_table</code>, the result will include <code className="text-red-400">NULL</code> values for its columns.
                  </li>
               </ul>

               <hr />
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
            <SqlRunner execQuery={execQuery} resetDbState={resetDbState} initialValue={LEFT_JOIN_QUERY} />
         </div>
      </div>
   )
}
