import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getResource } from "../../../APIS";

export const useInventory = () => {
  const token = localStorage.getItem("Token");

  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(["resource", id], () =>
    getResource(id, token)
  );
  const a = useQuery("resource", () => getResource(id, token));
  // console.log("AA", a);

  const [modal_static, setModal_static] = useState(false);

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const tog_static = () => {
    setModal_static(!modal_static);
    removeBodyCss();
  };

  return {
    isError,
    error,
    isLoading,
    resourcesDetails: data,
    modal_static,
    tog_static,
    setModal_static,
  };
};
