import Dashboard from "./Views/Admin/Dashboard";
import editProfile from "./Views/Admin/editProfile";
import forgetPassword from "./Views/Auth/forgetPassword";
import Login from "./Views/Auth/Login";
import Home from "./Views/Public/Home";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/editProfile",
    name: "Edit Profile",
    icon: "ni ni-tv-2 text-primary",
    component: editProfile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/resetPassword",
    name: "Forget Password",
    icon: "ni ni-key-25 text-info",
    component: forgetPassword,
    layout: "/auth",
  },
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-key-25 text-info",
    component: Home,
    layout: "/public",
  },
];
export default routes;
