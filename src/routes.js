import siteSettings from "./Constants/Admin/siteSettings";
import useDocumentTitle from './useDocumentTitle';
import Dashboard from "./Views/Admin/Dashboard";
import HomeSetting from './Views/Admin/Settings/HomeSetting';
import EditProfile from './Views/Admin/Profile';
import SiteSettingPage from './Views/Admin/Settings/SiteSettingPage';
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
import AboutSetting from './Views/Admin/Settings/AboutSetting';
import EventsSetting from './Views/Admin/Settings/EventsSetting';
import ConvenorsSetting from './Views/Admin/Settings/ConvenorsSetting';
import SingleConvenorsSetting from './Views/Admin/Settings/SingleConvenorsSetting';
import AccountSetting from './Views/Admin/Settings/AccountSetting';
import SelectionProcessSetting from './Views/Admin/Settings/SelectionProcessSetting';
import MemberOrganizationSetting from './Views/Admin/Settings/MemberOrganizationSetting';
import HowToParticipateSetting from './Views/Admin/Settings/HowToParticipateSetting';
import ContactUsSetting from './Views/Admin/Settings/ContactUsSetting';
import InTheNewsSetting from './Views/Admin/Settings/InTheNewsSetting';
import ListPost from './Views/Admin/Posts/ListPost';
import ListParty from './Views/Admin/Parties/ListParty';
import ListCandidate from './Views/Admin/Candidates/ListCandidate';
import ListCommunity from './Views/Admin/Communities/ListCommunity';
import ListEvent from './Views/Admin/Events/ListEvent';
import CreatePost from './Views/Admin/Posts/CreatePost';
import CreateEvent from './Views/Admin/Events/CreateEvent';
import CreateCommunity from './Views/Admin/Communities/CreateCommunity';
import CreateCandidate from './Views/Admin/Candidates/CreateCandidate';
import CreateParty from './Views/Admin/Parties/CreateParty';

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
function _AboutSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | About Page Settings`)
  return <AboutSetting />
}
function _EventsSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Events Page Settings`)
  return <EventsSetting />
}
function _ConvenorsSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Convenors Page Settings`)
  return <ConvenorsSetting />
}
function _SingleConvenorsSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Single Convenor Page Settings`)
  return <SingleConvenorsSetting />
}
function _AccountSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Account Page Settings`)
  return <AccountSetting />
}
function _SelectionProcessSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Selection Process Page Settings`)
  return <SelectionProcessSetting />
}
function _MemberOrganizationSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Member Organization Page Settings`)
  return <MemberOrganizationSetting />
}
function _HowToParticipateSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | How To Participate Page Settings`)
  return <HowToParticipateSetting />
}
function _ContactUsSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Contact Us Page Settings`)
  return <ContactUsSetting />
}
function _InTheNewsSetting() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | In The News Page Settings`)
  return <InTheNewsSetting />
}
function _ListPost() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | All Posts`)
  return <ListPost />
}
function _CreatePost() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Add New Post`)
  return <CreatePost />
}
function _ListEvent() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | All Event`)
  return <ListEvent />
}
function _CreateEvent() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Add New Event`)
  return <CreateEvent/>
}
function _ListCommunity() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | All Community`)
  return <ListCommunity />
}
function _CreateCommunity() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Add New Community`)
  return <CreateCommunity/>
}
function _ListCandidates() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | All Candidate`)
  return <ListCandidate />
}
function _CreateCandidate() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Add New Candidate`)
  return <CreateCandidate/>
}
function _ListParties() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | All Parties`)
  return <ListParty />
}
function _CreateParty() {
  useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Add New Party`)
  return <CreateParty/>
}
var routes = [
  //Auth
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
  //Admin Portal
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: _Dashboard,
    layout: "/admin",
    type: 'portal',
    order: 1,
  },
  {
    path: "/EditProfile",
    name: "Edit Profile",
    icon: "ni ni-single-02 text-yellow",
    component: _EditProfile,
    layout: "/admin",
    type: 'portal',
    order: 2,
  },
  //Post Hierarchy
  {
    path: "",
    name: "Posts",
    icon: "fas fa-paperclip text-primary",
    component: _ListPost,
    layout: "/admin",
    type: 'post_type',
    order: 1,
    subMenu: [
      {
        path: "/ListPost",
        name: "All Posts",
        icon: "ni ni-single-02 text-yellow",
        component: _ListPost,
        layout: "/admin",
        order: 1,
      },
      {
        path: "/CreatePost",
        name: "Add Post",
        icon: "ni ni-single-02 text-yellow",
        component: _CreatePost,
        layout: "/admin",
        order: 2,
      },
    ]
  },
  {
    path: "",
    name: "Events",
    icon: "fas fa-paperclip text-danger",
    component: _ListEvent,
    layout: "/admin",
    type: 'post_type',
    order: 2,
    subMenu: [
      {
        path: "/ListEvent",
        name: "All Events",
        icon: "ni ni-single-02 text-yellow",
        component: _ListEvent,
        layout: "/admin",
        order: 1,
      },
      {
        path: "/CreateEvent",
        name: "Add Event",
        icon: "ni ni-single-02 text-yellow",
        component: _CreateEvent,
        layout: "/admin",
        order: 2,
      },
    ]
  },
  {
    path: "",
    name: "Communities",
    icon: "fas fa-paperclip text-success",
    component: _ListCommunity,
    layout: "/admin",
    type: 'post_type',
    order: 3,
    subMenu: [
      {
        path: "/ListCommunity",
        name: "All Communities",
        icon: "ni ni-single-02 text-yellow",
        component: _ListCommunity,
        layout: "/admin",
        order: 1,
      },
      {
        path: "/CreateCommunity",
        name: "Add Community",
        icon: "ni ni-single-02 text-yellow",
        component: _CreateCommunity,
        layout: "/admin",
        order: 2,
      },
    ]
  },
  {
    path: "",
    name: "Candidates",
    icon: "fas fa-paperclip text-info",
    component: _ListCandidates,
    layout: "/admin",
    type: 'post_type',
    order: 4,
    subMenu: [
      {
        path: "/ListCandidates",
        name: "All Candidates",
        icon: "ni ni-single-02 text-yellow",
        component: _ListCommunity,
        layout: "/admin",
        order: 1,
      },
      {
        path: "/CreateCandidate",
        name: "Add Candidate",
        icon: "ni ni-single-02 text-yellow",
        component: _CreateCandidate,
        layout: "/admin",
        order: 2,
      },
    ]
  },
  {
    path: "",
    name: "Parties",
    icon: "fas fa-paperclip text-default",
    component: _ListParties,
    layout: "/admin",
    type: 'post_type',
    order: 5,
    subMenu: [
      {
        path: "/ListParties",
        name: "All Parties",
        icon: "ni ni-single-02 text-yellow",
        component: _ListParties,
        layout: "/admin",
        order: 1,
      },
      {
        path: "/CreateParty",
        name: "Add Party",
        icon: "ni ni-single-02 text-yellow",
        component: _CreateParty,
        layout: "/admin",
        order: 2,
      },
    ]
  },
  //Admin SETTINGS
  {
    path: "/HomeSetting",
    name: "Home",
    icon: "ni ni-settings  text-danger",
    component: _HomeSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 1,
  },
  {
    path: "/AboutSetting",
    name: "About Us",
    icon: "ni ni-settings text-default",
    component: _AboutSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 2,
  },
  {
    path: "/EventsSetting",
    name: "Events",
    icon: "ni ni-settings text-primary",
    component: _EventsSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 3,
  },
  {
    path: "/ConvenorsSetting",
    name: "Convenors",
    icon: "ni ni-settings text-success",
    component: _ConvenorsSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 4,
  },
  {
    path: "/SingleConvenorsSetting",
    name: "Single Convenors",
    icon: "ni ni-settings text-info",
    component: _SingleConvenorsSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 5,
  },
  {
    path: "/AccountSetting",
    name: "Account",
    icon: "ni ni-settings text-yellow",
    component: _AccountSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 6,
  },
  {
    path: "/SelectionProcessSetting",
    name: "Selection Process",
    icon: "ni ni-settings text-success",
    component: _SelectionProcessSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 7,
  },
  {
    path: "/MemberOrganizationSetting",
    name: "Member Organization",
    icon: "ni ni-settings text-default",
    component: _MemberOrganizationSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 8,
  },
  {
    path: "/HowToParticipateSetting",
    name: "How To Participate",
    icon: "ni ni-settings text-primary",
    component: _HowToParticipateSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 9,
  },
  {
    path: "/ContactUsSetting",
    name: "Contact Us",
    icon: "ni ni-settings text-info",
    component: _ContactUsSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 10,
  },
  {
    path: "/InTheNewsSetting",
    name: "In The News",
    icon: "ni ni-settings  text-danger",
    component: _InTheNewsSetting,
    layout: "/admin",
    type: 'PAGE_SETTINGS',
    order: 11,
  },
  {
    path: "/SiteSetting",
    name: "Site",
    icon: "ni ni-settings-gear-65 text-success",
    component: _SiteSettingPage,
    layout: "/admin",
    type: 'SETTINGS',
    order: 12,
  },
  //Public Pages
  {
    path: "/",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: _Home,
    layout: "",
    show: "no",
    order: 12,
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
  },
  {
    path: "/Disclaimer",
    name: "Disclaimer",
    icon: "ni ni-tv-2 text-primary",
    component: _Disclaimer,
    layout: "",
    show: "no",
  },
  {
    path: "/LegalInformation",
    name: "Legal Information",
    icon: "ni ni-tv-2 text-primary",
    component: _LegalInformation,
    layout: "",
    show: "no",
  },
  {
    path: "/FAQ",
    name: "FAQ",
    icon: "ni ni-tv-2 text-primary",
    component: _FAQ,
    layout: "",
    show: "no",
  },
  {
    path: "/TermsConditions",
    name: "Terms & Conditions",
    icon: "ni ni-tv-2 text-primary",
    component: _TermsConditions,
    layout: "",
    show: "no",
  },
  {
    path: "/ActRegulation",
    name: "Act and Regulation",
    icon: "ni ni-tv-2 text-primary",
    component: _ActRegulation,
    layout: "",
    show: "no",
  },
];
export default routes;
