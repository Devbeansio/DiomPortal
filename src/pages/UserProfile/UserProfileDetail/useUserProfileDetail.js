import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { usePaginatedQuery } from "../../../hooks/query";
import { getuserdetails } from "../../../APIS/userProfle";
import { useHistory, useParams } from "react-router-dom";
import { getUseractivebookings } from "../../../APIS/userProfle";
import { getUserPastBookings } from "../../../APIS/userProfle";
import { getUserScheduledBookings } from "../../../APIS/userProfle";

export const useUserProfileDetail = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: userdetailsData },
    isLoading,
  } = usePaginatedQuery(["userprofiledetails", id], () =>
    getuserdetails(pageSize, currentPage, token, id,history)
  );

  const {
    data: { data: userActivebookingsData, hasNextPage, hasPreviousPage, total },
  } = usePaginatedQuery(["activebookings", `${pageSize}`,`${currentPage}`], () =>
    getUseractivebookings(pageSize, currentPage, token, id,history)
  );
  const {
    data: { data: userPastBookingsData,hasNextPage:pastHasNextPage },
  } = usePaginatedQuery(["pastbookings", `${pageSize}`,`${currentPage}`], () =>
    getUserPastBookings(pageSize, currentPage, token, id,history)
  );

  const {
    data: { data: userScheduledBookingsData ,hasNextPage:scheduledHasNextPage},
  } = usePaginatedQuery(["scheduledbookings", `${pageSize}`,`${currentPage}`], () =>
    getUserScheduledBookings(pageSize, currentPage, token, id,history)
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

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["userprofiledetails", nextPage], () =>
        getuserdetails(pageSize, currentPage, token, id,history)
      );
    }
  }, [currentPage, queryClient]);
  return {
    currentPage,
    pageOptions,
    userdetailsData,
    userActivebookingsData,
    userPastBookingsData,
    userScheduledBookingsData,
    hasNextPage,
    activeTabJustify, setActiveTabJustify,
    hasPreviousPage,
    total,
    isLoading,
    pagelengthnum,
    pastHasNextPage,scheduledHasNextPage,
    pageSize,
    toggle,
    isOpen,
    toggleCustomJustified,
    changeCurrentPage,
  };
};
