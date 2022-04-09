import React from "react";
import {
  Row,
  Col,
  Button,
  CardBody,
  Input,
  Modal,
  FormGroup,
  ModalHeader,
  InputGroup,
  ModalBody,
} from "reactstrap";
// import Flatpickr from "react-flatpickr";
import Select from "react-select";
import "../../css/MyLocationDetailed.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useLocationBrandDetail from "./useLocationBrandDetail";

const LocationBrandDetail = () => {
  const {
    locationBrandData,
    setLocationBrandData,
    locationsbrandsDropDown,
    selectedMulti,
    setSelectedMulti,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    setSelectedvalue,
    selectedvalue,
    isLoading,
    setLoaded,
    loaded,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    tog_static,
    tog_static1,
    textareachange,
    postbrandLocations,
    locationBrandnameonchange,
    endTimeFunc,
    startTimeFunc,
    updateNameAndDescription,
    handleMulti,
  } = useLocationBrandDetail();

  const Loader = require("react-loader");

  return (
    <>
      {isLoading ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Row className="mb-3">
            {console.log("locationBrandData : ", locationBrandData.name)}
            <Col md={4}>
              <Link to="/locationbrands" className="link">
                <span className="fas fa-angle-left arrowheightwidth"></span>
              </Link>
              <span className="locationbrandtitle  ">
                {
                  // brandDetailname
                  locationBrandData.name
                    ? `${locationBrandData.name}`
                    : "Add a Location Brand"
                }
              </span>
            </Col>
            <Col md={5}></Col>
            <Col md={3}>
              <Button
                color="success"
                className="waves-effect waves-light mr-1  w-100"
                block
                onClick={tog_static}
              >
                <span className="printbutton">Save</span>
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <CardBody style={{ background: "white" }}>
                <Row>
                  <Col md={12}>
                    <p className="LBDheadings">Edit Location Operations</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={5}>
                    <p className="LBDLabels">Location Brand Name</p>
                    <Input
                      className="detailsinput"
                      type="text"
                      maxLength="25"
                      name="defaultconfig"
                      onChange={locationBrandnameonchange}
                      id="defaultconfig"
                      value={
                        locationBrandData.name ? locationBrandData.name : ""
                      }
                    />
                  </Col>
                  <Col md={1}></Col>
                  <Col md={6}>
                    <p className="LBDLabels">DIOM Locations for this brand</p>
                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={handleMulti}
                      options={locationsbrandsDropDown}
                      classNamePrefix="select2-selection"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mt-5">
                    <p className="LBDLabels">Location Brand Description</p>
                    <div className="mt-3">
                      <Input
                        className="detailsinput"
                        rows="5"
                        type="textarea"
                        id="textarea"
                        onChange={textareachange}
                        value={
                          locationBrandData.description
                            ? locationBrandData.description
                            : ""
                        }
                      />
                    </div>
                  </Col>
                  <Col md={3} className="mt-5">
                    <FormGroup className="mt-1">
                      <label class="LBDLabels">Operational Hours</label>
                      <Input
                        type="time"
                        // defaultValue="13:45:00"
                        defaultValue={locationBrandData.startTime2}
                        onChange={(e) => {
                          startTimeFunc(e);
                        }}
                        id="example-time-input"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3} className="mt-5">
                    <FormGroup className=" mt-2">
                      <label class="LBDLabels"></label>
                      <Input
                        type="time"
                        //  defaultValue="13:45:00"
                        defaultValue={locationBrandData.endTime2}
                        onChange={(e) => {
                          endTimeFunc(e);
                        }}
                        id="example-time-input"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>

          <Modal isOpen={modal_static} toggle={tog_static} centered={true}>
            <Row>
              <Col md={4}></Col>
              <Col md={7}>
                <ModalHeader toggle={() => setModal_static(false)}>
                  Resource Addition
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
                    onClick={updateNameAndDescription}
                  >
                    Yes
                  </Button>
                </Col>

                <Col md={2}></Col>
              </Row>
            </ModalBody>
          </Modal>
          <ToastContainer autoClose={8000} />

          <Modal isOpen={modal_static1} toggle={tog_static1} centered={true}>
            <Row>
              <Col md={4}></Col>
              <Col md={7}>
                <ModalHeader toggle={() => setModal_static1(false)}>
                  Brand Locations
                </ModalHeader>
              </Col>
              <Col md={1}></Col>
            </Row>

            <ModalBody>
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <p>
                    Are you sure you want to Move the Location from another
                    Brand?
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
                    onClick={() => setModal_static1(false)}
                  >
                    No
                  </Button>
                </Col>
                <Col md={4}>
                  <Button
                    color="success"
                    className="waves-effect waves-light  w-100"
                    onClick={postbrandLocations}
                  >
                    Yes
                  </Button>
                </Col>

                <Col md={2}></Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      )}
    </>
  );
};
// };

export default LocationBrandDetail;
