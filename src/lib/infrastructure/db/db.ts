import postgres from "postgres";
import { drizzle } from 'drizzle-orm/postgres-js';
import * as companySchema from "./schemas/company";
import * as employeeSchema from "./schemas/employee";
import * as userSchema from "./schemas/user";
import * as roleSchema from "./schemas/role";
import * as userRoleSchema from "./schemas/user-role";
import { Settings } from "../env";

export const client = postgres(Settings.DATABASE_URL);
export const db = drizzle(client, {schema: {
  ...companySchema, 
  ...employeeSchema,
  ...userSchema,
  ...roleSchema,
  ...userRoleSchema
}});
