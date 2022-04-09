import React, { useState, useEffect } from "react";
import sign_up_image from "./pic/sign_up_image.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Container, Alert, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { checkLogin, apiError } from "../../store/actions";
import { DIOM_BASED_URLS } from "../../config/url";

const Login = () => {
  const [username, setUsername] = useState("humx7898@gmail.com");
  const [userpassword, setUserpassword] = useState("123456789Abc");
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginError } = useSelector((state) => state.Login);

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
      }),
    })
      .then((response) => response.json())
      .then((result3) => {
        // console.log("hmm loggedin");
        const Token = result3.token;
        localStorage.setItem("Token", Token);
        dispatch(checkLogin(values, history));
      })
      .catch((error) => console.log("error", error));

    //   ***********API END**************
  };

  const UserPasswordFunc = (e) => {
    console.log(e.target.value);
    setUserpassword(e.target.value);
  };

  const UserNameFunc = (e) => {
    // console.log( e.target.value)
    setUsername(e.target.value);
  };

  useEffect(() => {
    dispatch(apiError(""));
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

                        {loginError && loginError ? (
                          <Alert color="danger">{loginError}</Alert>
                        ) : null}

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
                                  value={this.state.username}
                                  type="text"
                                  onChange={this.UserNameFunc}
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
                                  value={this.state.userpassword}
                                  type="password"
                                  className="form-control"
                                  id="userpassword"
                                  placeholder="Enter password"
                                  onChange={this.UserPasswordFunc}
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
    </React.Fragment>
  );
};

export default Login;
