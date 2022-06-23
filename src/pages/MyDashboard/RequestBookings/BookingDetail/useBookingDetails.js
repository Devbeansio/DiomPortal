import { useState, useEffect, useRef } from "react";
import { DIOM_BASED_URLS } from "../../../.././config/url";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getBooking } from "../../../../APIS/bookings";
import { getGuest } from "../../../../APIS/bookings";
import { getbookinguser } from "../../../../APIS/bookings";
import { toast } from "react-toastify";

export const useBookingDetails = () => {
  const [error, setError] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({});
  const [checkInCheckout, setCheckInCheckout] = useState([]);
  // const [bookingUserName, setBookingUserName] = useState([]);
  // const [userBookings, setUserBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [abc, setAbc] = useState(true);
  const [guestData, setGuestData] = useState([]);
  const [revokeBookingStatus, setRevokeBookingStatus] = useState();

  const history = useHistory();
  const token = localStorage.getItem("Token");
  const { id, t_ID } = useParams();
  const componentRef = useRef();

  // *************
  const bookingData = useQuery(["bookingsDetails", id], () =>
    getBooking(token, id)
  );
  const bookingsDailedData = bookingData?.data?.data;

  // *************

  const bookingdetails = async () => {
    setBookingDetails(bookingsDailedData);
    // bookingusername();
    checkinCheckoutfunc(bookingsDailedData);
  };

  const bookingguestData = useQuery(["guestDetails", id], () =>
    getGuest(token, id)
  );
  const bookingsguestData = bookingguestData?.data?.data;

  const guestinfofunc = async () => {
    setGuestData(bookingsguestData);
  };

  // const condition = bookingsDailedData?.userId.length !==0? true : false
  const bookinguserData = useQuery(
    ["userDetails", id],

    () => getbookinguser(token, bookingsDailedData?.userId),
    { enabled: bookingsDailedData ? true : false }
  );

  const userbookingData = bookinguserData?.data?.data;
  const isLoading = bookinguserData.isLoading;

  // ********
  // const bookingusername = async () => {
  // setBookingUserName(userbookingData?.username);
  // setUserBookings(userbookingData ? userbookingData : null);
  // };

  const checkinCheckoutfunc = (result) => {
    const newArr = [...result.timeLogs];
    const sortedData = newArr.reverse();
    setCheckInCheckout(sortedData);
    return [sortedData];
  };

  //   const getrevokedbookings = async () => {
  //     fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/revoked/${id}`, {
  //       method: "GET",
  //       redirect: "follow",
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         const mappeddata = result.data.map((e) => ({
  //           bookingStatus: e.bookingStatus,
  //         }));
  //         setRevokeBookingStatus(mappeddata);
  //       })
  //       .catch((error) => console.log("error", error));
  //   };

  useEffect(() => {
    (async () => {
      bookingsDailedData && (await bookingdetails());
      bookingsguestData && (await guestinfofunc());
      //   await getrevokedbookings();
    })();
  }, [bookingsDailedData, bookingsguestData]);

  return {
    error,
    setError,
    bookingDetails,
    setBookingDetails,
    checkInCheckout,
    setCheckInCheckout,
    // bookingUserName,
    // setBookingUserName,
    // userBookings,
    // setUserBookings,
    loaded,
    setLoaded,
    guestData,
    setGuestData,
    revokeBookingStatus,
    setRevokeBookingStatus,
    bookingdetails,
    guestinfofunc,
    // bookingusername,
    abc,
    isLoading,
    setAbc,
    checkinCheckoutfunc,
    // getrevokedbookings,
    userbookingData,
  };
};
