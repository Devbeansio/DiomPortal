import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getLocationBrands } from "../../../APIS/locationBrands";
import { usePaginatedQuery } from "../../../hooks/query";

export const useLocationBrands = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: locationBrandsData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["locationbrands", `${pageSize}`,`${currentPage}`], () =>
    getLocationBrands(pageSize, currentPage, token)
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
  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["locationbrands", `${pageSize}`,`${currentPage}`], () =>
        getLocationBrands(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    pageOptions,
    locationBrandsData,
    hasNextPage,
    hasPreviousPage,
    total,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    isLoading,

    changeCurrentPage,
  };
};
