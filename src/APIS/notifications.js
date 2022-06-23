import { DIOM_BASED_URLS } from "../config/url";
/**
 *
 * @param size
 * @param page
 * @returns a list of Notifications in DIOM
 */

export const getAdminNotifications = async (token,pageNumber) => {
  const size = "10";
  // return await (

    const res = await fetch(`${DIOM_BASED_URLS}/admin-notifications`, {
      // await fetch(`${DIOM_BASED_URLS}/admin-notifications?size=${size}&page=${pageNumber}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  // ).json();
  if (!res.ok) {
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const data = await res.json();
  
  return {
    data
  };
};


