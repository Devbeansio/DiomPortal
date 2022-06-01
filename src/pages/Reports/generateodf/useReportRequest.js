import React,{useState,useEffect} from 'react'
import {  useSnackbar } from "notistack";
import { usePaginatedQuery } from '../../../hooks/query';
import { getNewreports, getPastreports } from '../../../APIS/reports';
import { QueryClient } from 'react-query';
import { DIOM_BASED_URLS } from '../../../config/url';

const useReportRequest = () => {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("Token");
  const [currentPage, setCurrentPage] = useState(1);
  const [newOldReportsData,setNewOldReportsData] = useState([])
  const queryClient =new QueryClient();
  const[postFilter,setPostFilter]=useState(false)
  const[selectedReportType,setSelectedReportType]=useState("USER_REPORTS")
    const reportTypeOptions = [
      { label: "Booking Report", value: "BOOKING_REPORTS" },
      { label: "User Report", value: "USER_REPORTS" },
      { label: "User Ananlysis Report", value: "USER_ANALYSIS_REPORTS" },
      { label: "Cancelled Bookings", value: "CANCELLED_BOOKINGS_REPORTS" },
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
      const downloadFunc=(rowId)=>{
        
        const message1 = 'Your Report has started  to download';
        enqueueSnackbar(message1, { 
          variant: 'success', 
      });
////////////
fetch(`${DIOM_BASED_URLS}/reports/commands`, {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + token,
  },
  body: JSON.stringify({
    "id": `${rowId}`,
    "command":"MARK_READ"
  }),
})
  .then((result3) => {
   
     
    
  })
  .catch((error) => 
  toast.error(" Something went wrong"));

////////////



      }

      const reportTyperequestFunc = (e)=>{
        setPostFilter(true)
        setSelectedReportType(e.value);
  
      }

      
  


      
// *************

const {
  data: { data: pastReportsDataa, hasNextPage, hasPreviousPage, total,refetch:pastReportsRefteh },
  isLoading,
} = usePaginatedQuery(
  ["pastReprtssData",`${selectedReportType}`],
  () =>
  getPastreports(token,selectedReportType,postFilter)

);



// *************
// *************
const {
  data: { data: newReportsDataa},
  
} = usePaginatedQuery(
  ["newReportssData",,`${selectedReportType}`],
  () =>
  getNewreports(token,selectedReportType,postFilter)
);

// const newReportsDataa = newReportsData.data;
// console.log("New reports : ",newReportsDataa)

// *************
// useEffect(
//   // FOR PRE-FETCHING NEXT PAGE
//   async () => {
//      await getPastreports(token,selectedReportType,postFilter);
    
//   },
//   [selectedReportType]
// );


  return (
    {
        reportTypeOptions,
        retryFunc,
        downloadFunc,
        pastReportsDataa,
        newReportsDataa,
        newOldReportsData,setNewOldReportsData,
        isLoading,
        reportTyperequestFunc
    }
  )
}

export default useReportRequest