import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { getcustomer } from "../../../../APIS/customerCheckedIn";
import { getuserdetails } from "../../../../APIS/userProfle";
import { useHistory, useParams } from "react-router-dom";
import { usePaginatedQuery } from "../../../../hooks/query";
import { getUserpastbookings } from "../../../../APIS/customerCheckedIn";
import { getUserscheduledbookings } from "../../../../APIS/customerCheckedIn";
import { getUseractivebookings } from "../../../../APIS/customerCheckedIn";

export const UseCheckedinCustomerDetailed = () => {
  let history = useHistory();
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
    getuserdetails(pageSize, currentPage, token, id,history)
  );

  const {
    data: { data: userActiveBookingData, total, hasNextPage, hasPreviousPage },
  } = usePaginatedQuery(["activecustomer",`${pageSize}`,`${currentPage}`], () =>
    getUseractivebookings(pageSize, currentPage, token, id,history)
  );

  const {
    data: { data: userSechduledBookigsData,hasNextPage:scheduledHasNextPage },
  } = usePaginatedQuery(["scheduledcustomer",`${pageSize}`,`${currentPage}`], () =>
    getUserscheduledbookings(pageSize, currentPage, token, id,history)
  );
  
  const {
    data: { data: usePastBookingsData,hasNextPage:pastHasNextPage },
  } = usePaginatedQuery(["pastcustomer", `${pageSize}`,`${currentPage}`], () =>
    getUserpastbookings(pageSize, currentPage, token, id,history)
  );

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

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
        getuserdetails(pageSize, currentPage, token, id,history)
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
    toggleCustomJustified,
    scheduledHasNextPage,pastHasNextPage,
    activeTabJustify,
    setActiveTabJustify,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  };
};
