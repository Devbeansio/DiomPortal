import { useEffect, useState } from "react";
// import { useAllDataQuery, usePaginatedQuery } from "../../../hooks/query";
import { usePaginatedQuery } from "../../../hooks/query";
import { getTaxation } from "../../../APIS/taxation";
import { useQueryClient } from "react-query";
import LoaderHook from "./../../../hooks/loaderHook";

export const useTaxation = () => {
  const { setLoading } = LoaderHook();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const token = localStorage.getItem("Token");
  const [loaded, setLoaded] = useState(false);
  const [taxs, setTaxs] = useState([]);
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: { data: taxationData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["taxation", currentPage], () =>
    getTaxation(pageSize, currentPage, token)
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
  const loadingFunc = () => {
    setLoading(isLoading);
  };
  useEffect(() => {
    isLoading && loadingFunc();
  }, [isLoading]);

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE

    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["taxation", nextPage], () =>
        getTaxation(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    taxationData,
    pageOptions,
    isLoading,
    hasNextPage,
    hasPreviousPage,
    total,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  };
};
