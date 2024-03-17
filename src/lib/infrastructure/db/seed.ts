
import { promises as fs } from 'fs';
import { roles } from './schemas/role';
import { client, db } from './db';
import type { PgTable, TableConfig } from 'drizzle-orm/pg-core';
import { getTableName } from 'drizzle-orm';

try {
  await seed(roles, './src/lib/infrastructure/db/masterdata/roles.json');
} catch (err) {
  console.error(err);
} finally {
  client.end();
}

function parseJSON<T>(jsonString: string): T {
  return JSON.parse(jsonString) as T;
}

async function seed(table: PgTable<TableConfig>, filePath: string) {
  const data = await fs.readFile(filePath, 'utf8');
  const parsedData = parseJSON<object[]>(data);
  await db.delete(table);
  await db.insert(table).values(parsedData);
  const tableName = getTableName(table);
  console.log(`${tableName} table has been seeded`);
}