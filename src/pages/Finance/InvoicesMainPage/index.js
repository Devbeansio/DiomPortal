import React from "react";

import "../css/InvoicesMainPage.css";
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
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import LoaderHook from "../../../hooks/loaderHook";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import BounceLoader from "react-spinners/BounceLoader";
import { Link } from "react-router-dom";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../Tables/datatables.scss";
import { useInvoices } from "./useInvoices";
const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No.",
    sort: true,
  },
  {
    dataField: "invoiceId",
    text: "Invoice ID",
    sort: true,
    formatter: (cell, row) => (
      <Link to={`/invoicesdetailpage/${row.invoiceId}`} className="link">
        {" "}
        {cell}{" "}
      </Link>
    ),
  },

  {
    dataField: "customerData",
    text: "Name",
    sort: true,
  },
  {
    dataField: "createdAt",
    text: "Date",
    sort: true,
  },
  {
    dataField: "bookingId",
    text: "Booking ID",
    sort: true,
  },
  {
    dataField: "totalPaid",
    text: "Total Paid",
    sort: true,
  },
  {
    dataField: "paymentMethod",
    text: "Payment Method",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

function InvoicesMainPage() {
  const {
    currentPage,
    pageOptions,
    Invoiceslistingdata,
    hasNextPage,
    isLoading,
    hasPreviousPage,
    total,

    pagelengthnum,
    pageSize,
    toggle,
    isOpen,

    getLocationdata,
    changeCurrentPage,
  } = useInvoices();
  const Loader = require("react-loader");
  const { loading } = LoaderHook();
  // console.log("i am api loading : ", getLocationdata.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <div>
            <Row>
              <Col md={2}>
                <h5 className="loctiontitle">Invoices</h5>
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>
          <div className="tablebgcolor">
            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={Invoiceslistingdata}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={Invoiceslistingdata}
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
        </div>
      )}
    </>
  );
}
// }

export default InvoicesMainPage;
