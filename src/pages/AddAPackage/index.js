import React, { useState } from "react";
import Select from "react-select";
import Container from "reactstrap/lib/Container";
import { Row, Col, Card, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const optionGroup = [
  {
    label: "Recources",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];
const AddAPackage = () => {
  const [selectedMulti, setSelectedMulti] = useState(null);

  const handleMulti = (selectedMulti) => {
    setSelectedMulti({ selectedMulti });
  };
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col md={12} lg={12} sm={12} xm={12}>
              <Card>
                <Card>
                  <Container>
                    <p>Package information</p>
                  </Container>
                </Card>
                <Container>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                      <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">
                            Package name
                          </Label>
                          <AvField
                            name="firstname"
                            //   placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={6}>
                      <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">
                            Set Accessible Days
                          </Label>
                          <AvField
                            name="firstname"
                            placeholder="Monday, Wednessday, Friday"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm>
                    </Col>
                    <Col md={1}></Col>
                  </Row>

                  <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                      {/* <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">Validity</Label>
                          <AvField
                            name="firstname"
                            //   placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm> */}
                      <FormGroup className="select2-container">
                        <Label>Validity</Label>
                        <Select
                          // value={selectedGroup}
                          // onChange={handleSelectGroup}
                          // options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={6}>
                      <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">
                            Select Access Hours
                          </Label>
                          <AvField
                            name="firstname"
                            placeholder=""
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm>
                    </Col>
                    <Col md={1}></Col>
                  </Row>

                  <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                      <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">
                            Enter Hours
                          </Label>
                          <AvField
                            name="firstname"
                            //   placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={6}>
                      <AvForm className="needs-validation">
                        <FormGroup>
                          <Label htmlFor="validationCustom01">
                            Enter Discount Percentage
                          </Label>
                          <AvField
                            name="firstname"
                            placeholder="%"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            //   validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </AvForm>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </Container>
              </Card>
              <Card>
                <Row>
                  <Container>
                    <Col md={12}>Package Details</Col>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={4}>
                        <AvForm className="needs-validation">
                          <FormGroup>
                            <Label htmlFor="validationCustom01">
                              Enter Discount Percentage
                            </Label>
                            <AvField
                              name="firstname"
                              placeholder="%"
                              type="text"
                              errorMessage="Enter First Name"
                              className="form-control"
                              //   validate={{ required: { value: true } }}
                              id="validationCustom01"
                            />
                          </FormGroup>
                        </AvForm>
                      </Col>
                      <Col md={1}></Col>

                      <Col md={4}>
                        {/* <AvForm className="needs-validation">
                          <FormGroup>
                            <Label htmlFor="validationCustom01">
                              Enter Discount Percentage
                            </Label>
                            <AvField
                              name="firstname"
                              placeholder="%"
                              type="text"
                              errorMessage="Enter First Name"
                              className="form-control"
                              //   validate={{ required: { value: true } }}
                              id="validationCustom01"
                            />
                          </FormGroup>
                        </AvForm> */}
                        <FormGroup className="select2-container">
                          <Label className="control-label">Resources</Label>
                          <Select
                            value={selectedMulti}
                            isMulti={true}
                            onChange={handleMulti}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddAPackage;
