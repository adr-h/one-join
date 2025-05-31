import { getDbConn } from "./dbConn";


export async function runQuery(query: string) {
   const db = await getDbConn();

   return await db.exec(query);
}