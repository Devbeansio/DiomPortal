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
} from "reactstrap";
import classnames from "classnames";
import Select from "react-select";
import "./css/reportRequest.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import useReportRequest from "./generateodf/useReportRequest";

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
  const {reportTypeOptions}=  useReportRequest()
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const { SearchBar } = Search;
  const changeCurrentPage = 1;

  const columns1 = [
    {
      dataField: "id",
      text: "Report Type",
      sort: true,
    },
    {
      dataField: "name",
      text: "Brand(s)",
      sort: true,
    },
    {
      dataField: "position",
      text: "Location(s)",
      sort: true,
    },
    {
      dataField: "office",
      text: "Resource Type(s)",
      sort: true,
    },
    {
      dataField: "age",
      text: "Time Slot",
      sort: true,
    },
    {
      dataField: "startdate",
      text: "Date Range",
      sort: true,
    },
    {
      dataField: "salary",
      text: "Retry",
      sort: true,
      formatter: (cell, row ) => (
     
        <div>
          <Button
            className="w-100"
            color="success"
            size="sm"
            block
            outline
            // onClick={() => {
            //   // tog_static(row._id);
            // }}
          >
            Retry
            
          </Button>
        </div>
    
      ),
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "Report Type",
      sort: true,
    },
    {
      dataField: "name",
      text: "Brand(s)",
      sort: true,
    },
    {
      dataField: "position",
      text: "Location(s)",
      sort: true,
    },
    {
      dataField: "office",
      text: "Resource Type(s)",
      sort: true,
    },
    {
      dataField: "age",
      text: "Time Slot",
      sort: true,
    },
    {
      dataField: "startdate",
      text: "Date Range",
      sort: true,
    },
    {
      dataField: "download",
      text: "Download",
      sort: true,
      formatter: (cell, row) => (
        <div>
          <Button
            className="w-100"
            color="success"
            size="sm"
            block
            // onClick={() => {
            //   // tog_static(row._id);
            // }}
            
            
          >
            Download
            {cell}
          </Button>
        </div>
      ),
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const pageOptions = {
    sizePerPage: 10,
    totalSize: products.length, // replace later with size(customers),
    custom: true,
  };
  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };
  return (
    <div className="page-content">
    
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
                        // getUseractivebookings();
                      }}
                    >
                      <span className="d-none d-sm-block reportlinktitle">
                        Past
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
                        // fetchScheduledBookings();
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
                        active: activeTabJustify === "3",
                      })}
                      onClick={() => {
                        toggleCustomJustified("3");
                        // fetchPastBookings();
                      }}
                    >
                      <span className="d-none d-sm-block reportlinktitle">
                        Error
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
                  
                    {activeTabJustify === "3" ? (
                      <div>
                        <PaginationProvider
                          pagination={paginationFactory(pageOptions)}
                          keyField="id"
                          columns={columns1}
                          data={products}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <ToolkitProvider
                              keyField="id"
                              columns={columns1}
                              data={products}
                              search
                            >
                              {(toolkitProps) => (
                                <React.Fragment>
                                  <Row className="mb-2">
                                    <Col md="4">
                                  
                                       
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
                                          headerWrapperClasses={"thead-light"}
                                          {...toolkitProps.baseProps}
                                          {...paginationTableProps}
                                        />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className="align-items-md-center mt-30">
                                    {/* <Col className="inner-custom-pagination d-flex">
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
                                      disabled={!hasNextPage}
                                      onClick={() =>
                                        changeCurrentPage((prev) => prev + 1)
                                      }
                                    >
                                      <i class="dripicons-chevron-right"></i>
                                    </Button>
                                  </div>
                                </Col> */}
                                  </Row>
                                </React.Fragment>
                              )}
                            </ToolkitProvider>
                          )}
                        </PaginationProvider>
                      </div>
                    ) : (
                      <div>
                        <PaginationProvider
                          pagination={paginationFactory(pageOptions)}
                          keyField="id"
                          columns={columns}
                          data={products}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <ToolkitProvider
                              keyField="id"
                              columns={columns}
                              data={products}
                              search
                            >
                              {(toolkitProps) => (
                                <React.Fragment>
                                  <Row className="mb-2">
                                    <Col md="4">
                                      
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
                                          headerWrapperClasses={"thead-light"}
                                          {...toolkitProps.baseProps}
                                          {...paginationTableProps}
                                        />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className="align-items-md-center mt-30">
                                    {/* <Col className="inner-custom-pagination d-flex">
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
                                      disabled={!hasNextPage}
                                      onClick={() =>
                                        changeCurrentPage((prev) => prev + 1)
                                      }
                                    >
                                      <i class="dripicons-chevron-right"></i>
                                    </Button>
                                  </div>
                                </Col> */}
                                  </Row>
                                </React.Fragment>
                              )}
                            </ToolkitProvider>
                          )}
                        </PaginationProvider>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReportRequest;
