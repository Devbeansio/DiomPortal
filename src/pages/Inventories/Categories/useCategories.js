import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../../APIS/categories";
import { usePaginatedQuery } from "../../../hooks/query";
export const useCategories = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: categoriesData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["categories", `${pageSize}`,`${currentPage}`], () =>
    getCategories(pageSize, currentPage, token,history)
  );

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pagelengthnum = (e) => {
    // console.log("e", e.target.value, );
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
      queryClient.prefetchQuery(["categories", `${pageSize}`,`${currentPage}`], () =>
        getCategories(pageSize, nextPage, token,history)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    pageOptions,
    categoriesData,
    hasNextPage,
    hasPreviousPage,
    total,

    isLoading,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  };
};
