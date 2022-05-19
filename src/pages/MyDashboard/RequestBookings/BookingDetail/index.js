import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col, Button, CardBody, Table } from "reactstrap";
import SimpleBar from "simplebar-react";

import "./css/bookingdetail.css";
import { Link, useParams, useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import Bookingdetailcomponent from "./bookingdetailcomponent";
import { useBookingDetails } from "./useBookingDetails";

const BookingDetail = () => {
  const {
    error,
    bookingDetails,
    checkInCheckout,
    // bookingUserName,
    // setBookingUserName,
    guestData,
    revokeBookingStatus,
    abc,
    isLoading,
    set ,
    // getrevokedbookings,
    userbookingData,
  } = useBookingDetails();

  const Loader = require("react-loader");
  const pageStyle = `{ size: 5.5in }`;
  const { id, t_ID } = useParams();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: { pageStyle },
  });
  if (error) {
    return (
      <>
        {toast.error(error)}
        <ToastContainer autoClose={8000} />
      </>
    );
  } else {
    return (
      <>
        {isLoading ? (
          <Loader loaded={false} className="spinner" />
        ) : (
          <div className="page-content">
            <div>
              <Row className="mb-4">
                <Col md={4}>
                  <Link to={`/requestbookings/${t_ID}`} className="link">
                    {" "}
                    <span className="fas fa-angle-left arrowheightwidth"></span>
                  </Link>

                  <span className="bookingtitle ml-4">{id}</span>
                </Col>
                <Col md={6}></Col>
                <Col md={2}>
                  <Button
                    onClick={handlePrint}
                    color="success"
                    outline
                    className="waves-effect waves-light mr-1 w-100 "
                    block
                  >
                    <span className="printbutton ">Print</span>
                  </Button>
                </Col>
              </Row>
            </div>

            <div>
              <Card>
                <Row className="mt-5">
                  <Col md={1}></Col>
                  <Col md={5}>
                    <p className="bookingdetailscss">Booking Details</p>
                    <Card className="innercards">
                      <Row>
                        <Col md={12}>
                          <p className="bookingdetail">Basic Information</p>
                          <hr />
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Customer Name
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {/* {userbookingData ? userbookingData.username : "N/A"}
                             */}
                             {bookingDetails?bookingDetails.userName:"N/A"}
                          </p>
                        </Col>
                      </Row>

                      {/* <Row>
                      <Col md={6} className="fontblackcolor">
                        Customer ID
                      </Col>
                      <Col md={6}>
                        <p className="fontcolor">
                          {userbookingData ? userbookingData.users.id : "N/A"}
                        </p>
                      </Col>
                    </Row> */}

                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Booking No.
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">{id ? id : "N/A"}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Booking Type
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.bookingType
                              ? bookingDetails.bookingType
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={5} className="fontblackcolor">
                          Duration
                        </Col>
                        <Col md={7} className="alignrighttext">
                          <p className="fontcolors">
                            {bookingDetails.fromTime
                              ? moment(bookingDetails.fromTime).format(
                                  "DD/MM/YYYY "
                                )
                              : "N/A"}
                            <span style={{ marginRight: 10, marginLeft: 10 }}>
                              -
                            </span>
                            {bookingDetails.toTime
                              ? moment(bookingDetails.toTime).format(
                                  "DD/MM/YYYY "
                                )
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Time
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolors">
                            {bookingDetails.fromTime
                              ? moment(bookingDetails.fromTime).format("HH:mm")
                              : "N/A"}
                            <span style={{ marginRight: 10, marginLeft: 10 }}>
                              -
                            </span>
                            {bookingDetails.toTime
                              ? moment(bookingDetails.toTime).format("HH:mm ")
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}></Col>
                        <p className="bookingdetail mt-3">
                          Location Information
                        </p>
                        <hr />
                      </Row>

                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Location
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.businessName
                              ? bookingDetails.businessName
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Resource Type
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.resourceTypeName
                              ? bookingDetails.resourceTypeName
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Resource Allocated
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.resourceName
                              ? bookingDetails.resourceName
                              : "N/A"}
                          </p>
                        </Col>
                        <p className="bookingdetail mt-3">
                          Billing Information
                        </p>
                        <hr />
                      </Row>

                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Invoice #
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.invoiceNumber
                              ? bookingDetails.invoiceNumber
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Amount Paid
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">
                            {bookingDetails.totalAmount
                              ? bookingDetails.totalAmount
                              : "N/A"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="fontblackcolor">
                          Payment Method
                        </Col>
                        <Col md={6} className="alignrighttext">
                          <p className="fontcolor">CC VISA</p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col md={5}>
                    <Card className="innercards mt-5">
                      <Row>
                        <Col md={12}>
                          <p className="bookingdetail">
                            Check in/ Checkout History
                          </p>
                          <hr />
                        </Col>
                      </Row>

                      
                      <Row>
                        <Col md={12}>
                          <div>
                            <SimpleBar style={{ maxHeight: "330px" }}>
                              <ul className="list-unstyled activity-wid">
                              {/* <li className="activity-list">
                                  <div className="activity-icon avatar-xs">
                                    <span className="greencolor  text-primary rounded-circle">
                                      <i className=""></i>
                                    </span>
                                  </div>
                                  <div>
                                    <h5 className="fontblackcolordates">
                                      Booking Status
                                    </h5>
                                    <p className="text-muted mb-0">
                                      {bookingDetails
                                        ? bookingDetails.bookingStatus
                                        : "N/A"}
                                    </p>
                                  </div>
                                </li>
                                {revokeBookingStatus
                                  ? revokeBookingStatus
                                  : null}
                                {checkInCheckout &&
                                  checkInCheckout.length > 0 &&
                                  checkInCheckout.map((time) => (
                                    <>
                                      {time.toTime && (
                                        <li className="activity-list">
                                          <div className="activity-icon avatar-xs">
                                            <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                              <i className=""></i>
                                            </span>
                                          </div>
                                          <div>
                                            <div>
                                              <h5 className="fontblackcolordates">
                                                {moment(time.toTime).format(
                                                  "YYYY-MM-DD"
                                                )}
                                                <small className="text-muted">
                                                  {" "}
                                                  {moment(time.toTime).format(
                                                    "HH:mm"
                                                  )}
                                                </small>
                                              </h5>
                                            </div>

                                            <div>
                                              <p className="text-muted mb-0">
                                                Check out
                                              </p>
                                            </div>
                                          </div>
                                        </li>
                                      )}

                                      {time.fromTime && (
                                        <li className="activity-list">
                                          <div className="activity-icon avatar-xs">
                                            <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                              <i className=""></i>
                                            </span>
                                          </div>
                                          <div>
                                            <div>
                                              <h5 className="fontblackcolordates">
                                                {moment(time.fromTime).format(
                                                  "YYYY-MM-DD "
                                                )}
                                                <small className="text-muted">
                                                  {" "}
                                                  {moment(time.fromTime).format(
                                                    "HH:mm"
                                                  )}
                                                </small>
                                              </h5>
                                            </div>

                                            <div>
                                              <p className="text-muted mb-0">
                                                Check in
                                              </p>
                                            </div>
                                          </div>
                                        </li>
                                      )}
                                    </>
                                  ))} */}
{bookingDetails?bookingDetails.bookingStatusTimeLogs?.map((e)=>{
  return(
  < li className="activity-list" key={e}>
                                          <div className="activity-icon avatar-xs">
                                            <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                           
                                            </span>
                                          </div>
                              
                                  <div>
                                    <h5 className="fontblackcolordates">
                                      
                                     { moment(
                                         e.createdAt).format("YYYY-MM-DD ")}
                                         <small className="text-muted">
                                              
                                                  {moment( e.createdAt).format(
                                                    "HH:mm"
                                                  )}
                                                </small>
                                    </h5>
                                    <p className="text-muted mb-0">
                                     
                                        { e.title}
                                    </p>
                                  </div>
                                </li>
  )
   }):null}
                    
                              </ul>
                            </SimpleBar>

                          
                          </div>
                        </Col>
                      </Row>


                     
                    </Card>
                  </Col>

                  <Col md={1}></Col>
                </Row>

                <Row>
                  <Col md={1}></Col>
                  <Col md={5}>
                    <Card className="innercards">
                      <Row>
                        <Col md={12}>
                          <p className="bookingdetail ">Guests Information</p>

                          <Card>
                            <CardBody>
                              <div
                                className="table-responsive table-wrapper-scroll-y  "
                                style={{ height: 280 }}
                              >
                                <Table className="   mb-0">
                                  <thead>
                                    <tr>
                                      <th>Booking ID</th>
                                      <th> Name</th>
                                      <th>Phone No.</th>
                                      <th>Email</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {guestData.data
                                      ? guestData.data.map((element, Index) => (
                                          <tr>
                                            <td>
                                              {element
                                                ? element.bookingId
                                                : "N/A"}
                                            </td>
                                            <td>
                                              {element
                                                ? element.guestName
                                                : "N/A"}
                                            </td>
                                            <td>
                                              {element
                                                ? element.guestPhone
                                                : "N/A"}
                                            </td>
                                            <td>
                                              {element
                                                ? element.guestEmail
                                                : "N/A"}
                                            </td>
                                          </tr>
                                        ))
                                      : null}
                                  </tbody>
                                </Table>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col md={5}>
                    <Card className="innercards">
                      {" "}
                      <Row>
                        <Col md={12}>
                          <p className="bookingdetail">User Personal Details</p>
                          <hr />
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Customer ID
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.id
                                    ? userbookingData.id
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Full Name
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.FullName
                                    ? userbookingData.FullName
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Email Address
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.Email
                                    ? userbookingData.Email
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Phone No.
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.MobilePhone
                                    ? userbookingData.MobilePhone
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Date of Birth
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.dob
                                    ? userbookingData.dob
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              Adress
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.address
                                    ? userbookingData.address
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              State
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.state
                                    ? userbookingData.state
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="fontblackcolor">
                              city
                            </Col>
                            <Col md={6}>
                              <p className="fontcolor">
                                {userbookingData
                                  ? userbookingData.cityName
                                    ? userbookingData.cityName
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </Col>
                          </Row>

                          <hr />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Card>
            </div>

            <div style={{ display: "none" }}>
              <div ref={componentRef}>
                {bookingDetails &&
                  userbookingData &&
                  id &&
                 
                  (
                    <Bookingdetailcomponent
                      bookings={{
                        bookingDetails,
                        userbookingData,
                        revokeBookingStatus,
                        checkInCheckout,
                        guestData,
                        id,
                      }}
                    />
                  )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default BookingDetail;
