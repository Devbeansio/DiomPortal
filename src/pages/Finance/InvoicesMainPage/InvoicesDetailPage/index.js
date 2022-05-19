import React, { useRef } from "react";
import { Row, Col, CardBody, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "../../css/InvoicesDetailPage.css";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import GeneratePdf from "./components/GeneratePdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicesDetailPrint from "./components/InvoicesDetailPrint.js";
import { useInvoice } from "./useInvoicesDetail";
import BounceLoader from "react-spinners/BounceLoader";
import { Accordion } from "react-bootstrap-accordion";

function InvoicesDetailPage() {
  const { InvoiceData, isLoading } = useInvoice();

  // const [loaded, setLoaded] = useState(false);
  const createdat = moment(InvoiceData.createdAt).format("YYYY-MM-DD ");
  const bookingfrom = moment(InvoiceData.bookingFromTime).format("YYYY-MM-DD ");
  const bookingto = moment(InvoiceData.bookingToTime).format("YYYY-MM-DD ");

  const Loader = require("react-loader");
  const { id } = useParams();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Row className="mb-3">
            <Col md={3}>
              <Link to="/invoicesmainpage" className="link">
                <span className="fas fa-angle-left arrowheightwidth"></span>
              </Link>

              <span className=" ml-4 invoicedetailfirstID">
                {id ? id : "---/-"}
              </span>
            </Col>
            <Col md={9}></Col>
          </Row>

          <Row>
            <Col md={8}>
              <CardBody style={{ background: "white" }}>
                <Row>
                  <Col md={7}>
                    <p className="invoicedetailname">
                      {InvoiceData.customerData
                        ? InvoiceData.customerData.username
                        : "---/-"}
                    </p>
                    <p className="invoicedetailemail">
                      {InvoiceData.customerData
                        ? InvoiceData.customerData.email
                        : "---/-"}
                    </p>
                    <p className="invoicedetailemail">
                      {InvoiceData.customerData
                        ? InvoiceData.customerData.MobilePhone
                        : "---/-"}
                    </p>
                  </Col>
                  <Col md={5} className="rightaligncss">
                    <p className="invoicedetailid">{id ? id : "---/-"}</p>
                    <Row>
                      <Col md={7}>
                        <p className="invoicedetailname">Invoice Status :</p>
                      </Col>
                      <Col md={5} className="rightaligncss">
                        {InvoiceData.paymentStatus === "UNPAID" ? (
                          <span className="invoiceunpaidstatuscss">
                            {" "}
                            {InvoiceData ? InvoiceData.paymentStatus : "---/-"}
                          </span>
                        ) : (
                          <span className="invoicestatuscss">
                            {" "}
                            {InvoiceData ? InvoiceData.paymentStatus : "---/-"}
                          </span>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={7}>
                        {" "}
                        <p className="invoicedetailname">Booking id :</p>
                      </Col>
                      <Col md={5} className="rightaligncss">
                        {" "}
                        {InvoiceData ? InvoiceData.bookingId : "---/-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col md={3}>
                    <p className="invoicesdetailslabel">Resource Type</p>
                  </Col>
                  <Col md={3}>
                    <p className="invoicedetailsdata">
                      {InvoiceData.resourceTypeName
                        ? InvoiceData.resourceTypeName
                        : "---/-"}
                    </p>
                  </Col>
                  <Col md={3}>
                    <p className="invoicesdetailslabel">Location</p>
                  </Col>
                  <Col md={3} className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {InvoiceData.businessName
                        ? InvoiceData.businessName
                        : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="invoicesdetailslabel">Resource Name</p>
                  </Col>
                  <Col>
                    <p className="invoicedetailsdata">
                      {InvoiceData.resourceName
                        ? InvoiceData.resourceName
                        : "---/-"}
                    </p>
                  </Col>
                  <Col className="">
                    <p className="invoicesdetailslabel">Booking Date</p>
                  </Col>
                  <Col className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {createdat ? createdat : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="invoicesdetailslabel">Unit Price</p>
                  </Col>
                  <Col>
                    <p className="invoicedetailsdata">
                      {InvoiceData.unitPrice ? InvoiceData.unitPrice : "---/-"}
                    </p>
                  </Col>
                  <Col className="">
                    <p className="invoicesdetailslabel">Booking Type</p>
                  </Col>
                  <Col className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {InvoiceData.bookingType
                        ? InvoiceData.bookingType
                        : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col className="">
                    <p className="invoicesdetailslabel">Booking Start</p>
                  </Col>
                  <Col className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {bookingfrom ? bookingfrom : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col className="">
                    <p className="invoicesdetailslabel">Booking End</p>
                  </Col>
                  <Col className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {bookingto ? bookingto : "---/-"}
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <p className="invoicedetailsBD">Billing Details</p>
                  <Col md={2}>
                    <p className="invoicesdetailslabel">
                      {InvoiceData.resourceTypeName
                        ? InvoiceData.resourceTypeName
                        : "---/-"}
                    </p>
                    <p className="invoicesdetailslabel">VAT</p>
                  </Col>
                  <Col md={8}></Col>
                  <Col md={2} className="rightaligncss">
                    <p className="invoicedetailsdata">
                      {InvoiceData.total ? InvoiceData.total : "---/-"}
                    </p>
                    <p className="invoicedetailsdata">
                      {InvoiceData.vatPrice ? InvoiceData.vatPrice : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <p className="invoicesdetailtotalpay">Total Payable</p>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={3} className="rightaligncss">
                    <p className="invoicesdetailtotalvalue">
                      {InvoiceData.balanceWithVat
                        ? InvoiceData.balanceWithVat
                        : "---/-"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}></Col>
                  <Col md={6}>
                    <Row>
                      <Col md={8}>
                        <p> Sub Total </p>
                      </Col>
                      <Col md={4} className="rightaligncss">
                        {" "}
                        12
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <p> Vat </p>
                      </Col>
                      <Col md={4} className="rightaligncss">
                        {" "}
                        12
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <p> Rubeen12 </p>
                      </Col>
                      <Col md={4} className="rightaligncss">
                        {" "}
                        12
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <p>Total Payable </p>
                      </Col>
                      <Col md={4} className="rightaligncss">
                        {" "}
                        12
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Col>
            <Col md={4}>
              {InvoiceData.id && (
                <PDFDownloadLink
                  stopColor={true}
                  document={<GeneratePdf InvoiceData={InvoiceData} />}
                  fileName="invoice.pdf"
                >
                  <Button
                    color="success"
                    outline
                    className="invoicesdetailbuttons waves-effect waves-light  w-100  "
                  >
                    {/* <p className="invoicepdfcss "> */}
                    Export
                    {/* </p> */}
                  </Button>
                </PDFDownloadLink>
              )}
              {/* </Button> */}
              <Button
                onClick={handlePrint}
                color="success"
                outline
                className="waves-effect waves-light me-1 w-100 mt-3 invoicesdetailbuttons"
              >
                Print
              </Button>

              {/* //div starts */}
              <div className="mt-3">
                {/* <Accordion title="How"></Accordion> */}
                <Accordion
                  className="  w-100 mt-3 invoicerefundcss"
                  title="Revert Refund"
                >
                  <Row className="mt-2">
                    <Col md={5}></Col>
                    <Col md={2}>
                      <p className="invoicerefundcss">Refund</p>
                    </Col>
                    <Col md={5}></Col>
                  </Row>

                  <Row className="mt-2">
                    <Col md={1}></Col>
                    <Col md={1}>
                      {" "}
                      <Input
                        className="form-check-input "
                        // style={{
                        //   backgroundColor: "#03B2A5",
                        //   borderColor: "#08a399",
                        // }}
                        type="radio"
                        value="option1"
                        id="exampleRadios1"
                        name="customRadio"
                        // checked={true}
                      />
                    </Col>
                    <Col md={2}>
                      {" "}
                      <span>partial</span>
                    </Col>
                    <Col md={2}></Col>

                    <Col md={2}></Col>
                    <Col md={1}>
                      <Input
                        className="form-check-input "
                        // style={{
                        //   backgroundColor: "#03B2A5",
                        //   borderColor: "#08a399",
                        // }}
                        // type="checkbox"
                        type="radio"
                        value="option2"
                        id="exampleRadios1"
                        name="customRadio"
                        // checked={true}
                      />
                    </Col>
                    <Col md={2}>
                      <span>full</span>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md={1}></Col>
                    <Col md={10}>
                      {" "}
                      <p>Enter Amount</p>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                      <Input />
                    </Col>
                    <Col md={1}></Col>
                  </Row>

                  <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                      <Button
                        color="success"
                        outline
                        className="invoicesdetailbuttons waves-effect waves-light  w-100 mt-3 "
                      >
                        Apply
                        {/* </p> */}
                      </Button>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </Accordion>
              </div>
            </Col>
          </Row>
          <div style={{ display: "none" }}>
            <div ref={componentRef}>
              <InvoicesDetailPrint bookings={InvoiceData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// }
export default InvoicesDetailPage;
