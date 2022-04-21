// import React, { useState, useEffect, useRef } from "react";
// import { Card, Row, Col, Button } from "reactstrap";
// import SimpleBar from "simplebar-react";
// import "../css/bookingdetail.css";
// import { Link, useParams } from "react-router-dom";
// import moment from "moment";
// import { useReactToPrint } from "react-to-print";
// import Bookingdetailcomponent from "./bookingdetailcomponent";
// import { DIOM_BASED_URLS } from "../../../config/url";
// var Loader = require("react-loader");

const BookingDetail = () => {
  // const [bookingDetails, setBookingDetails] = useState({});
  // const [bookingUserName, setBookingUserName] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  // const [revokeBookingStatus, setRevokeBookingStatus] = useState();
  // const { id } = useParams();
  // const componentRef = useRef();
  // const bookingdetails = async () => {
  //   setLoaded(true);
  //   fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/${id}`, {
  //     method: "GET",
  //     redirect: "follow",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBookingDetails(result);
  //       bookingusername(result.userId);
  //       setLoaded(false);
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  // const bookingusername = async (id) => {
  //   setLoaded(true);
  //   fetch(`${DIOM_BASED_URLS}/users/${id}`, {
  //     method: "GET",
  //     redirect: "follow",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBookingUserName(result.username);
  //       setLoaded(false);
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  // const getrevokedbookings = async () => {
  //   fetch(`${DIOM_BASED_URLS}/admin-diom-bookings/revoked/PHO-0511`, {
  //     method: "GET",
  //     redirect: "follow",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("i am revolk result : ", result);
  //       const mappeddata = result.data.map((e) => {
  //         bookingStatus = e.bookingStatus;
  //       });
  //       setRevokeBookingStatus(mappeddata);
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(() => {
  //   (async () => {
  //     await bookingdetails();
  //     await getrevokedbookings();
  //   })();
  // }, []);
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   copyStyles: true,
  // });
  // return (
  //   <>
  //     {loaded ? (
  //       <Loader loaded={false} className="spinner" />
  //     ) : (
  //       <div className="page-content">
  //         <div>
  //           <Row className="mb-4">
  //             <Col md={4}>
  //               <Link to={`/booking`} className="link">
  //                 {" "}
  //                 <span className="fas fa-angle-left arrowheightwidth"></span>
  //               </Link>
  //               <span className="bookingtitle ml-4">{id}</span>
  //             </Col>
  //             <Col md={6}></Col>
  //             <Col md={2}>
  //               <Button
  //                 onClick={handlePrint}
  //                 color="success"
  //                 outline
  //                 className="waves-effect waves-light mr-1 w-100 "
  //                 block
  //               >
  //                 <span className="printbutton ">Print</span>
  //               </Button>
  //             </Col>
  //           </Row>
  //         </div>
  //         {bookingDetails && bookingUserName && id && (
  //           <div style={{ display: "none" }}>
  //             <div ref={componentRef}>
  //               <Bookingdetailcomponent
  //                 bookings={{ bookingDetails, bookingUserName, id }}
  //               />
  //             </div>
  //           </div>
  //         )}
  //         <div>
  //           <Card>
  //             <Row className="mt-5">
  //               <Col md={1}></Col>
  //               <Col md={5}>
  //                 <Card className="innercards">
  //                   <Row>
  //                     <Col md={12}>
  //                       <p className="bookingdetail">Booking Details</p>
  //                       <hr />
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Customer Name
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingUserName ? bookingUserName : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Booking No.
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">{id ? id : "N/A"}</p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Booking Type
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.bookingType
  //                           ? bookingDetails.bookingType
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Duration
  //                     </Col>
  //                     <Col md={6}></Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6}>
  //                       <p className="greybgcolor">Start</p>
  //                       <p className="fontcolor">
  //                         {bookingDetails.fromTime
  //                           ? moment(bookingDetails.fromTime).format(
  //                               "DD-MM-YYYY"
  //                             )
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="greybgcolor">End</p>
  //                       <p className="fontcolor">
  //                         {bookingDetails.toTime
  //                           ? moment(bookingDetails.toTime).format("DD-MM-YYYY")
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6}></Col>
  //                   </Row>
  //                   <hr />
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Location
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.locationAddress
  //                           ? bookingDetails.locationAddress
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Resource Type
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.resourceTypeName
  //                           ? bookingDetails.resourceTypeName
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Resource Allocated
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.resourceName
  //                           ? bookingDetails.resourceName
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <hr />
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Invoice #
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.invoiceNumber
  //                           ? bookingDetails.invoiceNumber
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Amount Paid
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">
  //                         {bookingDetails.totalAmount
  //                           ? bookingDetails.totalAmount
  //                           : "N/A"}
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={6} className="fontblackcolor">
  //                       Payment Method
  //                     </Col>
  //                     <Col md={6}>
  //                       <p className="fontcolor">CC VISA</p>
  //                     </Col>
  //                   </Row>
  //                 </Card>
  //               </Col>
  //               <Col md={5}>
  //                 <Card className="innercards">
  //                   <Row>
  //                     <Col md={12}>
  //                       <p className="bookingdetail">
  //                         Check in/ Checkout History
  //                       </p>
  //                       <hr />
  //                     </Col>
  //                   </Row>
  //                   <Row>
  //                     <Col md={12}>
  //                       <div>
  //                         <SimpleBar style={{ maxHeight: "330px" }}>
  //                           <ul className="list-unstyled activity-wid">
  //                             {revokeBookingStatus ? revokeBookingStatus : null}
  //                             {bookingDetails.timeLogs &&
  //                               bookingDetails.timeLogs.length > 0 &&
  //                               bookingDetails.timeLogs.map((time) => (
  //                                 <>
  //                                   {time.fromTime && (
  //                                     <li className="activity-list">
  //                                       <div className="activity-icon  avatar-xs">
  //                                         <span className="greencolor  text-primary rounded-circle">
  //                                           <i className=""></i>
  //                                         </span>
  //                                       </div>
  //                                       <div>
  //                                         <div>
  //                                           <h5 className="fontblackcolordates">
  //                                             {moment(time.fromTime).format(
  //                                               "YYYY-MM-DD"
  //                                             )}
  //                                             <small className="text-muted">
  //                                               {" "}
  //                                               {moment(time.fromTime).format(
  //                                                 "HH:mm"
  //                                               )}
  //                                             </small>
  //                                           </h5>
  //                                         </div>
  //                                         <div>
  //                                           <p className="text-muted mb-0">
  //                                             Check in
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </li>
  //                                   )}
  //                                   {time.toTime && (
  //                                     <li className="activity-list">
  //                                       <div className="activity-icon avatar-xs">
  //                                         <span className="avatar-title bg-soft-primary text-primary rounded-circle">
  //                                           <i className=""></i>
  //                                         </span>
  //                                       </div>
  //                                       <div>
  //                                         <div>
  //                                           <h5 className="fontblackcolordates">
  //                                             {moment(time.toTime).format(
  //                                               "YYYY-MM-DD"
  //                                             )}
  //                                             <small className="text-muted">
  //                                               {" "}
  //                                               {moment(time.toTime).format(
  //                                                 "HH:mm"
  //                                               )}
  //                                             </small>
  //                                           </h5>
  //                                         </div>
  //                                         <div>
  //                                           <p className="text-muted mb-0">
  //                                             Check out
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </li>
  //                                   )}
  //                                 </>
  //                               ))}
  //                           </ul>
  //                         </SimpleBar>
  //                       </div>
  //                     </Col>
  //                   </Row>
  //                 </Card>
  //               </Col>
  //               <Col md={1}></Col>
  //             </Row>
  //           </Card>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default BookingDetail;
