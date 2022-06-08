import React, { useState, useEffect } from "react";
import "../../css/CheckedinCustomerDetail.css";
import ImageAlt from "./imgs/transparentImage.png";
import {
  Row,
  Col,
  TabContent,
  NavLink,
  Button,
  NavItem,
  Nav,
  TabPane,
  Card,
  CardBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import BounceLoader from "react-spinners/BounceLoader";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../../Tables/datatables.scss";
import { UseCheckedinCustomerDetailed } from "./useCheckedinCustomerDetailed";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "_id",
    text: "Booking ID",
    sort: true,
  },
  {
    dataField: "resourceName",
    text: "Resource",
    sort: true,
  },
  {
    dataField: "businessName",
    text: "Location",
    sort: true,
  },
  {
    dataField: "createdAt",
    text: "Booking Date",
    sort: true,
  },
  {
    dataField: "bookingType",
    text: "Booking Type",
    sort: true,
  },
  {
    dataField: "invoiceNumber",
    text: "Invoice ID",
    sort: true,
  },
  {
    dataField: "totalAmount",
    text: "Total Paid",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const CheckedinCustomerDetail = () => {
  const {
    currentPage,
    pageOptions,
    customerdetailedData,
    userActiveBookingData,
    userSechduledBookigsData,
    usePastBookingsData,
    // activeTabJustify,
    hasNextPage,
    scheduledHasNextPage,pastHasNextPage,
    hasPreviousPage,
    toggleCustomJustified,
    total,
    activeTabJustify,
    setActiveTabJustify,
    isLoading,
    changeCurrentPage,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
  } = UseCheckedinCustomerDetailed();

 
  const Loader = require("react-loader");

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          {console.log("userActiveBookingData : ", userActiveBookingData)}
          <div>
            <Row className="mb-4">
              <Col md={4}>
                <Link to="/checkedincustomer" className="link">
                  {" "}
                  <span className="fas fa-angle-left arrowheightwidth"></span>
                </Link>
                <span className="profiletitle ">Profile Details</span>
              </Col>
              <Col md={6}></Col>
              <Col md={2}></Col>
            </Row>
          </div>
          <Row>
            <Col md={12} lg={12} sm={12}>
              <div>
                <Card>
                  <Row className="mt-2 mb-2">
                    <Col md={3} lg={3} sm={4}>
                      <div className="checkedinimgdiv">
                        <img
                          src={
                            // (customerdetailedData?.imageLink)
                            //   ? (customerdetailedData?.imageLink)
                            //   : ImageAlt
                            customerdetailedData.imageLink
                              ? customerdetailedData.imageLink
                              : ImageAlt
                          }
                          style={{ height: "230px", width: "190px" }}
                        ></img>
                      </div>
                    </Col>
                    <Col md={4} lg={4} sm={4}>
                      <div>
                        <p className="cardlabelsCI">Personal Details</p>
                        <hr />
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Full Name</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.username
                                ? customerdetailedData.username
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Email Address</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.email
                                ? customerdetailedData.email
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Phone Number</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.MobilePhone
                                ? customerdetailedData.MobilePhone
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Date of Birth</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.DateOfBirth
                                ? customerdetailedData.DateOfBirth
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Address</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.Address
                                ? customerdetailedData.Address
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">State</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.State
                                ? customerdetailedData.State
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">City</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.CityName
                                ? customerdetailedData.CityName
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={1} lg={1} sm={2}></Col>
                    <Col md={4} lg={4} sm={4}>
                      {/* start */}
                      <div>
                        <p className="cardlabelsCI">Professional Detals</p>
                        <hr />
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Company Name</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.CompanyName
                                ? customerdetailedData.CompanyName
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Industry</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.Industry
                                ? customerdetailedData.Industry
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Position</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.Position
                                ? customerdetailedData.Position
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Website</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {" "}
                              {customerdetailedData.ProfileWebsite
                                ? customerdetailedData.ProfileWebsite
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={5}>
                            <p className="pdetailsheading">Linkedin</p>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={6}>
                            <p className="pdetailscolor">
                              {customerdetailedData.Linkedin
                                ? customerdetailedData.Linkedin
                                : "N/A"}
                            </p>
                          </Col>
                        </Row>
                      </div>
                      {/* end */}
                    </Col>
                  </Row>
                </Card>
                <Card>
                  <div>
                    <Row className="mt-2  ">
                      <Col md={3}>
                        <p className="cardlabelsCI userbookingmargin">
                          User Bookings
                        </p>
                      </Col>
                      <Col md={4}></Col>
                      <Col md={5}>
                        <Nav tabs className="nav-tabs-custom nav-justified">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: activeTabJustify === "1",
                              })}
                              onClick={() => {
                                toggleCustomJustified("1");
                              }}
                            >
                              <span className="d-none d-sm-block">Active</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: activeTabJustify === "2",
                              })}
                              onClick={() => {
                                toggleCustomJustified("2");
                              }}
                            >
                              <span className="d-none d-sm-block">
                                Scheduled
                              </span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: activeTabJustify === "3",
                              })}
                              onClick={() => {
                                toggleCustomJustified("3");
                              }}
                            >
                              <span className="d-none d-sm-block">Past</span>
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTabJustify}>
                          <TabPane tabId="1" className="p-3"></TabPane>
                          <TabPane tabId="2" className="p-3">
                            {/* <Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore,
                          								</CardText>
													</Col>
												</Row> */}
                          </TabPane>
                          <TabPane tabId="3" className="p-3"></TabPane>

                          <TabPane tabId="8" className="p-3">
                            <Row>
                              <Col sm="12"></Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    {/* {userBookings ? ( */}
                    <Row>
                      <Col className="col-12 ">
                        <Card>
                          <CardBody>
                            <PaginationProvider
                              pagination={paginationFactory(pageOptions)}
                              keyField="id"
                              columns={columns}
                              data={
                                // // userBookings
                                // userBookings
                                activeTabJustify === "1"
                                  ? userActiveBookingData
                                  : activeTabJustify === "2"
                                  ? userSechduledBookigsData
                                  : activeTabJustify === "3"
                                  ? usePastBookingsData
                                  : userActiveBookingData
                              }
                            >
                              {({ paginationProps, paginationTableProps }) => (
                                <ToolkitProvider
                                  keyField="id"
                                  columns={columns}
                                  data={
                                    // userBookings
                                    activeTabJustify === "1"
                                      ? userActiveBookingData
                                      : activeTabJustify === "2"
                                      ? userSechduledBookigsData
                                      : activeTabJustify === "3"
                                      ? usePastBookingsData
                                      : userActiveBookingData
                                  }
                                  search
                                >
                                  {(toolkitProps) => (
                                    <React.Fragment>
                                      <Row className="mb-2">
                                        <Col md="4">
                                          <div className="search-box me-2 mb-2 d-inline-block">
                                            <div className="position-relative">
                                              <SearchBar
                                                {...toolkitProps.searchProps}
                                              />
                                              <i className="search-box chat-search-box" />
                                            </div>
                                          </div>
                                        </Col>
                                        <Col md="4"></Col>
                                        <Col md="4"></Col>
                                      </Row>

                                      <Row>
                                        <Col xl="12">
                                          <div className="table-responsive">
                                            <BootstrapTable
                                              hover
                                              keyField={"id"}
                                              responsive
                                              bordered={false}
                                              striped={false}
                                              defaultSorted={defaultSorted}
                                              // selectRow={selectRow}
                                              classes={
                                                "table align-middle table-nowrap"
                                              }
                                              headerWrapperClasses={
                                                "thead-light"
                                              }
                                              {...toolkitProps.baseProps}
                                              {...paginationTableProps}
                                            />
                                          </div>
                                        </Col>
                                      </Row>

                                      <Row className="align-items-md-center mt-3">
                                        <Col className="inner-custom-pagination d-flex">
                                          <span className="paginationitmes ">
                                            Items
                                          </span>
                                          <div className="d-inline">
                                            {/* <SizePerPageDropdownStandalone
                                              {...paginationProps}
                                            /> */}
                                            <ButtonDropdown
                                              isOpen={isOpen}
                                              toggle={toggle}
                                              onClick={(e) => pagelengthnum(e)}
                                            >
                                              <DropdownToggle
                                                caret
                                                color="secondary"
                                              >
                                                {pageSize}
                                              </DropdownToggle>
                                              <DropdownMenu>
                                                <DropdownItem value="1">
                                                  10
                                                </DropdownItem>
                                                <DropdownItem value="2">
                                                  30
                                                </DropdownItem>
                                                <DropdownItem />
                                                <DropdownItem value="3">
                                                  50
                                                </DropdownItem>
                                              </DropdownMenu>
                                            </ButtonDropdown>
                                          </div>
                                          <span className="paginationitmes1 ">
                                            show
                                          </span>
                                          <div className="text-md-right ms-auto">
                                            {/* <PaginationListStandalone
                                                  {...paginationProps}
                                                /> */}

                                            <Button
                                              color="secondary"
                                              className="waves-effect "
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              disabled={currentPage <= 1}
                                              onClick={() =>
                                                currentPage === 1
                                                  ? null
                                                  : changeCurrentPage(
                                                      (prev) => prev - 1
                                                    )
                                              }
                                            >
                                              <i className="dripicons-chevron-left"></i>
                                            </Button>

                                            <Button
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              color="success"
                                              className="btn-rounded waves-effect waves-light me-1 mr-2 ml-2"
                                            >
                                              {currentPage}
                                            </Button>
                                            {/* <Button
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              color="secondary"
                                              className="waves-effect"
                                              disabled={!hasNextPage}
                                              onClick={() =>
                                                changeCurrentPage(
                                                  (prev) => prev + 1
                                                )
                                              }
                                            >
                                              <i className="dripicons-chevron-right"></i>
                                            </Button> */}
                                              {activeTabJustify === "1"?
                                            <Button
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              color="secondary"
                                              className="waves-effect"
                                              disabled={!hasNextPage}
                                              onClick={() =>
                                                changeCurrentPage(
                                                  (prev) => prev + 1
                                                )
                                              }
                                            >
                                              <i className="dripicons-chevron-right"></i>
                                            </Button>
                                            :
                                            activeTabJustify === "2"?
                                          
                                            <Button
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              color="secondary"
                                              className="waves-effect"
                                              disabled={!scheduledHasNextPage}
                                              onClick={() =>
                                                changeCurrentPage(
                                                  (prev) => prev + 1
                                                )
                                              }
                                            >
                                              <i className="dripicons-chevron-right"></i>
                                            </Button>
                                            :
                                            activeTabJustify === "3"?
                                            <Button
                                              style={{
                                                marginLeft: 7,
                                                marginRight: 7,
                                              }}
                                              color="secondary"
                                              className="waves-effect"
                                              disabled={!pastHasNextPage}
                                              onClick={() =>
                                                changeCurrentPage(
                                                  (prev) => prev + 1
                                                )
                                              }
                                            >
                                              <i className="dripicons-chevron-right"></i>
                                            </Button>:null}
                                          </div>
                                        </Col>
                                      </Row>
                                    </React.Fragment>
                                  )}
                                </ToolkitProvider>
                              )}
                            </PaginationProvider>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    {/* ) : null} */}
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default CheckedinCustomerDetail;
