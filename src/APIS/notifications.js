import { DIOM_BASED_URLS } from "../config/url";
/**
 *
 * @param size
 * @param page
 * @returns a list of Notifications in DIOM
 */

export const getAdminNotifications = async (token) => {
  return await (
    await fetch(`${DIOM_BASED_URLS}/admin-notifications`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
};


