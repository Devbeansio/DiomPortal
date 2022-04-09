import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Loader from "react-loader";
import "../css/MyInventoryDetail.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useInventory } from "./useInventory";

const InventoryDetail = () => {
  const {
    isError,
    error,
    isLoading,
    resourcesDetails,
    modal_static,
    tog_static,
    setModal_static,
  } = useInventory();
  const Loader = require("react-loader");

  if (isError || error) {
    console.log(resourcesDetails);
    return (
      <>
        <p>{error}</p>
      </>
    );
  }
  return (
    <>
      {isLoading ? (
        // return null;
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <div>
            <Row className="mb-4">
              <Col md={5}>
                <Link to="/inventories" className="link">
                  {" "}
                  <span className="fas fa-angle-left arrowheightwidth"></span>
                </Link>
                <span className="bookingtitle ">{resourcesDetails.Name}</span>
              </Col>
              <Col md={5}></Col>
              <Col md={2}></Col>
            </Row>
          </div>
          <Card className="resourceinfocard">
            <Row>
              <Col md={3}>
                <p className="cardtitle">Resource information</p>
              </Col>
              <Col md={9}></Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col md={4}>
                <p className="label">Resource Name</p>
                <p className="labeldetails">{resourcesDetails.Name}</p>
              </Col>
              <Col md={4}>
                <p className="label">Type of resource</p>
                <p className="labeldetails">
                  {resourcesDetails.ResourceTypeName}
                </p>
              </Col>
              <Col md={4}>
                <p className="label">Location</p>
                <p className="labeldetails">{resourcesDetails.BusinessName}</p>
              </Col>
            </Row>
          </Card>

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
                  <p>Are you sure you want to add this resourse?</p>
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
export default InventoryDetail;
