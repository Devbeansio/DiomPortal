import React from "react";
import "../css/MyLocationBrands.css";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
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
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../Tables/datatables.scss";
import BounceLoader from "react-spinners/BounceLoader";
import { useLocationBrands } from "./useLocationBrands";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "locationBrandName",
    text: "Name",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/locationbranddetail/${row._id}`} className="link">
        {cell}
      </Link>
    ),
  },
  {
    dataField: "locations",
    text: "Location",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const LocationBrands = () => {
  const {
    currentPage,
    pageOptions,
    locationBrandsData,
    hasNextPage,
    hasPreviousPage,
    total,
    isLoading,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  } = useLocationBrands();
  const Loader = require("react-loader");

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Row className="mb-3">
            <Col md={4}>
              <span className="locationbrandtitle  ">Location Brands</span>
            </Col>
            <Col md={5}></Col>
            <Col md={3}>
              <Link to="/CreateLocationBrand" className="list">
                <Button
                  color="success"
                  className="waves-effect waves-light mr-1  w-100"
                  block
                >
                  <span className="printbutton">
                    <span className="fas fa-plus mr-3"> </span> Add a location
                    brand
                  </span>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField="id"
                    columns={columns}
                    data={locationBrandsData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={locationBrandsData}
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col md="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="search-box chat-search-box" />
                                  </div>
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
                                    classes={"table align-middle table-nowrap"}
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row className="align-items-md-center mt-30">
                              <Col className="inner-custom-pagination d-flex">
                                <span className="paginationitmes ">Items</span>
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
                                      <DropdownItem value="1">10</DropdownItem>
                                      <DropdownItem value="2">30</DropdownItem>
                                      <DropdownItem />
                                      <DropdownItem value="3">50</DropdownItem>
                                    </DropdownMenu>
                                  </ButtonDropdown>
                                </div>
                                <span className="paginationitmes1 ">show</span>
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
                                        : changeCurrentPage((prev) => prev - 1)
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
      )}
    </>
  );
};
export default LocationBrands;
