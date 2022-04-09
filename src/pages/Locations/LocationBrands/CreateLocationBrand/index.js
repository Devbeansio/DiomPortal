import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../../css/LocationBrandDetail.css";
import { useCreateLocationBrand } from "./useCreateLocationBrand";

const CreateLocationBrand = () => {
  const {
    error,
    setError,
    modal_static,
    setModal_static,
    setNameCreate,
    nameCreate,
    descriptionCreate,
    setDescriptionCreate,
    LocationBrandNameOnChange,
    textareachange,
    tog_static,
    updateNameAndDescription,
  } = useCreateLocationBrand();

  if (error) {
    return (
      <>
        {toast.error(error)}
        <ToastContainer autoClose={8000} />
      </>
    );
  } else {
    return (
      <div className="page-content">
        <Row className="mb-3">
          <Col md={4}>
            <Link to="/locationbrands" className="link">
              {" "}
              <span className="fas fa-angle-left arrowheightwidth"></span>
            </Link>
            <span className="locationbrandtitle  "> Add a Location Brand</span>
          </Col>
          <Col md={5}></Col>
          {nameCreate && descriptionCreate ? (
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
          ) : (
            <Col md={3}>
              <Button
                color="success"
                className="waves-effect waves-light mr-1  w-100"
                block
                disabled
                onClick={tog_static}
              >
                <span className="printbutton">Save</span>
              </Button>
            </Col>
          )}
        </Row>

        <Row>
          <Col md={12}>
            <CardBody style={{ background: "white" }}>
              <Row>
                <Col md={12}>
                  <p className="LBDheadings">add Location Operations</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={5}>
                  <p className="LBDLabels">Location Brand Name</p>
                  <Input
                    placeholder="Add Name"
                    type="text"
                    name="defaultconfig"
                    onChange={LocationBrandNameOnChange}
                    id="defaultconfig"
                    value={nameCreate}
                  />
                </Col>
                <Col md={1}></Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={12} className="mt-5">
                  <p className="LBDLabels">Location Brand Description</p>
                  <div className="mt-3">
                    <Input
                      placeholder="Add Description"
                      type="textarea"
                      id="textarea"
                      onChange={textareachange}
                      rows="5"
                      value={descriptionCreate}
                    />
                  </div>
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
      </div>
    );
  }
};

export default CreateLocationBrand;
