import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { INNER_JOIN_QUERY } from "../consts/sql";

type InnerJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function InnerJoinLesson({ execQuery, resetDbState } : InnerJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Inner Join
         </h1>
         <div className="collapse-content text-sm">
            <article className="prose prose-base">

               <h2> Theory </h2>

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

               <pre className="block whitespace-pre-wrap overflow-x-scroll">
                  SELECT table_a.*, table_b.* from table_a
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

               <hr />

               <h2> Practice </h2>
               <p>
                  Consider the following scenario:
               </p>

               <ul>
                  <li>
                     your system has an <code>employers</code> table for employer data
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>name</th>
                              <th>description</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Zeek Ltd</td>
                              <td>Jobs board website</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>
                     your system has a <code>jobs</code> table for jobs posted by employers
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>title</th>
                              <th>employer_id</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Software Engineer</td>
                              <td>1</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>Data Scientist</td>
                              <td>1</td>
                           </tr>
                           <tr>
                              <td>3</td>
                              <td>Project Manager</td>
                              <td>1</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>
                     You want to return a list of all jobs, along with the employers who posted them, like this:
                      <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>job_title</th>
                              <th>employer_name</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Software Engineer</td>
                              <td>Zeek Ltd</td>
                           </tr>
                           <tr>
                              <td>Data Scientist</td>
                              <td>Zeek Ltd</td>
                           </tr>
                           <tr>
                              <td>Project Manager</td>
                              <td>Zeek Ltd</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
               </ul>
               <p>
                  The following query will return every <code>job</code> posted by an <code>employer</code> named "Zeek Ltd";
               </p>
            </article>
            <div className="max-w-3/4">
               <SqlRunner execQuery={execQuery} initialValue={INNER_JOIN_QUERY} resetDbState={resetDbState} />
            </div>
         </div>
      </div>
   )
}
