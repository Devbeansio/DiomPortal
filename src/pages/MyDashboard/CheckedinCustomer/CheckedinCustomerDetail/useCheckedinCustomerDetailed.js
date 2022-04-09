import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getcustomer } from "../../../../APIS/customerCheckedIn";
import { getuserdetails } from "../../../../APIS/userProfle";
import { useParams } from "react-router-dom";
import { usePaginatedQuery } from "../../../../hooks/query";
import { getUserpastbookings } from "../../../../APIS/customerCheckedIn";
import { getUserscheduledbookings } from "../../../../APIS/customerCheckedIn";
import { getUseractivebookings } from "../../../../APIS/customerCheckedIn";

export const UseCheckedinCustomerDetailed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const queryClient = useQueryClient();

  const {
    data: { data: customerdetailedData },
    isLoading,
  } = usePaginatedQuery(["customerdetails", id], () =>
    getuserdetails(pageSize, currentPage, token, id)
  );

  const {
    data: { data: userActiveBookingData, total, hasNextPage, hasPreviousPage },
  } = usePaginatedQuery(["activecustomer", id, activeTabJustify], () =>
    getUseractivebookings(pageSize, currentPage, token, id)
  );

  const {
    data: { data: userSechduledBookigsData },
  } = usePaginatedQuery(["scheduledcustomer", id, activeTabJustify], () =>
    getUserscheduledbookings(pageSize, currentPage, token, id)
  );

  const {
    data: { data: usePastBookingsData },
  } = usePaginatedQuery(["pastcustomer", id, activeTabJustify], () =>
    getUserpastbookings(pageSize, currentPage, token, id)
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
      queryClient.prefetchQuery(["customerdetails", nextPage], () =>
        getuserdetails(pageSize, currentPage, token, id)
      );
    }
  }, [currentPage, queryClient]);

  return {
    currentPage,
    pageOptions,
    customerdetailedData,
    userActiveBookingData,
    userSechduledBookigsData,
    usePastBookingsData,
    // activeTabJustify,
    isLoading,
    activeTabJustify,
    setActiveTabJustify,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  };
};
