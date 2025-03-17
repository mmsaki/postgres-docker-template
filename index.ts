import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(process.env.DATABASE_URL!);

const query = sql`SELECT version()`;
const { rows } = await db.execute(query);
console.log(rows[0].version);

