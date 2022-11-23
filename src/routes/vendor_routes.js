import React from 'react'
// import Orders from '../screens/vendor_screens/Order/Orders';
import Products from '../screens/vendor_screens/products/Products';
import AddProduct from '../screens/vendor_screens/products/AddProduct';
import AddCategory from '../screens/vendor_screens/categories/AddCategory';
import Categories from '../screens/vendor_screens/categories/Categories';
import Reports from '../screens/vendor_screens/reports/Reports';
import AdminSettings from '../screens/vendor_screens/vendorSettings/VendorSettings';


const VDashboard = React.lazy(() => import('../screens/Dashboard/VDashboard'));
const AuthPage = React.lazy(()=> import('../screens/authPage/AuthPage'));
const Orders = React.lazy(()=> import('../screens/vendor_screens/Order/Orders'));




const routes = [
    // { path: '/', exact: true, name: 'Home', component: Landing },
    { path: '/dashboard', name: 'VDashboard', component: VDashboard},
    // { path: '/auth', name: 'Authorization', component: AuthPage },
    { path: "/orders", name: "Order", component: Orders },
//   { path: "/create-order", name: "CreateOrder", component: CreateOrder },
  { path: "/products", name: "Products", component: Products },
  { path: "/add-product", name: "AddProducts", component: AddProduct },
//   { path: "/add-vendor", name: "AddVendor", component: AddVendor },
//   { path: "/vendors", name: "Vendors", component: Vendors },
  { path: "/add-category", name: "AddCategory", component: AddCategory },
  { path: "/categories", name: "Categories", component: Categories },
  { path: "/reports", name: "Reports", component: Reports },
  { path: "/vendor-settings", name: "VendorSettings", component: AdminSettings },
//   { path: "/users", name: "Users", component: Users },
  { path: "/", exact: true, name: "Home", component: VDashboard },
]
export default routes;