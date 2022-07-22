import { DIOM_BASED_URLS } from "../config/url";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a Finance in DIOM
 */

export const getFinanceCard = async (token = "",history) => {
  // return await (
 
    const res = await fetch(`${DIOM_BASED_URLS}/stats/finance`, {
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
 * @returns a General in DIOM
 */

export const getGenaralCard = async (token = "",history) => {
  // return await (
   
    const res = await fetch(`${DIOM_BASED_URLS}/stats/general`, {
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
 * @returns a Location in DIOM
 */

export const getLocationCard = async (token = "",history) => {
  // return await (
    const res =  await fetch(`${DIOM_BASED_URLS}/stats/locations`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  // ).json();
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
};

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a brand in DIOM
 */

export const getBrandCard = async (token = "",history) => {
  // return await (
    const res= await fetch(`${DIOM_BASED_URLS}/stats/brands`, {
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
 * @returns a users in DIOM
 */

export const getUsersCard = async (token = "",history) => {
  // return await (
    const res =  await fetch(`${DIOM_BASED_URLS}/stats/users`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  // ).json();
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
};
