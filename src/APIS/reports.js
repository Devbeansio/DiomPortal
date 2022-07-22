import moment from "moment";
import { DIOM_BASED_URLS } from "../config/url";

export const getreportLocations = async (
  token,
  locationApplyFilter,
  reportFinalValues,
  locationInvalidatequerry
) => {
  const diomBrandValues = reportFinalValues?.locationCategoriesId;

  const res = (
    await (
      await fetch(
        !locationApplyFilter || diomBrandValues?.length === 0
          ? `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`
          : `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"locationCategoriesId":{"inq":${JSON.stringify(
              diomBrandValues
            )}}}}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
    ).json()
  )?.map((element) => ({
    value: element.id,
    label: element.Name,
  }));
  return [
    {
      label: "--All Locations",
      options: [...res],
    },
  ];
};

export const getreportLocationBrand = async (token) => {
  const res = (
    await (
      await fetch(`${DIOM_BASED_URLS}/admin-location-categories`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    ).json()
  ).map((element) => ({
    value: element.id,
    label: element.name,
  }));
  return [
    {
      label: "--All Brands",
      options: [...res],
    },
  ];
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of resourcetype dropdown in DIOM
 */

export const getResourcetypereports = async (
  token = "",
  resourcetypeApplyFilter,
  reportFinalValues,
  history
) => {
  const diomLocationValue = reportFinalValues?.businessId;
 

  // return await (
    const res = 
    await fetch(
      !resourcetypeApplyFilter || diomLocationValue?.length === 0
        ? `${DIOM_BASED_URLS}/admin-resource-types-inventories`
        : `${DIOM_BASED_URLS}/admin-resource-types-inventories?filter={"where":{"BusinessId":{"inq":${JSON.stringify(
            diomLocationValue
          )}}}}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  // ).json();
  if (!res.ok) {
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();

  return {
    data: resJson?.data,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};




/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of Past in DIOM
 */

 export const getPastreports = async (token,selectedReportType,postFilter,pageSize,currentPage,history) => {
  
  console.log("selectedReportType : ",selectedReportType)
  // return await (
    const res = await fetch(
      !postFilter?
      `${DIOM_BASED_URLS}/reports?page=${currentPage}&size=${pageSize}&filter={"where":{"exported": true}}`
      :`${DIOM_BASED_URLS}/reports?page=1&size=${pageSize}&filter={"where":{"exported": true,"reportType":"${selectedReportType}"}}`,
      
          {
        
          method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  // ).json();
  if (!res.ok) {
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  
  const pastreports = resJson?.data.map((e, index) => ({
    ...e,
    id: e.id,
    reportName: e.reportName,
    reportType: e.reportType,
    locationBrands:e.locationBrands,
    business:e.business,
    resourceTypes:e.resourceTypes,
    timeSlots:e.timeSlots,
    userIndustries:e.userIndustries,
    fileUrl:e.fileUrl,
    timeRangeTotal:moment(e.fromTime).format("DD-MM-YYYY" )+" "+ moment(e.toTime).format("DD-MM-YYYY" )
  }));
  return {
    data: pastreports,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};






/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of New in DIOM
 */

 export const getNewreports = async (
  token,selectedReportType,postFilter,pageSize,currentPage,history
) => {


  // return 
  const res =
    await fetch(
      !postFilter?
       
         `${DIOM_BASED_URLS}/reports?page=${currentPage}&size=${pageSize}&filter={"where":{"exported": false}}`
         : `${DIOM_BASED_URLS}/reports?page=1&size=${pageSize}&filter={"where":{"exported": false,"reportType":"${selectedReportType}"}}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  
  if (!res.ok) {
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  
  const newreports = resJson?.data.map((e, index) => ({
    ...e,
    id: e.id,
    reportName: e.reportName,
    reportType: e.reportType,
    locationBrands:e.locationBrands,
    business:e.business,
    resourceTypes:e.resourceTypes,
    timeSlots:e.timeSlots,
    userIndustries:e.userIndustries,
    fileUrl:e.fileUrl,
    timeRangeTotal:moment(e.fromTime).format("DD-MM-YYYY" )+" "+ moment(e.toTime).format("DD-MM-YYYY" )
  }));

  return {
    data: newreports,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};




export const exportApiFunc =( requestOptions,enqueueSnackbar) => {
  fetch(`${DIOM_BASED_URLS}/reports`, requestOptions
      )
  }
