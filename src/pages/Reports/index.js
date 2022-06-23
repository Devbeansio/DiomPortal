import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import "./css/generatareport.css";
import Select from "react-select";
import UseCategoryDetail from "../Inventories/Categories/CategoriesDetail/useCategoryDetail";
import UseReports from "./useReports";
import { SnackbarProvider } from 'notistack';
import DatePicker from "react-flatpickr";
const d = new Date();

const Reports = () => {
  // const { categoryDropDown } = UseCategoryDetail();
  const {
    categoryDropDown,
    reportTypeOptions,
    userByProfessionData,
    userbyprofessionPosition,
    userbyprofessionindustry,
    timeSlotOptions,
    locationData,
    userDropDownVisibility,
    brandData,
    reportTypeHandeler,
    timeSlotHandler,
    diomBrandHandler,
    diomLocationHandler,
    resourceTypeHandler,
    userTypeIndustryHandler,
    userTypePositionHandler,
    startdateFunc,
    endDateFunc,
    reportExport,
  } = UseReports();

  return (

    <div className="page-content">
     
      <p className="reporttoplabel">Generate a report</p>
      <Card>
        <Container>
          <Row>
            <Col md={3}>
              <p className="reportlabel1 mt-4 ">Select your report type:</p>
            </Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
          </Row>

          <Row className="mt-4">
            <Col md={12}>
              <Select
                options={reportTypeOptions}
                // value={selectedMulti}
                
                onChange={reportTypeHandeler}
                classNamePrefix="select2-selection"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={3}>
              <p className="reportlabel1">Select a time period</p>
            </Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
          </Row>

          <Row className="mt-2">
            <Col md={3}>
              <p className="reportlabel2">From</p>
            </Col>
            <Col md={3}>
              <p className="reportlabel2">To</p>
            </Col>
            <Col md={3}>
              <p className="reportlabel2">Time Slot</p>
            </Col>
            <Col md={3}></Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="date"
                  defaultValue="2022-5-12"
                  id="example-date-input"
                  onChange={(e) => {
                    startdateFunc(e);
                  }}
                  // max={d.setMonth(d.getMonth() - 3)}
                />
                {/* <DatePicker
                  // selected="2022-5-12"
                  onChange={(e) => {
                    startdateFunc(e);
                  }}
                  selectsStart
                  maxDate={d.setMonth(d.getMonth() - 3)}
                  // endDate={endDate}
                /> */}
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="date"
                  defaultValue="2022-5-12"
                  id="example-date-input"
                  onChange={(e) => {
                    endDateFunc(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <Select
                options={timeSlotOptions}
                // value={selectedMulti}
                placeholder="All Slots"
                isMulti={true}
                onChange={timeSlotHandler}
                classNamePrefix="select2-selection"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={3}>
              <p className="reportlabel1">Make your selections</p>
            </Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <p className="reportlabel2">Diom Brand(s)</p>
            </Col>
            <Col md={6}>
              <p className="reportlabel2">Diom Location(s)</p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup className="select2-container  ">
                <Select
                  isMulti={true}
                  options={brandData}
                  onChange={(opt) => diomBrandHandler(opt)}
                  placeholder="All Brands"
                  classNamePrefix="select2-selection "
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="select2-container  ">
                <Select
                  isMulti={true}
                  options={locationData}
                  onChange={
                    (opt) => diomLocationHandler(opt)
                    // console.log("options : ", opt)
                  }
                  placeholder="All Locations"
                  classNamePrefix="select2-selection"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={12}>
              <p className="reportlabel2">Resource Type(s)</p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Select
                // value={selectedMulti}
                placeholder="All resources"
                isMulti={true}
                options={categoryDropDown}
                onChange={(opt) => resourceTypeHandler(opt)}
                // classNamePrefix="select2-selection"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <p className="reportlabel2">User Type(by Position)</p>
            </Col>

            <Col md={6}>
              <p className="reportlabel2">User Type(by Industry)</p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Select
                isDisabled={userDropDownVisibility}
                options={userbyprofessionPosition}
                isMulti={true}
                onChange={userTypePositionHandler}
                classNamePrefix="select2-selection"
                key={userTypePositionHandler.value}
              />
            </Col>

            <Col md={6}>
              <Select
                isDisabled={userDropDownVisibility}
                options={userbyprofessionindustry}
                // value={selectedMulti}
                isMulti={true}
                onChange={userTypeIndustryHandler}
                classNamePrefix="select2-selection"
                key={userTypeIndustryHandler.value}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={5}></Col>
            <Col md={2}>
              <Button
                color="success"
                outline
                className="invoicesdetailbuttons waves-effect waves-light  w-100  "
                onClick={() => {
                  window.location.reload();
                }}
              >
                Clear All
              </Button>
            </Col>
            <Col md={2}>
              <Button
                color="success"
                className="invoicesdetailbuttons waves-effect waves-light  w-100  "
                onClick={reportExport}
              >
                Export
              </Button>
            </Col>
          </Row>

          <p></p>
        </Container>
      </Card>
    </div>
  );
};

export default Reports;
