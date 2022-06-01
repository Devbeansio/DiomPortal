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
  reportFinalValues
) => {
  const diomLocationValue = reportFinalValues?.businessId;
 

  return await (
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
  ).json();
};




/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of Past in DIOM
 */

 export const getPastreports = async (token,selectedReportType,postFilter) => {
  
  
  return await (
    await fetch(
      !postFilter?
      `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": true}}`
      :`${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": true,"reportType":"${selectedReportType}"}}`,
      // `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": false}}`
      //    : `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": false,"reportType":"${selectedReportType}"}}`,   
          {
        
          method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  ).json();
};






/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of New in DIOM
 */

 export const getNewreports = async (
  token,selectedReportType,postFilter
) => {
 

  return await (
    await fetch(
      !postFilter?
        //  `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": true}}`
        //  :`${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": true,"reportType":"${selectedReportType}"}}`,
         `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": false}}`
         : `${DIOM_BASED_URLS}/reports?page=1&size=50&filter={"where":{"exported": false,"reportType":"${selectedReportType}"}}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
  ).json();
};

