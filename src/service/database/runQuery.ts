import { getDbConn } from "./dbConn";
import type { Result } from "./Result";

export async function runQuery(query: string): Promise<Result<any>> {
   const db = await getDbConn();
   const [res] = await db.exec(query);

   return res;
}
