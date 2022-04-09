import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */

export const getCategories = async (size = 30, page = 1, token = "") => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/resource-type-categories`,

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

  const categoriesData = resJson.data.map((e, i) => ({
    id: i + 1,
    _id: e.id,
    categoryName: e.name,
    resourcetype: e.resourceTypes.map((f) => f.name).join(", "),
  }));

  return {
    data: categoriesData,
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
 * @returns a list of category details in DIOM
 */

export const getCategoryDetails = async (token = "", id) => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/resource-type-categories/${id}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of category detail dropdown in DIOM
 */

export const getCategoryDetaildropdown = async (token = "", id) => {
  return await (
    await await fetch(
      `${DIOM_BASED_URLS}/admin-resource-types-inventories?filter={"where":{"resourceTypeCategoryId":"${id}"}}`,
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
 * @returns a list of resourcetype dropdown in DIOM
 */

export const getResourcetypeDropdown = async (token = "", id) => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/admin-resource-types-inventories`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};
