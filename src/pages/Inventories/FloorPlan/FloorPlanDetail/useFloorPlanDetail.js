import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { useParams } from "react-router-dom";
import { getFloorPlansNames } from "../../../../APIS/floorplans";
import { useQueryClient, useQuery } from "react-query";

const useFloorPlanDetail = () => {
  const QueryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [modal_static, setModal_static] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectLocationName, setSelectLocationName] = useState("");
  const [selectLocationNameById, setSelectLocationNameById] = useState("");
  const [modal_static1, setModal_static1] = useState(false);
  const [selectLocationNamefloorname, setSelectLocationNamefloorname] =
    useState("");
  const [loaded, setLoaded] = useState(false);
  const handleSelectGroup = (selectedGroup) => {
    setSelectedLocation(selectedGroup);
    setSelectLocationName(selectedGroup.label);
  };
  const { floorid } = useParams();
  const history = useHistory();
  const token = localStorage.getItem("Token");


  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        htmlFormattedSize: formatBytes(file.size),
      })
    );

    setSelectedFiles(files);
  };

  const tog_static1 = () => {
    setModal_static1(!modal_static1);

    removeBodyCss();
  };


  function Offsymbol(text) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {text}
      </div>
    );
  }

  function OnSymbol(text) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {text}
      </div>
    );
  }

  const getFloorPlansStatusFunc = (e,_id)=>{
// console.log("hey i am here ===>> ",e, floorid,_id )

fetch(
  `${DIOM_BASED_URLS}/admin-business-locations/${floorid}/floorpans/${_id}`,
  {
    method: "PATCH",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      visibility: e,
    }),
  }
)
  .then((result3) => {
    if (result3.status === 200) {
      toast.success("Updated Successfully");
      QueryClient.invalidateQueries("floorplanname");
    }
    else if (result3.status === 204){
      toast.success("Updated Successfully");
      QueryClient.invalidateQueries("floorplanname");
    }
    else {
      toast.error(" Something went wrong");
    }
  })
  .catch((error) => toast.error(" Something went wrong"));

  }

  const namefunc = (e) => {
    setSelectLocationNameById((prev) => ({
      ...prev,
      Name: e.target.value,
    }));
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };

  const uploadFile = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("Token")}`
    );

    var formdata = new FormData();
    formdata.append("file", selectedFiles[0], selectedFiles[0].name);
    formdata.append("floorplanName", selectLocationNameById.Name);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${selectedLocation.value}/floorpans`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result[0].statusCode === 200) {
          toast.success("Floorplans Added Succufully");
        } else if (result[0].statusCode === 204) {
          toast.success("Floorplans Added Succufully");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch(
        (error) => setError(error.message),
        toast.error(" Something went wrong")
      );
  };



const deleteFloorPlansFunc = ()=>{
  


  fetch(
    `${DIOM_BASED_URLS}/admin-business-locations/${floorid}/floorpans/selectLocationNamefloorname[0]._id`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({}),
    }
  )
    .then((result3) => {
      if (result3.status === 200) {
        toast.success(" Successfully Deleted");

        setModal_static1(false)
        QueryClient.invalidateQueries("floorplanname");
       
      } else if (result3.status === 204) {
        toast.success(" Successfullyn Deleted");
        setModal_static1(false)
        QueryClient.invalidateQueries("floorplanname");
      
      } else {
        toast.error(" Something went wrong");
        setModal_static1(false)
        QueryClient.invalidateQueries("floorplanname");
      }
    })
    .catch((error) => toast.error(" Something went wrong"));
}




  // ************* 
  const floorPlanData = useQuery(["floorplanname", floorid], () =>
    getFloorPlansNames(token, floorid)
  );
  const floorPlanNameData = floorPlanData?.data?.data;
  // *************
  const getlocations = async () => {
    setSelectLocationNameById(floorPlanNameData);
    const floornames = floorPlanNameData.floorPlans.map((e) => ({
      _id: e._id,
      imageUrl: e.imageUrl,
    }));
    setSelectLocationNamefloorname(floornames);
  };

  useEffect(() => {
    (async () => {
      floorPlanNameData && (await getlocations());
    })();
  }, [floorPlanNameData]);

  return {
    error,
    setError,
    modal_static,
    setModal_static,
    selectedFiles,
    setSelectedFiles,
    selectedLocation,
    setSelectedLocation,
    selectLocationName,
    setSelectLocationName,
    selectLocationNameById,
    setSelectLocationNameById,
    selectLocationNamefloorname,
    setSelectLocationNamefloorname,
    loaded,
    setLoaded,
    handleSelectGroup,
    handleAcceptedFiles,
    namefunc,
    uploadFile,
    tog_static,
    Offsymbol,
    OnSymbol,
    deleteFloorPlansFunc,
    getlocations,
    modal_static1,
    setModal_static1,
    getFloorPlansStatusFunc,
    tog_static1,
  };
};

export default useFloorPlanDetail;
