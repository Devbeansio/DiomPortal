import React from "react";
import "../css/CheckedinCustomer.css";
import {
  Row,
  Col,
  CardBody,
  Card,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../Tables/datatables.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { useCheckedInCustomer } from "./useCheckedInCustomer";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: " No.",
    sort: true,
  },

  {
    dataField: "fullName",
    text: "Name",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/checkedincustomerdetail/${row._id}`} className="link">
        {cell}
      </Link>
    ),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "currentBookingId",
    text: "Booking ID",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/bookingdetail/${row.currentBookingId}/1`} className="link">
        {cell}
      </Link>
    ),
  },
  {
    dataField: "currentbookingType",
    text: "Booking Type",
    sort: true,
  },
  {
    dataField: "checkInTime",
    text: "Recent Checkin",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const CheckedinCustomer = () => {
  const {
    currentPage,
    pageOptions,
    customerCheckInData,
    hasNextPage,
    hasPreviousPage,
    total,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    isLoading,
    handeldiomlocation,
    diomLocation,
    locationsData,
    changeCurrentPage,
  } = useCheckedInCustomer();
  const Loader = require("react-loader");

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <div>
            <Row>
              <Col md={5}>
                <Link to={`/mydashboard`} className="link">
                  {" "}
                  <span className="fas fa-angle-left arrowheightwidth"></span>{" "}
                </Link>

                <span className="cehckincustomertitle">
                  Checked in customers
                </span>
              </Col>
              <Col md={7}></Col>
            </Row>
          </div>
          <div className="">
            <Row>
              <Col className="col-12 mt-3">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={customerCheckInData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={customerCheckInData}
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
                                <Col md="4">
                                  <div>
                                    <FormGroup className="select2-container ">
                                      <Select
                                        onChange={(opt) =>
                                          handeldiomlocation(opt.value)
                                        }
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
                                  <div className="table-responsive ">
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
                                      <i className="dripicons-chevron-right"></i>
                                    </Button>
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
          </div>
        </div>
      )}
    </>
  );
};

export default CheckedinCustomer;
