import React, { useState } from "react";
import moment from "moment";
const UseDashboard = () => {
  const t_ID = "1";
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const [maxDataAge, setMaxDataAge] = useState({
    createdAt: {
      $gte: new Date(moment().startOf("day").toISOString()),
      $lte: new Date(),
    },
  });

  const [loaded] = useState(false);
  const Loader = require("react-loader");

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  return {
    loaded,
    activeTabJustify,
    setActiveTabJustify,
    t_ID,
    toggleCustomJustified,
    Loader,
    maxDataAge,
    setMaxDataAge,
  };
};

export default UseDashboard;
