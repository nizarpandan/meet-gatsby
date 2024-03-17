import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { users } from "./user";
import { roles } from "./role";
 
export const userRoles = pgTable('UserRoles', {
  userId: varchar('UserId', { length: 256 }).notNull().references(() => users.id),
  roleId: integer('RoleId').notNull().references(() => roles.id),
});

export type UserRole = typeof userRoles.$inferInsert;