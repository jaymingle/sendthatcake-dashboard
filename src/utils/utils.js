
export const getStatus =(status)=>{
    switch (status){
      case 'created':
      case 'pending_delivery':
      return 'Pending Delivery'
      case 'delivered':
        return 'Order Delivered'
      case 'cancelled':
          return 'Cancelled'
      default :
        return ''+status
    }
  }
