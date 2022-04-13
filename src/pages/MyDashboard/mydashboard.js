import React, { useState, useEffect } from "react";
import Container from "reactstrap/lib/Container";
import Chart from "./Chart";
import moment from "moment";
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
import UseDashboard from "./useDashboard";

const MyDashboard = () => {
  const currentMonth = new Date();
  const {
    t_ID,
    maxDataAge,
    setMaxDataAge,
    loaded,
    activeTabJustify,
    toggleCustomJustified,
    Loader,
  } = UseDashboard();
  const [selectedDate, setSelectedDate] = useState("");
  const [filterDate, setFilterDate] = useState({});

  useEffect(() => {
    if (selectedDate !== "") {
      setFilterDate({ createdAt: selectedDate });
    }
  }, [selectedDate]);
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
                        <Col md={10} lg={10} sm={10}></Col>
                        <Col md={2} lg={2} sm={2}>
                          <i class="fas fa-arrow-right"></i>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Link>
              </Col>

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

            <div>
              <div>
                <Row className="mt-5 mb-2">
                  <Col md={8}>
                    <Nav tabs className="nav-tabs-custom nav-justified">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTabJustify === "1",
                          })}
                          onClick={() => {
                            toggleCustomJustified("1");
                          }}
                        >
                          <span className="d-none d-sm-block dashboardtab1">
                            General
                          </span>
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
                          }}
                        >
                          <span className="d-none d-sm-block dashboardtab1">
                            Finance
                          </span>
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
                          }}
                        >
                          <span className="d-none d-sm-block dashboardtab1">
                            Locations
                          </span>
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
                          }}
                        >
                          <span className="d-none d-sm-block dashboardtab1">
                            Brands
                          </span>
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
                          }}
                        >
                          <span className="d-none d-sm-block dashboardtab1">
                            Users
                          </span>
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
                            <CardTitle className="headings1">
                              Top Brand
                            </CardTitle>
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
                            <CardTitle className="headings1">
                              Top Brand
                            </CardTitle>
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
              <Row className="mt-4 ">
                <Col md={6}></Col>
                <Col md={6}>
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button
                        color="light"
                        style={{ backgroundColor: "white" }}
                        onClick={() => {
                          setMaxDataAge({
                            createdAt: {
                              $gte: new Date(
                                moment().startOf("day").toISOString()
                              ),
                              $lte: new Date(),
                            },
                          });
                        }}
                      >
                        <span className="dashboaedfilter">Today</span>
                      </Button>

                      <Button
                        color="light"
                        style={{ backgroundColor: "white" }}
                        onClick={() => {
                          setMaxDataAge({
                            createdAt: {
                              $gte: new Date(
                                moment()
                                  .subtract(1, "day")
                                  .startOf("day")
                                  .toISOString()
                              ),

                              $lte: new Date(
                                moment()
                                  .subtract(1, "day")
                                  .endOf("day")
                                  .toISOString()
                              ),
                            },
                          });
                        }}
                      >
                        <span className="dashboaedfilter">Yesterday</span>
                      </Button>
                      <Button
                        color="light"
                        style={{ backgroundColor: "white" }}
                        onClick={() => {
                          setMaxDataAge({
                            createdAt: {
                              $gte: new Date(
                                moment()
                                  .subtract(1, "weeks")
                                  .startOf("isoWeek")
                                  .toISOString()
                              ),
                              $lte: new Date(
                                moment()
                                  .subtract(1, "weeks")
                                  .endOf("isoWeek")
                                  .toISOString()
                              ),
                            },
                          });
                        }}
                      >
                        <span className="dashboaedfilter">Last week</span>
                      </Button>

                      <Button
                        color="light"
                        style={{ backgroundColor: "white" }}
                        onClick={() => {
                          const today = moment().format("YYYY-MM ");
                          setMaxDataAge({
                            createdAt: {
                              $gte: new Date(
                                moment(today).startOf("month").toISOString()
                              ),
                              $lte: new Date(moment().toISOString()),
                            },
                          });
                        }}
                      >
                        <span className="dashboaedfilter">This month</span>
                      </Button>
                      <Button
                        color="light"
                        style={{ backgroundColor: "white" }}
                        onClick={() => {
                          const today = moment().format("YYYY-MM ");
                          setMaxDataAge({
                            createdAt: {
                              $gte: new Date(
                                moment(today + "1")
                                  .subtract(1, "months")
                                  .startOf("month")
                                  .toISOString()
                              ),
                              $lte: new Date(
                                moment(today + "1")
                                  .subtract(1, "months")
                                  .endOf("month")
                                  .toISOString()
                              ),
                            },
                          });
                        }}
                      >
                        <span className="dashboaedfilter">Last month</span>
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>
            </div>
            {/* /end */}
            {activeTabJustify === "1" ? (
              <div>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
                      />
                    </div>
                  </Col>
                  {/* <Col lg={1} md={1} sm={12}></Col> */}
                  {/* <Col lg={1} md={1} sm={12}></Col> */}
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625139bf-45ca-4d14-85ba-9a0e96d9ab76"}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}></Col>
                  {/* <Col md={1}></Col> */}
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"62514999-70f4-431b-8d96-68f6a4c6a942"}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625154e9-ed04-4f19-8b12-9548acd2508c"}
                      />
                    </div>
                  </Col>
                  {/* <Col md={1}></Col> */}
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"62514d58-905f-40e2-83f4-4c6b1b2877eb"}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ) : activeTabJustify === "2" ? (
              <div>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
                      />
                    </div>
                  </Col>

                  <Col md={6}></Col>
                </Row>

                <Row className="mt-5">
                  <Col md={6}></Col>

                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"62514d58-905f-40e2-83f4-4c6b1b2877eb"}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ) : activeTabJustify === "3" ? (
              <div>
                {" "}
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625134b0-5d61-46db-86c0-48eef0760b6e"}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"62515345-2438-4c2b-8a7d-0245e2511098"}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625154e9-ed04-4f19-8b12-9548acd2508c"}
                      />
                    </div>
                  </Col>

                  <Col md={6}></Col>
                </Row>
              </div>
            ) : activeTabJustify === "4" ? (
              <div>
                <Row className="mt-3">
                  <Col md={6}>
                    <div className="charts">
                      <Chart
                        height={"350px"}
                        width={"480px"}
                        filter={maxDataAge}
                        chartId={"625139bf-45ca-4d14-85ba-9a0e96d9ab76"}
                      />
                    </div>
                  </Col>

                  <Col md={6}></Col>
                </Row>
              </div>
            ) : activeTabJustify === "5" ? null : null}
          </Container>
        </div>
      )}
    </>
  );
};

export default MyDashboard;
