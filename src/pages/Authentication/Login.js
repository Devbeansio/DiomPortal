import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Alert, Container, Label } from "reactstrap";
import sign_up_image from "./pic/sign_up_image.png";
import "./css/Login.css";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { ToastContainer } from "react-toastify";
import { checkLogin, apiError } from "../../store/actions";
import { DIOM_BASED_URLS } from "../../config/url";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
const Login = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  // const { loginError } = useSelector((state) => state.Login);
  const [currentTokenOfUser, setCurrentTokenOfUser] = useState("");

  const handleSubmit = (event, values) => {
    // *************API START***************
    fetch(`${DIOM_BASED_URLS}/diom/spaces/admin/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: username,
        password: userpassword,
        userDeviceToken: currentTokenOfUser,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
      
        localStorage.setItem("Token", resp.token);
    
    // history.push("/mydashboard");
    dispatch(
      checkLogin(
        { username, password: userpassword, currentTokenOfUser },
        history
      )
     
    ) 
    })
    // .catch((error) => console.log("error", error));
    //   ***********API END**************
  };
  const UserPasswordFunc = (e) => {
    setUserpassword(e.target.value);
  };
  const UserNameFunc = (e) => {
    setUsername(e.target.value);
  };
  useEffect(() => {
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        "BM1fWytNemYmBDWXErhlC830Pawh6YMuAXqU1T7XWsUm5_U7ZCXIZipfmwkcLIOlcz8uexN7u-9EtqpQWChFb-E",
    }).then((currentToken) => {
      if (currentToken) {
       
        setCurrentTokenOfUser(currentToken);
      }
    });

    // dispatch(apiError(""));
    document.body.classList.add("auth-body-bg");
    return document.body.classList.remove("auth-body-bg");
  }, []);
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={5} md={5} className="">
              {/* <div className="bg-overlay "> */}
              <div className="image-wrap ">
                <img
                  className=" img-responsive  "
                  src={sign_up_image}
                  alt="img"
                />
              </div>
              {/* </div> */}
            </Col>
            <Col lg={7} md={7}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9} md={9}>
                      <div>
                        <div className="text-center">
                          <h4 className="wellcomepanel">
                            Welcome to Diom Admin Panel
                          </h4>
                        </div>
                        {/* {loginError && loginError ? (
                          <Alert color="danger">{loginError}</Alert>
                        ) : null} */}
                        <div className="p-2 mt-5">
                          <Label
                            htmlFor="username"
                            className="logininboxpanels"
                          >
                            Username
                          </Label>
                          <AvForm
                            className="form-horizontal "
                            onValidSubmit={handleSubmit}
                          >
                            <div className="auth-form-group-custom mb-4">
                              <i className="ri-user-2-line auti-custom-input-icon"></i>
                              <AvField
                                name="username"
                                onChange={UserNameFunc}
                                value={username}
                                type="text"
                                className="form-control paddingbottominputlogin"
                                id="username"
                                validate={{ email: true, required: true }}
                                placeholder="Enter username"
                              />
                            </div>
                            {/* <div className="auth-form-group-custom mb-4">
                                <AvField
                                  name="username"
                                  value={state.username}
                                  type="text"
                                  onChange={UserNameFunc}
                                  className="form-control"
                                  id="username"
                                  validate={{ email: true, required: true }}
                                  placeholder="Enter username"
                                />
                              </div> */}
                            <Label
                              htmlFor="userpassword"
                              className="logininboxpanels"
                            >
                              Password
                            </Label>
                            <div className="auth-form-group-custom mb-4">
                              <i className="ri-lock-2-line auti-custom-input-icon"></i>
                              <AvField
                                name="password"
                                value={userpassword}
                                type="password"
                                onChange={UserPasswordFunc}
                                className="form-control paddingbottominputlogin"
                                id="userpassword"
                                placeholder="Enter password"
                              />
                            </div>
                            {/* <div className="auth-form-group-custom  mb-4">
                                <AvField
                                  name="password"
                                  value={state.userpassword}
                                  type="password"
                                  className="form-control"
                                  id="userpassword"
                                  placeholder="Enter password"
                                  onChange={UserPasswordFunc}
                                />
                              </div> */}
                            <div className="mt-5 text-center">
                              <Button
                                color="success"
                                className="waves-effect waves-light mr-1 w-100 "
                                block
                                // onClick={LoginFunc}
                              >
                                <span className=" signinbutton">SIGN IN</span>
                              </Button>
                            </div>
                          </AvForm>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};
export default Login;
