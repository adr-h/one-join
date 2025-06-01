import { PGlite } from '@electric-sql/pglite'
import { INITIAL_MIGRATIONS_AND_SEEDS } from '../../consts/sql';

let db: PGlite;

export async function getDbConn() {
   if (!db || db?.closed) {
      db = new PGlite();

      await db.exec(INITIAL_MIGRATIONS_AND_SEEDS)
   }

   return db;
};

export async function resetDb() {
   if (db) {
      await db.close();
   }

   await getDbConn();
}