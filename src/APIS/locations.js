import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param {*JWT} token
 * @returns all active locations data for dropdown
 */
export const getLocations = async (token) => {
  const res = (
    await (
      await fetch(
        `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
    ).json()
  ).map((element) => ({
    value: element.id,
    label: element.Name,
  }));
  return [
    {
      label: "--All Locations",
      options: [
        {
          value: "All",
          label: "All",
        },
        ...res,
      ],
    },
  ];
};

/**
 *
 * @param {*JWT} token
 * @returns all active checkin locations without ALL data for dropdown
 */
export const getcheckInLocations = async (token) => {
  const res = (
    await (
      await fetch(
        `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`,
        {
          method: "GET",
          redirect: "follow",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
    ).json()
  ).map((element) => ({
    value: element.id,
    label: element.Name,
  }));
  return [
    {
      label: "--All Locations",
      options: [
        {
          value: "All",
          label: "All",
        },
        ...res,
      ],
    },
  ];
};

export const getLocationBrand = async (token) => {
  const res = (
    await (
      await fetch(`${DIOM_BASED_URLS}/admin-location-categories`, {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    ).json()
  ).map((element) => ({
    value: element.id,
    label: element.name,
  }));
  return [
    {
      label: "--All Locations",
      options: [
        {
          value: "All",
          label: "All",
        },
        ...res,
      ],
    },
  ];
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */

export const getLocationListing = async (
  size = 30,
  page = 1,
  token = "",
  applyFilter = false,
  filters = {},
  history
) => {
  const res = await fetch(
    !applyFilter
      ? `${DIOM_BASED_URLS}/admin-business-locations?size=${size}&page=${page}`
      : `${DIOM_BASED_URLS}/admin-business-locations?size=${size}&page=${page}&filter={"where":${filters}}`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();

  const locationLisitngData = resJson.map((element, index) => ({
    ...element,
    id: index + 1,
    _id: element.id,
    locationTitle: element.Name,
    locationType: element.locationCategoriesName,
    city: element.city,
  }));

  return {
    data: locationLisitngData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all searched locations in DIOM
 */

export const getsearchedLocationListing = async (token = "",history) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-business-locations`,

    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!res.ok) {
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();

  const searchedlocationLisitngData = resJson.map((element, index) => ({
    ...element,
    id: index + 1,
    _id: element.id,
    locationTitle: element.Name,
    locationType: element.locationCategoriesName,
    city: element.city,
  }));

  return {
    data: searchedlocationLisitngData,
    total: resJson.total,
    hasNextPage: resJson.hasNextPage,
    hasPreviousPage: resJson.hasPreviousPage,
  };
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of location in DIOM
 */

export const getLocation = async (token, id,history) => {
  // return await (
    const res=
    await fetch(`${DIOM_BASED_URLS}/admin-business-locations/${id}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    if (!res.ok) {
      if(res.status === 401){
        history.push("/login");
        throw new Error(resJson.error.message);
     
    }
      const resJson = await res.json();
      throw new Error(resJson.error.message);
    }
    const data = await res.json();
    
    return {
      data
    };
  // ).json();
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of getdiomlocationBrand in DIOM
 */

export const getdiomlocationBrand = async (token,history) => {
  // return await (
    const res = 
    await fetch(`${DIOM_BASED_URLS}/admin-location-categories`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    if (!res.ok) {
      if(res.status === 401){
        history.push("/login");
        throw new Error(resJson.error.message);
     
    }
      const resJson = await res.json();
      throw new Error(resJson.error.message);
    }
    const data = await res.json();
    
    return {
      data
    };
  // ).json();
};
