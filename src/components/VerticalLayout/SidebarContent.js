import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{this.props.t("Menu")}</li>
            <li>
              <Link to="/mydashboard" className=" waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="ml-1">{this.props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/userprofile" className=" waves-effect">
                <i className=" ri-group-fill"></i>
                <span className="ml-1">{this.props.t("User Profile")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="waves-effect has-arrow">
                <i class="mdi mdi-clipboard-check-outline"></i>

                <span className="ml-1">{this.props.t("Inventories")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/inventories" className="waves-effect">
                    <span className="ml-1">{this.props.t("Inventories")}</span>
                  </Link>
                </li>

                <li>
                  <Link to="/categories" className="waves-effect">
                    <span className="ml-1">{this.props.t("Categories")}</span>
                  </Link>
                </li>

                <li>
                  <Link to="/resourcetype" className="waves-effect">
                    <span className="ml-1">
                      {this.props.t("Resource Type")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/floorplan" className="waves-effect">
                    <span className="ml-1">{this.props.t("Floor Plan")}</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-city"></i>

                <span className="ml-1">{this.props.t("Location ")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/locations" className="waves-effect">
                    <span className="ml-1">{this.props.t("Location ")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/locationbrands" className="waves-effect">
                    <span className="ml-1">
                      {this.props.t("Location Brands")}
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/addapackage" className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="badge badge-pill badge-success float-right">
                  3
                </span>
                <span className="ml-1">{this.props.t("AddAPackage")}</span>
              </Link>
            </li> */}

            <li>
              <Link to="/reports" className=" waves-effect">
                <i className="fas fa-file-alt"></i>
                <span className="ml-1">{this.props.t("Reports")}</span>
              </Link>
            </li>

            <li>
              <Link to="/finance" className=" waves-effect">
                <i className="dripicons-wallet"></i>
                <span className="ml-1">{this.props.t("Finance")}</span>
              </Link>
            </li>

            {/* <li className="menu-title">{this.props.t("Other Pages")}</li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-account-circle-line"></i>
                <span className="ms-1">{this.props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/login">{this.props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/register">{this.props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/forgot-password">
                    {this.props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="/lock-screen">{this.props.t("Lock Screen")}</Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-profile-line"></i>
                <span className="ms-1">{this.props.t("Utility")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/starter">{this.props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="/maintenance">{this.props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="/comingsoon">{this.props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="/timeline">{this.props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="/faqs">{this.props.t("FAQs")}</Link>
                </li>
                <li>
                  <Link to="/pricing">{this.props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="/404">{this.props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="/500">{this.props.t("Error 500")}</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent))
);
