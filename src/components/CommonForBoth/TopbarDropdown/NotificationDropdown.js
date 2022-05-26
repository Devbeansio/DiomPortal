import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import "./css/notificationdropdowncss.css";
import moment from "moment";
import { getMessaging, onMessage } from "firebase/messaging";
import "../../../firebase";
import { withNamespaces } from "react-i18next";
import UseNotifications from "../../../pages/Notifications/useNotifications";
const NotificationDropdown = () => {
  const [menu, setMenu] = useState(false);
  const [notifications, setNotifications] = useState();

  const { adminNotificationdata,notificationSeenFunc ,markAllReadFunc} = UseNotifications();
  const previousUrl= window.location.pathname
  

  

  const toggle = () => {
    setMenu((prevState) => !prevState);
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
         {adminNotificationdata && adminNotificationdata?.length !==0 && adminNotificationdata?.data.map((e) => ( e.markRead === false?
          <span className="noti-dot"></span> : null ))}
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-end dropdown-menu-lg p-0 "
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {"Notifications"} </h6>
              </Col>
              <div className="col-auto  allmarkread small markallarrow"    onClick={()=>{(markAllReadFunc())}}>
                {/* <Link  className="small" onClick={()=>{(markAllReadFunc())}}> */}
                  {"Mark all as read"}
                {/* </Link> */}
              </div>
            </Row>
          </div>
          <SimpleBar
            style={{ maxHeight: "230px" }}
            className="notifocationfontstyle"
          >
            <div className="d-flex flex-column" style={{ padding: 10 }}>
           

              { adminNotificationdata && adminNotificationdata?.length !==0 && adminNotificationdata?.data.map((e) => (
                <div className="all " key={(Math.random()*1000).toString()}>
                  {e?.redirectTo === "BOOKING" ? (
                    <div  key={(Math.random()*1000).toString()}>
                      {e.actionType === "CANCELLED_BOOKING" ? (
                        <div className="flex-1" >
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              
                            >
                              <i className="mdi mdi-minus-circle revokedmarkcircle">
                                <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle" >
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <span className="notificlockmargin"></span>{" "}
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
                          :
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <i className="mdi mdi-minus-circle revokedmarkcircle">
                                <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <span className="notificlockmargin"></span>{" "}
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
                          
                          }
                        </div>
                      ) : e.actionType === "REVOKED_BOOKING" ? (
                        <div className="flex-1" key={(Math.random()*1000).toString()}>
                          {e.markRead === false?
                          
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <i className="mdi mdi-alert-circle revokedmarkcircle">
                                <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                          
                          
                          :
                          
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <i className="mdi mdi-alert-circle revokedmarkcircle">
                                <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                          
                          }
                        
                        </div>
                      ) : e.actionType === "SUCCESS_BOOKING" ? (
                        <div className="flex-1" key={(Math.random()*1000).toString()}>
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                          :
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted ">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>

                          }
                        </div>
                      ) : e.actionType === "ALERT" ? (
                        <div className="flex-1" key={(Math.random()*1000).toString()}>
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <i className="mdi mdi-alert-circle revokedmarkcircle">
                                <span className="mt-0 mb-1 ml-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                          :
                          <div>
                          <Link
                            to={`/bookingdetail/${e.bookingId}/1}`}
                            className="text-reset notification-item"
                          >
                            <i className="mdi mdi-alert-circle revokedmarkcircle">
                              <span className="mt-0 mb-1 ml-1 readnotificationcss notificationfontstyle">
                                {e?.title}
                              </span>
                            </i>
                          </Link>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">{e?.body}</p>
                            <p className="mb-0">
                              <span className="notificlockmargin">
                                <i className="mdi mdi-clock-outline"></i>{" "}
                              </span>

                              {moment
                                .utc(e?.createdAt)
                                .local()
                                .startOf("seconds")
                                .fromNow()}
                            </p>
                          </div>
                        </div>
                          
                          }
                        </div>
                      ) : e.actionType === "INFO" ? (
                        <div className="flex-1  " >
                          {e.markRead === false?
                          <div>
                            <Link
                             to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item "
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <i className="mdi mdi-information requestmarkcircle">
                                <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle"  >
                             
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                          :
                          <div>
                          <Link
                            to={`/bookingdetail/${e.bookingId}/1}`}
                            className="text-reset notification-item"
                          >
                            <i className="mdi mdi-information requestmarkcircle">
                              <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                             
                                {e?.title}
                              </span>
                            </i>
                          </Link>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">{e?.body}</p>
                            <p className="mb-0">
                              <span className="notificlockmargin">
                                <i className="mdi mdi-clock-outline"></i>{" "}
                              </span>

                              {moment
                                .utc(e?.createdAt)
                                .local()
                                .startOf("seconds")
                                .fromNow()}
                            </p>
                          </div>
                        </div>           
                          }
                        </div>
                      ) : null}
                    </div>
                  ) : e?.redirectTo === "USER" ? (
                    <div key={(Math.random()*1000).toString()}>
                      <div>
                        {e.actionType === "CANCELLED_BOOKING" ? (
                          <div className="flex-1" key={(Math.random()*1000).toString()}>
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <i className="mdi mdi-minus-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                                <i className="mdi mdi-minus-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            
                            }
                          </div>
                        ) : e.actionType === "REVOKED_BOOKING" ? (
                          <div className="flex-1" key={(Math.random()*1000).toString()}>
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            
                            }
                          </div>
                        ) : e.actionType === "SUCCESS_BOOKING" ? (
                          <div className="flex-1" key={(Math.random()*1000).toString()}>
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`} 
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                  <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                                <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                                  <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            }
                          </div>
                        ) : e.actionType === "ALERT" ? (
                          <div className="flex-1" key={(Math.random()*1000).toString()}>
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 ml-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                                <i className="mdi mdi-alert-circle revokedmarkcircle">
                                  <span className="mt-0 mb-1 ml-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            }
                          </div>
                        ) : e.actionType === "INFO" ? (
                          <div className="flex-1" key={(Math.random()*1000).toString()}>
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <i className="mdi mdi-information requestmarkcircle">
                                  <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span>
                                </i>
                              </Link>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1">{e?.body}</p>
                                <p className="mb-0">
                                  <span className="notificlockmargin">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                  </span>

                                  {moment
                                    .utc(e?.createdAt)
                                    .local()
                                    .startOf("seconds")
                                    .fromNow()}
                                </p>
                              </div>
                            </div>
                            :
                            <div>
                            <Link to={`/userprofiledetail/${e.userId}`}>
                              <i className="mdi mdi-information requestmarkcircle">
                                <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span>
                              </i>
                            </Link>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                                <span className="notificlockmargin">
                                  <i className="mdi mdi-clock-outline"></i>{" "}
                                </span>

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                          </div>
                            }
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))} 
            </div>
            {/* </Link> */}
          </SimpleBar>
         
          <div className="p-2 border-top viewAllbButtonAlignment">
            <Link
              to={`/notificationListingPage/${previousUrl}`}
              className="btn btn-sm btn-link font-size-14 btn-block text-center "
            >
              <i className="mdi mdi-arrow-right-circle me-1 "></i>
              {" View More"}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationDropdown;
