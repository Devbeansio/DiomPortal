// import { jsPDF } from "jspdf";
import { PDFViewer } from "@react-pdf/renderer";
import {
  Row,
  Col,
  Card,
  FormGroup,
  InputGroup,
  Label,
  Button,
} from "reactstrap";
import Container from "reactstrap/lib/Container";

import Flatpickr from "react-flatpickr";
import React, {  useState } from "react";
import Select from "react-select";

import GeneratePdf from "./generateodf/index.js";

import "./css/MyReports.css";
import { DIOM_BASED_URLS } from "../../config/url.js";

const Reports = () => {
  // const [selectedGroup1, setSelectedGroup1] = useState(null);
  const [searchUser, setSearchUser] = useState(true);
  const [generateButton, setGenerateButton] = useState(true);

  const[bookings,setBookings]=useState([]);
  const [pdfDivView, setPdfDivView] = useState(true);
  const optionGroup1 = [
    {
      label: "Select",
      options: [
        { label: "Bookings", value: "Bookings" },
        { label: "User", value: "User" },
      ],
    },
  ];

  const optionGroup2 = [
    {
      label: "Select",
      options: [
        { label: "Scheduled", value: "Scheduled" },
        { label: "Cancelled", value: "Cancelled" },
      ],
    },
  ];
  const optionGroup = [
    {
      label: "Select",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
  ];

  const handleReportType = (e) => {
    setSearchUser(false);
  };
  const handelSearchUser = (e) => {

    if (e.label === "Cancelled") {
      fetch(`${DIOM_BASED_URLS}/admin-diom-bookings?filter={"order":"fromTime ASC","where":{"visibility":false,"fromTime":{"gte":"2022-05-23T19:00:00.000Z"},"toTime":{"lte":"2022-08-23T19:00:00.000Z"}}}`, {
        method: "GET",
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
    
          // setCancelledBookings(result);
          setBookings(result);
        })
        .catch((error) => console.log("error", error));
    }


    else if (e.label === "Scheduled") {
      fetch(`${DIOM_BASED_URLS}/admin-diom-bookings?filter={"order":"fromTime ASC","where":{"visibility":true,"fromTime":{"gte":"2022-05-23T19:00:00.000Z"},"toTime":{"lte":"2022-08-23T19:00:00.000Z"}}}`, {
        method: "GET",
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result1) => {
       
          // setScheduledBookings(result1)
          setBookings(result1)
        })
        .catch((error) => console.log("error", error));
    }
    setGenerateButton(false);
  };

  // var generateData = function (amount) {
  //   var result = [];
  //   var data = {
  //     coin: "100",
  //     game_group: "GameGroup",
  //     game_name: "XPTO2",
  //     game_version: "25",
  //     machine: "20485861",
  //     vlt: "0",
  //   };
  //   for (var i = 0; i < amount; i += 1) {
  //     data.id = (i + 1).toString();
  //     result.push(Object.assign({}, data));
  //   }
  //   return result;
  // };

  // function createHeaders(keys) {
  //   var result = [];
  //   for (var i = 0; i < keys.length; i += 1) {
  //     result.push({
  //       id: keys[i],
  //       name: keys[i],
  //       prompt: keys[i],
  //       width: 65,
  //       align: "center",
  //       padding: 0,
  //     });
  //   }
  //   return result;
  // }

  // var headers = createHeaders([
  //   "id",
  //   "coin",
  //   "game_group",
  //   "game_name",
  //   "game_version",
  //   "machine",
  //   "vlt",
  // ]);
  // var doc = new jsPDF();
  return (
    <>
      <div className="page-content">
        <Container fluid>
         
          <Row>
            <Col md={12} lg={12} sm={12} xm={12}>
              <p className="myreportsfirstheading">Reports</p>
            </Col>
          </Row>
          <Card>
            <Container fluid>
              <Row>
                <Col md={12} lg={12} sm={12} xm={12}>
                  <Row className="mt-4">
                    <Col md={3} lg={3} sm={12} xm={12}>
                      <FormGroup className="select2-container">
                        <Label className="myreportslabels">
                          Select Report Type
                        </Label>
                        <Select
                          placeholder="Select . . ."
                          // value={selectedGroup1}
                          onChange={handleReportType}
                          options={optionGroup1}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3} lg={3} sm={12} xm={12}>
                      <FormGroup className="select2-container">
                        <Label className="myreportslabels">Search User</Label>
                        <Select
                          isDisabled={searchUser}
                          placeholder="Select . . ."
                          // value={selectedGroup1}
                          onChange={handelSearchUser}
                          options={optionGroup2}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3} lg={3} sm={12} xm={12}>
                      <FormGroup className="select2-container">
                        <Label className="myreportslabels">
                          Select Location
                        </Label>
                        <Select
                          placeholder="Select . . ."
                          isDisabled={true}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={1} lg={1} sm={12} xm={12}></Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-4 mt-5">
                <Col md={6}>
                  <FormGroup>
                    <Label className="myreportslabels">Select Range</Label>
                    <InputGroup>
                      <Flatpickr
                        disabled={searchUser}
                        className="form-control d-block"
                        placeholder="1-1-2022 to 12-12-2022 "
                        options={{
                          mode: "range",
                          dateFormat: "Y-m-d",
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={4}></Col>
                <Col md={2} className="genenratebuttonmargin">
                  <Button
                    color="success"
                    onClick={() => { setPdfDivView(false) }}
                    disabled={generateButton}
                    className="waves-effect waves-light mr-1  w-100"
                    block
                  >
                    <span className="printbutton ">Generate</span>
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col md={12} lg={12} sm={12}></Col>
              </Row>
            </Container>
          </Card>
          <Row>
            <Col md={12}>
              <div hidden={pdfDivView}>
                <PDFViewer style={{ flex: 1, height: "400px", width: "100%" }}>
                  <GeneratePdf data={bookings}/>
                </PDFViewer>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reports;
