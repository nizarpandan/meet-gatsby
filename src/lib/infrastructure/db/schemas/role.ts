import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
 
export const roles = pgTable('Roles', {
  id: integer('Id').primaryKey(),
  name: varchar('Name', { length: 256 }).notNull(),
  description: varchar('Description', { length: 256 }),
});

export type Role = typeof roles.$inferInsert;