import React,{useState} from "react";
import { useQuery } from "react-query";
import { getAdminNotifications } from "../../APIS/notifications";
import { DIOM_BASED_URLS } from "../../config/url";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

function UseNotifications() {
  const[pageNumber,setPageNumber] = useState(1);
  const[adminNotificationdta,setadminNotificationdta]=useState()
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
  const fetchMoreData=()=>{

    setPageNumber(pageNumber + 1)
  
  }
  const adminNotificationsdata = useQuery(["adminNotifications",pageNumber], () =>
    getAdminNotifications(token,pageNumber),{refetchInterval:15000}

  );
  // const adminNotificationsdata = adminNotificationdta?adminNotificationdta.concat(adminNotificationsdta):adminNotificationdta
  // setadminNotificationdta(adminNotificationsdta)
  // console.log("adminNotificationsdata : ",adminNotificationsdata)
 
  const hasMore = adminNotificationsdata?.data?.hasNextPage
  const adminNotificationdata = adminNotificationsdata?.data?.data;
 

  // *************




  return { adminNotificationdata,notificationSeenFunc,markAllReadFunc ,hasMore,fetchMoreData};
}

export default UseNotifications;
