
import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns DataLogs
 */


 export const getDataLogs = async (token,currentPage,pageSize,history) => {
    // return await (
      
      const res= await fetch(
        `${DIOM_BASED_URLS}/hyper-pay-logs?size=${pageSize}&page=${currentPage}`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      if (!res.ok) {
        if(res.status === 401){
          history.push("/login");
          throw new Error(resJson.error.message);
       
      }
        const resJson = await res.json();
        throw new Error(resJson.error.message);
      }
      const data = await res.json();
      
      return {
        data
      };
    // ).json();
  };


  // export const getDataLogsDetails = async (token,logsId) => {
  //   return await (
  //     await await fetch(
  //       `https://diom-prod-api.devbeans.io/api//hyper-pay-logs/${logsId}`,
  //       {
  //         method: "GET",
  //         redirect: "follow",
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     )
  //   ).json();
  // };