
import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { LEFT_JOIN_QUERY } from "../../consts/sql";

type LeftJoinPracticeProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function LeftJoinPractice({ execQuery, resetDbState }: LeftJoinPracticeProps) {
   return (
      <>
         <article className="prose prose-base">
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
      </>
   )
}




