import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  FormGroup,
  CardBody,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { DIOM_BASED_URLS } from "../../../config/url";
import "../../Tables/datatables.scss";
import "react-toastify/dist/ReactToastify.css";
import { useResourceType } from "./useResourceType";
import BounceLoader from "react-spinners/BounceLoader";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },

  {
    dataField: "ResourceType",
    text: "Resource Type",
    sort: true,
    formatter: (cell, row) => (
      <Link
        to={`/resourcedetailed/${row._id}/${row.resourceTypeKey}`}
        className="link"
      >
        {" "}
        {cell}{" "}
      </Link>
    ),
  },
  {
    dataField: "locationName",
    text: "Locations",
    sort: true,
  },
  {
    dataField: "visibility",
    text: "Status",
    sort: true,
    formatter: (cell, row) => (
      row.visibility === true ?(
     <span style={{color:"#32CD32"}}>Active</span>):
     row.visibility === false ?
     (
     <span style={{color:"#808080"}}>Inactive</span>):null
    )},
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const ResourceType = () => {
  const {
    currentPage,
    pageOptions,
    resourceTypeData,
    hasNextPage,
    hasPreviousPage,
    total,
    locationsData,
    loadingLocations,
    isLoading,
    onchangeandeldiomlocation,
    changeCurrentPage,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    searchedresourceTypeData,
    filter,
  } = useResourceType();
  const Loader = require("react-loader");

  return (
    <>
      {isLoading || loadingLocations ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Row>
           
            <Col md={12}>
              <Row>
                <Col md={12}>
                  <div className="container-fluid">
                    <Row className="mb-3">
                      <Col md={4}>
                        <span className="locationbrandtitle ml-4 ">
                          Resource Type
                        </span>
                      </Col>
                      <Col md={6}></Col>
                      <Col md={2}></Col>
                    </Row>

                    <Row>
                      <Col className="col-12">
                        <Card>
                          <CardBody>
                            <PaginationProvider
                              pagination={paginationFactory(pageOptions)}
                              keyField="id"
                              columns={columns}
                              data={resourceTypeData}
                            >
                              {({ paginationProps, paginationTableProps }) => (
                                <ToolkitProvider
                                  keyField="id"
                                  columns={columns}
                                  data={
                                    filter !== "All"
                                      ? resourceTypeData
                                      : resourceTypeData
                                    // searchedresourceTypeData
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
                                        <Col md="4">
                                          <div>
                                            <FormGroup className="select2-container mt-2">
                                              <Select
                                                onChange={(opt) =>
                                                  onchangeandeldiomlocation(
                                                    opt.value
                                                  )
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
                                              disabled={!hasNextPage}
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
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
      <ToastContainer autoClose={8000} />
    </>
  );
};

export default ResourceType;
