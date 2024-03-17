import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
 
export const companies = pgTable('Companies', {
  id: uuid('Id').primaryKey().defaultRandom(),
  name: text('Name').notNull(),
  address: text('Address'),
  city: text('City'),
  state: text('State'),
  country: text('Country'),
  createdAt: timestamp('CreatedAt').defaultNow()
});

export type Company = typeof companies.$inferInsert;