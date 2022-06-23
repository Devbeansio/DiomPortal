import React,{useState,useEffect} from 'react'
import { useQuery } from 'react-query';
import { getDataLogs } from '../../APIS/dataLogs';
import { DIOM_BASED_URLS } from '../../config/url';
import { useAllDataQuery, usePaginatedQuery } from '../../hooks/query';

const UseDataLogs = () => {
    const token = localStorage.getItem("Token");
    const [modal_static, setModal_static] = useState(false);
    const[logsDataDetail,setLogsDataDetail]=useState();
    const [dataDetailId,setDataDetailId]=useState()
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);
  const changeCurrentPage = (pageNum) => setCurrentPage(pageNum);


    const { data:logsDataa } = useAllDataQuery(
        ["GetDataLogsss",`${currentPage}` ,`${pageSize}`],
        () => getDataLogs(token,currentPage,pageSize)
      );
      const logsData = logsDataa?.data?.data;
      const hasNextPage = logsDataa?.data?.hasNextPage;
      const total = logsDataa?.data?.total;
      const hasPreviousPage = logsDataa?.data?.hasPreviousPage

      // console.log("hasNextPage : ",logsDataa.total )
    const removeBodyCss = () => {
      document.body.classList.add("no_padding");
    };
      const tog_static = () => {
        setModal_static(!modal_static);
    
        removeBodyCss();
      };


    


    const  logdetialsfunc = async(logId)=>{
        
// console.log("its ID ===>",logId)
//starts
try{
const response = await   fetch(
  `${DIOM_BASED_URLS}/hyper-pay-logs/${logId}`,
  {
    method: 'GET',
    headers:{
Authorization:"Bearer " + token,
Accept: "*/*",
// "Content-Type": "application/json",
"Access-Control-Allow-Origin": "*",
    }
  }
)

if (!response.ok) {
  // if(response.status === 401){
  //   setError(response.statusText)
  //   history.push("/login");
  // }
  throw new Error(response.statusText);
}
const result = await response.json();
const logsDataDeails = result
// console.log("logsDataDeails:::::::::::::logsDataDeails",logsDataDeails.hyperPayMessage)
       setLogsDataDetail(logsDataDeails)
       setModal_static(true)
} catch(error){ 
  console.log("error", error)
}
//ends




// setDataDetailId(logId)
      }


      const pageOptions = {
        sizePerPage: pageSize,
        totalSize: total ?? 0,
        custom: true,
      };

      const pagelengthnum = (e) => {
        if (e.target.value === "1") {
          setPageSize(10);
        } else if (e.target.value === "2") {
          setPageSize(30);
        } else if (e.target.value === "3") {
          setPageSize(50);
        }
      };
      const toggle = () => {
        setIsOpen(!isOpen);
      };
     


  return {
    logdetialsfunc,
    tog_static,
    logsData,
    modal_static, 
    setModal_static,
    logsDataDetail,
    pageOptions,
    pagelengthnum,
    currentPage,
    isOpen,
    pageSize,
    hasNextPage,

    changeCurrentPage,
    toggle
  }
   
  
}

export default UseDataLogs