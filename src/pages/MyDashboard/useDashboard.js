import React, { useState } from "react";
import moment from "moment";
import { useQuery } from "react-query";
import {
  getBrandCard,
  getFinanceCard,
  getGenaralCard,
  getLocationCard,
  getUsersCard,
} from "../../APIS/dashboard";
import { on } from "process";
const UseDashboard = () => {
  const today = moment().format("YYYY-MM ");
  const token = localStorage.getItem("Token");
  const t_ID = "1";
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const [maxDataAge, setMaxDataAge] = useState({
    createdAt: {
      $gte: new Date(moment(today).startOf("month").toISOString()),
      $lte: new Date(moment().toISOString()),
    },
  });

  const [loaded] = useState(false);
  const Loader = require("react-loader");

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify === tab) {
      setActiveTabJustify(tab);
    }

    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  // *******Finance******
  const dashboardFinanceCardddata = useQuery(["FinanceCards"], () =>
    getFinanceCard(token)
  );
  const financeCardddata = dashboardFinanceCardddata?.data?.data;
  // *******General******
  const dashboardGeneralCardddata = useQuery(["GeneralCards"], () =>
    getGenaralCard(token)
  );
  const generalCardddata = dashboardGeneralCardddata?.data?.data;
  // *******Location******
  const dashboardLocationCardddata = useQuery(["LocationCards"], () =>
    getLocationCard(token)
  );
  const locationCardddata = dashboardLocationCardddata?.data?.data;
  // *******Brand******
  const dashboardBrandCardddata = useQuery(["BrandCards"], () =>
    getBrandCard(token)
  );
  const brandCardddata = dashboardBrandCardddata?.data?.data;
  // *******Brand******
  const dashboardUsersCardddata = useQuery(["UsersCards"], () =>
    getUsersCard(token)
  );
  const usersCardddata = dashboardUsersCardddata?.data?.data;
  return {
    loaded,
    activeTabJustify,
    setActiveTabJustify,
    t_ID,
    toggleCustomJustified,
    Loader,
    maxDataAge,
    setMaxDataAge,
    financeCardddata,
    generalCardddata,
    locationCardddata,
    brandCardddata,
    usersCardddata,
  };
};

export default UseDashboard;
