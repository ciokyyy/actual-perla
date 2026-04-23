import { db } from "@/libs/db";

export async function getRooms() {
  return db.rooms;
}
