import React from "react";
import { render } from "react-dom";
import App from "./client/components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    // <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    // </Provider>
    
    
);
// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.getElementById("root")
// );
