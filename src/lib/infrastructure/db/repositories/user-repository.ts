import { eq } from "drizzle-orm";
import { db } from "../db";
import { users, type User } from "../schemas/user";

export const getAllUsers = async () => {
  return await db.select()
    .from(users);
}

export const getUserById = async (id: string): Promise<User[]> => {
  return await db.select()
    .from(users)
    .where(eq(users.id, id));
}

export const addUser = async (user: User) => {
  await db.insert(users)
    .values(user);
}

export const updateUserById = async (id: string, user: User) => {
  await db.update(users)
    .set({
      firstName: user.firstName,
      lastName: user.lastName,
    })
    .where(eq(users.id, id));
}

export const deleteUserById = async (id: string) => {
  await db.delete(users).where(eq(users.id, id));
}