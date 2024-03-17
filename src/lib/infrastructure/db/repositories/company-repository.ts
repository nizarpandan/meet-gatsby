import { db } from "../db";
import { companies, type Company } from "../schemas/company";
import { eq } from "drizzle-orm";

export const getAllCompanies = async (): Promise<Company[]> => {
  return await db.select()
    .from(companies);
}

export const getCompanyById = async (id: string): Promise<Company[]> => {
  return await db.select()
    .from(companies)
    .where(eq(companies.id, id));
}

export const addCompany = async (company: Company) => {
  await db.insert(companies)
    .values(company);
}

export const updateCompanyById = async (id: string, company: Company) => {
  await db.update(companies)
    .set({
      name: company.name,
      address: company.address,
      city: company.city,
      state:  company.state,
      country: company.country
    })
    .where(eq(companies.id, id));
}

export const deleteCompanyById = async (id: string) => {
  await db.delete(companies).where(eq(companies.id, id));
}