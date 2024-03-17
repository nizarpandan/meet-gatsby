import { eq } from "drizzle-orm";
import { db } from "../db";
import { employees, type Employee } from "../schemas/employee";

export const getAllEmployees = async () => {
  return await db.select()
    .from(employees);
}

export const getEmployeeById = async (id: string): Promise<Employee[]> => {
  return await db.select()
    .from(employees)
    .where(eq(employees.id, id));
}

export const addEmployee = async (employee: Employee) => {
  await db.insert(employees)
    .values(employee);
}

export const updateEmployeeById = async (id: string, employee: Employee) => {
  await db.update(employees)
    .set({
      firstName: employee.firstName,
      lastName: employee.lastName,
      companyId: employee.companyId,
    })
    .where(eq(employees.id, id));
}

export const deleteEmployeeById = async (id: string) => {
  await db.delete(employees).where(eq(employees.id, id));
}