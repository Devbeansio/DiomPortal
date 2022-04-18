import { useState } from "react";
import { DIOM_BASED_URLS } from "../../../../config/url";
import { toast } from "react-toastify";

export const useCreateLocationBrand = () => {
  const [error, setError] = useState(null);
  const [modal_static, setModal_static] = useState(false);
  const [nameCreate, setNameCreate] = useState("");
  const [descriptionCreate, setDescriptionCreate] = useState("");

  const token = localStorage.getItem("Token");

  const LocationBrandNameOnChange = (event) => {
    setNameCreate(event.target.value);
  };

  const textareachange = (event) => {
    setDescriptionCreate(event.target.value);
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);

    removeBodyCss();
  };

  const updateNameAndDescription = () => {
    fetch(`${DIOM_BASED_URLS}/admin-location-categories`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: nameCreate,
        description: descriptionCreate,
      }),
    })
      .then((result3) => {
        if (result3.status === 200) {
          toast.success("Updated Successfully");
        } else {
          toast.error(" Something went wrong");
        }
        setModal_static(false);
      })
      .catch((error) => setError(error.message), console.log("error", error));
  };

  return {
    error,
    setError,
    modal_static,
    setModal_static,
    nameCreate,
    setNameCreate,
    nameCreate,
    descriptionCreate,
    setDescriptionCreate,
    LocationBrandNameOnChange,
    textareachange,
    tog_static,
    updateNameAndDescription,
  };
};
