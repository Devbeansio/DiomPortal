import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getcustomers } from "../../../APIS/customerCheckedIn";
import { usePaginatedQuery } from "../../../hooks/query";
import { getcheckInLocations, getLocations } from "../../../APIS";
import { useAllDataQuery } from "../../../hooks/query";

export const useCheckedInCustomer = () => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [applyLocationFilter, setApplyLocationFilter] = useState(false);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const {
    data: { data: customerCheckInData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["checkedcustomers", currentPage, filter], () =>
    getcustomers(filter, pageSize, currentPage, token, applyLocationFilter)
  );
  const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
    ["locations", "visible"],
    () => getcheckInLocations(token)
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

  const handeldiomlocation = async (val) => {
    if (val === "All") {
      setCurrentPage(1);
      setApplyLocationFilter(false);
      setFilter();
      queryClient.invalidateQueries("checkedcustomers");
    } else {
      setCurrentPage(1);
      setFilter(val);
      setApplyLocationFilter(true);
      queryClient.invalidateQueries("checkedcustomers");
    }
  };

  useEffect(() => {
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["checkedcustomer", nextPage], () =>
        getcustomers(filter, pageSize, nextPage, token, applyLocationFilter)
      );
    }
  }, [currentPage, queryClient]);
  return {
    currentPage,
    pageOptions,
    customerCheckInData,
    hasNextPage,
    hasPreviousPage,
    total,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    isLoading,
    handeldiomlocation,
    // diomLocation,
    locationsData,
    changeCurrentPage,
  };
};
