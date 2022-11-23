export default {
  items: [
    {
      name: "Dashboard",
      url: "/",
      icon: "columns",
    },
    {
      name: "Orders",
      url: "",
      icon: "cart-arrow-down",
      children: [
        {
          name: "Create Order",
          url: "/create-order",
          icon: "plus",
        },
        {
          name: "All Orders",
          url: "/orders",
          icon: "list",
        },
        // {
        //   name: 'Vendor Orders',
        //   url: '/products',
        //   icon: 'user'
        // }
      ],
    },
    {
      name: "Vendors",
      url: "",
      icon: "birthday-cake",
      children: [
        {
          name: "All Vendors",
          url: "/vendors",
          icon: "users",
        },
        // {
        //   name: "Add Vendor",
        //   url: "/add-vendor",
        //   icon: "plus",
        // },
      ],
    },

    {
      name: "Categories",
      url: "",
      icon: "folder-open",
      children: [
        {
          name: "Add Category",
          url: "/add-category",
          icon: "plus",
        },
        {
          name: "View Categories",
          url: "/categories",
          icon: "eye",
        },
      ],
    },
    {
      name: "Products",
      url: "",
      icon: "tags",
      children: [
        {
          name: "Add Product",
          url: "/add-product",
          icon: "plus",
        },
        {
          name: "All Products",
          url: "/products",
          icon: "eye",
        },
      ],
    },

    {
      name: "Users",
      url: "",
      icon: "users",
      children: [
        {
          name: "View Users",
          url: "/users",
          icon: "users",
        },
        // {
        //   name: "Add User",
        //   url: "/add-user",
        //   icon: "plus",
        // },
      ],
    },
    {
      name: "Reports",
      url: "/reports",
      icon: "pie-chart",
    },
    {
      name: "Delivery Area",
      url: "",
      icon: "map",
      children: [
        {
          name: "Add Delivery Area",
          url: "/add-delivery-area",
          icon: "plus",
        },
        {
          name: "Delivery Areas",
          url: "/delivery-area",
          icon: "eye",
        },
      ],
    },
    {
      name: "Admin Settings",
      url: "/admin-settings",
      icon: "gear",
    },
  ],
};
