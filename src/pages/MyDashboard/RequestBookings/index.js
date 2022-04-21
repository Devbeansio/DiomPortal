import React from "react";

import {
  Row,
  Col,
  TabContent,
  NavLink,
  NavItem,
  Input,
  Button,
  FormGroup,
  Nav,
  TabPane,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ScheduledNextPage,
} from "reactstrap";
import classnames from "classnames";
import "@vtaits/react-color-picker/dist/index.css";
import "flatpickr/dist/themes/material_blue.css";
import Select from "react-select";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../Tables/datatables.scss";
import UseRequestBookings from "./useRequestBookings";

const { SearchBar } = Search;
const Loader = require("react-loader");

const RequestBookings = () => {
  const {
    activeTabJustify,
    setLoaded,
    bookingsToday,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    revokeTextArea,
    error,
    setError,
    isLoading,
    tog_static,
    tog_static1,
    toggleCustomJustified,
    handeldiomlocation,
    textareachange,
    fetchRequestsBookings,
    fetchRevokedBookings,
    fetchPendingBookings,
    fetchPastBookings,
    fetchScheduledBookings,
    gettodaybookings,
    delRevokeBookings,
    pagelengthnum,
    locationsData,
    pageSize,
    toggle,
    isOpen,
    pageOptions,
    hasNextPage,
    currentPage,
    pastNextPage,
    ScheduledNextPage,
    pastPreviousPage,
    pastTotal,
    changeCurrentPage,
  } = UseRequestBookings();

  const Loader = require("react-loader");

  const pastcolumns = [
    {
      dataField: "id",
      text: "No.",
      sort: true,
    },
    {
      dataField: "_id",
      text: "Booking ID",
      sort: true,
      formatter: (cell, row) => (
        <Link
          to={`/bookingdetail/${row._id}/${activeTabJustify}`}
          className="link"
        >
          {cell}
        </Link>
      ),
    },
    {
      dataField: "userId",
      text: "Customer ID",
      sort: true,
      formatter: (cell, row) => (
        <Link to={`/checkedincustomerdetail/${row.userId}`} className="link">
          {" "}
          {cell}{" "}
        </Link>
      ),
    },
    {
      dataField: "userName",
      text: "Name",
      sort: true,
    },
    {
      dataField: "businessName",
      text: "Location",
      sort: true,
    },
    {
      dataField: "resourceName",
      text: "Resource",
      sort: true,
    },
    {
      // var Bookingstartend ={fromTime,"-",toTime},
      dataField: "Bookingstartend",
      text: "Booking Start/End",
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
      formatter: (cell, row) => (
        <Link to={`/invoicesdetailpage/${row.invoiceNumber}`} className="link">
          {" "}
          {cell}{" "}
        </Link>
      ),
    },
    {
      dataField: "bookingStatus",
      text: "Status",
      sort: true,
    },
    {
      dataField: "Total Paid",
      text: "Payment Method",
      sort: true,
    },
  ];

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
      formatter: (cell, row) => (
        <Link
          to={`/bookingdetail/${row._id}/${activeTabJustify}`}
          className="link"
        >
          {cell}
        </Link>
      ),
    },
    {
      dataField: "userId",
      text: "Customer ID",
      sort: true,
      formatter: (cell, row) => (
        <Link to={`/checkedincustomerdetail/${row.userId}`} className="link">
          {" "}
          {cell}{" "}
        </Link>
      ),
    },
    {
      dataField: "userName",
      text: "Name",
      sort: true,
    },
    {
      dataField: "businessName",
      text: "Location",
      sort: true,
    },
    {
      dataField: "resourceName",
      text: "Resource",
      sort: true,
    },
    {
      dataField: "Bookingstartend",
      text: "Booking Start/End",
      sort: true,
    },
    {
      dataField: "bookingType",
      text: "Booking Type",
      sort: true,
    },

    {
      dataField: "timeLogs",
      text: "Check-in Time",
      sort: true,
    },
    {
      // dataField: "bookingStatus",
      text: "Status",
      sort: true,
      formatter: (cell, row) =>
        row.bookingType === "Standard" ? (
          <Button
            className="w-100"
            color="danger"
            size="sm"
            block
            onClick={() => {
              tog_static(row._id);
            }}
          >
            Revoke
            {cell}
          </Button>
        ) : null,
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

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
              <Row>
                <Col md={2}>
                  <h5 className="Bookingstitle">Bookings </h5>
                </Col>
                <Col md={8}></Col>
                <Col md={2} className=""></Col>
              </Row>
            </div>

            <div className="tablebgcolor mt-3">
              <div>
                <Row>
                  <Col md={8}>
                    <Nav tabs className="nav-tabs-custom nav-justified">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "1",
                          })}
                          onClick={() => {
                            gettodaybookings();
                            toggleCustomJustified("1");
                          }}
                        >
                          <span className="d-none d-sm-block">Todays</span>
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
                            fetchRequestsBookings();
                          }}
                        >
                          <span className="d-none d-sm-block">Requests</span>
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
                            fetchScheduledBookings();
                          }}
                        >
                          <span className="d-none d-sm-block">Scheduled</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "4",
                          })}
                          onClick={() => {
                            toggleCustomJustified("4");
                            fetchRevokedBookings();
                          }}
                        >
                          <span className="d-none d-sm-block">Revoked</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "5",
                          })}
                          onClick={() => {
                            toggleCustomJustified("5");
                            fetchPendingBookings();
                          }}
                        >
                          <span className="d-none d-sm-block">Pending</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "6",
                          })}
                          onClick={() => {
                            toggleCustomJustified("6");
                            fetchPastBookings();
                          }}
                        >
                          <span className="d-none d-sm-block">Past</span>
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTabJustify}>
                      <TabPane tabId="1" className="p-3"></TabPane>
                      <TabPane tabId="2" className="p-3"></TabPane>
                      <TabPane tabId="3" className="p-3"></TabPane>
                      <TabPane tabId="4" className="p-3"></TabPane>
                      <TabPane tabId="5" className="p-3"></TabPane>
                      <TabPane tabId="6" className="p-3">
                        {/* <Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore,
                          								</CardText>
													</Col>
												</Row> */}
                      </TabPane>
                      <TabPane tabId="7" className="p-3"></TabPane>
                    </TabContent>
                  </Col>
                  <Col md={4}></Col>
                </Row>
              </div>
              <Row>
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      {/* //TODO: */}
                      {/* //experinemt start */}
                      {activeTabJustify === "6" ? (
                        <PaginationProvider
                          // key={(Math.random()*1000).toString()}
                          pagination={paginationFactory(pageOptions)}
                          keyField="id"
                          columns={pastcolumns}
                          data={bookingsToday}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <ToolkitProvider
                              // key={(Math.random()*1000).toString()}
                              keyField="id"
                              columns={pastcolumns}
                              data={bookingsToday}
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
                                    <Col md="4">
                                      {/* <FormGroup className="mb-4">
                                        <InputGroup>
                                          <Flatpickr
                                            className="form-control d-block"
                                            placeholder="Start Date - End Date"
                                            options={{
                                              mode: "range",
                                              dateFormat: "Y-m-d",
                                              // dateFormat:"YYYY-MM-DD HH:MM"
                                            }}
                                            onChange={(e) => {
                                              datePickerFunc(e);
                                            }}
                                          />
                                        </InputGroup>
                                      </FormGroup> */}
                                    </Col>
                                    <Col md="4 " className="dropdowncss">
                                      <div>
                                        <FormGroup className="select2-container ">
                                          <Select
                                            onChange={(opt) =>
                                              handeldiomlocation(opt.value)
                                            }
                                            // options={diomLocation}
                                            options={locationsData}
                                            placeholder="All Location"
                                            classNamePrefix="select2-selection"
                                          />
                                        </FormGroup>
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className="">
                                    <Col xl="12">
                                      <div className="table-responsive">
                                        <BootstrapTable
                                          hover
                                          keyField={"id"}
                                          responsive
                                          bordered={false}
                                          striped={false}
                                          defaultSorted={defaultSorted}
                                          classes={
                                            "table align-middle table-nowrap"
                                          }
                                          headerWrapperClasses={"thead-light"}
                                          {...toolkitProps.baseProps}
                                          {...paginationTableProps}
                                        />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className=" align-items-md-center mt-3">
                                    <Col className="inner-custom-pagination d-flex ">
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
                                          <i class="dripicons-chevron-left"></i>
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
                                        <Button
                                          style={{
                                            marginLeft: 7,
                                            marginRight: 7,
                                          }}
                                          color="secondary"
                                          className="waves-effect"
                                          disabled={
                                            activeTabJustify === "1"
                                              ? !hasNextPage
                                              : activeTabJustify === "6"
                                              ? !pastNextPage
                                              : activeTabJustify === "3"
                                              ? !ScheduledNextPage
                                              : null
                                          }
                                          onClick={() =>
                                            changeCurrentPage(
                                              (prev) => prev + 1
                                            )
                                          }
                                        >
                                          <i class="dripicons-chevron-right"></i>
                                        </Button>
                                      </div>
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              )}
                            </ToolkitProvider>
                          )}
                        </PaginationProvider>
                      ) : (
                        // TODO: MID

                        <PaginationProvider
                          // key={(Math.random()*1000).toString()}
                          pagination={paginationFactory(pageOptions)}
                          keyField="id"
                          // activeTabJustify === "6"? columns={pastcolumns}:
                          columns={columns}
                          data={bookingsToday}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <ToolkitProvider
                              // key={(Math.random()*1000).toString()}
                              keyField="id"
                              columns={columns}
                              data={bookingsToday}
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
                                    <Col md="4">
                                      <div>
                                        {/* <FormGroup className="mb-4">
                                          <InputGroup>
                                            <Flatpickr
                                              className="form-control d-block"
                                              placeholder="Start Date - End Date"
                                              onChange={(e) => {
                                                datePickerFunc(e);
                                              }}
                                              options={{
                                                mode: "range",
                                                dateFormat: "Y-m-d",
                                                // dateFormat:"YYYY-MM-DD HH:MM"
                                              }}
                                            />
                                          </InputGroup>
                                        </FormGroup> */}
                                      </div>
                                    </Col>
                                    <Col md="4" className="dropdowncss">
                                      <div>
                                        <FormGroup className="select2-container ">
                                          <Select
                                            onChange={(opt) =>
                                              handeldiomlocation(opt.value)
                                            }
                                            // options={diomLocation}
                                            options={locationsData}
                                            placeholder="All Location"
                                            classNamePrefix="select2-selection"
                                          />
                                        </FormGroup>
                                      </div>
                                    </Col>
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
                                          classes={
                                            "table align-middle table-nowrap"
                                          }
                                          headerWrapperClasses={"thead-light"}
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
                                          <i class="dripicons-chevron-left"></i>
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
                                        <Button
                                          style={{
                                            marginLeft: 7,
                                            marginRight: 7,
                                          }}
                                          color="secondary"
                                          className="waves-effect"
                                          disabled={
                                            activeTabJustify === "1"
                                              ? !hasNextPage
                                              : activeTabJustify === "6"
                                              ? !pastNextPage
                                              : activeTabJustify === "3"
                                              ? !ScheduledNextPage
                                              : null
                                          }
                                          onClick={() =>
                                            changeCurrentPage(
                                              (prev) => prev + 1
                                            )
                                          }
                                        >
                                          <i class="dripicons-chevron-right"></i>
                                        </Button>
                                      </div>
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              )}
                            </ToolkitProvider>
                          )}
                        </PaginationProvider>
                      )}
                      {/* experiment end */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>

            <Modal
              isOpen={modal_static}
              toggle={() => {
                tog_static();
              }}
              centered={true}
            >
              <Row>
                <Col md={4}></Col>
                <Col md={7}>
                  <ModalHeader toggle={() => setModal_static(false)}>
                    Revoke Booking
                  </ModalHeader>
                </Col>
                <Col md={1}></Col>
              </Row>

              <ModalBody>
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <p>Are you sure you want to revoke this Booking?</p>
                  </Col>
                  <Col md={2}></Col>
                </Row>
                <hr />
                <Row>
                  <Col md={2}></Col>

                  <Col md={4}>
                    <Button
                      color="success"
                      outline
                      className="waves-effect waves-light w-100"
                      onClick={() => setModal_static(false)}
                    >
                      No
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      color="success"
                      className="waves-effect waves-light  w-100"
                      // onClick={updateNameAndDescription}
                      onClick={() => {
                        setModal_static(false);
                        tog_static1();
                      }}
                    >
                      Yes
                    </Button>
                  </Col>

                  <Col md={2}></Col>
                </Row>
              </ModalBody>
            </Modal>
            <div>
              <Modal
                isOpen={modal_static1}
                toggle={tog_static1}
                centered={true}
              >
                <Row>
                  <Col md={4}></Col>
                  <Col md={7}>
                    <ModalHeader toggle={() => setModal_static1(false)}>
                      Revoke Booking
                    </ModalHeader>
                  </Col>
                  <Col md={1}></Col>
                </Row>

                <ModalBody>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                      <p>Why are you revoking this booking?</p>

                      <div className="mt-3">
                        <Input
                          className="detailsinput"
                          rows="5"
                          type="textarea"
                          id="textarea"
                          onChange={(e) => textareachange(e)}
                          // value={
                          //   brandDetail.description ? brandDetail.description : ""
                          // }
                        />
                      </div>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={2}></Col>

                    <Col md={4}>
                      <Button
                        color="success"
                        outline
                        className="waves-effect waves-light w-100"
                        onClick={() => setModal_static1(false)}
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col md={4}>
                      {revokeTextArea ? (
                        <Button
                          color="success"
                          className="waves-effect waves-light  w-100"
                          // onClick={updateNameAndDescription}
                          onClick={delRevokeBookings}
                        >
                          Revoke
                        </Button>
                      ) : (
                        <Button
                          disabled
                          color="success"
                          className="waves-effect waves-light  w-100"
                          // onClick={updateNameAndDescription}
                          onClick={delRevokeBookings}
                        >
                          Revoke
                        </Button>
                      )}
                    </Col>

                    <Col md={2}></Col>
                  </Row>
                </ModalBody>
              </Modal>
            </div>
          </div>
        )}
      </>
    );
  }
};
export default RequestBookings;
