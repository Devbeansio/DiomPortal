import { DIOM_BASED_URLS } from "../config/url";
import moment from "moment";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of BOOKING in DIOM
 */
export const getBooking = async (token = "", id) => {
  return await (
    await fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/${id}`, {
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
 * @returns a list of guests in DIOM
 */

export const getGuest = async (token = "", id) => {
  return await (
    await fetch(`${DIOM_BASED_URLS}/admin-booking-guest/booking/${id}`, {
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
 * @returns a list of bookinguserdata in DIOM
 */

export const getbookinguser = async (token, id) => {
  // if (id) {
  return await (
    await fetch(`${DIOM_BASED_URLS}/users/${id}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  ).json();
  // }
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of bookings locations in DIOM
 */

export const getbookinglocations = async (token = "") => {
  return await (
    await fetch(
      `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`,
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
 * @param {*JWT} token
 * @returns get today bookings data for dropdown
 */
export const gettodaysbookings = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false,
  filters = {}
) => {
  // console.log("filters :", filters);
  // console.log("applyFilter : ", applyFilter);
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-diom-bookings/today?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-diom-bookings/today/${filters}?size=${size}&page=${page}`,
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
  const todayBookingsdata = resJson.data.map((booking, index) => ({
    ...booking,

    id: index + 1,
    _id: booking.id,
    updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
    Bookingstartend:
      moment(booking.fromTime).format("MMM DD ") +
      " - " +
      moment(booking.toTime).format("MMM DD"),

    timeLogs:
      booking.timeLogs.length > 0
        ? moment(booking.timeLogs[booking.timeLogs.length - 1].fromTime).format(
            "HH:mm"
          )
        : null,

    // booking.timeLogs.map((e) => moment(e.fromTime).format("HH:mm"))
    // .join(", "),
  }));
  return {
    data: todayBookingsdata,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

/**
 *
 * @param {*JWT} token
 * @returns get Fetched bookings data for dropdown
 */
export const getschduleddbookings = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false,
  filters = {}
) => {
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-diom-bookings/scheduled?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-diom-bookings/scheduled/${filters}?size=${size}&page=${page}`,
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

  // const result = applyFilter
  //   ? (result = resJson.data.bookings)
  //   : (result = resJson.data);

  const schduledBookingsdata = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,

    Bookingstartend:
      moment(booking.fromTime).format("MMM DD ") +
      " - " +
      moment(booking.toTime).format("MMM DD"),
    timeLogs: booking.timeLogs.map((e) => moment(e.fromTime).format("HH:mm")),
  }));
  return {
    data: schduledBookingsdata,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

/**
 *
 * @param {*JWT} token
 * @returns get Fetched Past bookings data for dropdown
 */
export const getPasttbookings = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false,
  filters = {}
) => {
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-diom-bookings/past?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-diom-bookings/past/${filters}?size=${size}&page=${page}`,
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

  // const result = applyFilter
  //   ? (result = resJson.data.bookings)
  //   : (result = resJson.data);

  const pastBookingsdata = resJson.data.map((booking, index) => ({
    ...booking,
    id: index + 1,
    updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
    _id: booking.id,
    Bookingstartend:
      moment(booking.fromTime).format("MMM DD ") +
      " - " +
      moment(booking.toTime).format("MMM DD"),
    // timeLogs: booking.timeLogs.map((e,i) =>(e.fromTime? moment(e.fromTime).format("HH:mm") :null)),
  }));
  return {
    data: pastBookingsdata,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};
