import React from "react";
import { Card, Row, Col, CardBody, Table } from "reactstrap";
import SimpleBar from "simplebar-react";
import "./css/bookingdetail.css";
import moment from "moment";
const Bookingdetailcomponent = (bookings) => {
  console.log("bookings abc : ", bookings);
  return (
    <div>
      <Row>
        <Col xs={12}>
          {/* <Container> */}
          <CardBody style={{ background: "white" }}>
            <Card>
              <Row className="mt-5">
                <Col xs={1}></Col>
                <Col xs={5}>
                  <p className="bookings.bookingdetailscss">Booking Details</p>
                  <Card className="innercards">
                    <Row>
                      <Col xs={12}>
                        <p className="bookingdetail">Basic Information</p>
                        <hr />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Customer Name
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.userbookingData
                            ? bookings.bookings.userbookingData.username
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>

                    {/* <Row>
                      <Col xs={6} className="fontblackcolor">
                        Customer BOOKINGS.ID
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.userbookingData ? bookings.bookings.userbookingData.users.bookings.id : "N/A"}
                        </p>
                      </Col>
                    </Row> */}

                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Booking No.
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.id ? bookings.bookings.id : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Booking Type
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.bookingType
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5} className="fontblackcolor">
                        Duration
                      </Col>
                      <Col xs={7}>
                        <p className="fontcolors">
                          {bookings.bookings.bookingDetails
                            ? moment(
                                bookings.bookings.bookingDetails.fromTime
                              ).format("DD/MM/YYYY ")
                            : "N/A"}
                          <span style={{ marginRight: 10, marginLeft: 10 }}>
                            -
                          </span>
                          {bookings.bookings.bookingDetails
                            ? moment(
                                bookings.bookings.bookingDetails.toTime
                              ).format("DD/MM/YYYY ")
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Time
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolors">
                          {bookings.bookings.bookingDetails
                            ? moment(
                                bookings.bookings.bookingDetails.fromTime
                              ).format("HH:mm")
                            : "N/A"}
                          <span style={{ marginRight: 10, marginLeft: 10 }}>
                            -
                          </span>
                          {bookings.bookings.bookingDetails
                            ? moment(
                                bookings.bookings.bookingDetails.toTime
                              ).format("HH:mm ")
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={6}></Col>
                      <p className="bookingdetail mt-3">Location Information</p>
                      <hr />
                    </Row>

                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Location
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.businessName
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Resource Type
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.resourceTypeName
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Resource Allocated
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.resourceName
                            : "N/A"}
                        </p>
                      </Col>
                      <p className="bookingdetail mt-3">Billing Information</p>
                      <hr />
                    </Row>

                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Invoice #
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.invoiceNumber
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Amount Paid
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">
                          {bookings.bookings.bookingDetails
                            ? bookings.bookings.bookingDetails.totalAmount
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="fontblackcolor">
                        Payment Method
                      </Col>
                      <Col xs={6}>
                        <p className="fontcolor">CC VISA</p>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={5}>
                  <p className="bookingdetail">User Personal Details</p>
                  <Card className="innercards ">
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.id
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.username
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.Email
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.MobilePhone
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.dob
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.address
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.state
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
                              {bookings.bookings.serbookingData
                                ? bookings.userbookingData.cityName
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <hr />
                      </Col>
                    </Row>
                  </Card>

                  {/* <Card className="innercards mt-5">
                    <Row>
                      <Col xs={12}>
                        <p className="bookingdetail">
                          Check in/ Checkout History
                        </p>
                        <hr />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12}>
                        <div>
                          <SimpleBar style={{ maxHeight: "330px" }}>
                            <ul className="list-unstyled activity-wid">
                         
                              <li className="activity-list">
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
                                    {bookings.bookingDetails
                                      ? bookings.bookingDetails.bookingStatus
                                      : "N/A"}
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </SimpleBar>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <SimpleBar style={{ maxHeight: "330px" }}>
                            <ul className="list-unstyled activity-wid">
                              {bookings.revokeBookingStatus
                                ? bookings.revokeBookingStatus
                                : null}
                              {bookings.checkInCheckout &&
                                bookings.checkInCheckout.length > 0 &&
                                bookings.checkInCheckout.map((time) => (
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
                                        <div className="activity-icon  avatar-xs">
                                          <span className="greencolor  text-primary rounded-circle">
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
                                ))}
                            </ul>
                          </SimpleBar>
                        </div>
                      </Col>
                    </Row>
                  </Card> */}
                </Col>

                <Col xs={1}></Col>
              </Row>

              <Row>
                <Col xs={1}></Col>
                <Col xs={5}>
                  <Card className="innercards">
                    {/* <Row>
                      <Col xs={12}>
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
                                  {bookings.guestData.data
                                    ? bookings.guestData.data.map(
                                        (element, Index) => (
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
                                        )
                                      )
                                    : null}
                                </tbody>
                              </Table>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row> */}
                  </Card>
                </Col>
                <Col xs={5}>
                  <Card className="innercards">
                    {" "}
                    {/* <Row>
                      <Col md={12}>
                        <p className="bookingdetail">User Personal Details</p>
                        <hr />
                        <Row>
                          <Col md={6} className="fontblackcolor">
                            Customer ID
                          </Col>
                          <Col md={6}>
                            <p className="fontcolor">
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.id
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.username
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.Email
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.MobilePhone
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.dob
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.address
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
                              {bookings.bookings.userbookingData
                                ? bookings.bookings.userbookingData.state
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
                              {bookings.bookings.serbookingData
                                ? bookings.userbookingData.cityName
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <hr />
                      </Col>
                    </Row> */}
                  </Card>
                </Col>
                <Col xs={1}></Col>
              </Row>
            </Card>
          </CardBody>
          {/* </Container> */}
        </Col>
      </Row>
    </div>
  );
};
export default Bookingdetailcomponent;
