import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import Messages from "./pages/messages/Messages";
import Notifications from "./pages/notifications/Notifications";
import Settings from "./pages/settings/Settings";
import RootLayout from "./components/layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/rootlayout" element={<RootLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="messages" element={<Messages />}></Route>
          <Route path="notifications" element={<Notifications />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="/forgotPass" element={<ForgotPassword />}></Route>
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
