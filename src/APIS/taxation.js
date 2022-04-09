import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */

export const getTaxation = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false
) => {
  const res = await fetch(`${DIOM_BASED_URLS}/admin-finances/taxes`, {
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

  const taxationData = resJson.map((e, index) => ({
    ...e,
    id: index + 1,
    Name: e.Name,
    Rate: e.Rate,
  }));

  return {
    data: taxationData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};
