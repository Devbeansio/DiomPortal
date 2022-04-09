import { useQuery } from "react-query";

/**
 *
 * @param {query key} key
 * @param { async callback function which return data from server} getData
 * @returns a response of paginated  api
 */
export function usePaginatedQuery(key, getData) {
  const fallback = {
    data: [],
    hasNextPage: false,
    hasPreviousPage: false,
    total: 0,
  };
  const { data = fallback, isLoading = true } = useQuery(key, getData, {
    keepPreviousData: true,
    staleTime: 2000,
    retry: false,
  });
  return { data, isLoading };
}

/**
 *
 * @param {query key} key
 * @param { async callback function which return data from server} getData
 * @returns a list of records
 */
export function useAllDataQuery(key, getData) {
  const { data = [], isLoading = true } = useQuery(key, getData, {
    keepPreviousData: true,
    staleTime: 2000,
    retry: false,
  });
  return { data, isLoading };
}
