import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AuthPage from './screens/authPage/AuthPage';
// import Landing from './screens/landing/Landing';
import ProductCard from './components/product_card/ProductCard';
// import AdminDashboard from './screens/Dashboard/AdminDashboard';
import DefaultLayout from './containers/DefaultLayout/DefaultLayout';
import Register from './screens/register/Register';
import ForgotPassword from './screens/forgotPwd/ForgotPassword';
import VerifyEmail from './screens/verifyEmail/VerfiyEmail';
import { verifyPhone } from './actions/loginActions';
import VerfiyPhone from './screens/verifyEmail/VerfiyPhone';

function App() {
  return (
    <Router basename='/dashboard'> 
    <div>
      <Switch>
        {/* <Route path='*' component={Landing} />   */}
        <Route path='/auth' component={AuthPage} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/verify-email' component={VerifyEmail} />
        <Route path='/verify-phone' component={VerfiyPhone} />
        <Route exact path='*' component={DefaultLayout} />

        {/* <Route path='/orders' component={Order} />
        <Route path='/create-order' component={CreateOrder} /> */}
        {/* that shd probably be DefaultLayoutt.. */}
        {/* <Route path='/product' component={ProductCard} /> */}
        
      </Switch>
    </div>
  </Router>    
  );
}

export default App;
