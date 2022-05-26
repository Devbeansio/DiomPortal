import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import "./css/noficationListingPage.css";
import UseNotifications from "./useNotifications";
import { useParams } from "react-router-dom";
import moment from "moment";





const NotificationListingPage = () => {
  
  const { adminNotificationdata,notificationSeenFunc } = UseNotifications();
  const { PreviousUrl } = useParams();
  console.log("previousUrl",PreviousUrl)
  return (
    <div className="page-content">
      <Row>
        <Col md={1}>
          <Link to={`/${PreviousUrl}`} className="link" style={{ paddingLeft: 40 }}>
            <span className="fas fa-angle-left arrowheightwidth"></span>
          </Link>
        </Col>
        <Col md={11}>
          <h3 className="mb-5">All Notifications</h3>
        </Col>
      </Row>
    
       { adminNotificationdata &&  adminNotificationdata?.length !==0 && adminNotificationdata?.data.map((e) => (
        <Row key={e?.id}>
          <Col md={1}></Col>
          <Col md={10}>
            {e?.redirectTo === "BOOKING" ? (
              <Link to={`/bookingdetail/${e.bookingId}/1}`}  onClick={()=>notificationSeenFunc(e)}>
                <Card className="notificationcardcss">
                  {e.actionType === "CANCELLED_BOOKING" ? (
                    <Row>
                         {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-minus-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                      <Col md={9}>
                      <i className="mdi mdi-minus-circle revokedmarkcircle ">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>}


                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "REVOKED_BOOKING" ? (
                    <Row>
                      {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-alert-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                      <Col md={9}>
                      <i className="mdi mdi-alert-circle revokedmarkcircle ">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>}


                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "SUCCESS_BOOKING" ? (
                    <Row>
                       {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-checkbox-marked-circle succesmarkcircle ">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col> :
                       <Col md={9}>
                       <i className="mdi mdi-checkbox-marked-circle succesmarkcircle ">
                         <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                           {e?.title}
                         </span>
                       </i>
                     </Col>}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "ALERT" ? (
                    <Row>
                      {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-alert-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>
                      :

                      <Col md={9}>
                      <i className="mdi mdi-alert-circle revokedmarkcircle ">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>

}


                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "INFO" ? (
                    <Row>
                      {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-information requestmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                       <Col md={9}>
                       <i className="mdi mdi-information requestmarkcircle">
                         <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                           {e?.title}
                         </span>
                       </i>
                     </Col>}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : null}
                </Card>
              </Link>
            ) : e?.redirectTo === "USER" ? (
              <Link to={`/userprofiledetail/${e.userId}`}>
                <Card className="notificationcardcss">
                  {e.actionType === "CANCELLED_BOOKING" ? (
                    <Row>
                       {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-minus-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>
                      :
                      <Col md={9}>
                      <i className="mdi mdi-minus-circle revokedmarkcircle">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "REVOKED_BOOKING" ? (
                    <Row>
                       {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-alert-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                      <Col md={9}>
                      <i className="mdi mdi-alert-circle revokedmarkcircle">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>
}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "SUCCESS_BOOKING" ? (
                    <Row>
                      {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:

<Col md={9}>
<i className="mdi mdi-checkbox-marked-circle succesmarkcircle">
  <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
    {e?.title}
  </span>
</i>
</Col>}


                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "ALERT" ? (
                    <Row>
                      {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-alert-circle revokedmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                      <Col md={9}>
                      <i className="mdi mdi-alert-circle revokedmarkcircle">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : e.actionType === "INFO" ? (
                    <Row>
                       {e.markRead === false?
                      <Col md={9}>
                        <i className="mdi mdi-information requestmarkcircle">
                          <span className="revertcirclecolorcss notificationfontstyle">
                            {e?.title}
                          </span>
                        </i>
                      </Col>:
                      <Col md={9}>
                      <i className="mdi mdi-information requestmarkcircle">
                        <span className="revertcirclecolorcss readnotificationcss notificationfontstyle">
                          {e?.title}
                        </span>
                      </i>
                    </Col>}

                      <Col md={3}>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>

                          {moment
                            .utc(e?.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
                        </p>
                      </Col>
                    </Row>
                  ) : null}
                </Card>
              </Link>
            ) : null}
          </Col>

          <Col md={1}></Col>
        </Row>
      ))} 
    </div>
  );
};

export default NotificationListingPage;
