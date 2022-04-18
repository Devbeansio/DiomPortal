import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { useParams } from "react-router-dom";
import { getFloorPlansNames } from "../../../../APIS/floorplans";
import { useQuery } from "react-query";

const useFloorPlanDetail = () => {
  const [error, setError] = useState(null);
  const [modal_static, setModal_static] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectLocationName, setSelectLocationName] = useState("");
  const [selectLocationNameById, setSelectLocationNameById] = useState("");
  const [selectLocationNamefloorname, setSelectLocationNamefloorname] =
    useState("");
  const [loaded, setLoaded] = useState(false);

  const handleSelectGroup = (selectedGroup) => {
    //  console.log(selectedGroup)
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

  // *************
  const floorPlanData = useQuery(["floorplanname", floorid], () =>
    getFloorPlansNames(token, floorid)
  );
  const floorPlanNameData = floorPlanData.data;
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
    getlocations,
  };
};

export default useFloorPlanDetail;
