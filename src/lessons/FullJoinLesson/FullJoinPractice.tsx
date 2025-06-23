
import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { FULL_JOIN_QUERY } from "../../consts/sql";

type FullJoinPracticeProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function FullJoinPractice({ execQuery, resetDbState }: FullJoinPracticeProps) {
   return (
      <>
         <article className="prose prose-base">
            <p>
               Consider this scenario:
            </p>
            <ul>
               <li>you run an animal shelter</li>
               <li>
                  you have a <code>people</code> table for people in your neighbourhood.
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
                  you have been tasked with producing a list of animals and people in your neighbourhood. This list should include people that own no pets, pets that have no owners, and owner-pet pairs, like so:
                  <table className="table table-zebra">
                     <thead>
                        <tr>
                           <th>potential_owner</th>
                           <th>potential_pet</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Dexter Morgan</td>
                           <td>Garfield</td>
                        </tr>
                        <tr>
                           <td>Walter White</td>
                           <td>Scooby</td>
                        </tr>
                        <tr>
                           <td>NULL</td>
                           <td>Tweety</td>
                        </tr>
                        <tr>
                           <td>Dr Jekyll</td>
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
         <SqlRunner execQuery={execQuery} initialValue={FULL_JOIN_QUERY} resetDbState={resetDbState} />
      </>
   )
}




