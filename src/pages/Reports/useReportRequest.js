import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { usePaginatedQuery } from "../../hooks/query";
import { getNewreports, getPastreports } from "../../APIS/reports";
import { QueryClient ,useQueryClient} from "react-query";
import { DIOM_BASED_URLS } from "../../config/url";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const useReportRequest = () => {
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [newOldReportsData, setNewOldReportsData] = useState([]);
  const [postFilter, setPostFilter] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState("");
  const [activeTabJustify, setActiveTabJustify] = useState("1");
   const QueryClient = useQueryClient();



  const changeCurrentPage = (pageNum) => {
    setCurrentPage(pageNum);
    // QueryClient.invalidateQueries("newReportssData");
  };
  const reportTypeOptions = [
    { label: "Booking Report", value: "BOOKING_REPORTS" },
    { label: "User Report", value: "USER_REPORTS" },
    { label: "User Ananlysis Report", value: "USER_ANALYSIS_REPORTS" },
    { label: "Cancelled Bookings", value: "CANCELLED_BOOKINGS_REPORTS" },
  ];

  const retryFunc = () => {
    const message = "Gathering Report Data";
    enqueueSnackbar(message, {
      variant: "success",
    });
  };

 

  const pagelengthnum = (e) => {
    
    if (e.target.value === "1") {
      setPageSize(10);
      // QueryClient.invalidateQueries("newReportssData");
    } else if (e.target.value === "2") {
      setPageSize(30);
      // QueryClient.invalidateQueries("newReportssData");
    } else if (e.target.value === "3") {
      setPageSize(50);
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     getPastreports(token, selectedReportType, postFilter,pageSize,currentPage);
  //     getNewreports(token, selectedReportType, postFilter,pageSize,currentPage)

     
  //     // resourceResourcetypesdata && (await getresoucresbyid());
  //   })();
  // }, [
  //   pageSize,currentPage
  // ]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const downloadFunc = (rowId) => {
    const message1 = "Your Report has started  to download";
    enqueueSnackbar(message1, {
      variant: "success",
    });
    fetch(`${DIOM_BASED_URLS}/reports/commands`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        id: `${rowId}`,
        command: "MARK_READ",
      }),
    })
      .then((result3) => {})
      .catch((error) => toast.error(" Something went wrong"));
  };

  const reportTyperequestFunc = (e) => {
    setPostFilter(true);
    setSelectedReportType(e.value);
  };

  // *************

  const {
    data: {
      data: pastReportsDataa,
      hasNextPage: pastHasNextPage,
      hasPreviousPage: pastHasPreviousPage,
      total: pastTotal,
      refetch: pastReportsRefteh,
      
    },
    isLoading,
  } = usePaginatedQuery(["pastReprtssData", `${selectedReportType}, ${pageSize},${currentPage}`], () =>
    getPastreports(token, selectedReportType, postFilter,pageSize,currentPage,history)
  );
  // *************
  // *************
  const {
    data: {
      data: newReportsDataa,
      hasNextPage: newHasNextPage,
      hasPreviousPage: newHasPreviousPage,
      total: newTotal,
      refetch: newReportsRefteh,
    },
  } = usePaginatedQuery(["newReportssData", , `${selectedReportType},${pageSize},${currentPage}`], () =>
    getNewreports(token, selectedReportType, postFilter,pageSize,currentPage,history)
  );


  const pageOptions = {
    sizePerPage: pageSize,
    totalSize: activeTabJustify ==="1"?pastTotal :activeTabJustify ==="2"?newTotal:pastTotal  ?? 0,
    custom: true,
  };


  return {
    reportTypeOptions,
    retryFunc,
    downloadFunc,
    pastReportsDataa,
    newReportsDataa,
    newOldReportsData,
    setNewOldReportsData,
    isLoading,
    reportTyperequestFunc,
    pastHasNextPage,
    pastTotal,
    pastHasPreviousPage,
    pastReportsRefteh,
    newHasNextPage,
    newHasPreviousPage,
    newTotal,
    newReportsRefteh,
    pagelengthnum,
    toggle,
    isOpen,
    pageSize,
    currentPage,
    changeCurrentPage,
    pageOptions,
    activeTabJustify, setActiveTabJustify
    
  };
};

export default useReportRequest;
