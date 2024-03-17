import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { companies } from "./company";
import { users } from "./user";
 
export const employees = pgTable('Employees', {
  id: uuid('Id').primaryKey().defaultRandom(),
  eId: varchar('EId').unique(),
  firstName: varchar('FirstName', { length: 256 }).notNull(),
  lastName: varchar('LastName', { length: 256 }).notNull(),
  companyId: uuid('CompanyId').references(() => companies.id),
  userId: varchar('UserId').references(() => users.id),
  createdAt: timestamp('CreatedAt').defaultNow()
});

export type Employee = typeof employees.$inferInsert;