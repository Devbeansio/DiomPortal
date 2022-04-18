import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a Finance in DIOM
 */

export const getFinanceCard = async (token = "") => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/stats/finance`, {
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
 * @returns a General in DIOM
 */

export const getGenaralCard = async (token = "") => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/stats/general`, {
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
 * @returns a Location in DIOM
 */

export const getLocationCard = async (token = "") => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/stats/locations`, {
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
 * @returns a brand in DIOM
 */

export const getBrandCard = async (token = "") => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/stats/brands`, {
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
 * @returns a users in DIOM
 */

export const getUsersCard = async (token = "") => {
  return await (
    await await fetch(`${DIOM_BASED_URLS}/stats/users`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};
