"use server";
import { db } from "@/libs/db";

export async function getRooms() {
  await db.read();
  return db.data.rooms;
}
