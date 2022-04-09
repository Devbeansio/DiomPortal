import React from "react";
import { Row, Col, CardBody, Container } from "reactstrap";
// import SimpleBar from "simplebar-react";
import "../../../css/InvoicesDetailPage.css";
import moment from "moment";

const InvoicesDetailPrint = ({ bookings }) => {


  const createdat = moment(bookings.createdAt).format("YYYY-MM-DD ")
  const bookingfrom = moment(bookings.bookingFromTime).format("YYYY-MM-DD ")
  const bookingto = moment( bookings.bookingToTime).format("YYYY-MM-DD ")
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <CardBody style={{ background: "white" }}>
              <Row>
                <Col xs={9}>
                <p className="invoicedetailname">{bookings.customerData ? bookings.customerData.username:null}</p>
                <p className="invoicedetailemail">{bookings.customerData ? bookings.customerData.email:null}</p>
                <p className="invoicedetailemail">{bookings.customerData ? bookings.customerData.MobilePhone:null}</p>
                </Col>
                <Col xs={3}>
                  <p className="invoicedetailid">{bookings.id ? bookings.id:null}</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <p className="invoicesdetailslabel">Resource Type</p>
                  <p className="invoicesdetailslabel">Resource Name</p>
                  <p className="invoicesdetailslabel">Unit Price</p>
                </Col>
                <Col>
                <p className="invoicedetailsdata">{bookings.resourceTypeName}</p>
                <p className="invoicedetailsdata">{bookings.resourceName}</p>
                <p className="invoicedetailsdata">{bookings.unitPrice}</p>
                </Col>
                <Col className="">
                  <p className="invoicesdetailslabel">Location</p>
                  <p className="invoicesdetailslabel">Booking Date</p>
                  <p className="invoicesdetailslabel">Booking Type</p>
                  <p className="invoicesdetailslabel">Booking Start</p>
                  <p className="invoicesdetailslabel">Booking End</p>
                </Col>
                <Col>
                <p className="invoicedetailsdata">{bookings.businessName}</p>
               
               <p className="invoicedetailsdata">{ createdat}</p>
               <p className="invoicedetailsdata">{bookings.bookingType}</p>
               <p className="invoicedetailsdata">{ bookingfrom}</p>
               <p className="invoicedetailsdata">{ bookingto}</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <p className="invoicedetailsBD">Billing Details</p>
                <Col xs={2}>
                <p className="invoicesdetailslabel">{bookings.resourceTypeName}</p>
                <p className="invoicesdetailslabel">VAT</p>
                </Col>
                <Col xs={8}></Col>
                <Col xs={2}>
                  <p className="invoicedetailsdata">{bookings.total}</p>
                  <p className="invoicedetailsdata">{bookings.vatPrice}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={5}>
                  <p className="invoicesdetailtotalpay">Total Payable</p>
                </Col>
                <Col xs={4}></Col>
                <Col xs={3}>
                <p className="invoicesdetailtotalvalue">{bookings.balanceWithVat}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InvoicesDetailPrint;
