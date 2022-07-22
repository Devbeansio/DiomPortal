import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DIOM_BASED_URLS } from "../../.././config/url";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { usePaginatedQuery } from "../../../hooks/query";
import { gettodaysbookings } from "../../../APIS/bookings";
import { getLocations } from "../../../APIS";
import { useAllDataQuery } from "../../../hooks/query";
import { getschduleddbookings } from "../../../APIS/bookings";
import { getPasttbookings } from "../../../APIS/bookings";

const UseRequestBookings = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);
  const queryClient = useQueryClient();
  const { t_ID } = useParams();
  const [activeTabJustify, setActiveTabJustify] = useState(t_ID);
  const [diomLocation, setDiomLocation] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [bookingsToday, setBookingsToday] = useState([]);
  const [modal_static, setModal_static] = useState(false);
  const [modal_static1, setModal_static1] = useState(false);
  const [revokeTextArea, setRevokeTextArea] = useState();
  const [idfSelectedRow, setIdfSelectedRow] = useState();
  const [error, setError] = useState(null);
  const [applyLocationFilter, setApplyFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  const token = localStorage.getItem("Token");

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = (__id) => {
    setModal_static(!modal_static);
    setIdfSelectedRow(__id);
 
    removeBodyCss();
  };
  const tog_static1 = () => {
    setModal_static1(!modal_static1);

    removeBodyCss();
  };

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  const handeldiomlocation = async (a) => {
    if (activeTabJustify === "1") {
      fetchFilteredTodayBookings(a);
    } else if (activeTabJustify === "3") {
      fetchFilteredScheduledBookings(a);
     
    } else if (activeTabJustify === "6") {
      queryClient.invalidateQueries("getpastbookings");
      fetchFilteredPastBookings(a);
    }
  };
  //pending
  const fetchRequestsBookings = () => {
    setBookingsToday([]);
  };
  const fetchRevokedBookings = () => {
    setBookingsToday([]);
  };
  const fetchPendingBookings = () => {
    setBookingsToday([]);
  };
  //pending

  const textareachange = (e) => {
    setRevokeTextArea(e.target.value);
  };

  const delRevokeBookings = () => {
    fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/revoke/${idfSelectedRow}`, {
      method: "DELETE",
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        body: revokeTextArea,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.statusCode === 200){
        console.log("i am revoked result",result.message)
        toast.success("Booking Revoked");
        }
        else if(result.statusCode === 204){
          console.log("i am revoked result",result.message)
          toast.success("Booking Revoked");
          }
          else{
            toast.success("You can not revoke a past booking");
          }

        setModal_static1(false);
        if (activeTabJustify === "1") {
          gettodaybookings();
          queryClient.invalidateQueries("gettodaysbookings");
       
        } else if (activeTabJustify === "3") {
          fetchScheduledBookings();
          queryClient.invalidateQueries("getschduledbookings")
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
    ["locations", "visible"],
    () => getLocations(token)
  );

  const fetchFilteredPastBookings = async (val) => {
    if (val === "All") {
      setCurrentPage(1);
      setApplyFilter(false);
      setFilter("All");
      queryClient.invalidateQueries("getpastbookings");
    } else {
      setCurrentPage(1);
      setApplyFilter(true);
      setFilter(val);
      queryClient.invalidateQueries("getpastbookings");
    }
  };

  const fetchFilteredScheduledBookings = async (val) => {
    if (val === "All") {
      setCurrentPage(1);
      setApplyFilter(false);
      setFilter("All");
    } else {
      setCurrentPage(1);
      setApplyFilter(true);
      setFilter(val);
    }
  };

  // **********
  const {
    data: { data: todayBookingsdata, hasNextPage, hasPreviousPage, total },
    isLoading,
  } = usePaginatedQuery(["gettodaysbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
    gettodaysbookings(pageSize, currentPage, token, applyLocationFilter, filter,history)
  );

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["gettodaysbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
        gettodaysbookings(
          pageSize,
          nextPage,
          token,
          applyLocationFilter,
          filter,
          history
        )
      );
    }
  }, [currentPage, queryClient, applyLocationFilter]);

  const fetchFilteredTodayBookings = async (val) => {
    // QueryClient.invalidateQueries("gettodaysbookings");
    // console.log("val : ", val);
    if (val === "All") {
      setCurrentPage(1);
      setApplyFilter(false);
      setFilter("All");
    } else {
      setCurrentPage(1);
      setApplyFilter(true);
      setFilter(val);
    }
  };

  // **********
  const {
    data: {
      data: pastBookingsdata,
      hasNextPage: pastNextPage,
      hasPreviousPage: pastPreviousPage,
      total: pastTotal,
    },
  } = usePaginatedQuery(["getpastbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
    getPasttbookings(pageSize, currentPage, token, applyLocationFilter, filter,history)
  );

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["getpastbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
        getPasttbookings(pageSize, nextPage, token, applyLocationFilter, filter,history)
      );
    }
  }, [currentPage, queryClient, applyLocationFilter]);

  // **********
  const fetchPastBookings = async () => {
    setBookingsToday(pastBookingsdata);
  };

  // **********
  const {
    data: {
      data: schduledBookingsdata,
      hasNextPage: ScheduledNextPage,
      hasPreviousPage: ScheduledPreviousPage,
      total: ScheduledTotal,
    },
  } = usePaginatedQuery(["getschduledbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
    getschduleddbookings(
      pageSize,
      currentPage,
      token,
      applyLocationFilter,
      filter,
      history
    )
  );

  useEffect(() => {
    // FOR PRE-FETCHING NEXT PAGE
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["getschduledbookings", `${pageSize}`,`${currentPage}`, `${filter}`], () =>
        getschduleddbookings(
          pageSize,
          nextPage,
          token,
          applyLocationFilter,
          filter,
          history
        )
      );
    }
  }, [currentPage, queryClient, applyLocationFilter]);

  // **********

  const fetchScheduledBookings = async () => {
    setBookingsToday(schduledBookingsdata);
  };

  const gettodaybookings = async () => {
    setBookingsToday(todayBookingsdata);
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
    (async () => {
      if (activeTabJustify === "1") {
        todayBookingsdata && (await gettodaybookings());
      } else if (activeTabJustify === "3") {
        await fetchScheduledBookings();
      } else if (activeTabJustify === "6") {
        await fetchPastBookings();
      } else {
        await gettodaybookings();
      }
    })();
  }, [todayBookingsdata, filter]);

  return {
    activeTabJustify,
    setActiveTabJustify,
    diomLocation,
    setDiomLocation,
    loaded,
    setLoaded,
    bookingsToday,
    setBookingsToday,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    revokeTextArea,
    setRevokeTextArea,
    idfSelectedRow,
    setIdfSelectedRow,
    error,
    isLoading,
    setError,
    tog_static,
    tog_static1,
    toggleCustomJustified,
    handeldiomlocation,
    textareachange,
    fetchFilteredPastBookings,
    fetchFilteredScheduledBookings,
    fetchFilteredTodayBookings,
    fetchRequestsBookings,
    fetchRevokedBookings,
    fetchPendingBookings,
    fetchPastBookings,
    fetchScheduledBookings,
    gettodaybookings,
    delRevokeBookings,
    pagelengthnum,
    locationsData,
    pageSize,
    toggle,
    isOpen,
    pageOptions,
    hasNextPage,
    currentPage,
    pastNextPage,
    pastPreviousPage,
    pastTotal,
    ScheduledNextPage,
    changeCurrentPage,
  };
};
export default UseRequestBookings;
