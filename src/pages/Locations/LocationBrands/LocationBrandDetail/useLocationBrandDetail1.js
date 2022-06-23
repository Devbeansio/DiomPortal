import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "react-query";
// import { getLocationBrand } from "../../../../APIS/locationBrands";
import { useParams } from "react-router-dom";
import { getBrandAllLocations } from "../../../../APIS/locationBrands";
import { getBrandDetailDropdown } from "../../../../APIS/locationBrands";
import { DIOM_BASED_URLS } from "../../../../config/url";

// const BrandAllLocationsData = "";
// const brandDetailDropdownData = "";
export const useLocationBrandDetail = () => {
  const { id } = useParams();
  const token = localStorage.getItem("Token");

  // const [brandDetail, setBrandDetail] = useState({});

  // const { isLoading, error, data, isFetching } = useQuery(
  //   "locationbranddetails",
  //   getLocationBrand(token, id)
  // );

  const { data } = useQuery(["LocationBranddetail"], async () => {
    // console.log(" i am working");
    const res = await fetch(
      `${DIOM_BASED_URLS}/admin-location-categories/${id}`,
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!res.ok) {
      const resJson = await res.json();
      throw new Error(resJson.error.message);
    }
    const dd = await res.json();
    return { data: dd };
  });
  // console.log("data : ", data);

  // const { BrandAllLocationsData } = useQuery(
  //   ["brandalllocations"],
  //   getBrandAllLocations(token)
  // );

  // const { brandDetailDropdownData } = useQuery(
  //   ["branddetaildropdown"],
  //   getBrandDetailDropdown(token, id)
  // );

  // useEffect(() => {
  // setTimeout(() => {
  //   console.log("###########");
  //   console.log("Hook", locationBrandData);
  //   console.log("Data", brandDetail);
  //   setBrandDetail(locationBrandData);
  //   console.log("###########");
  // }, 3000);

  // FOR PRE-FETCHING NEXT PAGE
  //   if (hasNextPage) {
  //     const nextPage = currentPage + 1;
  //     queryClient.prefetchQuery(
  //       ["locationbranddetails", nextPage],
  //       () => getLocationBrand(pageSize, nextPage, token, id),
  //       queryClient.prefetchQuery(["brandalllocations"], () =>
  //         getBrandAllLocations(token)
  //       ),

  //       queryClient.prefetchQuery(["branddetaildropdown"], () =>
  //         getBrandDetailDropdown(token, id)
  //       )
  //     );
  //   }
  // }, [currentPage, queryClient]);

  return {
    // locationBrandData,
    BrandAllLocationsData,
    brandDetailDropdownData,

    // setBrandDetail,
    // brandDetail,
  };
};
