import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { toast } from "react-toastify";
import { getCategoryDetails } from "../../../../APIS/categories";
import { useQueryClient, useQuery } from "react-query";
import { getResourcetypeDropdown } from "../../../../APIS/categories";
import { getCategoryDetaildropdown } from "../../../../APIS/categories";

const UseCategoryDetail = () => {
  const QueryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [selectedMulti, setSelectedMulti] = useState([]);
  const [modal_static, setModal_static] = useState(false);
  const [modal_static1, setModal_static1] = useState(false);
  const [categoryDetail, setCategoryDetail] = useState();
  const [categoryDropDown, setCategoryDropDown] = useState([]);
  const [categoryDetailname, setCategoryDetailname] = useState();
  const [selectedvalue, setSelectedvalue] = useState();
  const [loaded, setLoaded] = useState(false);
  const [selectedValueForDelte, setSelectedValueForDelte] = useState();

  const { id } = useParams();
  const token = localStorage.getItem("Token");

  const OnChangeCategory = (event) => {
    setCategoryDetail((prev) => event.target.value);
  };

  const tog_static1 = () => {
    setModal_static1(!modal_static1);

    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);

    removeBodyCss();
  };

  const updateNameAndDescription = () => {
    fetch(`${DIOM_BASED_URLS}/resource-type-categories/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: categoryDetail,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("resourceTypedropdown");
          QueryClient.invalidateQueries("categpryDetaildropdown");
          QueryClient.invalidateQueries("categpryDetails");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("resourceTypedropdown");
          QueryClient.invalidateQueries("categpryDetaildropdown");
          QueryClient.invalidateQueries("categpryDetails");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something went wrong"));
  };

  const handleMulti = (selected) => {
    if (selectedMulti.length < selected.length) {
      const lenthOFAdded = selected.length - 1;
      setSelectedValueForDelte(selected[lenthOFAdded].value);
      setSelectedvalue(selected[lenthOFAdded].value);
      if (selected[lenthOFAdded].locationCategoriesId === "") {
        fetch(
          `${DIOM_BASED_URLS}/resource-type-categories/${id}/resourcetypes`,
          {
            method: "PATCH",
            headers: {
              Accept: "application/json, text/plain",
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              resourceTypeId: selected[lenthOFAdded].value,
            }),
          }
        )
          .then((result3) => {
            if (result3.status === 200) {
              toast.success("Updated Successfully");
              QueryClient.invalidateQueries("resourceTypedropdown");
              QueryClient.invalidateQueries("categpryDetaildropdown");
              QueryClient.invalidateQueries("categpryDetails");
            } else if (result3.status === 204) {
              toast.success("Updated Successfully");
              QueryClient.invalidateQueries("resourceTypedropdown");
              QueryClient.invalidateQueries("categpryDetaildropdown");
              QueryClient.invalidateQueries("categpryDetails");
            } else {
              toast.error(" Something went wrong");
            }
            // setModal_static(false);
          })
          .catch((error) => console.log("error", error));
      } else {
        tog_static1();
      }
    } else if (selectedMulti.length > selected.length) {
      const mappedValuedSelected = selected.map((e) => {
        return e.value;
      });
      // const mappedValuedMultiSelected = selectedMulti.map((e) => {return ( e.value) })
      const filteredValue = selectedMulti.filter((e) => {
        return !mappedValuedSelected.includes(e.value);
      });

      fetch(
        `${DIOM_BASED_URLS}/resource-type-categories/${id}/resourcetypes/${filteredValue[0].value}`,
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
            QueryClient.invalidateQueries("resourceTypedropdown");
            QueryClient.invalidateQueries("categpryDetaildropdown");
            QueryClient.invalidateQueries("categpryDetails");
          } else if (result3.status === 204) {
            toast.success(" Successfullyn Deleted");
            QueryClient.invalidateQueries("resourceTypedropdown");
            QueryClient.invalidateQueries("categpryDetaildropdown");
            QueryClient.invalidateQueries("categpryDetails");
          } else {
            toast.error(" Something went wrong");
          }
        })
        .catch((error) => toast.error(" Something went wrong"));
    }

    setSelectedMulti(selected);
  };

  const FetchbrandLocations = () => {
    fetch(`${DIOM_BASED_URLS}/resource-type-categories/${id}/resourcetypes`, {
      method: "PATCH",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        resourceTypeId: selectedvalue,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("resourceTypedropdown");
          QueryClient.invalidateQueries("categpryDetaildropdown");
          QueryClient.invalidateQueries("categpryDetails");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
          QueryClient.invalidateQueries("resourceTypedropdown");
          QueryClient.invalidateQueries("categpryDetaildropdown");
          QueryClient.invalidateQueries("categpryDetails");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something went wrong"));

    setModal_static1(false);
  };

  // *************
  const categoryData = useQuery(["categpryDetails", id], () =>
    getCategoryDetails(token, id)
  );
  const categoryDailedData = categoryData.data;
  // *************
  const CategoryDetail = async () => {
    setCategoryDetailname(categoryDailedData.name);
    setCategoryDetail(categoryDailedData.name);
  };

  // *************
  const categorydropdownData = useQuery(["categpryDetaildropdown", id], () =>
    getCategoryDetaildropdown(token, id)
  );
  const categorydropdownDailedData = categorydropdownData.data;

  // *************
  const CategoryDetaildropdown = async () => {
    const matadata = categorydropdownDailedData.data.map((element) => {
      return {
        label: element.Name,
        value: element.id,
      };
    });
    setSelectedMulti(matadata);
    setCategoryDropDown(matadata);
  };

  // *************
  const resourceTypedropdownData = useQuery(["resourceTypedropdown", id], () =>
    getResourcetypeDropdown(token, id)
  );
  const resourceTypedropdownDailedData = resourceTypedropdownData.data;
  const isLoading = resourceTypedropdownData.isLoading;
  // *************
  const Resourcetypesdropdown = async () => {
    const matadata = resourceTypedropdownDailedData.data.map((element) => {
      return {
        label: element.Name,
        value: element.id,
        UniqueId: element.UniqueId,
      };
    });

    setCategoryDropDown(matadata);
  };

  useEffect(() => {
    (async () => {
      categoryDailedData && (await CategoryDetail());
      categorydropdownDailedData && (await CategoryDetaildropdown());
      resourceTypedropdownDailedData && (await Resourcetypesdropdown());
    })();
  }, [
    categoryDailedData,
    categorydropdownDailedData,
    resourceTypedropdownDailedData,
  ]);

  return {
    error,
    setError,
    selectedMulti,
    setSelectedMulti,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    isLoading,
    categoryDetail,
    setCategoryDetail,
    categoryDropDown,
    setCategoryDropDown,
    categoryDetailname,
    setCategoryDetailname,
    selectedvalue,
    setSelectedvalue,
    loaded,
    setLoaded,
    selectedValueForDelte,
    setSelectedValueForDelte,
    updateNameAndDescription,
    OnChangeCategory,
    handleMulti,
    tog_static1,
    tog_static,
    FetchbrandLocations,
    CategoryDetail,
    CategoryDetaildropdown,
    Resourcetypesdropdown,
  };
};

export default UseCategoryDetail;
