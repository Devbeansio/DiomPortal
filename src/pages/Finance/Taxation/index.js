import React from "react";
import {
  Row,
  Col,
  Card,
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
} from "react-bootstrap-table2-paginator";
import ClipLoader from "react-spinners/BounceLoader";

import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../Tables/datatables.scss";
import { useTaxation } from "./useTaxation";
import LoaderHook from "../../../hooks/loaderHook";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "Name",
    text: "Name",
    sort: true,
  },

  {
    dataField: "Rate",
    text: " Tax(%)",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const Taxation = () => {
  const {
    currentPage,
    pageOptions,
    isLoading,
    hasNextPage,
    taxationData,
    pagelengthnum,
    pageSize,
    toggle,
    isOpen,
    changeCurrentPage,
  } = useTaxation();
  const Loader = require("react-loader");
  const { loading } = LoaderHook();
  console.log("tax loader : ", loading);

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        // <ClipLoader color="green" loading={loading} size={150} />
        <div className="page-content">
          <Row className="mb-3">
            <Col md={3}>
              <Link to={`/finance`} className="link">
                {" "}
                <span className="fas fa-angle-left arrowheightwidth"></span>
              </Link>

              <span className=" bookingtodaytitle ml-4">Taxation</span>
            </Col>
            <Col md={9}></Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField="id"
                    columns={columns}
                    data={taxationData}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        columns={columns}
                        data={taxationData}
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

                            <Row className="align-items-md-center mt-30 mt-3">
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
                                    {...paginationProps} */}
                                  {/* /> */}

                                  <Button
                                    color="secondary"
                                    className="waves-effect "
                                    style={{ marginLeft: 7, marginRight: 7 }}
                                    disabled={currentPage <= 1}
                                    onClick={() =>
                                      currentPage === 1
                                        ? null
                                        : changeCurrentPage((prev) => prev - 1)
                                    }
                                  >
                                    {" "}
                                    <i class="dripicons-chevron-left"></i>
                                  </Button>

                                  <Button
                                    style={{ marginLeft: 7, marginRight: 7 }}
                                    color="success"
                                    className="btn-rounded waves-effect waves-light me-1 mr-2 ml-2"
                                  >
                                    {currentPage}
                                  </Button>
                                  <Button
                                    style={{ marginLeft: 7, marginRight: 7 }}
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

export default Taxation;
