import { useEffect, useState } from "react";
// import { useAllDataQuery, usePaginatedQuery } from "../../../hooks/query";
import { usePaginatedQuery } from "../../../hooks/query";
import { getTaxation } from "../../../APIS/taxation";
import { useQueryClient } from "react-query";
import LoaderHook from "./../../../hooks/loaderHook";
import { useHistory } from "react-router-dom";

export const useTaxation = () => {
  let history = useHistory();
  const { setLoading } = LoaderHook();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const token = localStorage.getItem("Token");
  const queryClient = useQueryClient();

  const {
    data: { data: taxationData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["taxation", `${pageSize}`,`${currentPage}`], () =>
    getTaxation(pageSize, currentPage, token,history)
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
      queryClient.prefetchQuery(["taxation", `${pageSize}`,`${currentPage}`], () =>
        getTaxation(pageSize, nextPage, token,history)
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
