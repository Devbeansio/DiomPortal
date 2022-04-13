import { useState, useEffect } from "react";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Search } from "react-bootstrap-table2-toolkit";
import { useQuery } from "react-query";
import {
  getHourlyDayRate,
  getlocationsresourceTypes,
  getResourcetypeResources,
  GetLocationfocusdest,
  getResourceResourceType,
} from "../../../../APIS/resourceType";
const UseResourceTypeDetail = () => {
  const [error, setError] = useState(null);
  const [resourceDetailes, setResourceDetailes] = useState([]);
  const [resourceTypes, setResourceTypes] = useState([]);
  const [locationEditTag, setLocationEditTag] = useState("");
  const [modal_static, setModal_static] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [resourceTypeAddMoreBlock, setResourceTypeAddMoreBlock] =
    useState(false);
  const [businesName, setBusinesName] = useState([]);
  const [diomLocation, setDiomLocation] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [locationlabel, setLocationlabel] = useState([]);
  const [vat, setVat] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [locationImgId, setLocationImgId] = useState("");

  const history = useHistory();
  const { SearchBar } = Search;
  const token = localStorage.getItem("Token");
  const { id, resourceTypeKey } = useParams();

  const handellocationeditfunc = (e, e_id) => {
    setLocationEditTag(e);
    setLocationImgId(e_id);
  };
  const locationTagEditButtonfunc = () => {
    setEnableEdit(true);
  };

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

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };

  const descriptionvaulefunc = (event) => {
    setResourceDetailes((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const perminutpricfunc = (event) => {
    setResourceDetailes((prev) => ({
      ...prev,
      perMinuteMinutePrice: event.target.value,
    }));
  };
  const pageOptions = {
    sizePerPage: 10,
    totalSize: resourceTypes.length,
    custom: true,
  };

  const uploadFile = () => {
    if (selectedFiles <= 1 || locationlabel.length <= 1) {
      return toast.error(" Please fill all fields");
    } else {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("Token")}`
      );

      var formdata = new FormData();
      formdata.append("file", selectedFiles[0], selectedFiles[0].name);
      formdata.append("locationName", locationlabel);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}/uploadimages`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result[0].statusCode === 200) {
            toast.success("Image uplaoded");
          } else if (result[0].statusCode === 204) {
            toast.success("Image uplaoded");
          } else {
            toast.error(" Something is wrong");
          }
          setModal_static(false);
          setResourceTypeAddMoreBlock(false);
          getallresources();
        })
        .catch((error) => console.log("error", error));
    }
  };

  const locationedittagfunc = () => {
    fetch(
      `${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}/${locationImgId}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          locationName: locationEditTag,
        }),
      }
    )
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          getallresources();
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          getallresources();
        } else {
          toast.error(" Something is wrong");
        }
        setEnableEdit(false);
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something is wrong"));
  };

  const updatelocationbranddetails = () => {
    fetch(
      `${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}`,

      {
        method: "PATCH",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          isAvailableInWnpl: resourceDetailes.isAvailableInWnpl,
          description: resourceDetailes.description,
          perMinuteMinutePrice: resourceDetailes.perMinuteMinutePrice,
        }),
      }
    )
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Successfully Updated");
        } else if (result3.status === 204) {
          toast.success("Successfully Updated");
        } else {
          toast.error(" Something is wrong");
        }

        setModal_static(false);
        // setLoaded(false);
      })
      .catch((error) => console.log("error", error));
  };

  const imagedeletedfunc = (_id) => {
    fetch(`${DIOM_BASED_URLS}/admin-resource-types-inventories/${id}/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    })
      .then((result3) => {
        toast.success("Deleted Successfully");
        getallresources();
      })

      .catch((error) => toast.error(" Something is wrong"));
  };

  const getresourcetypesdata = async () => {
    // try {
    //   const response = await fetch(
    //     `${DIOM_BASED_URLS}/admin-resources-inventories?filter={"limit": 10, "skip":0, "where" : { "ResourceTypeId" : ${id}}}`,
    //     {
    //       method: "GET",
    //       redirect: "follow",
    //       headers: {
    //         Authorization: "Bearer " + token,
    //       },
    //     }
    //   );
    //   const result3 = await response.json();
    //   const mapdata = result3.map((element, index) => ({
    //     ID: index + 1,
    //     _id: element.id,
    //     ResourceType: element.Name,
    //     ResourceTypeNames: element.ResourceTypeName,
    //   }));
    //   setResourceTypes(mapdata);
    // } catch (error) {
    //   setError(error.message);
    //   console.log("error", error);
    // }
  };

  // *************
  const resourceResourcetypesdata = useQuery(
    ["resourceResourcetypesdata", id],
    () => getResourceResourceType(token, id)
  );
  const resourceResourcetypedata = resourceResourcetypesdata.data;
  // *************

  const getResourceByResourceType = async (id, token) => {
    // const response = await fetch(
    //   `${DIOM_BASED_URLS}/admin-resources-inventories?filter={"limit": 10, "skip":0, "where" : { "ResourceTypeId" : ${id}}}`,
    //   {
    //     method: "GET",
    //     redirect: "follow",

    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //   }
    // );
    return resourceResourcetypedata.json();
  };

  // *************
  const Locationfocusdest = useQuery(["Locationfocusdest", id], () =>
    GetLocationfocusdest(token, resourceTypeKey)
  );
  const Locationfocusdestdata = Locationfocusdest.data;
  // *************
  const GetLocationWithFocusDeskfunc = async () => {
    setBusinesName(Locationfocusdestdata.locations);
  };

  // *************
  const resourcetypeResources = useQuery(["resourcetypeResources", id], () =>
    getResourcetypeResources(token, id)
  );
  const resourcetypeResourcesdata = resourcetypeResources.data;
  // *************
  const getallresources = async () => {
    setResourceDetailes(resourcetypeResourcesdata);
  };

  // *************
  const getHourlydayrate = useQuery(["gethourlydayrate", id], () =>
    getHourlyDayRate(token, id)
  );
  const getHourlydayrateData = getHourlydayrate.data;
  // *************
  const gethourlyDayRateFunc = async () => {
    //   if (!response.ok) {
    //     if (response.status === 401) {
    //       setError(response.statusText);
    //       history.push("/login");
    //     }

    //     throw new Error(response.statusText);

    const Price = getHourlydayrateData.data.resourceTypePrices.map(
      (element, index) => ({
        name: element.Name,
        price: element.Price,
      })
    );
    setPrices(Price);

    const Vat = getHourlydayrateData.data.vatPrice.map((element, index) => ({
      Vat: element.Rate,
    }));

    setVat(Vat);
  };

  // *************
  const locationsresourceTypes = useQuery(["locationsresourceTypes", id], () =>
    getlocationsresourceTypes(token, id)
  );
  const locationsresourceTypesdata = locationsresourceTypes.data;
  // *************
  const getalllocationsfunc = async () => {
    const mapdata = locationsresourceTypesdata.map((element) => ({
      value: element.id,
      label: element.Name,
    }));

    setDiomLocation([
      {
        label: "--All Locations",
        options: [
          // {
          //   value: "All",
          //   label: "All",
          // },
          ...mapdata,
        ],
      },
    ]);
  };

  const { status, isLoading, data } = useQuery("resources", async () => {
    const resourcesdata = data;
    const response = await fetch(
      `${DIOM_BASED_URLS}/admin-resources-inventories?filter={"limit": 10, "skip":0, "where" : { "ResourceTypeId" : ${id}}}`,
      {
        method: "GET",
        redirect: "follow",

        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.json();
  });

  useEffect(() => {
    (async () => {
      resourcetypeResourcesdata && (await getallresources());
      await getresourcetypesdata();
      locationsresourceTypesdata && (await getalllocationsfunc());
      Locationfocusdestdata && (await GetLocationWithFocusDeskfunc());
      getHourlydayrateData && (await gethourlyDayRateFunc());
    })();
  }, [
    Locationfocusdestdata,
    resourcetypeResourcesdata,
    getHourlydayrateData,
    locationsresourceTypesdata,
  ]);

  return {
    isLoading,
    data,
    error,
    setError,
    resourceDetailes,
    setResourceDetailes,
    resourceTypes,
    setResourceTypes,
    locationEditTag,
    setLocationEditTag,
    modal_static,
    setModal_static,
    loaded,
    setLoaded,
    resourceTypeAddMoreBlock,
    setResourceTypeAddMoreBlock,
    businesName,
    setBusinesName,
    diomLocation,
    setDiomLocation,
    prices,
    setPrices,
    selectedFiles,
    setSelectedFiles,
    locationlabel,
    setLocationlabel,
    vat,
    setVat,
    enableEdit,
    setEnableEdit,
    locationImgId,
    setLocationImgId,
    getResourceByResourceType,
    handellocationeditfunc,
    locationTagEditButtonfunc,
    uploadFile,
    handleAcceptedFiles,
    tog_static,
    descriptionvaulefunc,
    perminutpricfunc,
    getresourcetypesdata,
    GetLocationWithFocusDeskfunc,
    getallresources,
    updatelocationbranddetails,
    gethourlyDayRateFunc,
    imagedeletedfunc,
    getalllocationsfunc,
    locationedittagfunc,
    pageOptions,
  };
};
export default UseResourceTypeDetail;