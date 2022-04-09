import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useAllDataQuery, usePaginatedQuery } from "../../hooks/query";
import { getLocationBrand, getsearchedLocationListing } from "../../APIS";
import { getLocationListing } from "../../APIS";
export const useLocationsListing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const [applyLocationFilter, setApplyFilter] = useState(false);
  const [filter, setFilter] = useState("All");

  const {
    data: { data: locationLisitngData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["locations", currentPage, filter], () =>
    getLocationListing(
      pageSize,
      currentPage,
      token,
      applyLocationFilter,
      filter
    )
  );

  const {
    data: { data: searchedlocationLisitngData },
  } = usePaginatedQuery(["searchedlocations"], () =>
    getsearchedLocationListing(token)
  );

  const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
    ["locations", "visible"],
    () => getLocationBrand(token)
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

  const handeldiomlocation = (val) => {
    if (val === "All") {
      setCurrentPage(1);
      setApplyFilter(false);
      setFilter("All");
    } else {
      setCurrentPage(1);
      setApplyFilter(true);
      setFilter(`{"locationCategoriesId":"${val}"}`);
    }
  };
  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE

    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["locations", nextPage, filter], () =>
        getLocationListing(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient, filter]);

  return {
    currentPage,
    pageOptions,
    locationLisitngData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    handeldiomlocation,
    changeCurrentPage,
    filter,
    searchedlocationLisitngData,
  };
};
