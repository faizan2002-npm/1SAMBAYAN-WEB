import Dashboard from "./Views/Admin/Dashboard";
import Login from "./Views/Auth/Login";
import Home from "./Views/Public/Home";
import useDocumentTitle from './useDocumentTitle';
import siteSettings from "./Constants/Admin/siteSettings";
import OTPAuthentication from './Views/Auth/OTPAuthentication';
import EditProfile from './Views/Admin/EditProfile';
import ForgetPassword from './Views/Auth/ForgetPassword';

function _Dashboard() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Dashboard`)
  return <Dashboard />
}

function _editProfile() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Edit Profile`)
  return <EditProfile />
}

function _Login() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Login`)
  return <Login/>
}

function _forgetPassword() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Forget Password`)
  return <ForgetPassword />
}
function _optAuthentication() {
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
    path: "/editProfile",
    name: "Edit Profile",
    icon: "ni ni-tv-2 text-primary",
    component: _editProfile,
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
    component: _optAuthentication,
    layout: "/auth",
  },
  {
    path: "/resetPassword",
    name: "Forget Password",
    icon: "ni ni-key-25 text-info",
    component: _forgetPassword,
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
