import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { DIOM_BASED_URLS } from "../../.././config/url";
import { toast } from "react-toastify";

const UseRequestBookings1 = () => {
  const { t_ID } = useParams();
  const [activeTabJustify, setActiveTabJustify] = useState(t_ID);
  const [diomLocation, setDiomLocation] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [bookingsToday, setBookingsToday] = useState([]);
  const [modal_static, setModal_static] = useState(false);
  const [modal_static1, setModal_static1] = useState(false);
  const [revokeTextArea, setRevokeTextArea] = useState();
  const [idfSelectedRow, setIdfSelectedRow] = useState();
  const [error, setError] = useState(null);

  const history = useHistory();
  const token = localStorage.getItem("Token");

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = (__id) => {
    setModal_static(!modal_static);
    setIdfSelectedRow(__id);

    removeBodyCss();
  };
  const tog_static1 = () => {
    setModal_static1(!modal_static1);

    removeBodyCss();
  };

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  const pageOptions = {
    sizePerPage: 10,

    totalSize: bookingsToday.length,

    custom: true,
  };

  const getalllocationsfunc = async () => {
    try {
      // setLoaded(true);
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result3 = await response.json();
      const mapdata = result3.map((element) => ({
        value: element.id,
        label: element.Name,
      }));

      setDiomLocation([
        {
          label: "--All Locations",
          options: [
            {
              value: "All",
              label: "All",
            },
            ...mapdata,
          ],
        },
      ]);
      // setLoaded(false);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  const handeldiomlocation = async (a) => {
    if (activeTabJustify === "1") {
      if (a === "All") {
        gettodaybookings();
      }
      //   else if (a == null){
      //     gettodaybookings();

      // }
      else {
        fetchFilteredTodayBookings(a);
      }
    } else if (activeTabJustify === "3") {
      if (a === "All") {
        fetchScheduledBookings();
      } else {
        fetchFilteredScheduledBookings(a);
      }
    } else if (activeTabJustify === "6") {
      if (a === "All") {
        fetchPastBookings();
      } else {
        fetchFilteredPastBookings(a);
      }
    }
  };

  const textareachange = (e) => {
    setRevokeTextArea(e.target.value);
  };

  const fetchFilteredPastBookings = async (a) => {
    try {
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/past/${a}?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result = await response.json();
      const mappedBookings = result.data.map((booking, index) => ({
        ...booking,
        id: index + 1,
        updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
        _id: booking.id,

        Bookingstartend:
          moment(booking.fromTime).format("MMM DD ") +
          " - " +
          moment(booking.toTime).format("MMM DD"),
        timeLogs: booking.timeLogs.map((e) =>
          moment(e.fromTime).format("HH:mm")
        ),
      }));

      setBookingsToday(mappedBookings);
      // setLoaded(false);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  const fetchFilteredScheduledBookings = async (a) => {
    try {
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/scheduled/${a}?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result = await response.json();
      const mappedBookings = result.data.map((booking, index) => ({
        ...booking,
        id: index + 1,
        updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
        _id: booking.id,

        Bookingstartend:
          moment(booking.fromTime).format("MMM DD ") +
          " - " +
          moment(booking.toTime).format("MMM DD"),
        timeLogs: booking.timeLogs.map((e) =>
          moment(e.fromTime).format("HH:mm")
        ),
      }));

      setBookingsToday(mappedBookings);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  const fetchFilteredTodayBookings = async (a) => {
    try {
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/today/${a}?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result = await response.json();
      const mappedBookings = result.bookings.map((booking, index) => ({
        ...booking,

        id: index + 1,
        _id: booking.id,
        updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
        Bookingstartend:
          moment(booking.fromTime).format("MMM DD ") +
          " - " +
          moment(booking.toTime).format("MMM DD"),
        timeLogs: booking.timeLogs.map((e) =>
          moment(e.fromTime).format("HH:mm")
        ),
      }));
      setBookingsToday(mappedBookings);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  //pending
  const fetchRequestsBookings = () => {
    setBookingsToday([]);
  };
  const fetchRevokedBookings = () => {
    setBookingsToday([]);
  };
  const fetchPendingBookings = () => {
    setBookingsToday([]);
  };
  //pending

  const fetchPastBookings = async () => {
    // setLoaded(true);
    try {
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/past?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result1 = await response.json();

      const mappedBookingsofpast = result1.data.map((booking, index) => ({
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

      setBookingsToday(mappedBookingsofpast);
      // setLoaded(false);
    } catch (error) {
      setError(error.message);
      console.log("error : ", error);
    }
  };

  const fetchScheduledBookings = async () => {
    try {
      // setLoaded(true);
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/scheduled?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result = await response.json();
      const mappedBookings = result.data.map((booking, index) => ({
        ...booking,
        id: index + 1,
        updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
        _id: booking.id,

        Bookingstartend:
          moment(booking.fromTime).format("MMM DD ") +
          " - " +
          moment(booking.toTime).format("MMM DD"),
        // timeLogs:booking.timeLogs.map((bookings, index) =>( {
        timeLogs: booking.timeLogs?.map((e) =>
          moment(e.fromTime).format("HH:mm")
        ),
      }));

      setBookingsToday(mappedBookings);
      // setLoaded(false);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  const gettodaybookings = async () => {
    try {
      // setLoaded(true);
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-diom-bookings/today?page=1&size=500`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          setError(response.statusText);
          history.push("/login");
        }

        throw new Error(response.statusText);
      }
      const result = await response.json();

      const mappedBookings = result.data.map((booking, index) => ({
        ...booking,

        id: index + 1,
        _id: booking.id,
        updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
        Bookingstartend:
          moment(booking.fromTime).format("MMM DD ") +
          " - " +
          moment(booking.toTime).format("MMM DD"),

        timeLogs: booking.timeLogs
          .map((e) => moment(e.fromTime).format("HH:mm"))
          .join(", "),
      }));

      setBookingsToday(mappedBookings);

      // setLoaded(false);
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  const delRevokeBookings = () => {
    fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/revoke/${idfSelectedRow}`, {
      method: "DELETE",
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        body: revokeTextArea,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        toast.success("Booking Revoked");

        setModal_static1(false);
        if (activeTabJustify === "1") {
          gettodaybookings();
        } else if (activeTabJustify === "3") {
          fetchScheduledBookings();
        }
      })
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    (async () => {
      await getalllocationsfunc();
      if (activeTabJustify === "1") {
        await gettodaybookings();
      } else if (activeTabJustify === "3") {
        await fetchScheduledBookings();
      } else if (activeTabJustify === "6") {
        await fetchPastBookings();
      } else {
        await gettodaybookings();
      }
    })();
  }, []);

  return {
    activeTabJustify,
    setActiveTabJustify,
    diomLocation,
    setDiomLocation,
    loaded,
    setLoaded,
    bookingsToday,
    setBookingsToday,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    revokeTextArea,
    setRevokeTextArea,
    idfSelectedRow,
    setIdfSelectedRow,
    error,
    setError,
    tog_static,
    tog_static1,
    toggleCustomJustified,
    getalllocationsfunc,
    handeldiomlocation,
    textareachange,
    fetchFilteredPastBookings,
    fetchFilteredScheduledBookings,
    fetchFilteredTodayBookings,
    fetchRequestsBookings,
    fetchRevokedBookings,
    fetchPendingBookings,
    fetchPastBookings,
    fetchScheduledBookings,
    gettodaybookings,
    delRevokeBookings,
    pageOptions,
  };
};
export default UseRequestBookings1;
