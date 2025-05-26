// You can place this in src/hooks/useRooms.ts or directly in your component

import { useQuery } from "@tanstack/react-query";
import { getRooms } from "@/libs/server-actions/getRooms";

export function useRooms() {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
}
