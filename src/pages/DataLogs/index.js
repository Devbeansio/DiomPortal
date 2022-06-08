import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row ,DropdownToggle,ButtonDropdown,
  DropdownMenu,
  DropdownItem,} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import moment from "moment";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Select from "react-select";
import UseDataLogs from "./useDataLogs";

import {  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { style } from "@mui/system";


const { SearchBar } = Search;

// const pageOptions = "1"
const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];




const DataLogs = () => {
  const {logsData,modal_static,isOpen,pageSize,changeCurrentPage,hasNextPage, setModal_static,toggle,tog_static,logdetialsfunc,logsDataDetail,currentPage,pageOptions,pagelengthnum} = UseDataLogs()
  const Loader = require("react-loader");
  // const logsDataa = logsData?.data;

  const columns = [
    {
      dataField: "createdAt",
      text: "Log Date,time",
      sort: true,
      formatter: (cell, row) => (
         moment(
          cell
        ).format("DD-MM-YYYY  hh:mm")
      
      )
    },
    {
      dataField: "transactioStatus",
      text: "Status",
      sort: true,
      formatter: (cell, row) => (
        
        row.transactioStatus === "SUCCESS"? (
  //  {    const aaa =   cell.split(' ').map(function(word,index){
           
  //           if(index == 0){
  //             return word.toLowerCase();
  //           }
            
  //           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  //         }).join('')
  //   }
        
        
        

          <p style={{color:"green", marginTop:15}}>{cell.toLowerCase()}</p>
        
        ):( <p style={{color:"red"}}>{cell.toLowerCase()}</p>)
      ),
    },
  
    {
      dataField: "hyperPayMessage",
      text: "Log description",
      sort: true,
      formatter: (cell, row) => (
        <span style={{cursor: "pointer" }}  onClick={()=>  logdetialsfunc(row.id)}>{cell}</span> 
       
      ),
    },
  ];
  

  return (
    <div className="page-content">
      {/* {console.log("logsData : ",logsData?.data)} */}
      {!logsData ? (
          <Loader loaded={false} className="spinner" />
        ) : (
          <div>
      <div>
        <Row>
          <Col md={5}>
            <Link to={`/mydashboard`} className="link">
              <span className="fas fa-angle-left arrowheightwidth"></span>
            </Link>

            <span className="cehckincustomertitle">Logs</span>
          </Col>
          <Col md={7}></Col>
        </Row>
      </div>
      <Card className="mt-3 p-3">
        <Row>
          <Col md={12}>

          <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField="id"
                    columns={columns}
                    data={logsData }
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        columns={columns}
                      
                        data={logsData}
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2 mt-2">
                              <Col md={3}>
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="search-box chat-search-box" />
                                  </div>
                                </div>
                              </Col>
                              <Col md={1}></Col>
                              <Col md={4}>
                              <div>
                                    <FormGroup className="select2-container   ">
                                      <Select
                                        // onChange={(opt) =>
                                        //   handeldiomlocation(opt.value)
                                        // }
                                        // options={locationsData}
                                        placeholder="Status-All"
                                        classNamePrefix="select2-selection "
                                      />
                                    </FormGroup>
                                  </div>
                              </Col>
                              {/* <Col md={2}><Button onClick> abc</Button></Col> */}
                              <Col md={2}></Col>
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
                                    <i className="dripicons-chevron-left"></i>
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

          </Col>
        </Row>
      </Card>
      <div>
      <Modal isOpen={modal_static} toggle={tog_static} centered={true}>
          <Row>
            <Col md={4}></Col>
            <Col md={7}>
              <ModalHeader toggle={() => setModal_static(false)}>
                Logs
              </ModalHeader>
            </Col>
            <Col md={1}></Col>
          </Row>

          <ModalBody>
          <Row>
             
             <Col md={3}><b>ID</b></Col>
             <Col md={9}>
             {logsDataDetail?.id}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>
            <Row>
             
              <Col md={3}><b>Message</b></Col>
              <Col md={9}>
              {logsDataDetail?.message}
              </Col>
              {/* <Col md={2}></Col> */}
            </Row>

            <Row>
             
             <Col md={3}><b>LogType</b></Col>
             <Col md={9}>
             {logsDataDetail?.logType}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>InvoiceId</b></Col>
             <Col md={9}>
             {logsDataDetail?.invoiceId}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>UserId</b></Col>
             <Col md={9}>
             {logsDataDetail?.userId}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Transaction Status</b></Col>
             <Col md={9}>
             {logsDataDetail?.transactioStatus}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Status Code</b></Col>
             <Col md={9}>
             {logsDataDetail?.hyperPayStatusCode}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>HP Message</b></Col>
             <Col md={9}>
             {logsDataDetail?.hyperPayMessage}
             </Col>
          
           </Row>

           <Row>
             
             <Col md={3}><b>HP Id</b></Col>
             <Col md={9}>
             {logsDataDetail?.hyperPayId}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>HP Status</b></Col>
             <Col md={9}>
             {logsDataDetail?.hyperPayStatusCode}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Booking ID</b></Col>
             <Col md={9}>
             {logsDataDetail?.bookingId}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Visibility</b></Col>
             <Col md={9}>
             {logsDataDetail?.visibility}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Created At</b></Col>
             <Col md={9}>
             {
              moment(
                logsDataDetail?.createdAt
              ).format("DD-MM-YYYY   hh:mm")}
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           <Row>
             
             <Col md={3}><b>Updated At</b></Col>
             <Col md={9}>
             {
             moment(
              logsDataDetail?.updatedAt
            ).format("DD-MM-YYYY   hh:mm")
            }
             </Col>
             {/* <Col md={2}></Col> */}
           </Row>

           

          

          

         

           
            <hr />
            <Row>
              <Col md={2}></Col>

              <Col md={4}>
               
              </Col>
              <Col md={4}>
                
              </Col>

              <Col md={2}></Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
      </div>
        )}
    </div>
  );
};

export default DataLogs;
