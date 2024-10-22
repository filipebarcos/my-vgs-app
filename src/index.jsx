import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { css, Global } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={css`
      h1,
      p,
      div {
        font-family: Arial, Helvetica, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      html {
        padding: 50px;
      }

      .vgs-collect-iframe-wr iframe {
        width: 100%;
        height: 100%;
      }

      .vgs-collect-iframe-wr {
        width: 300px;
        display: block;
        height: 50px;
        border: 1px solid lightgrey;
        border-radius: 4px;
        margin: 6px 0;
        padding: 0 20px;
        box-sizing: border-box;
      }

      button {
        background: #35c2a1;
        color: white;
        box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1),
          0 3px 6px 0 rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        border: 0;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 400;
        width: 300px;
        height: 40px;
        line-height: 38px;
        outline: none;
      }

      button:focus {
        background: #35c2a1;
      }

      button:active {
        background: #35c2a1;
      }
    `} />
    <App />
  </React.StrictMode>
);
