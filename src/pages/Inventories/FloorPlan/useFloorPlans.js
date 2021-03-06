import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { getFloorplans } from "../../../APIS/floorplans";
import { usePaginatedQuery } from "../../../hooks/query";

export const useFloorplans = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: floorPlansData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["fllorplans", currentPage], () =>
    getFloorplans(pageSize, currentPage, token,history)
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
      queryClient.prefetchQuery(["fllorplans", nextPage], () =>
        getFloorplans(pageSize, nextPage, token,history)
      );
    }
  }, [currentPage, queryClient]);
  return {
    currentPage,
    pageOptions,
    floorPlansData,
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
