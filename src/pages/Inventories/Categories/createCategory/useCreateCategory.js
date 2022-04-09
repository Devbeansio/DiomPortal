import React, { useState } from "react";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const UseCreateCategory = () => {
  const [error] = useState(null);
  const [selectedMulti] = useState([]);
  const [modal_static, setModal_static] = useState(false);
  const [modal_static1, setModal_static1] = useState(false);
  const [categoryDetail, setCategoryDetail] = useState({});
  const [categoryDetailname] = useState();
  const [selectedvalue] = useState({});

  const { id } = useParams();
  const token = localStorage.getItem("Token");

  const updateNameAndDescription = () => {
    fetch(`${DIOM_BASED_URLS}/resource-type-categories`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: categoryDetail.name,

        locationTitle: selectedMulti,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
        } else {
          toast.error(" Something is wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something is wrong"));
  };

  const categoryNamechangefunc = (event) => {
    setCategoryDetail((prev) => ({ ...prev, name: event.target.value }));
  };

  const FetchbrandLocations = () => {
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
        } else if (result3.status === 204) {
          toast.success("Updated Successfully");
        } else {
          toast.error(" Something is wrong");
        }
        setModal_static(false);
      })
      .catch((error) => toast.error(" Something is wrong"));

    setModal_static1(false);
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

  return {
    error,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    categoryDetail,
    setCategoryDetail,
    categoryDetailname,
    selectedvalue,
    updateNameAndDescription,
    categoryNamechangefunc,
    FetchbrandLocations,
    tog_static,
    tog_static1,
    categoryDetail,
    selectedMulti,
  };
};
