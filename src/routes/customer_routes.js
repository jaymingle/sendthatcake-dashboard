import React from 'react'
import AdminDashboard from '../screens/Dashboard/AdminDashboard';
import ForgotPassword from '../screens/forgotPwd/ForgotPassword';
import CustomerDash from '../screens/Dashboard/CustomerDash';
import Orders from '../screens/customer_screens/Order/Orders';
import Reports from '../screens/customer_screens/reports/Reports';
import UserSettings from '../screens/customer_screens/customerSettings/CustomerSettings';


// const Landing = React.lazy(() => import('../screens/landing/Landing'));
const AuthPage = React.lazy(()=> import('../screens/authPage/AuthPage'))




const routes = [
    { path: '/dashboard', name: 'CustomerDash', component: CustomerDash},
    { path: "/orders", name: "Order", component: Orders },
//   { path: "/create-order", name: "CreateOrder", component: CreateOrder },
//   { path: "/products", name: "Products", component: Products },
//   { path: "/add-product", name: "AddProducts", component: AddProduct },
//   { path: "/add-vendor", name: "AddVendor", component: AddVendor },
//   { path: "/vendors", name: "Vendors", component: Vendors },
//   { path: "/add-category", name: "AddCategory", component: AddCategory },
//   { path: "/categories", name: "Categories", component: Categories },
  { path: "/reports", name: "Reports", component: Reports },
  { path: "/user-settings", name: "UserSettings", component: UserSettings },
//   { path: "/users", name: "Users", component: Users },
  { path: "/", exact: true, name: "Home", component: CustomerDash },
]
export default routes;