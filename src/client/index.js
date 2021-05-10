import React from "react";
import { hydrate } from "react-dom";
import { App } from "../components/App";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";


loadableReady(() => {
    hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById("react-root")
    );
  });
  