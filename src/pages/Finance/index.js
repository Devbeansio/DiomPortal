import React from "react";
import Container from "reactstrap/lib/Container";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./css/myfinancecss.css";
import { Link } from "react-router-dom";

const Finance = () => {
  return (
    <>
      <div className="page-content">
       
        <Container fluid>
        <div>
          <Row>
            <Col md={2}>
            <p className="finnacefirstheading">Finance</p>
            </Col>
            <Col md={10}>
              
            </Col>
          </Row>
        </div>
          <Row>
            <Col md={4} lg={4} sm={12}>
              <Card className="finnacecardcss">
                <CardBody>
                  <Row>
                    <Col md={10}>
                      <Link to="/invoicesmainpage" className="link">
                        <CardTitle className="finnaceheadings">
                          Invoices
                        </CardTitle>
                      </Link>
                    </Col>
                    <Col md={2}>
                      
                      <i class="dripicons-blog finnanceicons"></i>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} lg={4} sm={12}>
              <Card className="finnacecardcss">
                <CardBody>
                  <Row>
                    <Col md={10}>
                      <Link to="/taxation" className="link">
                        {" "}
                        <CardTitle className="finnaceheadings ">
                          Taxation
                        </CardTitle>
                      </Link>{" "}
                    </Col>
                    <Col md={2}>
                      <i class="ri-money-dollar-circle-line finnanceicons"></i>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} lg={4} sm={12}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Finance;
