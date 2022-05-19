import { useEffect, useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { getResources, getLocations, getSearchedResources } from "../../APIS";
import { useAllDataQuery, usePaginatedQuery } from "../../hooks/query";
export const useInventories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const [applyLocationFilter, setApplyFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  // const {
  //   data: { data: resourcesData, hasNextPage, hasPreviousPage, total },
  //   isLoading,
  // } = usePaginatedQuery(["resources", currentPage, filter], () =>
  //   getResources(pageSize, currentPage, token, applyLocationFilter, filter)
  // );
  // console.log("total", "total");
  // console.log(["resources", currentPage, filter]);
  const { data, isLoading } = useQuery(
    ["resources", currentPage, filter],
    async () =>
      await getResources(
        pageSize,
        currentPage,
        token,
        applyLocationFilter,
        filter
      ),
    {
      keepPreviousData: true,
      staleTime: 2000,
      retry: false,
    }
  );
  // console.log("total", "total");
  // console.log(data?.total, "total");

  // usePaginatedQuery(,
  // );

  const {
    data: { data: resourcessearchedData },
  } = usePaginatedQuery(["searcehdresources"], () =>
    getSearchedResources(token)
  );

  const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
    ["locations", "visible"],
    () => getLocations(token)
  );
  const locationData = locationsData;

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pagelengthnum = (e) => {
    if (e.target.value === "1") {
      setPageSize(10);
    } else if (e.target.value === "2") {
      setPageSize(30);
    } else if (e.target.value === "3") {
      setPageSize(50);
    }
    // QueryClient.invalidateQueries("searcehdresources");
  };

  const pageOptions = {
    sizePerPage: pageSize,
    totalSize: data?.total ?? 0,
    custom: true,
  };
  const onChangeLocationFilter = (val) => {
    if (val === "All") {
      setCurrentPage(currentPage);
      setApplyFilter(false);
      setFilter("All");
    } else {
      setCurrentPage(currentPage);
      setApplyFilter(true);
      setFilter(`{"BusinessId":${val}}`);
    }
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (data?.hasNextPage) {
      const nextPage = currentPage + 1;
      // console.log("dkakhdkjs dhakjs", ["resources", nextPage, filter]);
      queryClient.prefetchQuery(
        ["resources", nextPage, filter],
        async () => await getResources(pageSize, nextPage, token)
      );
    }
  }, [currentPage, filter]);

  return {
    currentPage,
    pageOptions,
    resourcesData: data?.data,
    hasNextPage: data?.hasNextPage,
    hasPreviousPage: data?.hasPreviousPage,
    total: data?.total,
    locationsData,
    loadingLocations,
    locationData,
    isLoading,
    onChangeLocationFilter,
    changeCurrentPage,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    filter,
    // resourcessearchedData,
  };
};
