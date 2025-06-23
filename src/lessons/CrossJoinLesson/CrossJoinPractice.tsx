import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { CROSS_JOIN_QUERY } from "../../consts/sql";

type CrossJoinPracticeProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function CrossJoinPractice({ execQuery, resetDbState }: CrossJoinPracticeProps) {
   return (
      <>
         <article className="prose prose-base">
            <p>
               Consider this scenario:
            </p>
            <ul>
               <li>
                  you run an online business selling shirts with graphic designs.
               </li>

               <li>
                  for every design, you allow customers to select a shirt size and a shirt colour
               </li>

               <li>
                  you have a <code>graphic_designs</code> table for your stock of designs:
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
                           <td>Firey Pony</td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>Tranquil Seahorse</td>
                        </tr>
                     </tbody>
                  </table>
               </li>

               <li>
                  you have a <code>shirt_sizes</code> table for your shirt sizing options:
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
                           <td>small</td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>medium</td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td>large</td>
                        </tr>
                     </tbody>
                  </table>
               </li>


               <li>
                  you have a <code>shirt_colours</code> table for your shirt colour options:
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
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td>white</td>
                        </tr>
                     </tbody>
                  </table>
               </li>

               <li>
                  you have been tasked with generating an "inventory list", that is a list of every possible graphic design + size + colour combination, like so:
                  <table className="table table-zebra">
                     <thead>
                        <tr>
                           <th>design</th>
                           <th>size</th>
                           <th>colour</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Firey Pony</td>
                           <td>small</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Firey Pony</td>
                           <td>small</td>
                           <td>white</td>
                        </tr>
                        <tr>
                           <td>Firey Pony</td>
                           <td>medium</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Firey Pony</td>
                           <td>medium</td>
                           <td>white</td>
                        </tr>
                        <tr>
                           <td>Firey Pony</td>
                           <td>large</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Firey Pony</td>
                           <td>large</td>
                           <td>white</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>small</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>small</td>
                           <td>white</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>medium</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>medium</td>
                           <td>white</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>large</td>
                           <td>black</td>
                        </tr>
                        <tr>
                           <td>Tranquil Seahorse</td>
                           <td>large</td>
                           <td>white</td>
                        </tr>
                     </tbody>
                  </table>
               </li>
            </ul>
            <p>
               The following SQL should accomplish the above:
            </p>
         </article>
         <SqlRunner execQuery={execQuery} initialValue={CROSS_JOIN_QUERY} resetDbState={resetDbState} />
      </>
   )
}








