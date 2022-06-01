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
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block ">
        <DropdownToggle
          tag="button"
          className="btn header-item noti-icon waves-effect "
          id="page-header-notifications-dropdown "
        >
          <i className="ri-notification-3-line"></i>
         {adminNotificationdata && adminNotificationdata?.length !==0 && adminNotificationdata?.data.map((e) => ( e.markRead === false?
          <span className="noti-dot" key={(Math.random()*1000).toString()}></span> : null ))}
        </DropdownToggle>
        
        <DropdownMenu

        key={(Math.random()*1000).toString()}
          className="dropdown-menu-end dropdown-menu-lg p-0 notiwidth "
          aria-labelledby="page-header-notifications-dropdown "
         
        >
          
          <div className="p-3">
            <Row className="align-items-center" key={(Math.random()*1000).toString()}>
              <Col>
                <h6 className="m-0"> {"Notifications"} </h6>
              </Col>
              <div className="col-auto  allmarkread small markallarrow"    onClick={()=>{(markAllReadFunc())}}>
               
                  {"Mark all as read"}
                
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
                    <div   >
                      {e.actionType === "CANCELLED_BOOKING" ? (
                        <div className="flex-1"  >
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                               
                              
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}><i className="mdi mdi-minus-circle revokedmarkcircle"></i></Col>
                                <Col md={8}>  <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle" >
                                  {e?.title}
                                </span></Col>
                                <Col md={3}>
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
                                </Col>
                                </Row>
                           
                            </Link>
                            
                          </div>
                          :
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}> <i className="mdi mdi-minus-circle revokedmarkcircle"></i></Col>
                                <Col md={8}> <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span></Col>
                                <Col md={3}>
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
                                </Col>
                                </Row>

                             
                            </Link>
                            
                          </div>
                          
                          }
                        </div>
                      ) : e.actionType === "REVOKED_BOOKING" ? (
                        <div className="flex-1"  >
                          {e.markRead === false?
                          
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}><i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                <Col md={8}>
                                <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span>
                                </Col>
                                <Col md={3}>
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
                                </Col>
                              </Row>
                              
                            </Link>
                           
                          </div>
                          
                          
                          :
                          
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}><i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                <Col md={8}> <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span></Col>
                                <Col md={3}>
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
                                </Col>
                                </Row>
                              
                            </Link>
                            
                          </div>
                          
                          }
                        
                        </div>
                      ) : e.actionType === "SUCCESS_BOOKING" ? (
                        <div className="flex-1"  >
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}> 
                                <Col md={1}><i className="mdi mdi-checkbox-marked-circle succesmarkcircle"></i></Col>
                                <Col md={8}><span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span></Col>
                                <Col md={3}>
                                <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                          

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                                </Col>
                                </Row>
                             
                            </Link>
                            
                          </div>
                          :
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}>  <i className="mdi mdi-checkbox-marked-circle succesmarkcircle"></i></Col>
                                <Col md={8}>
                                <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span>
                                </Col>
                                <Col md={3}>
                                <div className="font-size-12 text-muted ">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                               

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                                </Col>
                              </Row>
                             
                            </Link>
                           
                          </div>

                          }
                        </div>
                      ) : e.actionType === "ALERT" ? (
                        <div className="flex-1"  >
                          {e.markRead === false?
                          <div>
                            <Link
                              to={`/bookingdetail/${e.bookingId}/1}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                            >
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                <Col md={1}> <i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                <Col md={8}>  <span className="mt-0 mb-1 ml-1 revertcirclecolorcss notificationfontstyle">
                                  {e?.title}
                                </span></Col>
                                <Col md={3}>

                                <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                               

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                                </Col>
                              </Row>
                             
                            </Link>
                           
                          </div>
                          :
                          <div>
                          <Link
                            to={`/bookingdetail/${e.bookingId}/1}`}
                            className="text-reset notification-item"
                          >

                            <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                              <Col md={1}> <i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                              <Col md={8}>
                              <span className="mt-0 mb-1 ml-1 readnotificationcss notificationfontstyle">
                                {e?.title}
                              </span>

                              </Col>
                              <Col md={3}>

                              <div className="font-size-12 text-muted">
                            <p className="mb-1">{e?.body}</p>
                            <p className="mb-0">
                             

                              {moment
                                .utc(e?.createdAt)
                                .local()
                                .startOf("seconds")
                                .fromNow()}
                            </p>
                          </div>
                              </Col>
                              </Row>
                            
                          </Link>
                         
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
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                            <Col md={1}> <i className="mdi mdi-information requestmarkcircle">  </i>
                            </Col>
                            <Col md={8}> <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle"  >
                             
                             {e?.title}
                           </span></Col>
                           
                            <Col md={3}> 
                            <div className="font-size-12 text-muted">
                              <p className="mb-1">{e?.body}</p>
                              <p className="mb-0">
                        

                                {moment
                                  .utc(e?.createdAt)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </p>
                            </div>
                            
                            </Col>
                          </Row>
                           
                            </Link>
         
                          </div>
                          :
                          <div>
                          <Link
                            to={`/bookingdetail/${e.bookingId}/1}`}
                            className="text-reset notification-item"
                          >
                            <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                              <Col md={1}> <i className="mdi mdi-information requestmarkcircle"></i></Col>
                              <Col md={8}><span className="mt-1  readnotificationcss notificationfontstyle mb-1">
                             
                             {e?.title}
                           </span>
                           </Col>
                              <Col md={3}>

                              <div className="font-size-12 text-muted">
                            <p className="mb-1">{e?.body}</p>
                            <p className="mb-0">
                           
                              {moment
                                .utc(e?.createdAt)
                                .local()
                                .startOf("seconds")
                                .fromNow()}
                            </p>
                          </div>
                              </Col>
                              </Row>
                           
                          </Link>
                         
                        </div>           
                          }
                        </div>
                      ) : null}
                    </div>
                  ) : e?.redirectTo === "USER" ? (
                    <div  >
                      <div>
                        {e.actionType === "CANCELLED_BOOKING" ? (
                          <div className="flex-1"  >
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}>    <i className="mdi mdi-minus-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}>     <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}><div className="font-size-12 text-muted">
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
                              </div></Col>
                                  
                                </Row>
                               
                              </Link>
                             
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>

                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}><i className="mdi mdi-minus-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}> <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>   <div className="font-size-12 text-muted">
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
                              </div></Col>
                                  
                                </Row>
                            
                              </Link>
                              
                            </div>
                            
                            }
                          </div>
                        ) : e.actionType === "REVOKED_BOOKING" ? (
                          <div className="flex-1"  >
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}> <i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}><span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                               
                              </Link>
                              
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}><i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}>   <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                               
                              </Link>
                            
                            </div>
                            
                            }
                          </div>
                        ) : e.actionType === "SUCCESS_BOOKING" ? (
                          <div className="flex-1"  >
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`} 
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}><i className="mdi mdi-checkbox-marked-circle succesmarkcircle"></i></Col>
                                  <Col md={8}> <span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}><div className="font-size-12 text-muted">
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
                              </div></Col>
                                  
                                </Row>
                               
                              </Link>
                              
                            </div>
                            :
                            <div className="mb-2 mt-1">
                              <Link to={`/userprofiledetail/${e.userId}`}>

                              <Row key={(Math.random()*1000).toString()}>
                                  <Col md={1}>  <i className="mdi mdi-checkbox-marked-circle succesmarkcircle"></i></Col>
                                  <Col md={8}><span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                              
                              </Link>
                              
                            </div>
                            }
                          </div>
                        ) : e.actionType === "ALERT" ? (
                          <div className="flex-1"  >
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}> <i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}><span className="mt-0 mb-1 ml-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                              
                              </Link>
                             
                            </div>
                            :
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}>
                              <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}> <i className="mdi mdi-alert-circle revokedmarkcircle"></i></Col>
                                  <Col md={8}> <span className="mt-0 mb-1 ml-1 readnotificationcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                               
                              </Link>
                             
                            </div>
                            }
                          </div>
                        ) : e.actionType === "INFO" ? (
                          <div className="flex-1"  >
                            {e.markRead === false?
                            <div>
                              <Link to={`/userprofiledetail/${e.userId}`}
                              className="text-reset notification-item"
                              onClick={()=>notificationSeenFunc(e)}
                              >
                                <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}> <i className="mdi mdi-information requestmarkcircle"></i></Col>
                                  <Col md={8}><span className="mt-0 mb-1 revertcirclecolorcss notificationfontstyle">
                                    {e?.title}
                                  </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                               
                              </Link>
                              
                            </div>
                            :
                            <div>
                            <Link to={`/userprofiledetail/${e.userId}`}>
                            <Row className="mb-2 mt-1" key={(Math.random()*1000).toString()}>
                                  <Col md={1}> <i className="mdi mdi-information requestmarkcircle"></i></Col>
                                  <Col md={8}> <span className="mt-0 mb-1 readnotificationcss notificationfontstyle">
                                  {e?.title}
                                </span></Col>
                                  <Col md={3}>
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
                                  </Col>
                                  
                                </Row>
                              
                            </Link>
                           
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
