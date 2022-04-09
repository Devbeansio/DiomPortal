import React, { useState } from "react";
import Container from "reactstrap/lib/Container";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  TabContent,
  NavLink,
  TabPane,
  ButtonToolbar,
  ButtonGroup,
  Button,
} from "reactstrap";
import classnames from "classnames";
import "./css/mydashboard.css";
import { Link } from "react-router-dom";

const MyDashboard = () => {
  const [loaded] = useState(false);
  const [activeTabJustify, setActiveTabJustify] = useState("1");
  const [activeTabJustify1, setActiveTabJustify1] = useState("6");
  // const [toggleCustomJustified, setToggleCustomJustified] = useState("1");
  var Loader = require("react-loader");
  const t_ID = "1";

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTabJustify(tab);
    }
  };

  const toggleCustomJustified1 = (tab) => {
    if (activeTabJustify1 !== tab) {
      setActiveTabJustify1(tab);
    }
  };

  return (
    <>
      {loaded ? (
        <Loader loaded={false} className="spinner" />
      ) : (
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col md={4} lg={4} sm={12}>
                <Link to={`/requestbookings/${t_ID}`} className="link">
                  <Card className="cardcss">
                    <CardBody>
                      <Row>
                        <Col md={10} lg={10} sm={10}>
                          <CardTitle className="headings">Bookings</CardTitle>
                        </Col>
                        <Col md={2} lg={2} sm={2}>
                          <i class="fas fa-bell icons"></i>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col md={10} lg={10} sm={10}>
                          {/* <CardText className="amount">{bookingsToday}</CardText> */}
                        </Col>
                        <Col md={2} lg={2} sm={2}>
                          <i class="fas fa-arrow-right"></i>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              {/* //End */}

              <Col md={4} lg={4} sm={12}>
                <Link to="/checkedincustomer" className="link">
                  <Card className="cardcss">
                    <CardBody>
                      <Row>
                        <Col md={10} lg={10} sm={10}>
                          <CardTitle className="headings">
                            Checked-in customers
                          </CardTitle>
                        </Col>
                        <Col md={2} lg={2} sm={2}>
                          <i class="fas fa-users icons"></i>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col md={10} lg={10} sm={10}>
                          <CardText className="amount"></CardText>
                        </Col>
                        <Col md={2} lg={2} sm={2}>
                          <i class="fas fa-arrow-right "></i>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md={4} lg={4} sm={12}></Col>
            </Row>
          </Container>
          {/* /start */}
          <div>
            <div>
              <Row>
                <Col md={8}>
                  <Nav tabs className="nav-tabs-custom nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "1",
                        })}
                        onClick={() => {
                          // gettodaybookings();
                          toggleCustomJustified("1");
                        }}
                      >
                        <span className="d-none d-sm-block">General</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "2",
                        })}
                        onClick={() => {
                          toggleCustomJustified("2");
                          // fetchRequestsBookings();
                        }}
                      >
                        <span className="d-none d-sm-block">Finance</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "3",
                        })}
                        onClick={() => {
                          toggleCustomJustified("3");
                          // fetchScheduledBookings();
                        }}
                      >
                        <span className="d-none d-sm-block">Locations</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "4",
                        })}
                        onClick={() => {
                          toggleCustomJustified("4");
                          // fetchRevokedBookings();
                        }}
                      >
                        <span className="d-none d-sm-block">Brands</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "5",
                        })}
                        onClick={() => {
                          toggleCustomJustified("5");
                          // fetchPendingBookings();
                        }}
                      >
                        <span className="d-none d-sm-block">Users</span>
                      </NavLink>
                    </NavItem>
                    <hr />
                    <hr />
                  </Nav>

                  <TabContent activeTab={activeTabJustify}>
                    <TabPane tabId="1" className="p-3"></TabPane>
                    <TabPane tabId="2" className="p-3"></TabPane>
                    <TabPane tabId="3" className="p-3"></TabPane>
                    <TabPane tabId="4" className="p-3"></TabPane>
                    <TabPane tabId="5" className="p-3"></TabPane>
                  </TabContent>
                </Col>
                <Col md={4}></Col>
              </Row>
            </div>
            {activeTabJustify === "1" ? (
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Bookings Today
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">12</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Total Sales
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">12</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Check-ins Today
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">12</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : activeTabJustify === "2" ? (
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Total Sales
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">12</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Best Saling Products
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">
                            Meeting room 8x
                          </CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">Top Brand</CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">Flex</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : activeTabJustify === "3" ? (
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Top Location
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">Diom Rubeen</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Top Resource Type
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">abc</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : activeTabJustify === "4" ? (
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">Top Brand</CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">Flex</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : activeTabJustify === "5" ? (
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Total Users
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">12</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Top User Type(industry)
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">Technology</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                  <Card className="cardcss dashboardsecondcard">
                    <CardBody>
                      <Row>
                        <Col md={12} lg={12} sm={12}>
                          <CardTitle className="headings1">
                            Top User Type( Position)
                          </CardTitle>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col md={12} lg={12} sm={12}>
                          <CardText className="amount1">Freelauncer</CardText>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>

          <div>
            <Row className="mt-3">
              <Col md={6}></Col>
              <Col md={6}>
                <Nav tabs className="nav-tabs-custom nav-justified">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify1 === "6",
                      })}
                      onClick={() => {
                        // gettodaybookings();
                        toggleCustomJustified1("6");
                      }}
                    >
                      <span className="d-none d-sm-block">Today</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify1 === "7",
                      })}
                      onClick={() => {
                        toggleCustomJustified1("7");
                        // fetchRequestsBookings();
                      }}
                    >
                      <span className="d-none d-sm-block">Yesterday</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify1 === "8",
                      })}
                      onClick={() => {
                        toggleCustomJustified1("8");
                        // fetchScheduledBookings();
                      }}
                    >
                      <span className="d-none d-sm-block">Last week</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify1 === "9",
                      })}
                      onClick={() => {
                        toggleCustomJustified1("9");
                        // fetchRevokedBookings();
                      }}
                    >
                      <span className="d-none d-sm-block">Last month</span>
                    </NavLink>
                  </NavItem>

                  <hr />
                  <hr />
                </Nav>

                <TabContent activeTab={activeTabJustify1}>
                  <TabPane tabId="6" className="p-3"></TabPane>
                  <TabPane tabId="7" className="p-3"></TabPane>
                  <TabPane tabId="8" className="p-3"></TabPane>
                  <TabPane tabId="9" className="p-3"></TabPane>
                </TabContent>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={6}></Col>
              <Col md={6}>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button color="light">Today</Button>
                    <Button color="light">Yesterday</Button>
                    <Button color="light">Last week</Button>
                    <Button color="light">Last month</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </div>
          {/* /end */}
        </div>
      )}
    </>
  );
};

export default MyDashboard;
