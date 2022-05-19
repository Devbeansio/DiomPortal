import React from "react";
import Switch from "react-switch";
import "react-toastify/dist/ReactToastify.css";
import "../css/MyLocationDetailed.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  ModalBody,
  Modal,
  ModalHeader,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Select from "react-select";
import UseLocationDetailed from "./useLocationDetailed";

const Loader = require("react-loader");
const LocationDetailed = () => {
  const {
    modal_static,
    setModal_static,
    locationstite,
    setLocationstitle,
    amentiesImgUrl,
    setAmentiesImgUrl,
    isLoading,
    nearByImages,
    setNearByImages,
    selectedFiles,
    setSelectedFiles,
    selectedFiles5,
    setSelectedFiles5,
    selectedFiles2,
    setSelectedFiles2,
    simple_color,
    setSimple_color,
    emenitiesTitle,
    setEmenitiesTitle,
    locationAddMoreBlock,
    setLocationAddMoreBlock,
    nearbyAddMoreBlock,
    setNearbyAddMoreBlock,
    amenitiesAddMoreBlock,
    setAmenitiesAddMoreBlock,
    editeminitsbtn,
    setEditeminitsbtn,
    selectedLocation,
    setSelectedLocation,
    diomBrand,
    setDiomBrand,

    loaded,
    setLoaded,
    locationEditTag,
    setLocationEditTag,
    locationImgId,
    setLocationImgId,
    emenitiesstag,
    setEmenitiesstag,
    enableEdit,
    setEnableEdit,
    enableementiesEdit,
    setEnableementiesEdit,
    imentiesImgId,
    setImentiesImgId,
    Offsymbol,
    OnSymbol,
    handleAcceptedFiles,
    handleAcceptedFiles5,
    handleAcceptedFiles2,
    emenitiesedittagfunc,
    locationTagEditButtonfunc,
    emenitiesTagEditButtonfunc,
    locationedittagfunc,
    uploadfilelocationfunc,
    uploadfilenearbyfunc,
    uploadfileAmentiesfunc,
    handellocationeditfunc,
    emenitiesEditfunc,
    handellocationfunc,
    districtfunc,
    cityfunc,
    textareachange,
    tog_static,
    getlocationStatusFunc,
    getlocations,
    getdiomBrandfunc,
    updateLocationfunction,
    imagedeletedfunc,
    nearbyimagedeletedfunc,
    imagedeletedAmentiesfunc,
  } = UseLocationDetailed();
  const Loader = require("react-loader");

  return (
    <>
      {/* {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : ( */}
      <div className="page-content">
        <Row className="mb-4">
          <Col md={4}>
            <Link to="/locations" className="link">
              <span className="fas fa-angle-left arrowheightwidth"></span>
            </Link>
            <span className="bookingtitle ">{locationstite.Name}</span>
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

        <Row>
          <Col md={12}>
            <Card className=" mt-3">
              <CardBody>
                <p className="editlocationoperatintitle">
                  Edit Location Oprations
                </p>
                <hr />
                <Row>
                  <Col md={2}>
                    <p className="locationstatus">Location Status</p>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={6}>
                    {/* <p className="locationstatus">Oprational hours</p> */}
                  </Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <Switch
                      onHandleColor="#16b185"
                      width={70}
                      uncheckedIcon={Offsymbol(<small>Inactive</small>)}
                      checkedIcon={OnSymbol(<small>Active</small>)}
                      onColor="#a2a2a2"
                      onChange={(e) => getlocationStatusFunc(e)}
                      checked={locationstite.visibility}
                      className="mr-1 mt-1  "
                    />
                  </Col>
                  <Col md={4}></Col>
                  <Col md={6}></Col>
                </Row>
                <Row className="mt-4">
                  <Col md={5}>
                    <div>
                      <p className="locationstatus">City</p>
                      <Input
                        className="detailsinput"
                        onChange={cityfunc}
                        value={locationstite.city}
                      ></Input>
                      <p className="locationstatus mt-4">District</p>
                      <Input
                        className="detailsinput"
                        onChange={districtfunc}
                        value={locationstite.state}
                      ></Input>
                    </div>
                  </Col>

                  <Col md={1}></Col>
                  <Col md={6}>
                    <p className="locationstatus">Location Description</p>

                    <Input
                      className="detailsinput"
                      type="textarea"
                      id="textarea"
                      onChange={textareachange}
                      rows="5"
                      value={locationstite.description}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={12}></Col>
                </Row>
              </CardBody>
            </Card>
            <Card className=" mt-3">
              <CardBody>
                <p className="editlocationoperatintitle">
                  Edit Location Images
                </p>
                <hr />
                {/* <ShowMore maxHeight={50}> */}
                <div>
                  {locationstite.images
                    ? locationstite.images.map((e) => {
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
                                    {({ getRootProps, getInputProps }) => (
                                      <div>
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          {/* <input {...getInputProps()} /> */}
                                          <img
                                            src={e.imageUrl}
                                            alt="image"
                                            style={{
                                              height: 250,
                                              width: 200,
                                            }}
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
                                    Location Tags
                                  </Label>
                                  {enableEdit ? (
                                    <Select
                                      value={{
                                        label: locationEditTag || e.locationTag,
                                      }}
                                      onChange={(opt) =>
                                        handellocationeditfunc(opt.label, e._id)
                                      }
                                      options={diomBrand}
                                      classNamePrefix="select2-selection"
                                    />
                                  ) : (
                                    <Input value={e.locationTag}></Input>
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
                              <Col md={1} className="">
                                <Button
                                  color="dark"
                                  outline
                                  className="waves-effect waves-light me-1 mylocationdetailsavebtn "
                                  // style={{ paddingTop: 10, height: 38 }}
                                  onClick={() => imagedeletedfunc(e._id)}
                                >
                                  {/* dripicons-tag-delete */}
                                  <i class=" mdi mdi-delete  deliconsize "></i>
                                </Button>
                              </Col>
                            </Row>
                          </>
                        );
                      })
                    : null}
                </div>
                {/* </ShowMore> */}

                {locationAddMoreBlock && (
                  <div>
                    <Row>
                      <Col md={4}>
                        <Form className="dropzone">
                          <Dropzone
                            accept={".png ,.jpeg,.jpg"}
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

                                  <div className="mb-3 ">
                                    <i class="display-4 text-muted ri-upload-cloud-2-line" />
                                  </div>

                                  <h5>Drop files or click to upload</h5>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                        </Form>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedFiles.length > 0 && (
                            <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={selectedFiles[0].name}
                                      src={selectedFiles[0].preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="/locations"
                                      className=" link text-muted font-weight-bold "
                                    >
                                      {selectedFiles[0].name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>
                                        {selectedFiles[0].formattedSize}
                                      </strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )}
                        </div>
                      </Col>
                      <Col md={1}></Col>
                      <Col md={4}>
                        <FormGroup className="select2-container">
                          <Label className="locationstatus">
                            Location Tags
                          </Label>

                          <Select
                            onChange={(opt) => handellocationfunc(opt.label)}
                            options={diomBrand}
                            classNamePrefix="select2-selection"
                          />
                        </FormGroup>
                      </Col>
                      {/* {locationSaveButton ? (
                      <> */}
                      {/* <Col md={1}></Col> */}
                      <Col md={2}>
                        <Button
                          block
                          color="success"
                          className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                          onClick={uploadfilelocationfunc}
                        >
                          Save
                        </Button>
                      </Col>
                      <Col md={1}>
                        <Button
                          className="mylocationdetailsavebtn w-100"
                          onClick={() => {
                            setLocationAddMoreBlock(false);
                          }}
                        >
                          <i class="mdi mdi-account-cancel"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                )}
                <Row>
                  <Col md={4}>
                    <Button
                      color="light"
                      display={false}
                      outline
                      className="waves-effect mr-1 addmorebuttonclass  w-100 mt-2 mb-4"
                      onClick={() => {
                        setLocationAddMoreBlock(true);
                        setSelectedFiles([]);
                      }}
                      block
                    >
                      <span className="dripicons-plus "></span> Add more
                    </Button>
                  </Col>
                  <Col md={8}></Col>
                </Row>
                <Row>
                  <Col md={4}></Col>
                  <Col md={8}></Col>
                </Row>
              </CardBody>
            </Card>
            <Card className=" mt-3">
              <CardBody>
                <p className="editlocationoperatintitle">Edit Amenities </p>
                <hr />
                {amentiesImgUrl.amenities
                  ? amentiesImgUrl.amenities.map((e) => {
                      return (
                        <>
                          <Row>
                            <Col md={4}>
                              <Form className="dropzone">
                                <Dropzone
                                  // onDrop={(acceptedFiles) => {
                                  //   // handleAcceptedFiles2(acceptedFiles)
                                  // }}
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <div>
                                      <div
                                        className="dz-message needsclick"
                                        {...getRootProps()}
                                      >
                                        {/* <input {...getInputProps()} /> */}
                                        <img
                                          alt="image"
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
                                  Amenities
                                </Label>

                                {enableementiesEdit ? (
                                  <Input
                                    onChange={(n) => {
                                      emenitiesEditfunc(n, e._id);
                                    }}
                                  ></Input>
                                ) : (
                                  <Input value={e.title}></Input>
                                )}
                              </FormGroup>
                            </Col>

                            <Col md={2}>
                              {enableementiesEdit ? (
                                <Button
                                  block
                                  color="success"
                                  className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                                  onClick={emenitiesedittagfunc}
                                >
                                  Save
                                </Button>
                              ) : (
                                <Button
                                  block
                                  color="success"
                                  className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                                  onClick={emenitiesTagEditButtonfunc}
                                >
                                  Edit
                                </Button>
                              )}
                            </Col>
                            <Col md={1} className="">
                              <Button
                                color="dark"
                                outline
                                className="waves-effect waves-light me-1 mylocationdetailsavebtn "
                                // style={{ paddingTop: 10, height: 38 }}
                                onClick={() => imagedeletedAmentiesfunc(e._id)}
                              >
                                {/* dripicons-tag-delete */}
                                <i class=" mdi mdi-delete  deliconsize "></i>
                              </Button>
                            </Col>
                          </Row>
                        </>
                      );
                    })
                  : null}

                {amenitiesAddMoreBlock && (
                  <div>
                    <Row>
                      <Col md={4}>
                        <Form>
                          <Dropzone
                            accept={".png ,.jpeg,.jpg"}
                            onDrop={(acceptedFiles) =>
                              handleAcceptedFiles2(acceptedFiles)
                            }
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div className="dropzone ">
                                <div
                                  className="dz-message needsclick mt-1 "
                                  {...getRootProps()}
                                  style={{ height: "30px" }}
                                >
                                  <input {...getInputProps()} />
                                  <div className=" mt-5">
                                    <i class="display-4 text-muted ri-upload-cloud-2-line"></i>
                                  </div>
                                  <h5 className=" ">
                                    Drag files or click to upload
                                  </h5>
                                </div>
                              </div>
                            )}
                          </Dropzone>

                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
                            {selectedFiles2.map((f, i) => {
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
                        </Form>
                      </Col>

                      <Col md={1}></Col>
                      <Col md={4}>
                        <FormGroup className="select2-container">
                          <Label className="locationstatus">
                            Enter Amenities title
                          </Label>

                          <Input
                            type="text"
                            className="colorpicker-default"
                            onClick={() => setSimple_color(!simple_color)}
                            onChange={(e) => {
                              setEmenitiesTitle(e.target.value);
                              setEditeminitsbtn(false);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col md={1}></Col> */}
                      <Col md={2}>
                        <Button
                          block
                          color="success"
                          className="waves-effect waves-light    w-100 mylocationdetailsavebtn"
                          disabled={editeminitsbtn}
                          // onClick={() => {
                          //   uploadfileAmentiesfunc(true);
                          //   // setSelectedFiles2([]);
                          // }}
                          onClick={uploadfileAmentiesfunc}
                        >
                          Save
                        </Button>
                      </Col>
                      <Col md={1}>
                        <Button
                          className="mylocationdetailsavebtn w-100"
                          onClick={() => {
                            setAmenitiesAddMoreBlock(false);
                          }}
                        >
                          <i class="mdi mdi-account-cancel"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                )}
                <Row>
                  <Col md={4}>
                    <Button
                      color="light"
                      outline
                      className="waves-effect mr-1 addmorebuttonclass  w-100 mt-2"
                      block
                      onClick={() => setAmenitiesAddMoreBlock(true)}
                    >
                      <span className="dripicons-plus "></span> Add more
                    </Button>
                  </Col>
                  <Col md={8}></Col>
                </Row>
              </CardBody>
            </Card>
            <Card className=" mt-3">
              <CardBody>
                <p className="editlocationoperatintitle">
                  Edit Nearby Facilities
                </p>

                <hr />

                <div>
                  {nearByImages.nearByFacilities
                    ? nearByImages.nearByFacilities.map((e) => {
                        return (
                          <>
                            <Row>
                              <Col md={4}>
                                <Form className="dropzone">
                                  <Dropzone
                                    // onDrop={(acceptedFiles) => {
                                    //   // handleAcceptedFiles5(acceptedFiles);
                                    // }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div>
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          {/* <input {...getInputProps()} /> */}
                                          <img
                                            src={e.imageUrl}
                                            alt="image"
                                            style={{
                                              height: 250,
                                              width: 200,
                                            }}
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
                              <Col md={4}></Col>

                              <Col md={2}></Col>
                              <Col md={1}>
                                <Col md={1} className="">
                                  <Button
                                    color="dark"
                                    outline
                                    className="waves-effect waves-light me-1 mylocationdetailsavebtn "
                                    onClick={() =>
                                      nearbyimagedeletedfunc(e._id)
                                    }
                                  >
                                    <i class=" mdi mdi-delete  deliconsize "></i>
                                  </Button>
                                </Col>
                              </Col>
                            </Row>
                          </>
                        );
                      })
                    : null}
                </div>

                {nearbyAddMoreBlock && (
                  <div>
                    <Row>
                      <Col md={4}>
                        <Form className="dropzone">
                          <Dropzone
                            accept={".png ,.jpeg,.jpg"}
                            onDrop={(acceptedFiles) => {
                              handleAcceptedFiles5(acceptedFiles);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div>
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />

                                  <div className="mb-3 ">
                                    <i class="display-4 text-muted ri-upload-cloud-2-line" />
                                  </div>

                                  <h5>Drop files or click to upload</h5>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                        </Form>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedFiles5.length > 0 && (
                            <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={selectedFiles5[0].name}
                                      src={selectedFiles5[0].preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="/locations"
                                      className=" link text-muted font-weight-bold "
                                    >
                                      {selectedFiles5[0].name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>
                                        {selectedFiles5[0].formattedSize}
                                      </strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )}
                        </div>
                      </Col>
                      <Col md={1}></Col>
                      <Col md={4}></Col>
                      {/* {locationSaveButton ? (
                      <> */}
                      {/* <Col md={1}></Col> */}
                      <Col md={2}>
                        <Button
                          block
                          color="success"
                          className="waves-effect waves-light mylocationdetailsavebtn  w-100"
                          // onClick={() => {
                          //   uploadfilenearbyfunc(true);
                          //   // setSelectedFiles5([]);
                          // }}
                          onClick={uploadfilenearbyfunc}
                        >
                          Save
                        </Button>
                      </Col>
                      <Col md={1}>
                        <Button
                          className="mylocationdetailsavebtn w-100"
                          onClick={() => {
                            setNearbyAddMoreBlock(false);
                          }}
                        >
                          <i class="mdi mdi-account-cancel"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                )}
                <Row>
                  <Col md={4}>
                    <Button
                      color="light"
                      display={false}
                      outline
                      className="waves-effect mr-1 addmorebuttonclass  w-100 mt-2 mb-4"
                      onClick={() => {
                        setNearbyAddMoreBlock(true);
                      }}
                      block
                    >
                      <span className="dripicons-plus "></span> Add more
                    </Button>
                  </Col>
                  <Col md={8}></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

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
                  onClick={() => setModal_static(false)}
                >
                  No
                </Button>
              </Col>
              <Col md={4}>
                <Button
                  color="success"
                  className="waves-effect waves-light  w-100"
                  onClick={updateLocationfunction}
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
};
export default LocationDetailed;
