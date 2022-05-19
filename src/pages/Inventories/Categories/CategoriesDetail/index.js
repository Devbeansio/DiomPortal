import React from "react";
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
import Switch from "react-switch";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../css/MyCategoriesDetailed.css";
import UseCategoryDetail from "./useCategoryDetail";

const CategoriesDetail = () => {
  const {
    error,
    setError,
    selectedMulti,
    setSelectedMulti,
    modal_static,
    setModal_static,
    modal_static1,
    setModal_static1,
    categoryDetail,
    categoryDailedData,
    getresourceStatusFunc,
    setCategoryDetail,
    categoryDropDown,
    setCategoryDropDown,
    categoryDetailname,
    setCategoryDetailname,
    categorydropdownDailedData,
    OnSymbol,
    Offsymbol,
    selectedvalue,
    setSelectedvalue,
    loaded,
    setLoaded,
    selectedValueForDelte,
    setSelectedValueForDelte,
    updateNameAndDescription,
    handleMulti,
    isLoading,
    tog_static1,
    tog_static,
    FetchbrandLocations,
    CategoryDetail,
    CategoryDetaildropdown,
    Resourcetypesdropdown,
    OnChangeCategory,
  } = UseCategoryDetail();

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
        {isLoading ? (
          <Loader loaded={false} className="spinner" />
        ) : (
          <div className="page-content">
            <Row className="mb-3">
              <Col md={4}>
                <Link to="/categories" className="link">
                  <span className="fas fa-angle-left arrowheightwidth"></span>
                </Link>
                <span className="locationbrandtitle  ">
                  {categoryDetailname ? categoryDetailname : "Add new Category"}
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
                <CardBody style={{ background: "white", height: 370 }}>
                  <Row>
                    <Col md={12}>
                      <p className="LBDheadings">Enter category details</p>
                    </Col>
                  </Row>
                  <hr />
                  {/* start */}
                  <Row className="mt-4">
                    <Col md={3}>Category (Status)</Col>
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
                        onChange={(e) => getresourceStatusFunc(e)}
                        checked={categoryDailedData?.visibility}
                        className="mr-1 mt-1  "
                      />
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                  </Row>
                  {/* end  */}
                  <Row>
                    <Col md={5}>
                      <p className="LBDLabels mt-4">Category Name</p>
                      <Input
                        //  className="detailsinput"
                        placeholder="Enter Name"
                        type="text"
                        name="defaultconfig"
                        onChange={OnChangeCategory}
                        id="defaultconfig"
                        value={categoryDetail ? categoryDetail : ""}
                      />
                    </Col>
                    <Col md={1}></Col>
                    <Col md={6}>
                      <p className="LBDLabels">
                        Resource Type for this Category
                      </p>
                      <Select
                        value={selectedMulti}
                        isMulti={true}
                        onChange={handleMulti}
                        options={categoryDropDown}
                        classNamePrefix="select2-selection"
                      />
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
                    Category
                  </ModalHeader>
                </Col>
                <Col md={1}></Col>
              </Row>

              <ModalBody>
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <p>Are you sure you want to Move Category?</p>
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
                      onClick={FetchbrandLocations}
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
  }
};

export default CategoriesDetail;
