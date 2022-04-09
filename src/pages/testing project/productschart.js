import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';


const Productschart = () => {
 const [series]= useState([{
  data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
}],
)



const options = {
  chart: {
      toolbar: {
          show: false,
      }
  },
  plotOptions: {
      bar: {
          horizontal: true,
      }
  },
  dataLabels: {
      enabled: false
  },
  
  colors: ['#34c38f'],
  grid: {
      borderColor: '#f1f1f1',
  },
  xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
  }
}
 
  return (
    <>
   
    <div className="page-content">

    <React.Fragment>
                <ReactApexChart options={options} series={series} type="bar" height="350" />
            </React.Fragment>

    

       </div>
      </>
      
  );
};

export default Productschart;
