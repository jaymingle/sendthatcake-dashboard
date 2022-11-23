
export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'home',
      },
      {
        name: 'Store Orders',
        url: '/orders',
        icon: 'list',
      },
      {
        name: 'Categories',
        url: '',
        icon: 'folder-open',
        children:[
          {
            name: 'Add Category',
            url: '/add-category',
            icon: 'plus'
          },
          {
            name: 'Categories',
            url: '/categories',
            icon: 'folder'
          }
        ]
      },
      {
        name: 'Products',
        url: '',
        icon: 'database',
        children: [
            {
              name: 'Add Product',
              url: '/add-product',
              icon: 'plus'
            },
            {
                name: 'My Products',
                url: '/products',
                icon: 'database'
              },
              
          ],
      },
      
      
     
      {
        name: 'Reports',
        url: '/reports',
        icon: 'pie-chart'
      },
    
      {
        name: 'Settings',
        url: '/settings',
        icon: 'gear',
      }
      
      
    ],
  };
  