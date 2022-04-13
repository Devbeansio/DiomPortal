import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */
export const getResources = async (
  size,
  page,
  token = "",
  applyFilter = false,
  filters = {}
) => {
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-resources-inventories?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-resources-inventories?size=${size}&page=${page}&filter={"where":${filters}}`,
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
  const resourcesData = resJson.data.map((element, index) => ({
    id: index + 1,
    _id: element.id,
    Resource: element.Name,
    Location: element.BusinessName,
    ResourceType: element.ResourceTypeName,
  }));
  return {
    data: resourcesData,
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
 * @returns a list of all resource in DIOM
 */
export const getSearchedResources = async (token) => {
  const res = await fetch(`${DIOM_BASED_URLS}/admin-resources-inventories`, {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  const resourcessearchedData = resJson.data.map((element, index) => ({
    id: index + 1,
    _id: element.id,
    Resource: element.Name,
    Location: element.BusinessName,
    ResourceType: element.ResourceTypeName,
  }));
  return {
    data: resourcessearchedData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

/**
 *
 * @param {ResourceId} id
 * @param {JWT} token
 * @returns  object of a single resource
 */
export const getResource = async (id, token) => {
  return await (
    await fetch(`${DIOM_BASED_URLS}/admin-resources-inventories/${id}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};
