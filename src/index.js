import React from "react";
import { render } from "react-dom";
import App from "./client/components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
);
// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.getElementById("root")
// );
