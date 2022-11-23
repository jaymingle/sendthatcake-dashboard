import React from "react";
import AdminDashboard from "../screens/Dashboard/AdminDashboard";
import Order from "../screens/Order/Orders";
import CreateOrder from "../screens/Order/CreateOrder";
import Products from "../screens/products/Products";
import AddProduct from "../screens/products/AddProduct";
import AddVendor from "../screens/vendors/AddVendor";
import Vendors from "../screens/vendors/Vendors";
import AddCategory from "../screens/categories/AddCategory";
import Categories from "../screens/categories/Categories";
import AdminSettings from "../screens/adminSettings/AdminSettings";
import Reports from "../screens/reports/Reports";
import Users from "../screens/users/Users";
import DeliveryArea from "../screens/DeliveryArea/DeliveryArea";
import AddDeliveryArea from "../screens/DeliveryArea/AddDeliveryArea";
import TransactionDetails from "../screens/transactionDetails/TransactionDetails";

const AuthPage = React.lazy(() => import("../screens/authPage/AuthPage"));

const routes = [
  { path: "/dashboard", name: "Dashboard", component: AdminDashboard },
  // { path: '/auth', name: 'AuthPage', component: AuthPage},
  { path: "/orders", name: "Order", component: Order },
  { path: "/create-order", name: "CreateOrder", component: CreateOrder },
  { path: "/products", name: "Products", component: Products },
  { path: "/add-product", name: "AddProducts", component: AddProduct },
  { path: "/add-vendor", name: "AddVendor", component: AddVendor },
  { path: "/vendors", name: "Vendors", component: Vendors },
  { path: "/add-category", name: "AddCategory", component: AddCategory },
  { path: "/categories", name: "Categories", component: Categories },
  { path: "/reports", name: "Reports", component: Reports },
  { path: "/delivery-area", name: "DeliveryArea", component: DeliveryArea },
  { path: "/add-delivery-area", name: "DeliveryArea", component: AddDeliveryArea },
  { path: "/admin-settings", name: "AdminSettings", component: AdminSettings },
  { path: "/users", name: "Users", component: Users },
  { path: "/transaction-details/:ref", name: "TransactionDetails", component: TransactionDetails },
  { path: "/", exact: true, name: "Home", component: AdminDashboard },
];
export default routes;
