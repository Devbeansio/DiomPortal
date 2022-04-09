import React, { useState, useEffect } from "react";

import "./css/MyLocation.css";
import {
  Row,
  Col,
  FormGroup,
  CardBody,
  Card,
  Tooltip,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Select from "react-select";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../Tables/datatables.scss";
import { useLocationsListing } from "./useLocations";
import BounceLoader from "react-spinners/BounceLoader";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "locationTitle",
    text: "Location",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/locationdetailed/${row._id}`} className="link">
        {" "}
        {cell}{" "}
      </Link>
    ),
  },
  {
    dataField: "locationType",
    text: "Location Type",
    sort: true,
  },
  {
    dataField: "city",
    text: "City",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const Locations = () => {
  const {
    currentPage,
    pageOptions,
    locationLisitngData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    filter,
    searchedlocationLisitngData,
    handeldiomlocation,
    changeCurrentPage,
  } = useLocationsListing();
  const Loader = require("react-loader");

  const [ttright, setTtright] = useState();

  return (
    <>
      {isLoading || loadingLocations ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <div>
            <Row>
              <Col md={2}>
                <h5 className="loctiontitle">Locations</h5>
              </Col>
              <Col md={1}>
                <div className="button-items">
                  <Tooltip
                    fade={true}
                    flip={true}
                    placement="right"
                    isOpen={ttright}
                    variant="success"
                    target="TooltipRight"
                    toggle={() => setTtright(!ttright)}
                  >
                    <p>
                      Make Sure to add a "Location Brand" to any location add or
                      edit.A Location will only Appear on app if it has a
                      location brand.
                    </p>
                  </Tooltip>
                  {/* <Button type="button"  color="secondary"
                        className="btn-rounded waves-effect sm" id="TooltipRight"> i</Button> */}
                  <li className="fas fa-info-circle " id="TooltipRight"></li>
                </div>
              </Col>
              <Col md={7}></Col>
              <Col md={2} className="">
                {" "}
              </Col>
            </Row>
          </div>
          <div className="tablebgcolor mt-3">
            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={locationLisitngData}
                      className=""
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={
                            filter !== "All"
                              ? locationLisitngData
                              : searchedlocationLisitngData
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
                                <Col md="4 dropdowncss">
                                  <div>
                                    <FormGroup className="select2-container mt-2  ">
                                      <Select
                                        onChange={(opt) =>
                                          handeldiomlocation(opt.value)
                                        }
                                        options={locationsData}
                                        placeholder="All Location Types"
                                        classNamePrefix="select2-selection "
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
          <ToastContainer autoClose={8000} />
        </div>
      )}
    </>
  );
};
export default Locations;
