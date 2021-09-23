import siteSettings from "./Constants/Admin/siteSettings";
import useDocumentTitle from './useDocumentTitle';
import Dashboard from "./Views/Admin/Dashboard";
import HomeSetting from './Views/Admin/HomeSetting';
import EditProfile from './Views/Admin/Profile';
import SiteSettingPage from './Views/Admin/SiteSettingPage';
import Login from "./Views/Auth/Login";
import ForgetPassword from './Views/Auth/Forget.js';
import OTPAuthentication from './Views/Auth/OTP';
import Home from "./Views/Public/Home";
import About from "./Views/Public/About";
import Account from "./Views/Public/Account";
import Contact from "./Views/Public/Contact";
import Convenors from "./Views/Public/Convenors";
import Events from "./Views/Public/Events";
import Member from "./Views/Public/Member";
import News from "./Views/Public/News";
import Participate from "./Views/Public/Participate";
import Selection from "./Views/Public/Selection";
import SingleConvenors from "./Views/Public/SingleConvenors";
import PrivacyPolicy from './Views/Public/PrivacyPolicy';
import Disclaimer from './Views/Public/Disclaimer';
import LegalInformation from './Views/Public/LegalInformation';
import FAQ from './Views/Public/FAQ';
import TermCondition from "./Views/Public/TermCondition";
import ActRegulations from './Views/Public/ActRegulations';

function _Dashboard() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Dashboard`)
  return <Dashboard />
}
function _EditProfile() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Edit Profile`)
  return <EditProfile />
}
function _HomeSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Home Setting`)
  return <HomeSetting />
}
function _SiteSettingPage() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Site Setting`)
  return <SiteSettingPage />
}
function _Login() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Login`)
  return <Login />
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
function _About() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | About Us`)
  return <About />
}
function _Account() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Account`)
  return <Account />
}
function _Contact() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Contact Us`)
  return <Contact />
}
function _Convenors() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Convenors`)
  return <Convenors />
}
function _Events() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Events`)
  return <Events />
}
function _Member() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Member Organizations`)
  return <Member />
}
function _News() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | In the News`)
  return <News />
}
function _Participate() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | How to Participate`)
  return <Participate />
}
function _Selection() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Selection Process`)
  return <Selection />
}
function _SingleConvenors() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Single Convenor`)
  return <SingleConvenors />
}
function _privacyPolicy() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Privacy Policy`)
  return <PrivacyPolicy />
}
function _Disclaimer() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Discalimer`)
  return <Disclaimer />
}
function _LegalInformation() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Legal Information`)
  return <LegalInformation />
}
function _FAQ() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | FAQs`)
  return <FAQ />
}
function _TermsConditions() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Terms & Conditions`)
  return <TermCondition />
}
function _ActRegulation() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Act and Regulation`)
  return <ActRegulations />
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
    path: "/HomeSetting",
    name: "Home Setting",
    icon: "ni ni-tv-2 text-primary",
    component: _HomeSetting,
    layout: "/admin",
  },
  {
    path: "/SiteSetting",
    name: "Site Setting",
    icon: "ni ni-tv-2 text-primary",
    component: _SiteSettingPage,
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
    layout: "",
    show: "no",
    order: 1,
  },
  {
    path: "/about",
    name: "About Us",
    icon: "ni ni-tv-2 text-primary",
    component: _About,
    layout: "",
    show: "yes",
    order: 1,
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-tv-2 text-primary",
    component: _Events,
    layout: "",
    show: "yes",
    order: 2,
  },
  {
    path: "/convenors",
    name: "Convenors",
    icon: "ni ni-tv-2 text-primary",
    component: _Convenors,
    layout: "",
    show: "yes",
    order: 3,
  },
  {
    path: "/account",
    name: "Account",
    icon: "ni ni-tv-2 text-primary",
    component: _Account,
    layout: "",
    show: "yes",
    order: 4,
  },
  {
    path: "/selection_process",
    name: "Selection Process",
    icon: "ni ni-tv-2 text-primary",
    component: _Selection,
    layout: "",
    show: "yes",
    order: 5,
  },
  {
    path: "/member_organization",
    name: "Member Organizations",
    icon: "ni ni-tv-2 text-primary",
    component: _Member,
    layout: "",
    show: "yes",
    order: 6,
  },
  {
    path: "/participate",
    name: "How to Participate",
    icon: "ni ni-tv-2 text-primary",
    component: _Participate,
    layout: "",
    show: "yes",
    order: 7,
  },
  {
    path: "/news",
    name: "In The News",
    icon: "ni ni-tv-2 text-primary",
    component: _News,
    layout: "",
    show: "yes",
    order: 8,
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: "ni ni-tv-2 text-primary",
    component: _Contact,
    layout: "",
    show: "yes",
    order: 8,
  },
  {
    path: "/single_convenor",
    name: "Single Convenor",
    icon: "ni ni-tv-2 text-primary",
    component: _SingleConvenors,
    layout: "",
    show: "no",
  },




  {
    path: "/PrivacyPolicy",
    name: "Privacy Policy",
    icon: "ni ni-tv-2 text-primary",
    component: _privacyPolicy,
    layout: "",
    show: "no",
  }, {
    path: "/Disclaimer",
    name: "Disclaimer",
    icon: "ni ni-tv-2 text-primary",
    component: _Disclaimer,
    layout: "",
    show: "no",
  }, {
    path: "/LegalInformation",
    name: "Legal Information",
    icon: "ni ni-tv-2 text-primary",
    component: _LegalInformation,
    layout: "",
    show: "no",
  }, {
    path: "/FAQ",
    name: "FAQ",
    icon: "ni ni-tv-2 text-primary",
    component: _FAQ,
    layout: "",
    show: "no",
  }, {
    path: "/TermsConditions",
    name: "Terms & Conditions",
    icon: "ni ni-tv-2 text-primary",
    component: _TermsConditions,
    layout: "",
    show: "no",
  }, {
    path: "/ActRegulation",
    name: "Act and Regulation",
    icon: "ni ni-tv-2 text-primary",
    component: _ActRegulation,
    layout: "",
    show: "no",
  },
];
export default routes;
