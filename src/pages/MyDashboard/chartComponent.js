// import Chart from "./Chart";
// import React from "react";
// import UseDashboard from "./useDashboard";
// import { Col, Row } from "reactstrap";

// function ChartComponent() {
//   const {
//     maxDataAge,

//     activeTabJustify,

//     usersCardddata,
//   } = UseDashboard();

//   const chartsView = () => {
//     if (activeTabJustify === "1") {
//       return (
//         <div key={activeTabJustify}>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625139bf-45ca-4d14-85ba-9a0e96d9ab76"}
//                 />
//               </div>
//             </Col>
//           </Row>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6256af9a-04a5-4f01-8929-ba406cf900cb"}
//                 />
//               </div>
//             </Col>
//             {/* <Col md={1}></Col> */}
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"62514999-70f4-431b-8d96-68f6a4c6a942"}
//                 />
//               </div>
//             </Col>
//           </Row>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625154e9-ed04-4f19-8b12-9548acd2508c"}
//                 />
//               </div>
//             </Col>
//             {/* <Col md={1}></Col> */}
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"62514d58-905f-40e2-83f4-4c6b1b2877eb"}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//     if (activeTabJustify === "2") {
//       return (
//         <div key={activeTabJustify}>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}></Col>
//           </Row>

//           <Row className="mt-5">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6256af9a-04a5-4f01-8929-ba406cf900cb"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"62514d58-905f-40e2-83f4-4c6b1b2877eb"}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//     if (activeTabJustify === "3") {
//       return (
//         <div key={activeTabJustify}>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"62515345-2438-4c2b-8a7d-0245e2511098"}
//                 />
//               </div>
//             </Col>
//           </Row>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625154e9-ed04-4f19-8b12-9548acd2508c"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6257b292-342b-4a2c-83f5-dfcb02f4bae1"}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//     if (activeTabJustify === "4") {
//       return (
//         <div key={activeTabJustify}>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"625139bf-45ca-4d14-85ba-9a0e96d9ab76"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6256af9a-04a5-4f01-8929-ba406cf900cb"}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//     if (activeTabJustify === "5") {
//       return (
//         <div key={activeTabJustify}>
//           <Row className="mt-3">
//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6256aed7-adc9-4235-8e2e-c4d5e33c4cd1"}
//                 />
//               </div>
//             </Col>

//             <Col md={6}>
//               <div className="charts">
//                 <Chart
//                   height={"350px"}
//                   width={"480px"}
//                   filter={maxDataAge}
//                   chartId={"6256af21-ad42-491c-886b-c379e048fc5a"}
//                 />
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     }
//     return;
//   };
//   return {
//     chartsView,
//   };
// }

// export default ChartComponent;
