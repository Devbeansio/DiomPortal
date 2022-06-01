import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./css/MyInventories.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../Tables/datatables.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { useInventories } from "./useInventories";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "Resource",
    text: "Resource",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/inventorydetail/${row._id}`} className="link">
        {cell}
      </Link>
    ),
  },
  {
    dataField: "Location",
    text: "Location",
    sort: true,
  },
  {
    dataField: "ResourceType",
    text: "Resource Type",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const Inventories = () => {
  const {
    currentPage,
    pageOptions,
    resourcesData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    changeCurrentPage,
    onChangeLocationFilter,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    // resourcessearchedData,
    filter,
    // paginationProps,
  } = useInventories();
  const Loader = require("react-loader");

  return (
    <>
      {isLoading || loadingLocations ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Row className="mb-3">
            <Col md={4}>
              <span className="locationbrandtitle ml-4 ">Inventory</span>
            </Col>
            <Col md={6}></Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="tablebgcolor">
                <Row>
                  <Col md={12}>
                    <div className="container-fluid">
                      <Row>
                        <Col className="col-12">
                          <Card>
                            <CardBody>
                              <PaginationProvider
                                pagination={paginationFactory(pageOptions)}
                                keyField="id"
                                columns={columns}
                                data={resourcesData}
                              >
                                {({ paginationTableProps }) => (
                                  <ToolkitProvider
                                    keyField="id"
                                    columns={columns}
                                    data={
                                      filter !== "All"
                                        ? resourcesData
                                        : resourcesData
                                    }
                                    // data={resourcessearchedData}
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
                                              <FormGroup className="select2-container mt-2">
                                                <Select
                                                  onChange={(opt) => {
                                                    onChangeLocationFilter(
                                                      opt.value
                                                    );
                                                  }}
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
                                                headerWrapperClasses={
                                                  "thead-light"
                                                }
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
                                            <div className="d-inline ">
                                              {/* <SizePerPageDropdownStandalone
                                                {...paginationProps}
                                              /> */}

                                              <ButtonDropdown
                                                isOpen={isOpen}
                                                toggle={toggle}
                                                onClick={(e) =>
                                                  pagelengthnum(e)
                                                }
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
                                            <div className="text-md-right ms-auto ">
                                              {/* <PaginationListStandalone
                                                  className="inventoriespaginationcolor"
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
                                                  changeCurrentPage(
                                                    (prev) => prev + 1
                                                  )
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
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Inventories;
