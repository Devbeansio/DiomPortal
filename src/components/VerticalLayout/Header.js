import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ModalHeader,
  ModalBody,
  Modal,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
} from "reactstrap";

import { Link } from "react-router-dom";
import "./css/headers.css";
// Import menuDropdown
// import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import i18n
import { withNamespaces } from "react-i18next";
// Redux Store
import { toggleRightSidebar } from "../../store/actions";

import logosmdark from "../../assets/images/logo-sm-dark.png";
import logodark from "../../assets/images/logo-dark.png";

import Diomlogo from "./pics/DIOM.png";
import { DIOM_BASED_URLS } from "../../config/url";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("Token"),
      isSearch: false,
      isSocialPf: false,
      modal_static: false,
      disabledvalue: true,
      locationDiablity:false,
      resourcesDiablity:false,
      resourceTypesDiablity:false,
      diomBrand: [],
      diomLocation: [],
      diomAllLocation: [],
      selectedLocation: "",
      selectedLocationData: {},
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }

  btnTapped = () => {
    this.setState({ modal_static: true });
  };


  syncLocationsFunc = () => {
    this.setState({locationDiablity:true});
    fetch(`${DIOM_BASED_URLS}/admin-business-locations/sync`, {
      method: "GET",
      redirect: "follow",

      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // if (result) {
        toast.success("Locations Synced Successfully");
        this.setState({locationDiablity:false})
        // }
        // else {
        //   toast.error(" Something went wrong");
        // }
      })
      .catch((error) => toast.error(" Something went wrong"));
      
  };
  syncResourceFunc = () => {
    this.setState({resourcesDiablity: true})
    fetch(`${DIOM_BASED_URLS}/admin-resources-inventories/sync`, {
      method: "GET",
      redirect: "follow",

      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          toast.success("Resources Successfully Synced");
          this.setState({resourcesDiablity: false})
        
        } else {
          toast.error(" Something went wrong");
          this.setState({resourcesDiablity: false})
        }
      })
      .catch((error) => console.log("error", error));
     

    // toast.error(" Something went wrong"));
  };
  syncResourceTypeFunc = () => {
    this.setState({resourceTypesDiablity:true})
    fetch(`${DIOM_BASED_URLS}/admin-resource-types-inventories/sync`, {
      method: "GET",
      redirect: "follow",

      headers: {
        Authorization: "Bearer " + this.state.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          toast.success("ResourceTypes Successfully Synced");
          this.setState({resourceTypesDiablity:false})
        } else {
          toast.error(" Something went wrong");
          this.setState({resourceTypesDiablity:false})
        }
      })
      .catch((error) => toast.error(" Something went wrong"));
      
  };
  componentDidMount() {
    // this.diomBrandfunc();
    // this.diomLocationfunc();
    // this.alllocationsfunc();
    // this.getSelectedDiomLocation(localStorage.getItem("locationId"));
    // {
    //   this.locationId && this.setState({ disabledvalue: false });
    // }
  }

  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  // tog_center = () => {
  //   if (!localStorage.getItem("locationId")) {
  //     return;
  //   }
  //   this.setState((prevState) => ({
  //     modal_center: !prevState.modal_center,
  //   }));
  //   this.removeBodyCss();
  // };

  render() {
    return (
      <React.Fragment>
        {/* {console.log("i am dibility : ",this.state.locationDiablity)} */}
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="#" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logosmdark} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logodark} alt="" height="20" />
                  </span>
                </Link>

                <Link to="#" className="logo logo-light">
                  <span className="logo-sm">
                    {/* <img src={logosmlight} alt="" height="22" /> */}
                  </span>
                  <span className="logo-lg">
                    {/* <img src={logolight} alt="" height="20" /> */}
                    <img src={Diomlogo} alt="" height="30" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* button remove start   */}
                    {/* <Button
                      color="success"
                      className="btn-rounded waves-effect waves-light mr-1 ml-3 "
                      onClick={this.tog_center}
                    >
                      {!this.state.selectedLocationData
                        ? "Diom"
                        : this.state.selectedLocationData.Name}
                    </Button> */}
                  </span>
                </Link>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <NotificationDropdown />
              </div>
              <div className=" dropdown d-inline-block">
                <Button
                  color="none"
                  onClick={this.btnTapped}
                  type="button"
                  className="header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className=" fas fa-sync-alt"></i>
                </Button>
              </div>

              {/* <NotificationDropdown /> */}

              <ProfileMenu />

              {/* <div className="dropdown d-inline-block"> */}
              {/* <Button
                color="none"
                onClick={this.toggleRightbar}
                type="button"
                className="header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="ri-settings-2-line"></i>
              </Button> */}
              {/* </div> */}
            </div>
          </div>
          {/* model */}
          {/* <Modal
            className=""
            isOpen={
              this.state.modal_center || !localStorage.getItem("locationId")
            }
            toggle={this.tog_center}
            centered={true}
          >
            <Row>
              <Col md={3}></Col>
              <Col md={8}>
                <ModalHeader
                  toggle={() => this.setState({ modal_center: false })}
                >
                  <Label className="modelfirsttitle1"> Select a location</Label>
                </ModalHeader>
              </Col>
              <Col md={1}></Col>
            </Row>

            <ModalBody>
              <FormGroup className="select2-container">
                <Row>
                  <Col md={2}></Col>

                  <Col md={8}>
                    <Label className="inputtilesbrandlocation">
                      Select a Diom Brand
                    </Label>
                    <Select
                      value={this.selectedGroup}
                      onChange={(opt) => this.changeLocationBrand(opt.value)}
                      classNamePrefix="select2-selection"
                      // options={optionGroup}
                      options={this.state.diomBrand}
                    />
                  </Col>

                  <Col md={2}></Col>
                </Row>
              </FormGroup>

              <FormGroup className="select2-container">
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <Label className="inputtilesbrandlocation mt-5">
                      Select a Diom Location
                    </Label>
                    <Select
                      // value={this.selectedGroup}
                      onChange={
                        (e) =>
                          this.setState({
                            selectedLocation: e.value,
                            disabledvalue: false,
                          })
                        // this.setState({ disabledvalue: false })
                      }
                      // options={this.state.diomAllLocation}
                      options={this.state.diomLocation}
                      classNamePrefix="select2-selection"
                    />
                  </Col>
                  <Col md={2}></Col>
                </Row>

                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                    <Link to="/mydashboard">
                      <Button
                        block
                        color="success"
                        disabled={this.state.disabledvalue}
                        className="waves-effect waves-light  mt-5 w-100 mb-5"
                        onClick={() => {
                          if (this.state.selectedLocation) {
                            localStorage.setItem(
                              "locationId",
                              this.state.selectedLocation
                            );
                            this.getSelectedDiomLocation(
                              this.state.selectedLocation
                            );
                            // this.setState({ modal_center: false });
                          }

                          return;
                        }}
                      >
                        Save Changes
                      </Button>
                    </Link>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </FormGroup>
            </ModalBody>
          </Modal> */}

          <div>
            <Modal
              isOpen={this.state.modal_static}
              toggle={() => this.setState({ modal_static: false })}
              centered={true}
            >
              <Row>
                <Col md={4}></Col>
                <Col md={7}>
                  <ModalHeader
                    toggle={() => this.setState({ modal_static: false })}
                  >
                    <p className="syncmodelheadeing">Sync Data</p>
                  </ModalHeader>
                </Col>
                <Col md={1}></Col>
              </Row>

              <ModalBody className="mb-5">
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <p className="syncmodelclickdetail">
                      Click the Icons to update the data for lcoations,
                      resources or resources types.
                    </p>
                  </Col>
                  <Col md={2}></Col>
                </Row>
                <Row>
                  <Col md={2}></Col>
                  <Col md={8}>
                    <Row>
                      <Col md={11}>
                        <p className="synclocationsheadings">Sync Locations</p>
                      </Col>
                      <Col md={1}>
                        {/* <Button
                  color="none"
                            onClick={this.syncLocationsFunc}
                            // className=" noti-icon right-bar-toggle waves-effect"
                
                > */}
                        <div  hidden={this.state.locationDiablity} onClick={this.syncLocationsFunc}>
                          <i
                          
                            type="button"
                            className=" fas fa-sync-alt synclocationsheadingsicon "
                          ></i>
                        </div>
                        {/* </Button> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={11}>
                        <p className="synclocationsheadings">Sync Resources</p>
                      </Col>
                      <Col md={1}>
                        {/* <Button
                  color="none"
                  onClick={this.syncResourceFunc}
                  type="button"
                > */}
                        <div  hidden={this.state.resourcesDiablity} onClick={this.syncResourceFunc}>
                          <i
                            type="button"
                            className=" fas fa-sync-alt synclocationsheadingsicon"
                          ></i>
                        </div>
                        {/* </Button> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={11}>
                        <p className="synclocationsheadings">
                          Sync Resource Types
                        </p>
                      </Col>
                      <Col md={1}>
                        {/* <Button
                  color="none"
                  onClick={this.syncResourceTypeFunc}
                  type="button"
                        > */}
                        <div  hidden={this.state.resourceTypesDiablity} onClick={this.syncResourceTypeFunc}>
                          <i
                            type="button"
                            className=" fas fa-sync-alt synclocationsheadingsicon"
                          ></i>
                        </div>
                        {/* </Button> */}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </ModalBody>
            </Modal>
          </div>
          <ToastContainer autoClose={8000} />
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withNamespaces()(Header)
);
