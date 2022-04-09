import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        const title =
          error instanceof Error
            ? error.toString().replace(/^Error:\s*/, "")
            : "Error Connecting to server";
        toast(title);
      },
    },
  },
});
