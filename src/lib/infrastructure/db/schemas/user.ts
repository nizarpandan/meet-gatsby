import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { employees } from "./employee";
 
export const users = pgTable('Users', {
  id: varchar('Id').primaryKey(),
  email: varchar('Email').unique(),
  firstName: varchar('FirstName', { length: 256 }).notNull(),
  lastName: varchar('LastName', { length: 256 }).notNull(),
  picture: varchar('Picture', { length: 256 }).notNull(),
  createdAt: timestamp('CreatedAt').defaultNow()
});

export const usersRelations = relations(users, ({ one }) => ({
  employee: one(employees),
}));

export type User = typeof users.$inferInsert;
