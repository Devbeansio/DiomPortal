import React from "react";
import { useQuery } from "react-query";
import { getAdminNotifications } from "../../APIS/notifications";

function UseNotifications() {
  const token = localStorage.getItem("Token");
  // *************
  const adminNotificationsdata = useQuery(["adminNotifications"], () =>
    getAdminNotifications(token)
  );
  const adminNotificationdata = adminNotificationsdata.data;
  // console.log("adminNotificationdata : ",adminNotificationdata?.data)

  // *************
  return { adminNotificationdata };
}

export default UseNotifications;
