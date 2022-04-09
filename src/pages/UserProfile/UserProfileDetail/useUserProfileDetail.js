import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { usePaginatedQuery } from "../../../hooks/query";
import { getuserdetails } from "../../../APIS/userProfle";
import { useParams } from "react-router-dom";
import { getUseractivebookings } from "../../../APIS/userProfle";
import { getUserPastBookings } from "../../../APIS/userProfle";
import { getUserScheduledBookings } from "../../../APIS/userProfle";

export const useUserProfileDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();

  const {
    data: { data: userdetailsData },
    isLoading,
  } = usePaginatedQuery(["userprofiledetails", id], () =>
    getuserdetails(pageSize, currentPage, token, id)
  );

  const {
    data: { data: userActivebookingsData, hasNextPage, hasPreviousPage, total },
  } = usePaginatedQuery(["activebookings", id], () =>
    getUseractivebookings(pageSize, currentPage, token, id)
  );
  const {
    data: { data: userPastBookingsData },
  } = usePaginatedQuery(["pastbookings", id], () =>
    getUserPastBookings(pageSize, currentPage, token, id)
  );

  const {
    data: { data: userScheduledBookingsData },
  } = usePaginatedQuery(["scheduledbookings", id], () =>
    getUserScheduledBookings(pageSize, currentPage, token, id)
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
      queryClient.prefetchQuery(["userprofiledetails", nextPage], () =>
        getuserdetails(pageSize, currentPage, token, id)
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
