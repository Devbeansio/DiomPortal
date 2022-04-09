import { DIOM_BASED_URLS } from "../../config/url"; 
export const DFetch = async (url = "", options = {}) => {
  
    if (url === "") {
      throw new Error("URL is Required");
    }
    const response = await fetch(`${DIOM_BASED_URLS}/${url}`, options);

    if (!response.ok) {
      if (response.status === 401) {
          throw new Error ("Session Expired!")
      }

      throw new Error(response.statusText);
    }
    const result = await response.json();
    return result;
 
};
