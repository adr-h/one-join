import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { INNER_JOIN_QUERY } from "../../consts/sql";

type InnerJoinPracticeProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>


export function InnerJoinPractice({ execQuery, resetDbState }: InnerJoinPracticeProps) {
   return (
      <>
         <article className="prose prose-base">
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
         <SqlRunner execQuery={execQuery} initialValue={INNER_JOIN_QUERY} resetDbState={resetDbState} />
      </>
   )

}