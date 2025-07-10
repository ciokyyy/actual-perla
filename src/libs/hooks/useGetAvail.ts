import { useQuery } from "@tanstack/react-query";
import { getAvailability } from "../server-actions/getAvail";

export function useGetAvailability(
  checkIn?: string,
  checkOut?: string,
  enabled: boolean = true // Default to true, can be overridden by options
) {
  // Add options parameter
  return useQuery({
    queryKey: ["getAvailability", checkIn, checkOut],
    queryFn: () => {
      if (!checkIn || !checkOut) {
        // When not enabled, or when checkIn/checkOut are missing,
        // it's good to return a "skipped" or empty state.
        // React Query's 'enabled: false' handles skipping the fetch itself.
        // This 'if' block might still be useful if the query becomes enabled but args are missing.
        console.warn("Skipping getAvailability: checkIn or checkOut missing.");
        return; // Return an empty object or null if no data is expected
      }
      return getAvailability(checkIn, checkOut);
    },
    // The 'enabled' property passed from the component will override this default,
    // or combine with it if your external options are structured to merge.
    // For manual fetching, you'd typically remove or override this line:
    // enabled: !!checkIn && !!checkOut, // This line will be overridden by the options from the component
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled,
  });
}
