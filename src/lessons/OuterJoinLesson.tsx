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

               <ul>
                  <li>A <code>LEFT JOIN</code> and <code>RIGHT JOIN</code> are two types of <code>OUTER JOIN</code>s</li>
                  <li>An <code>OUTER JOIN</code> includes all data from one table, regardless of whether a matching record exists in the other table.</li>
                  <li>
                     A <code>LEFT JOIN</code> (or <code>LEFT OUTER JOIN</code>) returns all rows from the <code>left_table</code> (1st table) and matched rows (if any) from the <code>right_table</code> (2nd table).
                     <pre className="block whitespace-pre-wrap overflow-x-scroll">{`
SELECT [results] from left_table
LEFT JOIN right_table ON left_table.key = right_table.fkey;
                  `}
                     </pre>
                  </li>

                  <li>
                     A <code>RIGHT JOIN</code> (or <code>RIGHT OUTER JOIN</code>) returns all rows from the <code>right_table</code>(2nd table) and matched rows (if any) from the <code>left_table</code> (1st table).
                     <pre className="block whitespace-pre-wrap overflow-x-scroll">{`
SELECT [results] from left_table
RIGHT JOIN right_table ON left_table.key = right_table.fkey;
                  `}
                     </pre>
                  </li>
               </ul>

               <Tip>
                  <span>TIP: you should choose to use <code>LEFT JOIN</code> instead of <code>RIGHT JOIN</code> as much as possible, as it is more commonly used and easier to understand.</span>
               </Tip>

               <hr />
               <h2> Sample </h2>
               <p>
                  Consider this scenario:
                  <ul>
                     <li>
                        you have a <code>candidates</code> table
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
                        and a <code>resumes</code> table that stores the resumes of candidates
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
                     <li><code>resumes</code> are optional, so some <code>candidates</code> may not have uploaded a resume yet.</li>
                  </ul>
               </p>
               <p>
                  If you want to:
                  <ul>
                     <li>retrieve a list of <code>candidates</code> names</li>
                     <li>optionally include the filenames of their <code>resumes</code>  if they uploaded any</li>
                     <li>return <i>all</i> <code>candidates</code>, even if they are missing <code>resumes</code></li>
                  </ul>
                 You can do so using a <code>LEFT JOIN</code>:
               </p>
            </article>
            <Editor execQuery={execQuery} resetDbState={resetDbState} initialValue={LEFT_JOIN_QUERY} />
         </div>
      </div>
   )
}
