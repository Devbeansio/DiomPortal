import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getInvoices } from "../../../APIS/invoices";
// import { useAllDataQuery, usePaginatedQuery } from "../../hooks/query";
import { usePaginatedQuery } from "../../../hooks/query";
import LoaderHook from "../../../hooks/loaderHook";
export const useInvoices = () => {
  const { setLoading } = LoaderHook();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: Invoiceslistingdata, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["Invoices", currentPage], () =>
    getInvoices(pageSize, currentPage, token)
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
    loadingFunc();
    // FOR PRE-FETCHING NEXT PAGE
    console.log(hasNextPage);
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["Invoices", nextPage], () =>
        getInvoices(pageSize, nextPage, token)
      );
    }
  }, [currentPage, queryClient, isLoading]);

  return {
    currentPage,
    pageOptions,
    Invoiceslistingdata,
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
