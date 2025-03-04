import React from "react";
import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Hero from "./Components/Main/Hero/Hero.jsx";
import About from "./Components/Main/About/About.jsx";
import Services from "./Components/Main/Services/Services.jsx";
import Policy from "./Components/Main/Policy/Policy.jsx";
import Form from "./Components/Main/Form/Form.jsx";
import Route from "./Components/Main/Route/Route.jsx";
import Booking from "./Components/Main/Form/Booking.jsx";
import Signup from "./Components/Main/Form/SignUp/Signup.jsx";
import SignGoogle from "./Components/Main/Form/SignGoogle.jsx";
import Forgot from "./Components/Main/Form/Forgot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "route",
        element: <Route />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signwithgoogle",
        element: <SignGoogle />,
      },
      {
        path: "forgot",
        element: <Forgot />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
