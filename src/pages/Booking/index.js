import React, { useState, useEffect } from "react";
import moment from "moment";

import "./css/booking.css";
import { Row, Col, Card, CardBody } from "reactstrap";

// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../Tables/datatables.scss";
import { DIOM_BASED_URLS } from "../../config/url";
var Loader = require('react-loader');

const Booking = () => {
  const [bookingsToday, setBookingsToday] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const columns = [
    {
      dataField: "id",
      text: "No.",
      sort: true,
    },
    {
      dataField: "updatedAt",
      text: "Booking Date",
      sort: true,
    },
    {
      dataField: '_id',
      text: "Booking ID",
      sort: true,
      formatter: (cell, row) => (
        <Link to={`/bookingdetail/${row._id}`} className="link">
          {" "}
          {cell}{" "}
        </Link>
      ),
    },
    {
      dataField: "locationAddress",
      text: "Location",
      sort: true,
    },
    {
      dataField: "resourceName",
      text: "Resource",
      sort: true,
    },
    {
      dataField: "bookingType",
      text: "Booking Type",
      sort: true,
    },
    {
      dataField: "invoiceNumber",
      // dataField: "nexudusInvoiceNumber",
      text: "Invoice ID",
      sort: true,
    },
    {
      dataField: "totalAmount",
      text: "Total Paid",
      sort: true,
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
    totalSize: bookingsToday.length, // replace later with size(customers),
    custom: true,
  };

  const { SearchBar } = Search;

  const bookingstoday = async () => {
    setLoaded(true);
    fetch(
      `${DIOM_BASED_URLS}/admin-diom-bookings/today/${localStorage.getItem(
        "locationId"
      )}`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
      

        const mappedBookings = result.bookings.map((booking, index) => ({
          ...booking,
          id: index + 1,
          updatedAt: moment(booking.updatedAt).format("YYYY-MM-DD HH:mm"),
          _id: booking.id,
        }));
        setBookingsToday(mappedBookings);
        setLoaded(false);

        // setBookingsToday(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    (async () => {
    await  bookingstoday();
    })();
  }, []);

  return (
    <>
      {loaded?<Loader loaded={false}  className="spinner" />:

    <div className="page-content">
      
      <Row className="mb-3">
        <Col md={3}>
          <Link to={`mydashboard`} className="link">   <span className="fas fa-angle-left arrowheightwidth"></span></Link>
       
          <span className=" bookingtodaytitle ml-4">Bookings Today</span>
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
                // data={productData}
                data={bookingsToday}
              >
                {({ paginationProps, paginationTableProps }) => (
                  <ToolkitProvider
                    keyField="id"
                    columns={columns}
                    // data={productData}
                    data={bookingsToday}
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
                                // selectRow={selectRow}
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
                              <SizePerPageDropdownStandalone
                                {...paginationProps}
                              />
                            </div>
                            <span className="paginationitmes1 ">show</span>
                            <div className="text-md-right ms-auto">
                              <PaginationListStandalone {...paginationProps} />
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
      }
      </>
  );
};

export default Booking;
