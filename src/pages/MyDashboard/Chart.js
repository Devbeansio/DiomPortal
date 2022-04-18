import React, { useEffect, useRef, useState } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// last Month
//   {
//   createdAt: {
//     $gte: new Date(firstDayPrevMonth.toISOString()),
//     $lte: new Date(lastDayPrevMonth.toISOString()),
//   },
// }
////////
const Chart = ({ filter, chartId, height, width }) => {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-kjtvb",
  });
  const newDate = new Date();
  const firstDayPrevMonth = new Date(
    newDate.getFullYear(),
    newDate.getMonth() - 1,
    1
  );
  const lastDayPrevMonth = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    0
  );

  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(
    sdk.createChart({
      chartId: chartId,
      height: height,
      width: width,
      // theme: "dark",
    })
  );
  useEffect(() => {
    chart
      .render(chartDiv.current)
      .then(() => setRendered(true))
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);
  useEffect(() => {
    if (rendered) {
      chart
        .setFilter(filter)
        .catch((err) => console.log("Error while filtering.", err));
    }
  }, [chart, filter, rendered]);
  return <div className="charts" ref={chartDiv} />;
};
export default Chart;
