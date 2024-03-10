export type Chat = {
  Sender: Sender,
  Message: string
}

export enum Sender {
  System = 1,
  User = 2
}