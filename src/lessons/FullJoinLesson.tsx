import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { FULL_JOIN_QUERY } from "../consts/sql";

type FullJoinLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function FullJoinLesson({ execQuery, resetDbState }: FullJoinLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Full Join
         </h1>
         <div className="collapse-content text-sm gap-8">
            <div className="flex flex-column gap-8">
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
            </div>


            <article className="prose prose-base">
               <h2> Practice </h2>
               <p>
                  Consider this scenario:
               </p>
               <ul>
                  <li>you run an animal shelter</li>
                  <li>
                     you have a <code>people</code> table for people in your neighbourhood
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
                              <td>Dexter Morgan</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>Walter White</td>
                           </tr>
                           <tr>
                              <td>3</td>
                              <td>Dr Jekyll</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>
                     you have an <code>animals</code> table for all animals (both owned and unowned) in your neighbourhood
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>id</th>
                              <th>name</th>
                              <th>owner_id</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Garfield</td>
                              <th>1</th>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>Scooby</td>
                              <th>2</th>
                           </tr>
                           <tr>
                              <td>3</td>
                              <td>Tweety</td>
                              <th>NULL</th>
                           </tr>
                        </tbody>
                     </table>
                  </li>
                  <li>not all <code>animals</code> have an owner, and not all <code>people</code> have a pet.</li>
                  <li>
                     you want to run an adoption drive to help find animals in your neighbourhood a loving home by producing a list of BOTH unowned animals, AND people with no current pets.
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>potential_owner</th>
                              <th>potential_pet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Dr Jekyll</td>
                              <td>NULL</td>
                           </tr>
                           <tr>
                              <td>NULL</td>
                              <td>Tweety</td>
                           </tr>
                        </tbody>
                     </table>
                  </li>
               </ul>
               <p>
                  The following SQL should accomplish the above:
               </p>
            </article>
            <SqlRunner execQuery={execQuery} initialValue={FULL_JOIN_QUERY} resetDbState={resetDbState} />
         </div>
      </div>
   )
}
