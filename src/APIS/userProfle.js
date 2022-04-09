import { DIOM_BASED_URLS } from "../config/url";
import moment from "moment";
/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all userProfile in DIOM
 */

export const getuserprofile = async (size = 30, page = 1, token = "") => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/users?size=${size}&page=${page}`,

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
  const userProfileData = resJson.users.map((element, index) => ({
    ...element,
    id: index + 1,
    _id: element.id,
    userName: element.fullName,
    email: element.email,
    MobilePhone: element.MobilePhone,
    checkInTime: moment(element.checkInTime).format("YYYY-MM-DD "),
  }));
  return {
    data: userProfileData,
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
 * @returns a list of one user in DIOM
 */

export const getuserdetails = async (size = 30, page = 1, token = "", id) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/users/${id}?size=${size}&page=${page}`,

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
  const userdetailsData = resJson;

  return {
    data: userdetailsData,
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
 * @returns a list of user active bookings in DIOM
 */

export const getUseractivebookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-diom-bookings/${id}/active?size=${size}&page=${page}`,

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
  // const userActivebookingsData = resJson.bookings.map((booking, index) => ({
  const userActivebookingsData = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));

  return {
    data: userActivebookingsData,
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
 * @returns a list of user past bookings in DIOM
 */
export const getUserPastBookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/bookings/users/${id}/history?size=${size}&page=${page}`,

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
  console.log("resJson : ", resJson);
  // const userPastBookingsData = resJson.bookings.map((booking, index) => ({
  const userPastBookingsData = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));

  return {
    data: userPastBookingsData,
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
 * @returns a list of one user in DIOM
 */

export const getUserScheduledBookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/bookings/users/${id}/scheduled?size=${size}&page=${page}`,

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

  const userScheduledBookingsData = resJson.bookings.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));

  return {
    data: userScheduledBookingsData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};
