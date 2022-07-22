import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DIOM_BASED_URLS } from "../../../config/url";
import { getdiomlocationBrand, getLocation } from "../../../APIS/locations";
import { useQueryClient, useQuery } from "react-query";

const UseLocationDetailed = () => {
  let history = useHistory();
  const QueryClient = useQueryClient();
  const [modal_static, setModal_static] = useState(false);
  const [locationstite, setLocationstitle] = useState({});
  const [amentiesImgUrl, setAmentiesImgUrl] = useState({});
  const [nearByImages, setNearByImages] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFiles5, setSelectedFiles5] = useState([]);
  const [selectedFiles2, setSelectedFiles2] = useState([]);
  const [simple_color, setSimple_color] = useState([]);
  const [emenitiesTitle, setEmenitiesTitle] = useState([]);
  const [locationAddMoreBlock, setLocationAddMoreBlock] = useState(false);
  const [nearbyAddMoreBlock, setNearbyAddMoreBlock] = useState(false);
  const [amenitiesAddMoreBlock, setAmenitiesAddMoreBlock] = useState(false);
  const [editeminitsbtn, setEditeminitsbtn] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [diomBrand, setDiomBrand] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [locationEditTag, setLocationEditTag] = useState("");
  const [locationImgId, setLocationImgId] = useState("");
  const [emenitiesstag, setEmenitiesstag] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);
  const [enableementiesEdit, setEnableementiesEdit] = useState(false);
  const [imentiesImgId, setImentiesImgId] = useState("");

  const { id } = useParams();
  const token = localStorage.getItem("Token");

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

  const formatBytes = (bytes, decimals = 1) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    // const k = 100;
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
  const handleAcceptedFiles5 = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        htmlFormattedSize: formatBytes(file.size),
      })
    );

    setSelectedFiles5(files);
  };

  const handleAcceptedFiles2 = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setSelectedFiles2(files);
  };

  const emenitiesedittagfunc = () => {
    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${id}/amenities/${imentiesImgId}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          locationAmenityTitle: `${emenitiesstag}`,
        }),
      }
    )
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
          getlocations();
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
          getlocations();
        } else {
          toast.error(" Something went wrong");
        }
        setEnableEdit(false);
        setModal_static(false);
        // getdiomBrandfunc()
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const locationTagEditButtonfunc = () => {
    setEnableEdit(true);
  };
  const emenitiesTagEditButtonfunc = () => {
    setEnableementiesEdit(true);
  };

  const locationedittagfunc = () => {
    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${id}/${locationImgId}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          locationTag: locationEditTag,
        }),
      }
    )
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
          QueryClient.invalidateQueries("locationbrands");
          getlocations();
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
          QueryClient.invalidateQueries("locationbrands");
          getlocations();
        } else {
          toast.error(" Something went wrong");
        }

        setEnableEdit(false);
        setModal_static(false);

        // getdiomBrandfunc()
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const uploadfilelocationfunc = async () => {
    if (selectedFiles <= 1 || selectedLocation.length <= 1) {
      return toast.error(" Please fill all fields");
    } else {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("Token")}`
      );

      var formdata = new FormData();
      formdata.append("file", selectedFiles[0], selectedFiles[0].preview);
      formdata.append("locationTag", selectedLocation);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      await fetch(
        `${DIOM_BASED_URLS}/admin-business-locations/${id}/uploadimages`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setLocationstitle({
            ...locationstite,
            images: [...locationstite.images, result[0].data],
          });

          if (result[0].statusCode === 200) {
            toast.success("Image uplaoded", result[0].statusCode);

            QueryClient.invalidateQueries("locations");
            QueryClient.invalidateQueries("locationbrands");
            setSelectedFiles([]);
          } else if (result[0].statusCode === 204) {
            toast.success("Image uplaoded", result[0].statusCode);

            QueryClient.invalidateQueries("locations");
            QueryClient.invalidateQueries("locationbrands");
            setSelectedFiles([]);
          } else {
            toast.error(" Something went wrong");
          }

          setModal_static(false);
          setLocationAddMoreBlock(false);
          getlocations();
        })
        .catch((error) => toast.error(" Something went wrong"));
    }
  };

  const uploadfilenearbyfunc = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("Token")}`
    );

    var formdata = new FormData();
    formdata.append("file", selectedFiles5[0], selectedFiles5[0].preview);
    // formdata.append("facilityName", selectedLocation);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${id}/nearbyfacilities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setNearByImages({
          ...nearByImages,
          images: [...nearByImages.nearByFacilities, result[0].data],
        });

        if (result[0].statusCode === 200) {
          toast.success("Image uplaoded", result[0].statusCode);
          QueryClient.invalidateQueries("locations");
          setSelectedFiles5([]);
        } else if (result[0].statusCode === 204) {
          toast.success("Image uplaoded", result[0].statusCode);
          QueryClient.invalidateQueries("locations");
          setSelectedFiles5([]);
        } else {
          toast.error(" Something went wrong");
        }

        setModal_static(false);
        setNearbyAddMoreBlock(false);
        getlocations();
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const uploadfileAmentiesfunc = () => {
    if (selectedFiles2 <= 1 || emenitiesTitle.length <= 1) {
      return toast.error(" Please fill all fields");
    } else {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("Token")}`
      );

      var formdata = new FormData();
      formdata.append("file", selectedFiles2[0], selectedFiles2[0].preview);
      formdata.append("title", emenitiesTitle);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `${DIOM_BASED_URLS}/admin-business-locations/${id}/amenityimage`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setAmentiesImgUrl({
            ...amentiesImgUrl,
            amenities: [...amentiesImgUrl.amenities, result[0].data],
          });

          if (result[0].statusCode === 200) {
            QueryClient.invalidateQueries("locations");
            toast.success("Image uplaoded", {
              toastId: "Success1",
            });
            setSelectedFiles2([]);
          } else if (result[0].statusCode === 204) {
            QueryClient.invalidateQueries("locations");
            toast.success("Image uplaoded", {
              toastId: "Success1",
            });
            setSelectedFiles2([]);
          } else {
            toast.error(" Something went wrong");
          }
          setAmenitiesAddMoreBlock(false);
          setModal_static(false);
          getlocations();
        })
        .catch((error) => alert("request not responed"));
    }
  };

  const updateLocationfunction = () => {
    fetch(`${DIOM_BASED_URLS}/admin-business-locations/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        description: locationstite.description,
        city: locationstite.city,
        state: locationstite.state,
        visibility: locationstite.visibility,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("locations");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => console.log("error", error));
  };

  const imagedeletedfunc = (_id) => {
    fetch(`${DIOM_BASED_URLS}/admin-business-locations/${id}/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    })
      .then((result3) => {
        toast.success("Deleted Successfully");
        QueryClient.invalidateQueries("locationbrands");
        QueryClient.invalidateQueries("locations");
        getlocations();
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const nearbyimagedeletedfunc = (_id) => {
    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${id}/nearbyfacilities/${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((result3) => {
        toast.success("Deleted Successfully");
        QueryClient.invalidateQueries("locations");
        getlocations();
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const imagedeletedAmentiesfunc = (_id) => {
    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations//${id}/amenities/${_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((result3) => {
        toast.success("Deleted Successfully");
        QueryClient.invalidateQueries("locations");
        getlocations();
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const handellocationeditfunc = (e, e_id) => {
    setLocationEditTag(e);
    setLocationImgId(e_id);
  };

  const emenitiesEditfunc = (event, e_id) => {
    // setEmenitiesstag((prev) => ({ ...prev, title: event.target.value }));
    setEmenitiesstag(event.target.value);

    setImentiesImgId(e_id);
  };

  const handellocationfunc = (e) => {
    setSelectedLocation(e);
  };

  const districtfunc = (e) => {
    setLocationstitle((prev) => ({
      ...prev,
      state: e.target.value,
    }));
  };
  const cityfunc = (e) => {
    setLocationstitle((prev) => ({
      ...prev,
      city: e.target.value,
    }));
  };

  const textareachange = (e) => {
    setLocationstitle((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };

  const getlocationStatusFunc = async (e) => {
    if (e == true) {
      const response = await fetch(
        `${DIOM_BASED_URLS}/admin-business-locations/active/${id}`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      } else {
        toast.success("Location Actived");
      }
    } else if (e == false) {
      fetch(`${DIOM_BASED_URLS}/admin-business-locations/${id}`, {
        method: "DELETE",
        redirect: "follow",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          toast.success("Location Archived");
        })
        .catch((error) => toast.error(" Something went wrong"));
    }

    setLocationstitle({
      ...setLocationstitle,
      visibility: !locationstite.visibility,
    });
  };

  // *************
  const Locationdata = useQuery(["locations", id], () =>
    getLocation(token, id,history)
  );
  const getLocationdata = Locationdata?.data?.data;
  const isLoading = Locationdata?.data;
  // *************
  const getlocations = async () => {
    setLocationstitle(getLocationdata);
    setAmentiesImgUrl(getLocationdata);
    setNearByImages(getLocationdata);
  };

  // *************
  const diomlocationBrandddata = useQuery(["locationbrands", id], () =>
    getdiomlocationBrand(token,history)
  );
  const diomlocationBrandata = diomlocationBrandddata?.data?.data;

  // *************

  const getdiomBrandfunc = async () => {
    const mapdata = diomlocationBrandata?.map((element) => ({
      value: element.id,
      label: element.name,
    }));
    setDiomBrand([
      {
        label: "--All Tags",
        options: mapdata,
      },
    ]);
  };

  useEffect(() => {
    (async () => {
      getLocationdata && (await getlocations());
      diomlocationBrandata && (await getdiomBrandfunc());
    })();
  }, [getLocationdata, diomlocationBrandata]);

  return {
    modal_static,
    setModal_static,
    locationstite,
    setLocationstitle,
    amentiesImgUrl,
    setAmentiesImgUrl,
    nearByImages,
    setNearByImages,
    selectedFiles,
    setSelectedFiles,
    selectedFiles5,
    setSelectedFiles5,
    selectedFiles2,
    setSelectedFiles2,
    simple_color,
    setSimple_color,
    emenitiesTitle,
    setEmenitiesTitle,
    locationAddMoreBlock,
    setLocationAddMoreBlock,
    nearbyAddMoreBlock,
    setNearbyAddMoreBlock,
    amenitiesAddMoreBlock,
    setAmenitiesAddMoreBlock,
    editeminitsbtn,
    setEditeminitsbtn,
    selectedLocation,
    setSelectedLocation,
    diomBrand,
    setDiomBrand,
    loaded,
    setLoaded,
    getLocationdata,
    isLoading,
    locationEditTag,
    setLocationEditTag,
    locationImgId,
    setLocationImgId,
    emenitiesstag,
    setEmenitiesstag,
    enableEdit,
    setEnableEdit,
    enableementiesEdit,
    setEnableementiesEdit,
    imentiesImgId,
    setImentiesImgId,
    Offsymbol,
    OnSymbol,
    handleAcceptedFiles,
    handleAcceptedFiles5,
    handleAcceptedFiles2,
    emenitiesedittagfunc,
    locationTagEditButtonfunc,
    emenitiesTagEditButtonfunc,
    locationedittagfunc,
    uploadfilelocationfunc,
    uploadfilenearbyfunc,
    uploadfileAmentiesfunc,
    handellocationeditfunc,
    emenitiesEditfunc,
    handellocationfunc,
    districtfunc,
    cityfunc,
    textareachange,
    tog_static,
    getlocationStatusFunc,
    getlocations,
    getdiomBrandfunc,
    updateLocationfunction,
    imagedeletedfunc,
    nearbyimagedeletedfunc,
    imagedeletedAmentiesfunc,
  };
};

export default UseLocationDetailed;
