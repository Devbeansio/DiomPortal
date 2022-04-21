import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
// import firebase from "./firebase";

// Import scss
import "./assets/scss/theme.scss";

//Fake backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
import "./firebase";

import { getMessaging, onMessage, getToken } from "firebase/messaging";

fakeBackend();

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // onMessageListener();
  }

  getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (this.props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  componentDidMount() {
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        "BM1fWytNemYmBDWXErhlC830Pawh6YMuAXqU1T7XWsUm5_U7ZCXIZipfmwkcLIOlcz8uexN7u-9EtqpQWChFb-E",
    })
      .then((currentToken) => {
        if (currentToken) {
          // console.log(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });

    // onMessage(getMessaging(), (payload) => {
    //   console.log("Message received. ", payload);
    // });
  }

  render() {
    const Layout = this.getLayout();

    return (
      <React.Fragment>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              exact
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
