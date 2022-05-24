import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider, useIsFetching } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./react-query/queryClient";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

import store from "./store";
import { SnackbarProvider } from "notistack";

const app = (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <SnackbarProvider maxSnack={3}  anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
      </SnackbarProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
