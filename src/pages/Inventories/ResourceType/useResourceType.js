import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useAllDataQuery, usePaginatedQuery } from "../../../hooks/query";
import {
  getResourceTypes,
  getSearchedResourceTypes,
} from "../../../APIS/resourceType";
import { getLocations } from "../../../APIS";

export const useResourceType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const [applyLocationFilter, setApplyFilter] = useState(false);
  const [filter, setFilter] = useState("All");

  const {
    data: { data: resourceTypeData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["resourceTypes", pageSize, currentPage, filter], () =>
    getResourceTypes(pageSize, currentPage, token, applyLocationFilter, filter)
  );
  

  const {
    data: { data: searchedresourceTypeData },
  } = usePaginatedQuery(["searchedresourceTypes",`${pageSize}`,`${currentPage}`], () =>
    getSearchedResourceTypes(token)
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

  const onchangeandeldiomlocation = (val) => {
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

      queryClient.prefetchQuery(
        ["resourceTypes",`${pageSize}`,`${currentPage}`],
        () => getResourceTypes(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient, filter, pageSize]);

  return {
    currentPage,
    pageOptions,
    resourceTypeData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    onchangeandeldiomlocation,
    changeCurrentPage,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    searchedresourceTypeData,
    filter,
  };
};
