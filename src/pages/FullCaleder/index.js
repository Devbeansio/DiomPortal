import React from "react";
import { Calendar } from "react-big-calendar";
import DatePicker from "react-datepicker";
import { Button, Modal, Col, Row, ModalBody, ModalHeader } from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./css/fullcalenderindex.css";
import { Container } from "@mui/system";
import useFullCalender from "./useFullCalender";

const FullCalender = () => {
  const {
    events,
    localizer,
    locales,
    handleAllEvents,
    tog_static,
    modal_static,
    setModal_static,
    allEvents,
    setAllEvents,
    newEvent,
    setNewEvent,
  } = useFullCalender();

  return (
    <div
      className="page-content container-flued"
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <Row>
          <Col md={10}></Col>
          <Col md={2}>
            <Button
              color="success"
              outline
              onClick={() => setModal_static(true)}
            >
              + Add a Booking
            </Button>
          </Col>
        </Row>

        <div className="mt-3">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            //   className='cleventheight'
            style={{ height: 600, margin: "18px" }}
          />
        </div>
        {console.log("modal_static : ", modal_static)}
        <Modal isOpen={modal_static} toggle={tog_static} centered={true}>
          <Row>
            <Col md={4}></Col>
            <Col md={7}>
              <ModalHeader toggle={() => setModal_static(false)}>
                Add new booking
              </ModalHeader>
            </Col>
            <Col md={1}></Col>
          </Row>

          <ModalBody>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <Row>
                  <Col md={4}>
                    <b>Title</b>
                  </Col>
                  <Col md={8}>
                    <input
                      type="text"
                      placeholder=" Add title"
                      value={newEvent.title}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, title: e.target.value })
                      }
                    />
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={4}>
                    <b>Start Date</b>
                  </Col>
                  <Col md={8}>
                    <DatePicker
                      placeholderText="Start Date"
                      className=""
                      selected={newEvent.start}
                      onChange={(start) => setNewEvent({ ...newEvent, start })}
                    />
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={4}>
                    <b>End Date</b>
                  </Col>
                  <Col md={8}>
                    <DatePicker
                      placeholderText="End Date"
                      selected={newEvent.end}
                      onChange={(end) => setNewEvent({ ...newEvent, end })}
                    />
                  </Col>
                </Row>

                {/* <Button onClick={handleAllEvents} style={{marginTop:"10px"}}>Submit</Button> */}
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
                  onClick={handleAllEvents}
                >
                  Yes
                </Button>
              </Col>

              <Col md={2}></Col>
            </Row>
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
};

export default FullCalender;
