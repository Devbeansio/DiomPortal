import React from "react";
import {
  Row,
  Col,
  FormGroup,
  CardBody,
  ModalBody,
  Modal,
  ModalHeader,
  Button,
  Card,
  Form,
} from "reactstrap";
import Switch from "react-switch";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import "../css/MyResourceDetailed.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "../../../Tables/datatables.scss";
import UseResourceTypeDetail from "./useResourceTypeDetail";

const Loader = require("react-loader");
const { SearchBar } = Search;

const ResourceDetailed = () => {
  const {
    error,
    resourceDetailes,
    setResourceDetailes,
    resourceTypes,
    locationEditTag,
    modal_static,
    setModal_static,
    resourceTypeAddMoreBlock,
    setResourceTypeAddMoreBlock,
    businesName,
    OnSymbol,
    Offsymbol,
    diomLocation,
    getresourcetypeStatusFunc,
    prices,
    selectedFiles,
    pageOptions,
    setLocationlabel,
    resourcetypeResourcesdata,
    vat,
    enableEdit,
    handellocationeditfunc,
    locationTagEditButtonfunc,
    uploadFile,
    handleAcceptedFiles,
    tog_static,
    descriptionvaulefunc,
    perminutpricfunc,
    updatelocationbranddetails,
    imagedeletedfunc,
    locationedittagfunc,
  } = UseResourceTypeDetail();

  const columns = [
    {
      dataField: "ID",
      text: "No.",
      sort: true,
    },
    {
      dataField: "ResourceType",
      text: "Name",
      sort: true,
    },
  ];

  const defaultSorted = [
    {
      dataField: "ID",
      order: "asc",
    },
  ];

  if (error) {
    return (
      <>
        {toast.error(error)}
        <ToastContainer autoClose={8000} />
      </>
    );
  } else {
    return (
      <>
        {/* {loaded || isLoading ? (
          <Loader loaded={false} className="spinner" />
        ) : ( */}
        <div className="page-content">
          <div>
            <Row className="mb-4">
              <Col md={4}>
                <Link to="/resourcetype" className="link">
                  <span className="fas fa-angle-left arrowheightwidth"></span>
                </Link>

                <span className="bookingtitle ">{resourceDetailes.Name}</span>
              </Col>
              <Col md={6}></Col>
              <Col md={2}>
                <Button
                  color="success"
                  className="waves-effect waves-light mr-1 w-100 "
                  block
                  onClick={tog_static}
                >
                  <span className=" printbutton ">Save</span>
                </Button>
              </Col>
            </Row>
          </div>
          <Card clasName="">
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
                            data={resourceTypes}
                          >
                            {({ paginationProps, paginationTableProps }) => (
                              <ToolkitProvider
                                keyField="id"
                                columns={columns}
                                data={resourceTypes}
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
                                        {/* <div>
                                          <FormGroup className="select2-container mt-2">
                                            <Select
                                              onChange={(opt) =>
                                                handeldiomlocation(opt.value)
                                              }
                                              options={diomLocation}
                                              placeholder="All Location "
                                              classNamePrefix="select2-selection"
                                            />
                                          </FormGroup>
                                        </div> */}
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
                                          <SizePerPageDropdownStandalone
                                            {...paginationProps}
                                          />
                                        </div>
                                        <span className="paginationitmes1 ">
                                          show
                                        </span>
                                        <div className="text-md-right ms-auto">
                                          <PaginationListStandalone
                                            {...paginationProps}
                                          />
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
          </Card>
          <Card className="cardpadding">
            <Row>
              <Col md={5}>
                <p className="cardtitle cardsheadings">
                  Location with {resourceDetailes.Name}
                </p>
              </Col>

              <Col md={7}></Col>
            </Row>
            <hr />
            <Row className="mb-5">
              {businesName.map((element, index) => (
                <Col md={2}>
                  <Button
                    className="disabled_label btn  btn-sm w-100 mb-3"
                    disabled
                  >
                    {/* {element.BusinessName } */}
                    {element.Name}
                  </Button>
                </Col>
              ))}
            </Row>
          </Card>

          <Card className="cardpadding">
            <Row>
              <Col md={3}>
                <p className="cardtitle cardsheadings">
                  {" "}
                  Edit Resource Details
                </p>
              </Col>

              <Col md={9}></Col>
            </Row>
            <hr />
            {/* {console.log(
              "resourcetypeResourcesdata : ",
              resourcetypeResourcesdata.visibility
            )} */}
            <Row className="mt-4">
              <Col md={3}>Resource Type (Status)</Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
            </Row>
            <Row className="mt-2">
              <Col md={3}>
                <Switch
                  onHandleColor="#16b185"
                  width={70}
                  uncheckedIcon={Offsymbol(<small>Inactive</small>)}
                  checkedIcon={OnSymbol(<small>Active</small>)}
                  onColor="#a2a2a2"
                  onChange={(e) => getresourcetypeStatusFunc(e)}
                  checked={resourcetypeResourcesdata?.visibility}
                  className="mr-1 mt-1  "
                />
              </Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
            </Row>

            <Row className="mt-4">
              <Col md={6}>
                <p className="label itemlabels">Resource Description</p>
                <div>
                  <Input
                    className="detailsinput"
                    type="textarea"
                    id="textarea"
                    onChange={descriptionvaulefunc}
                    value={
                      resourceDetailes.description
                        ? resourceDetailes.description
                        : ""
                    }
                  />
                </div>

                {/* start  */}
                <p className="label itemlabels mt-4">Select Booking Type</p>
                <Row>
                  <Col md={6}>
                    <span className="form-check mb-3">
                      <Input
                        className="form-check-input "
                        style={{
                          backgroundColor: "#03B2A5",
                          borderColor: "#08a399",
                        }}
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        checked={true}
                        disabled
                      />
                      <Label
                        className="form-check-label checklabels"
                        htmlFor="defaultCheck1"
                      >
                        Standard Booking
                      </Label>
                    </span>
                  </Col>
                  <Col md={6}>
                    <span className="form-check mb-3">
                      <Input
                        className="form-check-input"
                        style={{
                          backgroundColor: "#03B2A5",
                          borderColor: "#08a399",
                        }}
                        type="checkbox"
                        id="defaultCheck1"
                        onChange={() =>
                          setResourceDetailes({
                            ...resourceDetailes,
                            isAvailableInWnpl:
                              !resourceDetailes.isAvailableInWnpl,
                          })
                        }
                        checked={resourceDetailes.isAvailableInWnpl}
                      />

                      <Label
                        className="form-check-label checklabels"
                        htmlFor="defaultCheck1"
                      >
                        Work Now, Pay Later
                      </Label>
                    </span>
                  </Col>
                </Row>
                {/* <div>
                  <div className="form-check mb-3"> */}

                {/* </div>
                </div> */}
                {/* <div> */}
                {/* <div className="form-check mb-3"> */}

                {/* </div> */}
                {/* </div> */}
                {/* end  */}
              </Col>
              <Col md={2}></Col>
              <Col md={4}>
                {/* <p className="label itemlabels">Select Booking Type</p>
                <div>
                  <div className="form-check mb-3">
                    <Input
                      className="form-check-input "
                      style={{
                        backgroundColor: "#03B2A5",
                        borderColor: "#08a399",
                      }}
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={true}
                      disabled
                    />
                    <Label
                      className="form-check-label checklabels"
                      htmlFor="defaultCheck1"
                    >
                      Standard Booking
                    </Label>
                  </div>
                </div>
                <div>
                  <div className="form-check mb-3">
                    <Input
                      className="form-check-input"
                      style={{
                        backgroundColor: "#03B2A5",
                        borderColor: "#08a399",
                      }}
                      type="checkbox"
                      id="defaultCheck1"
                      onChange={() =>
                        setResourceDetailes({
                          ...resourceDetailes,
                          isAvailableInWnpl:
                            !resourceDetailes.isAvailableInWnpl,
                        })
                      }
                      checked={resourceDetailes.isAvailableInWnpl}
                    />

                    <Label
                      className="form-check-label checklabels"
                      htmlFor="defaultCheck1"
                    >
                      Work Now, Pay Later
                    </Label>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Card>

          <Card className="cardpadding">
            <Row>
              <Col md={3}>
                <p className="cardtitle"> Edit Pricing</p>
              </Col>

              <Col md={9}></Col>
            </Row>
            <hr />
            <Row className="mt-2">
              <Col md={4}>
                <p className="pricinglabel">Select Charges for each minute</p>
                <Input
                  className="mb-2"
                  onChange={perminutpricfunc}
                  value={resourceDetailes.perMinuteMinutePrice}
                ></Input>
              </Col>

              {prices &&
                prices.map((price) => (
                  <Col md={4}>
                    <p className="pricinglabel "> {price.name}</p>
                    <Input className="mb-2" value={price.price} />
                  </Col>
                ))}
            </Row>
            <Row>
              <Col md={2} className="pricinglabel mt-5 mb-3">
                VAT
              </Col>

              <Col md={10}></Col>
            </Row>
            <Row className="mb-5">
              {vat &&
                vat.map((vat) => (
                  <Col md={12}>
                    <Input value={vat.Vat}></Input>
                  </Col>
                ))}
            </Row>
          </Card>

          <Card className="cardpadding ">
            <p className="cardtitle">Edit {resourceDetailes.Name} Images</p>
            <hr />

            <div>
              {resourceDetailes.images
                ? resourceDetailes.images.map((e) => {
                    return (
                      <>
                        <Row>
                          <Col md={4}>
                            <Form className="dropzone">
                              <Dropzone
                                // onDrop={(acceptedFiles) => {
                                //   // handleAcceptedFiles(acceptedFiles);
                                // }}
                              >
                                {
                                ({ getRootProps, getInputProps }) => (
                                  <div>
                                    <div
                                      className="dz-message needsclick"
                                      {...getRootProps()}
                                    >
                                      {/* <input {...getInputProps()} /> */}
                                      <img
                                        src={e.imageUrl}
                                        style={{ height: 250, width: 200 }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </Dropzone>
                            </Form>
                            <div
                              className="dropzone-previews mt-3"
                              id="file-previews"
                            ></div>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={4}>
                            <FormGroup className="select2-container">
                              <Label className="locationstatus">
                                Location in the Image
                              </Label>
                              {enableEdit ? (
                                <Select
                                  value={{
                                    label: locationEditTag || e.locationName,
                                  }}
                                  onChange={(opt) =>
                                    handellocationeditfunc(opt.label, e._id)
                                  }
                                  // onChange={(opt) =>
                                  //   setLocationlabel(opt.label)
                                  // }
                                  options={diomLocation}
                                  placeholder="Select Location "
                                  classNamePrefix="select2-selection"
                                />
                              ) : (
                                <Input value={e.locationName}></Input>
                              )}
                            </FormGroup>
                          </Col>

                          <Col md={2}>
                            {enableEdit ? (
                              <Button
                                block
                                color="success"
                                className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                                onClick={locationedittagfunc}
                              >
                                Save
                              </Button>
                            ) : (
                              <Button
                                block
                                color="success"
                                className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                                // onClick={locationedittagfunc}
                                onClick={locationTagEditButtonfunc}
                              >
                                Edit
                              </Button>
                            )}
                          </Col>
                          <Col md={1}>
                            {/* //FIXME: this sections API is not ready yet */}
                            <Button
                              type="button"
                              color="dark"
                              outline
                              className="waves-effect waves-light me-1 mylocationdetailsavebtn w-100"
                              // onClick={() => imagedeletedfunc(e._id)}
                              onClick={() => imagedeletedfunc(e._id)}
                            >
                              <i className=" mdi mdi-delete  deliconsize "></i>
                            </Button>
                          </Col>
                        </Row>
                      </>
                    );
                  })
                : null}
            </div>

            {resourceTypeAddMoreBlock && (
              <span>
                <Row>
                  <Col md={4}>
                    <Form className="dropzone">
                      <Dropzone
                        accept={".jpg,.png,.jpeg"}
                        onDrop={(acceptedFiles) => {
                          handleAcceptedFiles(acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div>
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />

                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-line" />
                              </div>
                              <h5>Drop files here or click to upload.</h5>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </Form>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={4}>
                    <FormGroup className="select2-container">
                      <Label className="itemlabels">
                        Location in the image
                      </Label>
                      <Select
                        onChange={(opt) => setLocationlabel(opt.label)}
                        options={diomLocation}
                        placeholder="Select Location "
                        classNamePrefix="select2-selection"
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md={2}></Col> */}
                  <Col md={2}>
                    <Button
                      block
                      color="success"
                      className="waves-effect waves-light  mt-4 w-100"
                      onClick={uploadFile}
                      // onClick={() => {
                      //   setLocationstagsbuttonresult(true);
                      // }}
                    >
                      Save
                    </Button>

                    {/* {imglocationsincrement} */}
                  </Col>
                  <Col md={1}>
                    <Button
                      className="mt-4 w-100"
                      onClick={() => {
                        setResourceTypeAddMoreBlock(false);
                      }}
                    >
                      <i className="mdi mdi-account-cancel"></i>
                    </Button>
                  </Col>
                </Row>
              </span>
            )}

            <Row>
              <Col md={4}>
                <Button
                  color="light"
                  outline
                  className="waves-effect mr-1 addmorebuttonclass w-100"
                  block
                  onClick={() => {
                    // setValuelocationimage((prev) => [...prev]);
                    // setImglocationsincrement(imglocationsincrement + 1);
                    setResourceTypeAddMoreBlock(true);
                  }}
                >
                  <span className="dripicons-plus "></span> Add more
                </Button>
              </Col>
              <Col md={8}></Col>
            </Row>
          </Card>

          <Modal isOpen={modal_static} toggle={tog_static} centered={true}>
            <Row>
              <Col md={4}></Col>
              <Col md={7}>
                <ModalHeader toggle={() => setModal_static(false)}>
                  Save Changes?
                </ModalHeader>
              </Col>
              <Col md={1}></Col>
            </Row>

            <ModalBody>
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <p>Are you sure you want to save your changes?</p>
                </Col>
                <Col md={2}></Col>
              </Row>
              <hr />
              <Row>
                <Col md={2}></Col>
                <Col md={4}>
                  <Button
                    color="success"
                    outline
                    className="waves-effect waves-light w-100"
                    onClick={() =>
                      setModal_static(false) && toast.info("Discarded")
                    }
                  >
                    No
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    color="success"
                    className="waves-effect waves-light  w-100"
                    onClick={updatelocationbranddetails}
                  >
                    Yes
                  </Button>
                </Col>

                <Col md={2}></Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
        {/* )} */}
        <ToastContainer autoClose={8000} />
      </>
    );
  }
};

export default ResourceDetailed;
