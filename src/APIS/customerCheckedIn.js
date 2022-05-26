import { DIOM_BASED_URLS } from "../config/url";

import moment from "moment";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all cehckedIn Customers in DIOM
 */

export const getcustomers = async (
  filter,
  size = 30,
  page = 1,
  token = "",
  applyLocationFilter
) => {
  const res = await fetch(
    !applyLocationFilter
      ? `${DIOM_BASED_URLS}/users/checked-in`
      : `${DIOM_BASED_URLS}/admin-diom-location/${filter}/active-customers`,
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
  // console.log("resJson : ", resJson);
  const customerCheckInData = resJson.data.map((e, index) => {
    return {
      ...e,
      id: index + 1,
      _id: e.id,
      checkInTime: moment(e.checkInTime).format("DD/MM/YYYY"),
    };
  });

  return {
    data: customerCheckInData,
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
 * @returns a list of all cehckedIn details in DIOM
 */

export const getcustomer = async (size = 30, page = 1, token = "", id) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/users/${id}`,

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

  const customerdetailedData = await resJson.json();

  return {
    data: customerdetailedData,
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
 * @returns a list of today bookings in DIOM
 */

export const getUseractivebookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-diom-bookings/${id}/active`,

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
  // const userActiveBookingData = resJson.bookings.map((booking, index) => ({

  const userActiveBookingData = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));
  return {
    data: userActiveBookingData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

export const getUserscheduledbookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/bookings/users/${id}/scheduled`,

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

  const userSechduledBookigsData = resJson.bookings.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));
  return {
    data: userSechduledBookigsData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

export const getUserpastbookings = async (
  size = 30,
  page = 1,
  token = "",
  id
) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/bookings/users/${id}/history`,

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
  // const usePastBookingsData = resJson.bookings.map((booking, index) => ({
  const usePastBookingsData = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    createdAt: moment(booking.createdAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
  }));
  return {
    data: usePastBookingsData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};
