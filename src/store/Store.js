import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {setState} from '../api';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// IMPORTING ALL  REDUCERS
// import userReducer from '../reducers/UserReducer';
import loginReducer from '../reducers/LoginReducer';
import productCategoryReducer from '../reducers/ProductCategoryReducer';
import userReducer  from '../reducers/UserReducer';
import vendorReducer  from '../reducers/VendorReducer';
import likeReducer from '../reducers/LikeReducer';
import commentReducer from '../reducers/CommentReducer';
import orderReducer from '../reducers/OrderReducer';
import productReducer from '../reducers/ProductReducer';
// import cartReducer from '../reducers/CartReducer';
import paymentReducer from '../reducers/PaymentReducer';
import deliveryAreaReducer from '../reducers/DeliveryAreaReducer';
import dashboardReducer from '../reducers/DashboardReducer';



const persistConfig = {
    key: 'stcData',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['user','login','like','comment','order','product','productCategory','payment', 'vendor','deliveryArea','dashboard'],
}



// function saveToLocalStorage(state){
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('stcData1', serializedState);
//     } 
//     catch(e) {
//         console.log(e)
//     }
// }


// export function loadFromLocalStorage(){
//     try{
//         const serializedState = localStorage.getItem('stcData1')
//         if(serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     }
//     catch(e){
//         console.log(e);
//         return undefined;
//     }
// }

const reducers = combineReducers({
    user: userReducer,
    vendor: vendorReducer,
    login: loginReducer,
    like: likeReducer,
    comment: commentReducer,
    order: orderReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    // cart: cartReducer,
    payment: paymentReducer,
    deliveryArea: deliveryAreaReducer,
    dashboard: dashboardReducer,
});


const pReducer = persistReducer(persistConfig, reducers);

const middleware = applyMiddleware(thunk);

const store = createStore(pReducer, undefined, middleware);

// setState(store.getState())

store.subscribe(()=> setState(store.getState()));

const persistor = persistStore(store);


export  { persistor, store}; 
// export default store; 