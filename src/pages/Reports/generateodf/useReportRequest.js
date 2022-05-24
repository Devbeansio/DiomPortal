import React from 'react'
import {  useSnackbar } from "notistack";

const useReportRequest = () => {
  const { enqueueSnackbar } = useSnackbar();
    const reportTypeOptions = [
        { label: "Booking Report", value: 0 },
        { label: "User Report", value: 1 },
        { label: "User Ananlysis Report", value: 2 },
        { label: "Cancelled Bookings", value: 3 },
      ];

      const retryFunc=()=>{
        // alert(" i am retry presses")
        const message = 'Gathering Report Data';
        enqueueSnackbar(message, { 
          variant: 'success', 
      });
      // const message1 = 'Exporting Report ';
      //   enqueueSnackbar(message1, { 
      //     variant: 'success', 
      // });
      }
      const downloadFunc=()=>{
        const message1 = 'Your Report has started  to download';
        enqueueSnackbar(message1, { 
          variant: 'success', 
      });
      }
  return (
    {
        reportTypeOptions,
        retryFunc,
        downloadFunc,
    }
  )
}

export default useReportRequest