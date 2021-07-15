export interface User {
  id: string;
  login: string;
  name: string;
  type: UserType;
}

export interface Card {
  id: string;
  name: string;
  atk: string;
  def: string;
  img : File;
}
export enum UserType {
  Admin = 'ADM',
  Player = 'PLAYER'
}
