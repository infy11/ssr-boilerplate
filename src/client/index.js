import React from "react";
import { hydrate } from "react-dom";
import { App } from "../components/App";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
};


loadableReady(() => {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("react-root")
    );
});
