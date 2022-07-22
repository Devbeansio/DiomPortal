import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard

// Pages Calendar
import Calendar from "../pages/Calendar/Calendar";

//Utility
import StarterPage from "../pages/Utility/StarterPage";
import Maintenance from "../pages/Utility/Maintenance";
import CommingSoon from "../pages/Utility/CommingSoon";
import Timeline from "../pages/Utility/Timeline";
import FAQs from "../pages/Utility/FAQs";
import Pricing from "../pages/Utility/Pricing";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";
import EditableTables from "../pages/Tables/EditableTables";

// Inner Authentication
// import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";

import MyDashboard from "../pages/MyDashboard/mydashboard";

import Finance from "../pages/Finance/index";
import Reports from "../pages/Reports/index";
import ReportRequest from "../pages/Reports/reportRequest";
import AddAPackage from "../pages/AddAPackage/index";
import LocationDetailed from "../pages/Locations/LocationDetailed/index";
import Locations from "../pages/Locations/index";


import LocationBrands from "../pages/Locations/LocationBrands/index";
import Inventories from "../pages/Inventories/Index";
import InventoryDetail from "../pages/Inventories/InventoryDetail/index";
import ResourceType from "../pages/Inventories/ResourceType/index";
import ResourceDetailed from "../pages/Inventories/ResourceType/ResourceDetailed/index";
import FloorPlan from "../pages/Inventories/FloorPlan/index";
import FloorPlanDetail from "../pages/Inventories/FloorPlan/FloorPlanDetail/index";
import CheckedinCustomer from "../pages/MyDashboard/CheckedinCustomer/index";
import CheckedinCustomerDetail from "../pages/MyDashboard/CheckedinCustomer/CheckedinCustomerDetail/index";
import InvoicesMainPage from "../pages/Finance/InvoicesMainPage/index";
import InvoicesDetailPage from "../pages/Finance/InvoicesMainPage/InvoicesDetailPage/index";
import LocationBrandDetail from "../pages/Locations/LocationBrands/LocationBrandDetail/index";
import CreateLocationBrand from "../pages/Locations/LocationBrands/CreateLocationBrand/index.js";
import Taxation from "../pages/Finance/Taxation/index";
import BookingDetail from "../pages/MyDashboard/RequestBookings/BookingDetail/index";
import Categories from "../pages/Inventories/Categories";
import UserProfile from "../pages/UserProfile/index.js";
import CategoriesDetail from "../pages/Inventories/Categories/CategoriesDetail";
import RequestBookings from "../pages/MyDashboard/RequestBookings/index.js";
import UserProfileDetail from "../pages/UserProfile/UserProfileDetail/index.js";
import CreateCategory from "../pages/Inventories/Categories/createCategory";
import NotificationListingPage from "../pages/Notifications/notificationListingPage";
import DataLogs from "../pages/DataLogs";
import FullCalender from "../pages/FullCaleder";
const token = localStorage.getItem("Token");
const authProtectedRoutes = [
  { path: "/mydashboard", component: MyDashboard },
  { path: "/categoriesdetail/:id", component: CategoriesDetail },
  { path: "/finance", component: Finance },
  { path: "/reports", component: Reports },
  { path: "/reportRequest", component: ReportRequest },
  { path: "/addapackage", component: AddAPackage },
  { path: "/locationdetailed/:id", component: LocationDetailed },
  { path: "/locations", component: Locations },
  {path:"/datalogs",component:DataLogs},
  {path:"/fullcalender",component:FullCalender},
  { path: "/bookingdetail/:id/:t_ID", component: BookingDetail },
  { path: "/locationbrands", component: LocationBrands },
  { path: "/inventories", component: Inventories },
  { path: "/inventorydetail/:id", component: InventoryDetail },
  { path: "/resourcetype", component: ResourceType },
  { path: "/categories", component: Categories },
  { path: "/createcategory", component: CreateCategory },
  { path: "/notificationListingPage//:PreviousUrl", component: NotificationListingPage },

  {
    path: "/resourcedetailed/:id/:resourceTypeKey",
    component: ResourceDetailed,
  },
  { path: "/floorplan", component: FloorPlan },
  { path: "/floorplandetail/:floorid", component: FloorPlanDetail },
  { path: "/checkedincustomer", component: CheckedinCustomer },
  {
    path: "/checkedincustomerdetail/:id",
    component: CheckedinCustomerDetail,
  },
  { path: "/invoicesmainpage", component: InvoicesMainPage },
  { path: "/invoicesdetailpage/:id", component: InvoicesDetailPage },
  { path: "/locationbranddetail/:id", component: LocationBrandDetail },
  { path: "/createlocationbrand", component: CreateLocationBrand },
  { path: "/taxation", component: Taxation },
  { path: "/requestbookings/:t_ID", component: RequestBookings },
  { path: "/userprofile", component: UserProfile },
  { path: "/userprofiledetail/:id", component: UserProfileDetail },

  // Tables
  { path: "/basic-tables", component: BasicTables },
  { path: "/datatable-table", component: DatatableTables },
  { path: "/responsive-table", component: ResponsiveTables },
  { path: "/editable-table", component: EditableTables },

  //Utility
  { path: "/starter", component: StarterPage },
  { path: "/timeline", component: Timeline },
  { path: "/faqs", component: FAQs },
  { path: "/pricing", component: Pricing },

  //calendar
  { path: "/calendar", component: Calendar },

  

  // this route should be at the end of all other routes
  // { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }

  { path: "/", exact: true, component: () =>token !== ""?<Redirect to="/mydashboard" /> :<Redirect to="/login" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/lock-screen", component: AuthLockScreen },

  // Authentication Inner
  // { path: "/auth-login", component: Login1 },
  { path: "/auth-register", component: Register1 },
  { path: "/auth-recoverpw", component: ForgetPwd1 },

  { path: "/maintenance", component: Maintenance },
  { path: "/comingsoon", component: CommingSoon },
  { path: "/404", component: Error404 },
  { path: "/500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
