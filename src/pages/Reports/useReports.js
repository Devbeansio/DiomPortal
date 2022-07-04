import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
// import { getLocations } from "../../APIS";
import { useSnackbar } from "notistack";
import moment from "moment";
import {
  getNewreports,
  getPastreports,
  getreportLocationBrand,
  getreportLocations,
  getResourcetypereports,
} from "../../APIS/reports";
import { getUserByProfession } from "../../APIS/userProfle";
import { useAllDataQuery, usePaginatedQuery } from "../../hooks/query";
import { DIOM_BASED_URLS } from "../../config/url";
import { toast } from "react-toastify";
import { exportApiFunc } from "../../APIS/reports";

// const exportApiFunc =( requestOptions,enqueueSnackbar) => {
// fetch(`${DIOM_BASED_URLS}/reports`, requestOptions
//     )
// }

const UseReports = () => {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("Token");
  const providerRef = React.useRef();

  // const queryClient = new QueryClient();
  const [reportFinalValues, setreportFinalValues] = useState([]);
  const [reportFinalLabels, setReportFinalLabels] = useState([]);
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationApplyFilter, setLocationApplyFilter] = useState(false);
  const [resourcetypeApplyFilter, setResourcetypeApplyFilter] = useState(false);
  const [reportTypeValues, setReportTypeValues] = useState([]);
  const [userDropDownVisibility, setUserDropDownVisibility] = useState(true);
  const {
    mutate,
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutateAsync,
    reset,
    status,
  } = useMutation(exportApiFunc);

  if (isLoading) {
    const message =
      'In Process. It will be available shortly in the " Report section"';
    enqueueSnackbar(message, {
      variant: "success",
    });
  }
  if (isSuccess) {
    const message = "Report generated Successfully";
    enqueueSnackbar(message, {
      variant: "success",
    });
  }

  const reportTypeOptions = [
    { label: "Booking Report", value: "BOOKING_REPORTS" },
    { label: "User Report", value: "USER_REPORTS" },
    { label: "User Ananlysis Report", value: "USER_ANALYSIS_REPORTS" },
    { label: "Cancelled Bookings", value: "CANCELLED_BOOKINGS_REPORTS" },
  ];
  const timeSlotOptions = [
    { label: "08 AM - 04 PM", value: "08_AM-04_PM" },
    { label: "04 PM - 12 AM", value: "04_PM-12_AM" },
    { label: "12 AM - 08 AM", value: "12_AM-08_AM" },
  ];

  const reportTypeHandeler = (e) => {
    // setReportTypeValues({ reportType: e.value });
    setReportTypeValues({ reportType: e.value });
    setReportFinalLabels({ reportLabel: e.label });

    if (e.label === "Booking Report" || e.label === "Cancelled Bookings") {
      setUserDropDownVisibility(true);
    } else if (
      e.label === "User Ananlysis Report" ||
      e.label === "User Report"
    ) {
      setUserDropDownVisibility(false);
    }
  };

  const timeSlotHandler = (e) => {

    const timeSlotLabel = e.map((element) => {
      return element.label;
    });
    const timeSlotValue = e.map((element) => {
      return element.value;
    });

    console.log("label : ",timeSlotLabel)
    console.log("value : ",timeSlotValue)

    setreportFinalValues({ ...reportFinalValues, timeSlot: timeSlotValue });
    setReportFinalLabels({ ...reportFinalLabels, timeSlot: timeSlotLabel });
  };

  const resourceTypeHandler = (e) => {
    const resourceTypeValue = e.map((element) => {
      return element.value;
    });
    const resourceTypeLabel = e.map((element) => {
      return element.label;
    });
    setreportFinalValues({
      ...reportFinalValues,
      resourceTypeId: resourceTypeValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      resourceTypeName: resourceTypeLabel,
    });
  };
  const userTypeIndustryHandler = (e) => {
    const userTypeIndustryValue = e.map((element) => {
      return element.value;
    });
    const userTypeIndustryLabel = e.map((element) => {
      return element.label;
    });
    setreportFinalValues({
      ...reportFinalValues,
      industryId: userTypeIndustryValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      industryName: userTypeIndustryLabel,
    });
  };

  const diomBrandHandler = (e) => {
    const brandValue = e.map((element) => {
      return element.value;
    });
    const brandLabel = e.map((element) => {
      return element.label;
    });

    setreportFinalValues({
      ...reportFinalValues,
      locationCategoriesId: brandValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      locationCategoriesName: brandLabel,
    });
    setLocationApplyFilter(true);
  };

  const diomLocationHandler = (e) => {
    setResourcetypeApplyFilter(true);
    const locationValue = e.map((element) => {
      return element.value;
    });
    const locationLabel = e.map((element) => {
      return element.label;
    });
    setreportFinalValues({
      ...reportFinalValues,
      businessId: locationValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      businessName: locationLabel,
    });
  };

  const userTypePositionHandler = (e) => {
    const userTypePositionValue = e.map((element) => {
      return element.value;
    });
    const userTypePositionLabel = e.map((element) => {
      return element.label;
    });
    setreportFinalValues({
      ...reportFinalValues,
      positionId: userTypePositionValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      positionName: userTypePositionLabel,
    });
  };
  const startdateFunc = (e) => {
    const starttdate = e.target.value;
    const d = new Date();
    let start = moment(starttdate).isAfter(d.setMonth(d.getMonth() - 3));
    let end = moment(e.target.value).isBefore(moment().add(-1, "days"));
    if (start && end) {
      const startdate = new Date(starttdate).toISOString();
      setreportFinalValues({ ...reportFinalValues, startDate: startdate });
      setReportFinalLabels({ ...reportFinalLabels, startDate: startdate });
    } else {
      // alert("please select valid date");
      const message = "please select valid date";
      enqueueSnackbar(message, {
        variant: "error",
      });
    }
  };
  const endDateFunc = (e) => {
    const endddate = e.target.value;
    const d = new Date();
    let start = moment(endddate).isAfter(d.setMonth(d.getMonth() - 3));
    let end = moment(e.target.value).isBefore(moment().add(-1, "days"));
    if (start && end) {
      // const enddate = new Date(endddate).toISOString();
      const  enddate = new Date(`${endddate} 23:59 UTC`).toISOString()
      setreportFinalValues({ ...reportFinalValues, endDate: enddate });
      setReportFinalLabels({ ...reportFinalLabels, endDate: enddate });
    } else {
      const message = "please select valid date";
      enqueueSnackbar(message, {
        variant: "error",
      });
    }
  };

  // ***************
  // const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
  const { data: locationsData, isLoading: loadingLocations } = useQuery(
    ["locationsreports1", reportFinalValues?.locationCategoriesId],
    () => getreportLocations(token, locationApplyFilter, reportFinalValues)
  );
  const locationData = locationsData;
  // *******************
  const { data: brandData } = useAllDataQuery(
    ["reportlocationbrandData", "visible"],
    () => getreportLocationBrand(token)
  );

  // *************

  const resourceTypedropdownData = useQuery(
    ["resourceTypedropdownreports", reportFinalValues?.businessId],
    () =>
      getResourcetypereports(token, resourcetypeApplyFilter, reportFinalValues)
  );

  const resourceTypedropdownDailedData = resourceTypedropdownData.data;

  // *************
  const Resourcetypesdropdown = async () => {
    const matadata = resourceTypedropdownDailedData.data.map((element) => {
      return {
        label: element.Name,
        value: element.id,
        UniqueId: element.UniqueId,
        resourceTypeCategoryId: element.resourceTypeCategoryId,
        // visibility: element.visibility,
      };
    });

    setCategoryDropDown(matadata);
  };

  // **************
  const userByProfession = useQuery(["getuserbyprofession"], () =>
    getUserByProfession(token)
  );
  const userByProfessionData = userByProfession?.data;
  const userByProfessionDataa = userByProfessionData?.data?.data;
  const userbyprofessionindustry = userByProfessionDataa?.industries.map(
    (element, index) => ({
      value: element.id,
      label: element.name,
    })
  );

  const userbyprofessionPosition = userByProfessionDataa?.positions.map(
    (element, index) => {
      return {
        //   ...element,

        value: element.id,
        label: element.name,
      };
    }
  );
  // *************

  const reportExport = async() => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        fromTime: reportFinalLabels.startDate,
        toTime: reportFinalLabels.endDate,
        reportValues: reportFinalValues,
        reportLebels: reportFinalLabels,
        reportType: reportTypeValues.reportType,
        // reportType: reportFinalLabels.reportLabel,
        reportName: reportFinalLabels.reportLabel,
      }),
    };
   await mutate(requestOptions);
   
   
  };

  useEffect(
    // FOR PRE-FETCHING NEXT PAGE
    () => {
      getreportLocations(token, locationApplyFilter, reportFinalValues);
    },
    [reportFinalValues, reportFinalValues]
  );
  useEffect(
    // FOR PRE-FETCHING NEXT PAGE
    async () => {
      resourceTypedropdownDailedData && (await Resourcetypesdropdown());
    },
    [resourceTypedropdownDailedData]
  );

  return {
    reportTypeOptions,
    userByProfessionData,
    userbyprofessionPosition,
    userbyprofessionindustry,
    timeSlotOptions,
    locationData,
    brandData,
    reportTypeHandeler,
    userDropDownVisibility,
    timeSlotHandler,
    diomBrandHandler,
    diomLocationHandler,
    resourceTypeHandler,
    userTypeIndustryHandler,
    userTypePositionHandler,
    startdateFunc,
    endDateFunc,
    reportExport,
    categoryDropDown,
    // reportTyperequestFunc,
    // isLoading,
  };
};

export default UseReports;
