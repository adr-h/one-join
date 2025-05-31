import { PGlite } from '@electric-sql/pglite'

const db = new PGlite();


export async function getDbConn() {
   return db
};