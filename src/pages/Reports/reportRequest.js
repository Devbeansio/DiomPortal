import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  TabContent,
  NavLink,
  NavItem,
  Nav,
  TabPane,
  Input,
  CardBody,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";
import classnames from "classnames";
import Select from "react-select";
import "./css/reportRequest.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import useReportRequest from "./useReportRequest";
import UseReports from "./useReports";

const products = [
  {
    id: 1,
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    startdate: "2008/11/28",
    salary: "$162,700",
  },

  {
    id: 2,
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: "47",
    startdate: "2009/10/09",
    salary: "$1,200,000",
  },

  {
    id: 3,
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    startdate: "2009/01/12",
    salary: "$86,000",
  },

  {
    id: 4,
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    startdate: "2012/10/13",
    salary: "$132,000",
  },

  {
    id: 5,
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    startdate: "2011/06/07",
    salary: "$206,850",
  },
];

const ReportRequest = () => {
  const {
    reportTypeOptions,
    currentPage,
    pageSize,
    retryFunc,
    downloadFunc,
    pastReportsDataa,
    newOldReportsData,
    setNewOldReportsData,
    newReportsDataa,
    isLoading,
    reportTyperequestFunc,
    pastHasNextPage,
    pagelengthnum,
    pastTotal,
    pastHasPreviousPage,
    pastReportsRefteh,
    newHasNextPage,
    newHasPreviousPage,
    newTotal,
    newReportsRefteh,
    changeCurrentPage,
    toggle,
    isOpen,
    pageOptions,
    activeTabJustify, setActiveTabJustify
    
  } = useReportRequest();
  // const pastReportData = pastReportsDataa?.data;

  

  const { SearchBar } = Search;
  const Loader = require("react-loader");
  // const changeCurrentPage = 1;

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      
    },
   
    {
      dataField: "reportType",
      text: "Report Type",
      sort: true,
      // style: { width: "10%" },
      
    },
    {
      dataField: "locationBrands",
      text: "Brand(s)",
      sort: true,
      // style: { width: "15%" },
    },
    {
      dataField: "business",
      text: "Location(s)",
      sort: true,
      style: { width: "30%" },
    },
    {
      dataField: "resourceTypes",
      text: "Resource Type(s)",
      sort: true,
      style: { width: "40%" },
      
     
    },
    {
      dataField: "timeSlots",
      text: "Time Slot",
      sort: true,
      
      style: { width: "20%" },
    },
    {
      dataField: "timeRangeTotal",
      text: "Date Range",
      sort: true,
      style: { width: "20%" },
     
    },
    {
      dataField: "download",
      text: "Download",
      sort: true,
      // style: { width: "15%" },
      formatter: (cell, row) => (
        <a href={row.fileUrl} download>
          <div>
            <Button
              className="w-100"
              color="success"
              size="sm"
              block
              onClick={() => {
                downloadFunc(row.id);
              }}
            >
              Download
              {cell}
            </Button>
          </div>
        </a>
      ),
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

 
  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };
  return (
    <div className="page-content">
    
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div>
          <p className="reporttitlecss">Reports</p>

          <Row>
            <Col md={12}>
              <Card>
                <Row>
                  <Col md={3}>
                    <Nav tabs className="nav-tabs-custom nav-justified">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "1",
                          })}
                          onClick={() => {
                            toggleCustomJustified("1");
                            // setNewOldReportsData(pastReportsDataa);
                            // getUseractivebookings();
                          }}
                        >
                          <span className="d-none d-sm-block reportlinktitle">
                            New
                          </span>
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
                          <span className="d-none d-sm-block reportlinktitle">
                          Past
                          </span>
                        </NavLink>
                      </NavItem>
                     
                    </Nav>
                  </Col>
                  <Col md={3}></Col>
                  <Col md={3}></Col>
                  <Col md={3}></Col>
                </Row>

                <TabContent activeTab={activeTabJustify}>
                  <TabPane tabId="1" className="p-3"></TabPane>
                  <TabPane tabId="2" className="p-3"></TabPane>
                  <TabPane tabId="3" className="p-3"></TabPane>
                </TabContent>
                {/* </Card>
        </Col>
      </Row> */}
                <Row>
                  <Col md={3}>
                    <Select
                      // value={this.selectedGroup}
                      // onChange={(opt) => this.changeLocationBrand(opt.value)}
                      classNamePrefix="select2-selection"
                      className="reportinputmargin"
                      options={reportTypeOptions}
                      onChange={(opt) => reportTyperequestFunc(opt)}
                      // options={this.state.diomBrand}
                    />
                  </Col>
                  <Col md={1}></Col>
                  <Col md={3} className="reportcreactedinputcss ">
                    <span className="reportcreatedon ">Created on:</span>
                    {/* </Col>
              <Col md={3}> */}
                    <Input
                      type="date"
                      defaultValue="2020-03-22"
                      id="example-date-input"
                      className="reportinputcss"
                      style={{ width: 140 }}
                      // onChange={(e) => {
                      //   startdateFunc(e);
                      // }}
                    />
                  </Col>
                  <Col md={3}></Col>
                  <Col md={2}></Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Card>
                      <CardBody>
                       
                          <div>
                            <PaginationProvider
                              pagination={paginationFactory(pageOptions)}
                              keyField="id"
                              columns={columns}
                              data={
                                activeTabJustify === "2"
                                  ? pastReportsDataa
                                  : activeTabJustify === "1"
                                  ? newReportsDataa
                                  : null
                              }
                            >
                              {({ paginationProps, paginationTableProps }) => (
                                <ToolkitProvider
                                  keyField="id"
                                  columns={columns}
                                  data={
                                    activeTabJustify === "2"
                                      ? pastReportsDataa
                                      : activeTabJustify === "1"
                                      ? newReportsDataa
                                      : null
                                  }
                                  search
                                >
                                  {(toolkitProps) => (
                                    <React.Fragment>
                                      <Row className="mb-2">
                                        <Col md="4"></Col>
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
                                                "table align-middle "
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
                                  
                                    <ButtonDropdown
                                      isOpen={isOpen}
                                      toggle={toggle}
                                      onClick={(e) => pagelengthnum(e)}
                                    >
                                      <DropdownToggle caret color="secondary">
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
                                   {activeTabJustify === "2"?
                                    <Button
                                      style={{
                                        marginLeft: 7,
                                        marginRight: 7,
                                      }}
                                      color="secondary"
                                      className="waves-effect"
                                      // disabled={!pastHasNextPage}
                                      // disabled={activeTabJustify === "1"? !newHasNextPage:activeTabJustify === "2"?!pastHasNextPage:!pastHasNextPage}
                                      disabled={ !pastHasNextPage}
                                      onClick={() =>
                                        changeCurrentPage((prev) => prev + 1)
                                      }
                                    >
                                      <i className="dripicons-chevron-right"></i>
                                    </Button>:activeTabJustify === "1"?
                                     <Button
                                     style={{
                                       marginLeft: 7,
                                       marginRight: 7,
                                     }}
                                     color="secondary"
                                     className="waves-effect"
                                     // disabled={!pastHasNextPage}
                                     // disabled={activeTabJustify === "1"? !newHasNextPage:activeTabJustify === "2"?!pastHasNextPage:!pastHasNextPage}
                                     disabled={ !newHasNextPage}
                                     onClick={() =>
                                       changeCurrentPage((prev) => prev + 1)
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
                          </div>
                       
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ReportRequest;
