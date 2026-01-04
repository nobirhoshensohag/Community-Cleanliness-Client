import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Issues from "../Pages/Issues";
import AddIssues from "../Pages/Dashboard/AddIssues";
import MyIssues from "../Pages/Dashboard/MyIssues";
import MyContribution from "../Pages/Dashboard/MyContribution";
import Profile from "../Pages/Dashboard/Profile";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import IssueDetails from "../Pages/IssueDetails";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

// Dashboard pages
import DashboardHome from "../Pages/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "issues",
        element: <Issues />,
      },
      {
        path: "issue-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://community-cleanliness-server-one.vercel.app/issues/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  /* ================= Dashboard Routes ================= */
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-issues",
        element: <AddIssues />,
      },
      {
        path: "my-issues",
        element: <MyIssues />,
      },
      {
        path: "my-contribution",
        element: <MyContribution />,
      },
      {
  path: "profile",
  element: <Profile />,
},

    ],
  },

  /* ================= Error ================= */
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
