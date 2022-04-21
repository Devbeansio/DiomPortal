import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import moment from "moment";
import { getMessaging, onMessage } from "firebase/messaging";
import "../../../firebase";
import { withNamespaces } from "react-i18next";
import UseNotifications from "../../../pages/Notifications/useNotifications";
const NotificationDropdown = () => {
  const [menu, setMenu] = useState(false);
  const [notifications, setNotifications] = useState();

  const { adminNotificationdata } = UseNotifications();
  // console.log("adminNotificationdata : ", adminNotificationdata.data);

  const toggle = () => {
    setMenu((prevState) => !prevState.menu);
  };

  const messaging = getMessaging();

  useEffect(() => {
    onMessage(messaging, (payload) => {
      setNotifications(payload.notification);
    });
  }, []);

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle
          tag="button"
          className="btn header-item noti-icon waves-effect"
          id="page-header-notifications-dropdown"
        >
          <i className="ri-notification-3-line"></i>
          <span className="noti-dot"></span>
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-end dropdown-menu-lg p-0"
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {"Notifications"} </h6>
              </Col>
              <div className="col-auto">
                <Link to="/notificationListingPage" className="small">
                  {"View All"}
                </Link>
              </div>
            </Row>
          </div>
          <SimpleBar style={{ maxHeight: "230px" }}>
            <Link to="#" className="text-reset notification-item">
              <div className="d-flex flex-column">
                {adminNotificationdata?.data.map((e) => (
                  <div>
                    {e?.redirectTo === "BOOKING" ? (
                      // <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                      <div>
                        {e.actionType === "CANCELLED_BOOKING" ? (
                          <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                            <div className="flex-1" key={e?.id}>
                              <div>
                                <i className="mdi mdi-minus-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 ">{e?.title}</span>
                                </i>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">{e?.body}</p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i>

                                    {moment
                                      .utc(e?.createdAt)
                                      .local()
                                      .startOf("seconds")
                                      .fromNow()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : e.actionType === "REVOKED_BOOKING" ? (
                          <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                            <div className="flex-1" key={e?.id}>
                              <div>
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1">{e?.title}</span>
                                </i>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">{e?.body}</p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i>

                                    {moment
                                      .utc(e?.createdAt)
                                      .local()
                                      .startOf("seconds")
                                      .fromNow()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : e.actionType === "SUCCESS_BOOKING" ? (
                          <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                            <div className="flex-1" key={e?.id}>
                              <div>
                                <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                  <span className="mt-0 mb-1">{e?.title}</span>
                                </i>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">{e?.body}</p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i>

                                    {moment
                                      .utc(e?.createdAt)
                                      .local()
                                      .startOf("seconds")
                                      .fromNow()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : e.actionType === "ALERT" ? (
                          <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                            <div className="flex-1" key={e?.id}>
                              <div>
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 ml-1">
                                    {e?.title}
                                  </span>
                                </i>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">{e?.body}</p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i>

                                    {moment
                                      .utc(e?.createdAt)
                                      .local()
                                      .startOf("seconds")
                                      .fromNow()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : e.actionType === "INFO" ? (
                          <Link to={`/bookingdetail/${e.bookingId}/1}`}>
                            <div className="flex-1" key={e?.id}>
                              <div>
                                <i className="mdi mdi-information requestmarkcircle">
                                  <span className="mt-0 mb-1">{e?.title}</span>
                                </i>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">{e?.body}</p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i>

                                    {moment
                                      .utc(e?.createdAt)
                                      .local()
                                      .startOf("seconds")
                                      .fromNow()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : null}
                      </div>
                    ) : e?.redirectTo === "USER" ? (
                      <div>
                        {/* <Link to={`/userprofiledetail/${e.userId}`}> */}
                        <div>
                          {e.actionType === "CANCELLED_BOOKING" ? (
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <div className="flex-1" key={e?.id}>
                                <div>
                                  <i className="mdi mdi-minus-circle revokedmarkcircle">
                                    <span className="mt-0 mb-1 ">
                                      {e?.title}
                                    </span>
                                  </i>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">{e?.body}</p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline"></i>

                                      {moment
                                        .utc(e?.createdAt)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : e.actionType === "REVOKED_BOOKING" ? (
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <div className="flex-1" key={e?.id}>
                                <div>
                                  <i className="mdi mdi-alert-circle revokedmarkcircle">
                                    <span className="mt-0 mb-1">
                                      {e?.title}
                                    </span>
                                  </i>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">{e?.body}</p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline"></i>

                                      {moment
                                        .utc(e?.createdAt)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : e.actionType === "SUCCESS_BOOKING" ? (
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <div className="flex-1" key={e?.id}>
                                <div>
                                  <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                    <span className="mt-0 mb-1">
                                      {e?.title}
                                    </span>
                                  </i>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">{e?.body}</p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline"></i>

                                      {moment
                                        .utc(e?.createdAt)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : e.actionType === "ALERT" ? (
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <div className="flex-1" key={e?.id}>
                                <div>
                                  <i className="mdi mdi-alert-circle revokedmarkcircle">
                                    <span className="mt-0 mb-1 ml-1">
                                      {e?.title}
                                    </span>
                                  </i>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">{e?.body}</p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline"></i>

                                      {moment
                                        .utc(e?.createdAt)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : e.actionType === "INFO" ? (
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <div className="flex-1" key={e?.id}>
                                <div>
                                  <i className="mdi mdi-information requestmarkcircle">
                                    <span className="mt-0 mb-1">
                                      {e?.title}
                                    </span>
                                  </i>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">{e?.body}</p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline"></i>

                                      {moment
                                        .utc(e?.createdAt)
                                        .local()
                                        .startOf("seconds")
                                        .fromNow()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top">
            <Link
              to="/notificationListingPage"
              className="btn btn-sm btn-link font-size-14 btn-block text-center"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i>
              {" View More"}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationDropdown;
