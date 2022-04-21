const Bookingdetailcomponent = () => {
  // return (
  //     <div>
  //       <Card>
  //         <Row className=" mt-5">
  //           <Col xs={1}></Col>
  //           <Col xs={5}>
  //             <Card className="innercards">
  //               <Row>
  //                 <Col xs={12}>
  //                   <p className="bookingdetail">Booking Details</p>
  //                   <hr />
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Customer Name
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">{bookings.bookingUserName?bookings.bookingUserName:"---/-"}</p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Booking No.
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">{bookings.id?bookings.id:"---/-"}</p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Booking Type
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">{ bookings.bookingDetails.bookingType?bookings.bookingDetails.bookingType:"---/-"}</p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor mt2">
  //                   Duration
  //                 </Col>
  //                 <Col xs={6}></Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6}>
  //                   <p className="greybgcolor">Start</p>
  //                   <p className="fontcolor">
  //                     {moment(bookings.bookingDetails.fromTime?bookings.bookingDetails.fromTime:"---/-").format(
  //                       "DD-MM-YYYY"
  //                     )}
  //                   </p>
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="greybgcolor">End</p>
  //                   <p className="fontcolor">
  //                     {moment(bookings.bookingDetails.toTime?bookings.bookingDetails.toTime:"---/-").format(
  //                       "DD-MM-YYYY"
  //                     )}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6}></Col>
  //               </Row>
  //               <hr />
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Location
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">
  //                     {bookings.bookingDetails.locationAddress?bookings.bookingDetails.locationAddress:"---/-"}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Resource Type
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">
  //                     {bookings.bookingDetails.resourceTypeName?bookings.bookingDetails.resourceTypeName:"---/-"}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Resource Allocated
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">
  //                     {bookings.bookingDetails.resourceName?bookings.bookingDetails.resourceName:"---/-"}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <hr />
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Invoice #
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">
  //                     {bookings.bookingDetails.invoiceNumber?bookings.bookingDetails.invoiceNumber:"---/-"}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Amount Paid
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">
  //                     {bookings.bookingDetails.totalAmount?bookings.bookingDetails.totalAmount:"---/-"}
  //                   </p>
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={6} className="fontblackcolor">
  //                   Payment Method
  //                 </Col>
  //                 <Col xs={6}>
  //                   <p className="fontcolor">CC VISA</p>
  //                 </Col>
  //               </Row>
  //             </Card>
  //           </Col>
  //           <Col xs={5}>
  //             <Card className="innercards">
  //               <Row>
  //                 <Col xs={12}>
  //                   <p className="bookingdetail">Check in/ Checkout History</p>
  //                   <hr />
  //                 </Col>
  //               </Row>
  //               <Row>
  //                 <Col xs={12}>
  //                   <div>
  //                     <SimpleBar style={{ maxHeight: "330px" }}>
  //                       <ul className="list-unstyled activity-wid">
  //                         {bookings.bookingDetails.timeLogs &&
  //                           bookings.bookingDetails.timeLogs.length > 0 &&
  //                           bookings.bookingDetails.timeLogs.map((time) => (
  //                             <>
  //                               {time.fromTime && (
  //                                 <li className="activity-list">
  //                                   <div className="activity-icon  avatar-xs">
  //                                     <span className="greencolor  text-primary rounded-circle">
  //                                       <i className=""></i>
  //                                     </span>
  //                                   </div>
  //                                   <div>
  //                                     <div>
  //                                       <h5 className="fontblackcolordates">
  //                                         {moment(time.fromTime).format(
  //                                           "YYYY-MM-DD"
  //                                         )}
  //                                         <small className="text-muted">
  //                                           {" "}
  //                                           {moment(time.fromTime).format(
  //                                             "HH:mm"
  //                                           )}
  //                                         </small>
  //                                       </h5>
  //                                     </div>
  //                                     <div>
  //                                       <p className="text-muted mb-0">
  //                                         Check in
  //                                       </p>
  //                                     </div>
  //                                   </div>
  //                                 </li>
  //                               )}
  //                               {time.toTime && (
  //                                 <li className="activity-list">
  //                                   <div className="activity-icon avatar-xs">
  //                                     <span className="avatar-title bg-soft-primary text-primary rounded-circle">
  //                                       <i className=""></i>
  //                                     </span>
  //                                   </div>
  //                                   <div>
  //                                     <div>
  //                                       <h5 className="fontblackcolordates">
  //                                         {moment(time.toTime).format(
  //                                           "YYYY-MM-DD"
  //                                         )}
  //                                         <small className="text-muted">
  //                                           {" "}
  //                                           {moment(time.toTime).format("HH:mm")}
  //                                         </small>
  //                                       </h5>
  //                                     </div>
  //                                     <div>
  //                                       <p className="text-muted mb-0">
  //                                         Check out
  //                                       </p>
  //                                     </div>
  //                                   </div>
  //                                 </li>
  //                               )}
  //                             </>
  //                           ))}
  //                       </ul>
  //                     </SimpleBar>
  //                   </div>
  //                 </Col>
  //               </Row>
  //             </Card>
  //           </Col>
  //           <Col xs={1}></Col>
  //         </Row>
  //       </Card>
  //     </div>
  // );
};
export default Bookingdetailcomponent;
