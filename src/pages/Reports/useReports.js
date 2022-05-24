import React, { useState, useEffect } from "react";
import {  useQuery } from "react-query";
// import { getLocations } from "../../APIS";
import {  useSnackbar } from "notistack";
import moment from "moment";
import {
  getreportLocationBrand,
  getreportLocations,
  getResourcetypereports,
} from "../../APIS/reports";
import { getUserByProfession } from "../../APIS/userProfle";
import { useAllDataQuery } from "../../hooks/query";

const UseReports = () => {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("Token");
  const providerRef = React.useRef()

  // const queryClient = new QueryClient();
  const [reportFinalValues, setreportFinalValues] = useState([]);
  const [reportFinalLabels, setReportFinalLabels] = useState([]);
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [locationApplyFilter, setLocationApplyFilter] = useState(false);
  const [resourcetypeApplyFilter, setResourcetypeApplyFilter] = useState(false);
  const [userDropDownVisibility, setUserDropDownVisibility] = useState(true);
  const reportTypeOptions = [
    { label: "Booking Report", value: 0 },
    { label: "User Report", value: 1 },
    { label: "User Ananlysis Report", value: 2 },
    { label: "Cancelled Bookings", value: 3 },
  ];
  const timeSlotOptions = [
    { label: "08 AM - 04 PM", value: "08_AM-04_PM" },
    { label: "04 PM - 12 AM", value: "04_PM-12_AM" },
    { label: "12 AM - 08 AM", value: "12_AM-08_AM" },
  ];

  const reportTypeHandeler = (e) => {
    setreportFinalValues({ ...reportFinalValues, reportType: e });
    setReportFinalLabels({ ...reportFinalLabels, reportType: e });
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
      return element.value;
    });
    // const timeSlotValue = e.map((element) => {
    //   return element.value;
    // });
    setreportFinalValues({ ...reportFinalValues, timeSlot: timeSlotLabel });
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
      resourceTypes: resourceTypeValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      resourceTypes: resourceTypeLabel,
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
      userTypeByIndustry: userTypeIndustryValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      userTypeByIndustry: userTypeIndustryLabel,
    });
  };

  const diomBrandHandler = (e) => {
    const brandValue = e.map((element) => {
      return element.value;
    });
    const brandLabel = e.map((element) => {
      return element.label;
    });
    setreportFinalValues({ ...reportFinalValues, diomBrand: brandValue });
    setReportFinalLabels({ ...reportFinalLabels, diomBrand: brandLabel });
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
      diomLocations: locationValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      diomLocations: locationLabel,
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
      userTypeByPosition: userTypePositionValue,
    });
    setReportFinalLabels({
      ...reportFinalLabels,
      userTypeByPosition: userTypePositionLabel,
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
      const message = 'please select valid date';
      enqueueSnackbar(message, { 
        variant: 'failed', 
    });
    }
  };
  const endDateFunc = (e) => {
    const endddate = e.target.value;
    const d = new Date();
    let start = moment(endddate).isAfter(d.setMonth(d.getMonth() - 3));
    let end = moment(e.target.value).isBefore(moment().add(-1, "days"));
    if (start && end) {
      const enddate = new Date(endddate).toISOString();
      setreportFinalValues({ ...reportFinalValues, endDate: enddate });
      setReportFinalLabels({ ...reportFinalLabels, endDate: enddate });
    } else {
      // alert("please select valid date");
      const message = 'please select valid date';
      enqueueSnackbar(message, { 
        variant: 'failed', 
    });
    }
  };

  // ***************
  // const { data: locationsData, isLoading: loadingLocations } = useAllDataQuery(
  const { data: locationsData, isLoading: loadingLocations } = useQuery(
    ["locationsreports1", reportFinalValues?.diomBrand],
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
    ["resourceTypedropdownreports", reportFinalValues?.diomLocations],
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
  const userByProfessionData = userByProfession.data;
  const userByProfessionDataa = userByProfessionData?.data;
  // console.log("userByProfessionData ", userByProfessionDataa);
  const userbyprofessionindustry = userByProfessionDataa?.industries.map(
    (element, index) => ({
      value: element.id,
      label: element.name,
    })
  );

  // console.log("userbyprofessionindustry ", userbyprofessionindustry);
  const userbyprofessionPosition = userByProfessionDataa?.positions.map(
    (element, index) => {
      return {
        //   ...element,

        value: element.id,
        label: element.name,
      };
    }
  );
  // console.log("userbyprofessionPosition ", userbyprofessionPosition);
  // *************

  const reportExport = () => {
    const message = 'In Process. It will be available shortly in the " Report section"';
    enqueueSnackbar(message, { 
      variant: 'success',
      
  });
    console.log("reportFinalIDs : ", reportFinalValues);
    console.log("reportFinalLabels: ", reportFinalLabels);

    

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
  };
};

export default UseReports;
