import React, { Component } from 'react';
import { connect } from "react-redux";
import {logout} from '../../actions/loginActions';

class DefaultHeader extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar fixed-top">         
                    
                    <div className="search-box">
                        <button className="dismiss"><i className="ion-close-round"></i></button>
                        <form id="searchForm" action="#" role="search">
                            <input type="search" placeholder="Search something ..." className="form-control"/>
                        </form>
                    </div>
                    
                    
                    <div className="navbar-holder d-flex align-items-center align-middle justify-content-between">
                        
                        <div className="navbar-header">
                            <a id="toggle-btn" href="#" className="navbar-brand">
                                <div className="brand-image brand-big">
                                    <img src="assets/img/logo.png" alt="logo" className="logo-big" style={{height:'40px', width:'45px'}}/>
                                </div>
                                <div className="brand-image brand-small">
                                    {/* <img src="assets/img/logo.png" alt="logo" className="logo-small"/> */}
                                </div>
                                <div>
                                    {/* <h3>{this.props.user.username}</h3> */}
                                </div>
                            </a>
                            
                            <a id="toggle-btn" href="#" className="menu-btn active">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                            
                        </div>
                        
                        
                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
                            
                            <li className="nav-item d-flex align-items-center"><a id="search" href="#"><i className="la la-search"></i></a></li>
                            
                            
                            <li className="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><img src="assets/img/avatar/avatar-01.jpg" alt="..." className="avatar rounded-circle"/><span className="badge-pulse"></span></a>
                                <ul aria-labelledby="notifications" className="dropdown-menu notification">
                                    <li>
                                        <div className="notifications-header">
                                            <div className="title">You're signed in as {this.props.user.firstName}</div>
                                            <div className="notifications-overlay"></div>
                                            <img src="assets/img/notifications/01.jpg" alt="..." className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-user"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    Profile Settings
                                                </div>
                                                {/* <span className="date">2 hours ago</span> */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.logout} rel="nofollow" href="#" className="dropdown-item all-notifications text-center btn btn-danger"><i className="la la-sign-out"></i>Log out</a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown"></li>  
                            
                        </ul>
                        
                    </div>
                    
                </nav>
            </header>
                    
                    
        )
    }
    logout =(e) =>{
        this.props.logout()
    }
}
    const mapStateToProps = (state) => {
        return {
          user: state.login.user,
        };
      };
      
      const mapDispatchToProps = (dispatch) => {
        return {
            logout : () => dispatch(logout()),
        };
      };
      
      export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
      