import 'react-hot-loader'
import { AppContainer } from 'react-hot-loader';
import React from "react";
import { hydrate, render } from "react-dom";
import {App}  from "../components/App";
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


const renderer = window.__shell__ ? hydrate : render
loadableReady(() => {
    renderer(
        <AppContainer>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </AppContainer>,
        document.getElementById("react-root")
    );
});
