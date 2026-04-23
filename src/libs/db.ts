import data from "./db.json";

export type RoomImage = {
  src: string;
  altKey?: string;
};

export type Room = {
  id: string;
  number: string;
  typeId: string;
  max: number;
  images: RoomImage[];
};

export type Data = {
  rooms: Room[];
};

export const db: Data = data;
