import Dashboard from "./Views/Admin/Dashboard";
import Login from "./Views/Auth/Login";
import Home from "./Views/Public/Home";
import useDocumentTitle from './useDocumentTitle';
import siteSettings from "./Constants/Admin/siteSettings";
import ForgetPassword from './Views/Auth/Forget.js';
import OTPAuthentication from './Views/Auth/OTP';
import EditProfile from './Views/Admin/Profile';

function _Dashboard() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Dashboard`)
  return <Dashboard />
}

function _EditProfile() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Edit Profile`)
  return <EditProfile />
}

function _Login() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Login`)
  return <Login/>
}

function _ForgetPassword() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Forget Password`)
  return <ForgetPassword />
}
function _OTPAuthentication() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | OTP Authentication`)
  return <OTPAuthentication />
}
function _Home() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Home`)
  return <Home />
}

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: _Dashboard,
    layout: "/admin",
  },
  {
    path: "/EditProfile",
    name: "Edit Profile",
    icon: "ni ni-tv-2 text-primary",
    component: _EditProfile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: _Login,
    layout: "/auth",
  },
  {
    path: "/otpAuthentication",
    name: "OTP Authentication",
    icon: "ni ni-key-25 text-info",
    component: _OTPAuthentication,
    layout: "/auth",
  },
  {
    path: "/resetPassword",
    name: "Forget Password",
    icon: "ni ni-key-25 text-info",
    component: _ForgetPassword,
    layout: "/auth",
  },
  {
    path: "/",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: _Home,
    layout: "/public",
  },
];
export default routes;
