import { DIOM_BASED_URLS } from "../config/url";
import moment from "moment";

/**
 *
 * @param size
 * @param page
 * @param {JWT} token
 * @returns a list of all resource in DIOM
 */

export const getFloorplans = async (size = 30, page = 1, token = "") => {
  const res = await fetch(
    `${DIOM_BASED_URLS}/admin-business-locations?filter={"where":{"visibility":true}}`,

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
  const resJson = await res.json();

  const floorPlansData = resJson.map((e, index) => ({
    ...e,
    name: e.Name,
    id: index + 1,
    floorid: e.id,
  }));

  return {
    data: floorPlansData,
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
 * @returns a floor plan names in DIOM
 */

export const getFloorPlansNames = async (token = "", floorid) => {
  // return await (
    const res =  await fetch(
      `${DIOM_BASED_URLS}/admin-business-locations/${floorid}`,
      {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    if (!res.ok) {
      const resJson = await res.json();
      throw new Error(resJson.error.message);
    }
    const data = await res.json();
    
    return {
      data
    };
  // ).json();
};
