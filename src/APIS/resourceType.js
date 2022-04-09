import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns all resource types
 */

export const getResourceTypes = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false,
  filters = {}
) => {
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-resource-types-inventories?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-resource-types-inventories?size=${size}&page=${page}&filter={"where":${filters}}`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  const resourceTypeData = resJson.data.map((element, index) => ({
    id: index + 1,
    _id: element.id,
    ResourceType: element.Name,
    resourceTypeKey: element.resourceTypeKey,
    //locationName: element.images.map((e) => e.locationName),
    locationName: element.businessName,
  }));

  return {
    data: resourceTypeData,
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
 * @returns  searched resource types
 */

export const getSearchedResourceTypes = async (token = "") => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-resource-types-inventories`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  const searchedresourceTypeData = resJson.data.map((element, index) => ({
    id: index + 1,
    _id: element.id,
    ResourceType: element.Name,
    resourceTypeKey: element.resourceTypeKey,
    //locationName: element.images.map((e) => e.locationName),
    locationName: element.businessName,
  }));

  return {
    data: searchedresourceTypeData,
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
 * @returns a list of resourcetype  in DIOM
 */

export const getResourceResourceType = async (token = "", id) => {
  return await (
    await await fetch(
      `${DIOM_BASED_URLS}/admin-resources-inventories?filter={ "where" : { "businessName" : ${id}}}`,
      {
        method: "GET",
        redirect: "follow",
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
 * @returns a list of GetLocationfocusdest  in DIOM
 */

export const GetLocationfocusdest = async (token = "", resourceTypeKey) => {
  return await (
    await await fetch(
      `${DIOM_BASED_URLS}/locations/resourcetype/${resourceTypeKey}/locations`,
      {
        method: "GET",
        redirect: "follow",
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
 * @returns a list of getallresources  in DIOM
 */

export const getResourcetypeResources = async (token = "", id) => {
  return await (
    await await fetch(
      `${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}`,
      {
        method: "GET",
        redirect: "follow",
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
 * @returns a list of gethourlyDayRateFunc  in DIOM
 */

export const getHourlyDayRate = async (token = "", id) => {
  return await (
    await await fetch(
      `${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}/prices`,
      {
        method: "GET",
        redirect: "follow",
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
 * @returns a list of getalllocationsfunc  in DIOM
 */

export const getlocationsresourceTypes = async (token = "", id) => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/admin-business-locations`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};
