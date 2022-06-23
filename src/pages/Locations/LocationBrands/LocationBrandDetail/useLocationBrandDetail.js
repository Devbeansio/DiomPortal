import { useState, useEffect } from "react";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getBranddDetail } from "../../../../APIS/locationBrands";
import { useQueryClient, useQuery } from "react-query";
import { getBranddDetaildropdown } from "../../../../APIS/locationBrands";
import { getBrandallocationdropdown } from "../../../../APIS/locationBrands";
import moment from "moment";
const useLocationBrandDetail = () => {
  const QueryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [locationBrandData, setLocationBrandData] = useState({});
  const [selectedMulti, setSelectedMulti] = useState();
  const [locationsbrandsDropDown, setLocationsbrandsDropDown] = useState([]);
  const [modal_static, setModal_static] = useState(false);
  const [modal_static1, setModal_static1] = useState(false);
  const [selectedvalue, setSelectedvalue] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const { id } = useParams();
  const token = localStorage.getItem("Token");
  const history = useHistory();

  const locationBrandnameonchange = (event) => {
    setLocationBrandData((prev) => ({ ...prev, name: event.target.value }));
  };

  const startTimeFunc = (e) => {
    // console.log("start time : ", e.target.value);
    setStartTime(e.target.value);
  };
  const endTimeFunc = (e) => {
    setEndTime(e.target.value);
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };
  const tog_static1 = () => {
    setModal_static1(!modal_static1);

    removeBodyCss();
  };

  const textareachange = (event) => {
    setLocationBrandData((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const handleMulti = (selected) => {
    if (selectedMulti.length < selected.length) {
      const lenthOFAdded = selected.length - 1;

      setSelectedvalue(selected[lenthOFAdded].value);

      if (selected[lenthOFAdded].locationCategoriesId === "") {
        fetch(
          `${DIOM_BASED_URLS}/admin-business-locations/${selected[lenthOFAdded].value}/category`,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain",
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              locationCategoryId: `${id}`,
            }),
          }
        )
          .then((result3) => {
            if (result3.status === 200) {
              toast.success("Updated Successfully");
              QueryClient.invalidateQueries("Brandlocations");
              QueryClient.invalidateQueries("BrandDetaildropdown");
              QueryClient.invalidateQueries("BrandDetail");
            } else if (result3.status === 204) {
              toast.success("Updated Successfully");
              QueryClient.invalidateQueries("Brandlocations");
              QueryClient.invalidateQueries("BrandDetaildropdown");
              QueryClient.invalidateQueries("BrandDetail");
            } else {
              toast.error(" Something went wrong");
            }
          })
          .catch((error) => console.log("error", error));
      } else {
        tog_static1();
      }
    } else if (selectedMulti.length > selected.length) {
      const mappedValuedSelected = selected.map((e) => {
        return e.value;
      });

      const filteredValue = selectedMulti.filter((e) => {
        return !mappedValuedSelected.includes(e.value);
      });

      fetch(
        `${DIOM_BASED_URLS}/admin-business-locations/${filteredValue[0].value}/category`,
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
            QueryClient.invalidateQueries("Brandlocations");
            QueryClient.invalidateQueries("BrandDetaildropdown");
            QueryClient.invalidateQueries("BrandDetail");
          } else if (result3.status === 204) {
            toast.success(" Successfullyn Deleted");
            QueryClient.invalidateQueries("Brandlocations");
            QueryClient.invalidateQueries("BrandDetaildropdown");
            QueryClient.invalidateQueries("BrandDetail");
          } else {
            toast.error(" Something went wrong");
          }
        })
        .catch((error) => toast.error(" Something went wrong"));
    }

    setSelectedMulti(selected);
  };

  const updateNameAndDescription = () => {
    fetch(`${DIOM_BASED_URLS}/admin-location-categories/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: `${locationBrandData.name}`,
        description: `${locationBrandData.description}`,
        // locationTitle: selectedMulti,
        startTime: `${startTime}`,
        endTime: `${endTime}`,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("Brandlocations");
          QueryClient.invalidateQueries("BrandDetaildropdown");
          QueryClient.invalidateQueries("BrandDetail");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("Brandlocations");
          QueryClient.invalidateQueries("BrandDetaildropdown");
          QueryClient.invalidateQueries("BrandDetail");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const postbrandLocations = () => {
    fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${selectedvalue}/category`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          locationCategoryId: `${id}`,
        }),
      }
    )
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("Brandlocations");
          QueryClient.invalidateQueries("BrandDetaildropdown");
          QueryClient.invalidateQueries("BrandDetail");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("Brandlocations");
          QueryClient.invalidateQueries("BrandDetaildropdown");
          QueryClient.invalidateQueries("BrandDetail");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something went wrong"));

    setModal_static1(false);
  };

  // *************
  const BrandDetailData = useQuery(["BrandDetail", id], () =>
    getBranddDetail(token, id)
  );
  const BrandDetailDailedData = BrandDetailData?.data?.data;
  // *************
  const getBrandDetail = async () => {
    setLocationBrandData(BrandDetailDailedData);
  };

  // *************
  const BrandDetailDropDownData = useQuery(["BrandDetaildropdown", id], () =>
    getBranddDetaildropdown(token, id)
  );
  const BrandDetailDropDownDailedData = BrandDetailDropDownData?.data?.data;
  // console.log(
  //   "BrandDetailDropDownDailedData : ",
  //   BrandDetailDropDownDailedData
  // );
  // *************
  const getBrandDetaildropdown = async () => {
    const matadata = BrandDetailDropDownDailedData.map((element) => {
      return { label: element.Name, value: element.id };
    });
    setSelectedMulti(matadata);
    setLocationsbrandsDropDown(matadata);
  };

  // *************
  const BrandlocationsDropDownData = useQuery(["Brandlocations", id], () =>
    getBrandallocationdropdown(token, id)
  );
  const BrandLocationsDailedData = BrandlocationsDropDownData?.data?.data;
  const isLoader = BrandlocationsDropDownData.isLoader;
  // *************
  const getBrandalllocationsdropdown = async () => {
    const matadata = BrandLocationsDailedData.map((element) => {
      return {
        label: element.Name,
        value: element.id,
        locationCategoriesId: element.locationCategoriesId,
      };
    });

    setLocationsbrandsDropDown(matadata);
  };

  useEffect(() => {
    (async () => {
      BrandDetailDailedData && (await getBrandDetail());
      BrandDetailDropDownDailedData && (await getBrandDetaildropdown());
      BrandLocationsDailedData && (await getBrandalllocationsdropdown());
    })();
  }, [
    BrandDetailDailedData,
    BrandDetailDropDownDailedData,
    BrandLocationsDailedData,
  ]);

  return {
    locationBrandData,
    setLocationBrandData,
    locationsbrandsDropDown,
    selectedMulti,
    setSelectedMulti,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    setSelectedvalue,
    selectedvalue,
    setLoaded,
    isLoader,
    loaded,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    tog_static,
    tog_static1,
    textareachange,
    postbrandLocations,
    locationBrandnameonchange,
    endTimeFunc,
    startTimeFunc,
    updateNameAndDescription,
    handleMulti,
  };
};
export default useLocationBrandDetail;
