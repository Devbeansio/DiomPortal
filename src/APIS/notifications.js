import { DIOM_BASED_URLS } from "../config/url";
/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of Notifications in DIOM
 */

export const getAdminNotifications = async (token) => {
  return await (
    await fetch(`${DIOM_BASED_URLS}/admin-notifications`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};


