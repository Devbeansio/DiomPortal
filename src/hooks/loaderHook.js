import React, { useState, useEffect } from "react";
// import { isLoading } from "./../pages/Finance/Taxation/useTaxation";
const LoaderHook = () => {
  const [loading, setLoading] = useState(false);
  // console.log("loading: ", loading);

  useEffect(() => {
    return () => {
      //   setLoading(isLoading);
    };
  }, [loading]);
  return {
    loading,
    setLoading,
  };
};

export default LoaderHook;
