import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getcustomers } from "../../../APIS/customerCheckedIn";
import { usePaginatedQuery } from "../../../hooks/query";
import { getcheckInLocations, getLocations } from "../../../APIS";
import { useAllDataQuery } from "../../../hooks/query";

export const useCheckedInCustomer = () => {
  const [filter, setFilter] = useState("1414904256");
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [applyLocationFilter, setApplyFilter] = useState(true);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const {
    data: { data: customerCheckInData, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["checkedcustomers", currentPage], () =>
    getcustomers(pageSize, currentPage, token, applyLocationFilter, filter)
  );
  // console.log("customerCheckInData : ", customerCheckInData);
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
    console.log("val : ", val);

    setCurrentPage(1);
    setApplyFilter(true);
    setFilter(val);
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["checkedcustomer", nextPage], () =>
        getcustomers(pageSize, nextPage, token, applyLocationFilter, filter)
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
