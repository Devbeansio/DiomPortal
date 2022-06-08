import React from "react";
import { useQuery } from "react-query";
import { getAdminNotifications } from "../../APIS/notifications";
import { DIOM_BASED_URLS } from "../../config/url";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

function UseNotifications() {
  const token = localStorage.getItem("Token");
  const QueryClient = useQueryClient()




  const markAllReadFunc=()=>{

    fetch(`${DIOM_BASED_URLS}/admin-notifications`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        markRead: true,
      }),
    })
      .then((result3) => {
        QueryClient.invalidateQueries("adminNotifications");
       
      
      })
      .catch((error) => toast.error(" Something went wrong"));

  }

  const notificationSeenFunc = (e)=>{
   
   


    fetch(`${DIOM_BASED_URLS}/admin-notifications/${e.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        markRead: true,
      }),
    })
      .then((result3) => {
        QueryClient.invalidateQueries("adminNotifications");
       
      
      })
      .catch((error) => toast.error(" Something went wrong"));
  }


  // *************
  const adminNotificationsdata = useQuery(["adminNotifications"], () =>
    getAdminNotifications(token)
  );
  const adminNotificationdata = adminNotificationsdata.data;
 

  // *************




  return { adminNotificationdata,notificationSeenFunc,markAllReadFunc };
}

export default UseNotifications;
