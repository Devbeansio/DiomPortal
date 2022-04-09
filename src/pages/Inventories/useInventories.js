import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
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
  const {
    data: { data: resourcesData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["resources", currentPage, filter], () =>
    getResources(pageSize, currentPage, token, applyLocationFilter, filter)
  );

  const {
    data: { data: resourcessearchedData },
  } = usePaginatedQuery(["searcehdresources"], () =>
    getSearchedResources(token)
  );

  const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
    ["locations", "visible"],
    () => getLocations(token)
  );

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
  };

  const pageOptions = {
    sizePerPage: pageSize,
    totalSize: total ?? 0,
    custom: true,
  };
  const onChangeLocationFilter = (val) => {
    if (val === "All") {
      setCurrentPage(1);
      setApplyFilter(false);
      setFilter("All");
    } else {
      setCurrentPage(1);
      setApplyFilter(true);
      setFilter(`{"BusinessId":${val}}`);
    }
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["resources", nextPage, filter], () =>
        getResources(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient, filter]);

  return {
    currentPage,
    pageOptions,
    resourcesData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    onChangeLocationFilter,
    changeCurrentPage,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    filter,
    resourcessearchedData,
  };
};
