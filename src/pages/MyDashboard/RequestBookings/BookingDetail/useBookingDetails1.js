import { useEffect, useState } from "react";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { useQueryClient, useQuery } from "react-query";
import { useParams } from "react-router-dom";
// import { getBooking } from "../../../../APIS/bookings";
const bookingdata = "";
export const useBookingDetails1 = () => {
  // const [bookingData, setBookingData] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("Token");

  const { data } = useQuery(["bookingdetails", id], async () => {
    const res = await fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/${id}`, {
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
    // console.log("resJson", resJson);

    return {
      data: resJson,
    };
  });
  // const d = useQuery;
  console.log("data : ", data);

  return { bookingdata };
};
