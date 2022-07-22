import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const events = [
  {
    title: "Big Meeting",
    allday: true,
    start: new Date("June 20, 2022 11:13:00"),
    end: new Date("June 21, 2022 11:13:00"),
  },
  {
    title: "Vacation",
    start: new Date("June 10, 2022 11:13:00"),
    end: new Date("June 10, 2022 11:13:00"),
  },
  {
    title: "Conferance",
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
];
const useFullCalender = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [modal_static, setModal_static] = useState(false);
  const [allEvents, setAllEvents] = useState(events);

  const locales = {
    "en-US": enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const handleAllEvents = () => {
    setAllEvents([...allEvents, newEvent]);
    setModal_static(false);
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };

  return {
    events,
    localizer,
    locales,
    handleAllEvents,
    tog_static,
    modal_static,
    setModal_static,
    allEvents,
    setAllEvents,
    newEvent,
    setNewEvent,
  };
};

export default useFullCalender;
