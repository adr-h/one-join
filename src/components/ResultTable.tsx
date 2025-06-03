

type ResultTableProps<T> = {
   rows: Array<T>;
   fields: {
      name: keyof T;
   }[]
}

export function ResultTable<T>({ rows, fields }: ResultTableProps<T>) {
   return (
      <table className="table table-zebra">
         <thead>
            <tr>
            {
               fields.map(field =>
                  <th>
                     {field.name.toString()}
                  </th>
               )
            }
            </tr>
         </thead>

         <tbody>
            {
               rows.map(row =>
                  <tr>
                     {
                        fields.map(field =>
                           <td>
                              {row[field.name]?.toString()}
                           </td>
                        )
                     }
                  </tr>
               )
            }
         </tbody>
      </table>
   )
}