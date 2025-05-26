import { JSONFilePreset } from "lowdb/node";

export type RoomImage = {
  src: string;
  altKey: string;
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
  

// Provide default data shape
const defaultData: Data = { rooms: [] };

// Create a lowdb instance with default data automatically initialized
export const db = await JSONFilePreset<Data>("src/libs/db.json", defaultData);

