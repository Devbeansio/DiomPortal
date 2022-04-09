import React from "react";
import { Card, Row, Col,CardBody,Table } from "reactstrap";
import SimpleBar from "simplebar-react";
import "./css/bookingdetail.css";
import moment from "moment";
const Bookingdetailcomponent = ({ bookings }) => {
  return (
    <div>
      
      <Card>
      <Row className="mt-5">
                <Col xs={1}></Col>
                <Col xs={5}>
                  <p className="bookingdetailscss">Booking Details</p>
                  <Card className="innercards">
                    <Row>
                      <Col xs={12}>
                        <p className="bookingdetail">Basic Information</p>
                        <hr />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Customer Name
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingUserName ? bookings.bookingUserName : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Booking No.
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">{bookings.id ? bookings.id : "N/A"}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Booking Type
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.bookingType
                            ? bookings.bookingDetails.bookingType
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="fontblackcolor">
                        Duration
                      </Col>
                      <Col xs={8}>
                        <p className="fontcolors">
                          {bookings.bookingDetails.fromTime
                            ? moment(bookings.bookingDetails.fromTime).format(
                                "DD/MM/YYYY "
                              )
                            : "N/A"}
                          <span style={{ marginRight: 10, marginLeft: 10 }}> - </span>
                          {bookings.bookingDetails.toTime
                            ? moment(bookings.bookingDetails.toTime).format(
                                "DD/MM/YYYY "
                              )
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
                          {bookings.bookingDetails.fromTime
                            ? moment(bookings.bookingDetails.fromTime).format("HH:mm")
                            : "N/A"}
                          <span style={{ marginRight: 10, marginLeft: 10 }}>
                            -
                          </span>
                          {bookings.bookingDetails.toTime
                            ? moment(bookings.bookingDetails.toTime).format("HH:mm ")
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
                      <Col xs={7} className="fontblackcolor">
                        Location
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.businessName
                            ? bookings.bookingDetails.businessName
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Resource Type
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.resourceTypeName
                            ? bookings.bookingDetails.resourceTypeName
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Resource Allocated
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.resourceName
                            ? bookings.bookingDetails.resourceName
                            : "N/A"}
                        </p>
                      </Col>
                      <p className="bookingdetail mt-3">Billing Information</p>
                    <hr />
                    </Row>
                   
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Invoice #
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.invoiceNumber
                            ? bookings.bookingDetails.invoiceNumber
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Amount Paid
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">
                          {bookings.bookingDetails.totalAmount
                            ? bookings.bookingDetails.totalAmount
                            : "N/A"}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={7} className="fontblackcolor">
                        Payment Method
                      </Col>
                      <Col xs={5}>
                        <p className="fontcolor">CC VISA</p>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={5}>
                  <Card className="innercards mt-5">
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
                              {bookings.bookingDetails.timeLogs &&
                                bookings.bookingDetails.timeLogs.length > 0 &&
                                bookings.bookingDetails.timeLogs.map((time) => (
                                  <>
                                   

                                    {bookings.time.toTime && (
                                      <li className="activity-list">
                                        <div className="activity-icon avatar-xs">
                                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className=""></i>
                                          </span>
                                        </div>
                                        <div>
                                          <div>
                                            <h5 className="fontblackcolordates">
                                              {moment(bookings.time.toTime).format(
                                                "YYYY-MM-DD"
                                              )}
                                              <small className="text-muted">
                                                {" "}
                                                {moment(bookings.time.toTime).format(
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

                                {bookings.time.fromTime && (
                                      <li className="activity-list">
                                        <div className="activity-icon  avatar-xs">
                                          <span className="greencolor  text-primary rounded-circle">
                                            <i className=""></i>
                                          </span>
                                        </div>
                                        <div>
                                          <div>
                                            <h5 className="fontblackcolordates">
                                              {moment(bookings.time.fromTime).format(
                                                "YYYY-MM-DD"
                                              )}
                                              <small className="text-muted">
                                                {" "}
                                                {moment(bookings.time.fromTime).format(
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
                  </Card>
                </Col>

                <Col xs={1}></Col>
              </Row>

      
        <Row>
                <Col xs={1}></Col>
                <Col xs={5}>
                 
                  <Card className="innercards">
                   
                    <Row>
                      <Col xm={12}>
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
                                    <th> Name</th>
                                    <th>Phone No.</th>
                                    <th>Email</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {bookings.guestData.data
                                    ? bookings.guestData.data.map((element, Index) => (
                                        <tr>
                                          <td>
                                            {element.guestName
                                              ? element.guestName
                                              : "N/A"}
                                          </td>
                                          <td>
                                            {element.guestPhone
                                              ? element.guestPhone
                                              : "N/A"}
                                          </td>
                                          <td>
                                            {element.guestEmail
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
                <Col xm={5}>
                  <Card className="innercards">
                    {" "}
                    <Row>
                      <Col xm={12}>
                        <p className="bookingdetail">User Personal Details</p>
                        <hr />
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            Full Name
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.bookingUserName ? bookings.bookingUserName : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            Email Address
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.Email ? bookings.userBookings.Email : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            Phone No.
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.MobilePhone
                                ? bookings.userBookings.MobilePhone
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            Date of Birth
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.DateOfBirth
                                ? bookings.userBookings.DateOfBirth
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            Adress
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.Address
                                ? bookings.userBookings.Address
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            State
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.State ? bookings.userBookings.State : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xm={6} className="fontblackcolor">
                            city
                          </Col>
                          <Col xm={6}>
                            <p className="fontcolor">
                              {bookings.userBookings.CityName
                                ? bookings.userBookings.CityName
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <hr />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={1}></Col>
              </Row>
        {/* End */}
      </Card>
    </div>
  );
};
export default Bookingdetailcomponent;
