import type { User } from "$lib/infrastructure/db/schemas/user";
import { addUser, getUserById } from "$lib/infrastructure/db/repositories/user-repository";

export const retrieve_employees = async(): Promise<string> => {
  return "hallo";
}

export const retrieve_user_by_id = async(userId: string): Promise<User[]> => {
  return await getUserById(userId);
}

export const add_user = async(user: User) => {
  return await addUser(user);
}