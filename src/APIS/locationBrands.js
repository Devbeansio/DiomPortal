import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all LocationBrands in DIOM
 */

export const getLocationBrands = async (size = 30, page = 1, token = "",history) => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-location-categories`,

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

  const locationBrandsData = resJson
    .filter((location) => location)
    .map((location, index) => ({
      id: index + 1,
      _id: location.id,
      locationBrandName: location.name,
      locations: location.locationsName,
    }));

  return {
    data: locationBrandsData,
  };
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all LocationBrands in DIOM
 */

export const getLocationBrand = async (token = "", id,history) => {
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
    if(res.status === 401){
      history.push("/login");
      throw new Error(resJson.error.message);
   
  }
    const resJson = await res.json();
    throw new Error(resJson.error.message);
  }
  const resJson = await res.json();
  return { data: resJson };
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a Brand Detail in DIOM
 */

export const getBranddDetail = async (token = "", id,history) => {
  // return await (
    const res = await fetch(`${DIOM_BASED_URLS}/admin-location-categories/${id}`, {
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
 * @returns a Brand Detail dropdown in DIOM
 */

export const getBranddDetaildropdown = async (token = "", id,history) => {
  // return await (
    const res = await fetch(
      `${DIOM_BASED_URLS}/admin-location-categories/${id}/locations`,
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
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
 * @returns a Brand Detail all location in DIOM
 */

export const getBrandallocationdropdown = async (token = "", id,history) => {
  // return await (
    const res =  await fetch(`${DIOM_BASED_URLS}/admin-business-locations`, {
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
