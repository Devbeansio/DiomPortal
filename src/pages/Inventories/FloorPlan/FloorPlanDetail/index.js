import React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  Button,
  Form,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Dropzone from "react-dropzone";
import "../css/MyFloorPlanDetail.css";
import useFloorPlanDetail from "./useFloorPlanDetail";

const FloorPlanDetail = () => {
  const {
    error,
    setError,
    modal_static,
    setModal_static,
    selectedFiles,
    setSelectedFiles,
    selectedLocation,
    setSelectedLocation,
    selectLocationName,
    setSelectLocationName,
    selectLocationNameById,
    setSelectLocationNameById,
    selectLocationNamefloorname,
    setSelectLocationNamefloorname,
    loaded,
    setLoaded,
    handleSelectGroup,
    handleAcceptedFiles,
    namefunc,
    uploadFile,
    tog_static,
    getlocations,
  } = useFloorPlanDetail();

  const Loader = require("react-loader");

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
        {loaded ? (
          <Loader loaded={false} className="spinner" />
        ) : (
          <div className="page-content">
            {/* //selectLocationNamefloorname */}
            <div>
              <Row className="mb-4">
                <Col md={4}>
                  <Link to="/floorplan" className="link">
                    <span className="fas fa-angle-left arrowheightwidth"></span>
                  </Link>
                  <span className="bookingtitle1 ">
                    {selectLocationNameById.Name
                      ? selectLocationNameById.Name
                      : null}
                  </span>
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
            <div>
              <Card className="cardcss1">
                <Row>
                  <Col md={12}>
                    <p className="itemlables1">Floorplan name</p>

                    <Input
                      type="text"
                      onChange={namefunc}
                      value={selectLocationNameById.Name}
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="itemlables1 mt-4">Floor plan</p>
                    <div>
                      <Form className="dropzone">
                        <Dropzone
                          accept={".pdf"}
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
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </Form>

                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
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

                        <Modal
                          isOpen={modal_static}
                          toggle={tog_static}
                          centered={true}
                        >
                          <Row>
                            <Col md={4}></Col>
                            <Col md={7}>
                              <ModalHeader
                                toggle={() => setModal_static(false)}
                              >
                                Floorplan addition
                              </ModalHeader>
                            </Col>
                            <Col md={1}></Col>
                          </Row>

                          <ModalBody>
                            <Row>
                              <Col md={2}></Col>
                              <Col md={8}>
                                <p>
                                  Are you sure you want to save this floorplan?
                                </p>
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
                                  onClick={() => setModal_static(false)}
                                >
                                  No
                                </Button>
                              </Col>
                              <Col md={4}>
                                <Button
                                  color="success"
                                  className="waves-effect waves-light  w-100"
                                  onClick={uploadFile}
                                >
                                  Yes
                                </Button>
                              </Col>

                              <Col md={2}></Col>
                            </Row>
                          </ModalBody>
                        </Modal>
                      </div>
                      {/* </Form> */}
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
            <div>
              {selectLocationNamefloorname.length > 0 && (
                <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                  <div className="p-2">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <img
                          data-dz-thumbnail="pdf"
                          height="80"
                          className="avatar-sm rounded bg-light"
                          // alt={selectLocationNamefloorname[0]._id}
                          // src={selectLocationNamefloorname[0].imageUrl}
                          alt="pdf"
                        />
                      </Col>
                      <Col>
                        <Link
                          to="/locations"
                          className=" link text-muted font-weight-bold "
                        >
                          {selectLocationNamefloorname[0].imageUrl}
                        </Link>
                        <p className="mb-0">
                          <strong>
                            {selectLocationNamefloorname[0].formattedSize}
                          </strong>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}
        <ToastContainer autoClose={8000} />
      </>
    );
  }
};

export default FloorPlanDetail;
