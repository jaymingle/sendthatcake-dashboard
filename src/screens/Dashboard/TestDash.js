import React, {Component} from 'react';



class TestDash extends Component {
    render(){
        return(
        <div className="page">
            
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
                            <a href="db-default.html" className="navbar-brand">
                                <div className="brand-image brand-big">
                                    <img src="assets/img/logo-big.png" alt="logo" className="logo-big"/>
                                </div>
                                <div className="brand-image brand-small">
                                    <img src="assets/img/logo.png" alt="logo" className="logo-small"/>
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
                            
                            
                            <li className="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="la la-bell animated infinite swing"></i><span className="badge-pulse"></span></a>
                                <ul aria-labelledby="notifications" className="dropdown-menu notification">
                                    <li>
                                        <div className="notifications-header">
                                            <div className="title">Notifications (4)</div>
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
                                                    New user registered
                                                </div>
                                                <span className="date">2 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-calendar-check-o"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    New event added
                                                </div>
                                                <span className="date">7 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-history"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    Server rebooted
                                                </div>
                                                <span className="date">7 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-twitter"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    You have 3 new followers
                                                </div>
                                                <span className="date">10 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="nofollow" href="#" className="dropdown-item all-notifications text-center">View All Notifications</a>
                                    </li>
                                </ul>
                            </li>
                            
                            
                            <li className="nav-item dropdown"><a id="user" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopurounded-circle" ></li></a>
                                <ul aria-labelledby="user" className="user-size dropdown-menu">
                                    <li className="welcome">
                                        <a href="#" className="edit-profil"><i className="la la-gear"></i></a>
                                        <img src="assets/img/avatar/avatar-01.jpg" alt="..." className="rounded-circle"/>
                                    <li>
                                        <a href="pages-profile.html" className="dropdown-item"> 
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app-mail.html" className="dropdown-item"> 
                                            Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item no-padding-bottom"> 
                                            Settings
                                        </a>
                                    </li>
                                    <li className="separator"></li>
                                    <li>
                                        <a href="pages-faq.html" className="dropdown-item no-padding-top"> 
                                            Faq
                                        </a>
                                    </li>
                                    <li><a rel="nofollow" href="pages-login.html" className="dropdown-item logout text-center"><i className="ti-power-off"></i></a></li>
                                </ul>
                            </li>
                            
                            
                            <li className="nav-item"><a href="#off-canvas" className="open-sidebar"><i className="la la-ellipsis-h"></i></a></li>
                            
                        </ul>
                        
                    </div>
                    
                </nav>
            </header>
            
            
            <div className="page-content d-flex align-items-stretch">
                <div className="default-sidebar">
                    
                    <nav className="side-navbar box-scroll sidebar-scroll">
                        
                        <ul className="list-unstyled">
                            <li className="active"><a href="#dropdown-db" aria-expanded="true" data-toggle="collapse"><i className="la la-columns"></i><span>Dashboard</span></a>
                                <ul id="dropdown-db" className="collapse list-unstyled show pt-0">
                                    <li><a className="active" href="db-default.html">Default</a></li>
                                    <li><a href="db-clean.html">Clean</a></li>
                                    <li><a href="db-compact.html">Compact</a></li>
                                    <li><a href="db-modern.html">Modern</a></li>
                                    <li><a href="db-social.html">Social</a></li>
                                    <li><a href="db-smarthome.html">Smarthome</a></li>
                                    <li><a href="db-all.html">All</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-app" aria-expanded="false" data-toggle="collapse"><i className="la la-puzzle-piece"></i><span>Applications</span></a>
                                <ul id="dropdown-app" className="collapse list-unstyled pt-0">
                                    <li><a href="app-calendar.html">Calendar</a></li>
                                    <li><a href="app-chat.html">Chat</a></li>
                                    <li><a href="app-mail.html">Mail</a></li>
                                    <li><a href="app-contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="components-widgets.html"><i className="la la-spinner"></i><span>Widgets</span></a></li>
                        </ul>
                        <span className="heading">Components</span>
                        <ul className="list-unstyled">
                            <li><a href="#dropdown-ui" aria-expanded="false" data-toggle="collapse"><i className="la la-share-alt"></i><span>UI Elements</span></a>
                                <ul id="dropdown-ui" className="collapse list-unstyled pt-0">
                                    <li><a href="components-buttons.html">Buttons</a></li>
                                    <li><a href="components-alerts.html">Alerts</a></li>
                                    <li><a href="components-modal.html">Modal</a></li>
                                    <li><a href="components-notifications.html">Noty</a></li>
                                    <li><a href="components-timeline.html">Timeline</a></li>
                                    <li><a href="components-progress.html">Progress</a></li>
                                    <li><a href="components-tabs.html">Tabs</a></li>
                                    <li><a href="components-charts.html">Chart Js</a></li>
                                    <li><a href="components-accordion.html">Accordion</a></li>
                                    <li><a href="components-popover.html">Popover</a></li>
                                    <li><a href="components-tooltip.html">Tooltip</a></li>
                                    <li><a href="components-scrollable.html">Scrollable</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-icons" aria-expanded="false" data-toggle="collapse"><i className="la la-font"></i><span>Icons</span></a>
                                <ul id="dropdown-icons" className="collapse list-unstyled pt-0">
                                    <li><a href="icons-lineawesome.html">Line Awesome</a></li>
                                    <li><a href="icons-themify.html">Themify</a></li>
                                    <li><a href="icons-ionicons.html">Ionicons</a></li>
                                    <li><a href="icons-meteocons.html">Meteocons</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-forms" aria-expanded="false" data-toggle="collapse"><i className="la la-list-alt"></i><span>Forms</span></a>
                                <ul id="dropdown-forms" className="collapse list-unstyled pt-0">
                                    <li><a href="forms-basic.html">Form Basic</a></li>
                                    <li><a href="forms-validation.html">Form Validation</a></li>
                                    <li><a href="forms-wizard.html">Form Wizard</a></li>
                                    <li><a href="forms-select.html">Bootstrap Select</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-tables" aria-expanded="false" data-toggle="collapse"><i className="la la-th-large"></i><span>Tables</span></a>
                                <ul id="dropdown-tables" className="collapse list-unstyled pt-0">
                                    <li><a href="tables-basic.html">Basic</a></li>
                                    <li><a href="tables-datatables.html">Datatables</a></li>
                                    <li><a href="tables-tabledit.html">Tabledit</a></li>
                                </ul>
                            </li>
                            <li><a href="maps-leaflet.html"><i className="la la-map"></i><span>Maps</span></a></li>
                        </ul>
                        <span className="heading">Pages</span>
                        <ul className="list-unstyled">
                            <li><a href="#dropdown-authentication" aria-expanded="false" data-toggle="collapse"><i className="la la-user"></i><span>Authentication</span></a>
                                <ul id="dropdown-authentication" className="collapse list-unstyled pt-0">
                                    <li><a href="pages-login.html">Login</a></li>
                                    <li><a href="pages-login-02.html">Login 02</a></li>
                                    <li><a href="pages-register.html">Register</a></li>
                                    <li><a href="pages-forgot-password.html">Forgot Password</a></li>
                                    <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                                    <li><a href="pages-mail-confirm.html">Mail Confirmation</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-generic" aria-expanded="false" data-toggle="collapse"><i className="la la-file-text"></i><span>Generic</span></a>
                                <ul id="dropdown-generic" className="collapse list-unstyled pt-0">
                                    <li><a href="pages-coming-soon.html">Coming Soon</a></li>
                                    <li><a href="pages-profile.html">Profile</a></li>
                                    <li><a href="pages-invoice.html">Invoice</a></li>
                                    <li><a href="pages-search.html">Search</a></li>
                                    <li><a href="pages-faq.html">FAQ</a></li>
                                    <li><a href="pages-blank.html">Blank</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-social" aria-expanded="false" data-toggle="collapse"><i className="la la-comments"></i><span>Social</span></a>
                                <ul id="dropdown-social" className="collapse list-unstyled pt-0">
                                    <li><a href="pages-newsfeed.html">Newsfeed</a></li>
                                    <li><a href="pages-about.html">About</a></li>
                                    <li><a href="pages-events.html">Events</a></li>
                                    <li><a href="pages-friends.html">Friends</a></li>
                                    <li><a href="pages-groups.html">Groups</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-email" aria-expanded="false" data-toggle="collapse"><i className="la la-at"></i><span>Email</span></a>
                                <ul id="dropdown-email" className="collapse list-unstyled pt-0">
                                    <li><a href="email-welcome.html">Welcome</a></li>
                                    <li><a href="email-password.html">Reset Password</a></li>
                                    <li><a href="email-order.html">Order Confirmation</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-pricing" aria-expanded="false" data-toggle="collapse"><i className="la la-usd"></i><span>Pricing</span></a>
                                <ul id="dropdown-pricing" className="collapse list-unstyled pt-0">
                                    <li><a href="pages-pricing-tables-01.html">Style 01</a></li>
                                    <li><a href="pages-pricing-tables-02.html">Style 02</a></li>
                                </ul>
                            </li>
                            <li><a href="#dropdown-error" aria-expanded="false" data-toggle="collapse"><i className="la la-exclamation-triangle"></i><span>Errors</span></a>
                                <ul id="dropdown-error" className="collapse list-unstyled pt-0">
                                    <li><a href="pages-404-01.html">Style 01</a></li>
                                    <li><a href="pages-404-02.html">Style 02</a></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </nav>
                    
                </div>
                
                <div className="content-inner">
                    <div className="container-fluid">
                        
                        <div className="row">
                            <div className="page-header">
	                            <div className="d-flex align-items-center">
	                                <h2 className="page-header-title">Dashboard</h2>
	                                <div>
	                                <div className="page-header-tools">
	                                    <a className="btn btn-gradient-01" href="#">Add Widget</a>
	                                </div>
	                                </div>
	                            </div>
                            </div>
                        </div>
                        
                        
                        <div className="row flex-row">
                            
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-facebook text-facebook"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title text-facebook">David Green</div>
                                                <div className="number">10,865 Likes</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-twitter text-twitter"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title text-twitter">@David_Green</div>
                                                <div className="number">8,986 Followers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-linkedin-outline text-linkedin"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title text-linkedin">@David_Green</div>
                                                <div className="number">3,654 Followers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                        <div className="row flex-row">
                            <div className="col-xl-12 col-md-6">
                                
                                <div className="widget widget-09 has-shadow">
                                    
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Delivered Orders</h2>
                                        <div className="widget-options">
                                            <button type="button" className="btn btn-shadow">View all</button>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-10 col-12 no-padding">
                                                <div>
                                                    <canvas id="orders"></canvas>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-12 d-flex flex-column my-auto no-padding text-center">
                                                <div className="new-orders">
                                                    <div className="title">New Orders</div>
                                                    <div className="circle-orders">
                                                        <div className="percent-orders"></div>
                                                    </div>
                                                </div>
                                                <div className="some-stats mt-5">
                                                    <div className="title">Total Delivered</div>
                                                    <div className="number text-blue">856</div>
                                                </div>
                                                <div className="some-stats mt-3">
                                                    <div className="title">Total Estimated</div>
                                                    <div className="number text-blue">297</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        
                        <div className="row flex-row">
                            <div className="col-xl-4 col-md-6">
                                
                                <div className="widget widget-04 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Post</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-check"></i>Valid Post
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="faq.html" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body p-0">
                                        <div className="post-container">
                                            <div className="media mb-3">
                                                <div className="media-left align-self-center user">
                                                    <a href="pages-profile.html"><img src="assets/img/avatar/avatar-07.jpg" className="rounded-circle" alt="..."/></a>
                                                </div>
                                                <div className="media-body align-self-center ml-3">
                                                    <div className="title">
                                                        <span className="username">Lisa Garett</span> posted an image
                                                    </div>
                                                    <div className="time">42 min ago</div>
                                                </div>
                                            </div>
                                            <img src="assets/img/background/01.jpg" alt="..." className="img-fluid"/>
                                            <div className="col no-padding d-flex justify-content-end mt-3">
                                                <div className="meta">
                                                    <ul>
                                                        <li><a href="#"><i className="la la-comment"></i><span className="numb">38</span></a></li>
                                                        <li><a href="#"><i className="la la-heart"></i><span className="numb">94</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="input-group mt-5">
                                            <input type="text" className="form-control pr-0" placeholder="Write a comment ..."/>
                                            <span className="input-group-addon">
                                                <button className="btn" type="button">
                                                    <i className="la la-smile-o la-2x"></i>
                                                </button>
                                            </span>
                                            <span className="input-group-addon">
                                                <button className="btn pr-3" type="button">
                                                    <i className="la la-pencil la-2x"></i>
                                                </button>
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xl-4 col-md-6">
                                
                                <div className="widget widget-05 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Top Author</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body no-padding hidden">
                                        <div className="author-avatar">
                                            <span className="badge-pulse-green"></span>
                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle"/>
                                        </div>
                                        <div className="author-name">
                                            Louis Henry
                                            <span>Designer</span>
                                        </div>
                                        <div className="chart">
                                            <div className="row no-margin justify-content-center">
                                                <div className="col-12 col-xl-8 col-md-8 col-sm-8">
                                                    <div className="row no-margin align-items-center">
                                                        
                                                        <div className="col-9 no-padding">
                                                            <div className="chart-graph">
                                                                <div className="chart">
                                                                    <canvas id="sales-stats"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 no-padding text-center">
                                                            <div className="chart-text">
                                                                <span className="heading">Sales</span>
                                                                <span className="number">364</span>
                                                                <span className="cxg text-green">+35%</span>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-stats">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-4 text-center">
                                                    <i className="la la-users followers"></i>
                                                    <div className="counter">+124</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-dribbble dribbble"></i>
                                                    <div className="counter">+357</div>
                                                    <div className="heading">Likes</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-behance behance"></i>
                                                    <div className="counter">+98</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="actions text-center">
                                            <a href="pages-profile.html" className="btn btn-gradient-01">View Profile</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xl-4">
                                
                                <div className="widget widget-06 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Reviews</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body p-0">
                                        <div id="list-group" className="widget-scroll" style={{maxHeight :'490px'}>
                                            <ul className="reviews list-group w-100">
                                                
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Brandon Smith</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    WoW! Amazing Work!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">30 minutes ago - 1 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>12</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Megan Duncan</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">2 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Nathan Hunter</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Nice work, good design!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">4 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>32</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Michael Bradley</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">5 hours ago - 2 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>2</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-03.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Louis Henry</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    I like the color combination!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">1 day ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>9</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="row flex-row">
                            <div className="col-xl-12">
                                
                                <div className="widget widget-07 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Product Overview</h2>
                                        <div className="widget-options">
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-primary ripple">Week</button>
                                                <button type="button" className="btn btn-primary ripple">Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body">
                                        <div className="table-responsive table-scroll padding-right-10" style={{maxHeight: '520px'}}>
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="check-all" id="check-all"/>
                                                                <label for="check-all"></label>
                                                            </div>
                                                        </th>
                                                        <th>Order ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Country</th>
                                                        <th>Ship Date</th>
                                                        <th><span style={{width: '100px'}}>Status</span></th>
                                                        <th>Order Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb1" id="cb1"/>
                                                                <label for="cb1"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Lori Baker</td>
                                                        <td>US</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb2" id="cb2"/>
                                                                <label for="cb2"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>Lawrence Crawford</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb3" id="cb3"/>
                                                                <label for="cb3"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Samuel Walker</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb4" id="cb4"/>
                                                                <label for="cb4"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Angela Walters</td>
                                                        <td>US</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small success">Delivered</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb5" id="cb5"/>
                                                                <label for="cb5"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Ryan Hanson</td>
                                                        <td>ES</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb6" id="cb6"/>
                                                                <label for="cb6"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Evelyn Black</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb7" id="cb7"/>
                                                                <label for="cb7"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>James Morris</td>
                                                        <td>EN</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb8" id="cb8"/>
                                                                <label for="cb8"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Valentin H.</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb9" id="cb9"/>
                                                                <label for="cb9"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Beverly Matthews</td>
                                                        <td>RU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width: '5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb10" id="cb10"/>
                                                                <label for="cb10"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Jeffrey Arnold</td>
                                                        <td>US</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{width: '100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-footer d-flex align-items-center">
                                        <div className="mr-auto p-2">
                                            <span className="display-items">Showing 1-30 / 150 Results</span>
                                        </div>
                                        <div className="p-2">
                                            <nav aria-label="...">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item disabled">
                                                        <span className="page-link"><i className="ion-chevron-left"></i></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item active">
                                                        <span className="page-link">2<span className="sr-only">(current)</span></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#"><i className="ion-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-7 col-md-6">
                                
                                <div className="widget widget-10 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Support Tickets</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body no-padding">
                                        <ul className="ticket list-group w-100">
                                            
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Brandon Smith</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="open mr-2">Open</span>(1 hour ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Nathan Hunter</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="pending mr-2">Pending</span>(2 hours ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Megan Duncan</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="closed mr-2">Closed</span>(1 day ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xl-5">
                                
                                <div className="widget widget-11 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Activity Log</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-history"></i>History
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body p-0 widget-scroll" style={{maxHeight:'450px'}}>
                                    
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-06.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Beverly Oliver</span>
                                                    Send you a friend request
                                                </div>
                                                <div className="time">4 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline red">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-spinner"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    Server rebooted
                                                </div>
                                                <div className="time">10 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-05.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Megan Duncan</span>
                                                    Followed 4 people
                                                    <div className="users-like">
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-01.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-02.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-07.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="time">12 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline blue">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-heart-o"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Brandon Smith</span>
                                                    Liked <span className="font-weight-bold"><a href="#">Elisyam Admin Template</a></span>
                                                </div>
                                                <div className="time">30 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-twitter"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    + 3 new followers
                                                    <div className="users-like">
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-06.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-03.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="time">34 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-04.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Nathan Hunter</span>
                                                    Invited you in a group
                                                </div>
                                                <div className="time">42 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-03.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Louis Henry</span>
                                                    Is now following you
                                                </div>
                                                <div className="time">50 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="timeline blue">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-image"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Brandon Smith</span>
                                                    Uploaded <span className="font-weight-bold"><a href="#">8 photos</a></span>
                                                </div>
                                                <div className="time">1 hour ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="row no-margin">
                            <div className="col-xl-12">
                                
                                <div className="row widget has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Calendar</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        Add Event
                                                    </a>
                                                    <a href="app-calendar.html" className="dropdown-item"> 
                                                        Basic Calendar
                                                    </a>
                                                    <a href="app-calendar-list.html" className="dropdown-item"> 
                                                        List Views
                                                    </a>
                                                    <a href="app-calendar-event.html" className="dropdown-item"> 
                                                        External Events
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="widget-body">
                                        
                                        <div id="demo-calendar"></div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        
                        <div className="row flex-row">
                            
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-18 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Messages Box</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="app-chat.html" className="dropdown-item"> 
                                                        <i className="la la-comments"></i>New Message
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-body">
                                        <div className="input-group">
                                            <span className="input-group-addon pr-0 pl-0">
                                                <a className="btn" href="#">
                                                    <i className="la la-search la-2x"></i>
                                                </a>
                                            </span>
                                            <input type="text" className="form-control no-ppading-right no-padding-left" placeholder="Search"/>
                                        </div>
                                        <div className="new-message">
                                            <div className="media">
                                                <div className="media-left align-self-center mr-3">
                                                    <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '50px'}}/>
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <div className="new-message-sender">Nathan Hunter</div>
                                                    <div className="new-message-time">New message about 2 minutes ago</div>
                                                </div>
                                                <div className="media-right align-self-center">
                                                    <div className="actions">
                                                        <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 mt-5">
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '50px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Brandon Smith</div>
                                                            <div className="other-message-time">Are you serious? - 3 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '50px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Louis Henry</div>
                                                            <div className="other-message-time">Bonne idée, coucou à ... - 10 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '50px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Megan Duncan</div>
                                                            <div className="other-message-time">See you later! - 20 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-19 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>New Meeting</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-body p-0">
                                        <div className="form-group row mt-3 mr-0 mb-3 ml-0">
                                            <div className="col-xl-12">
                                                <label className="form-control-label">Meeting Name</label>
                                                <input type="text" value="My Meeting" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mr-0 mb-3 ml-0">
                                            <div className="col-xl-8 mb-3">
                                                <label className="form-control-label">Date</label>
                                                <select name="meeting-date" className="custom-select form-control">
                                                    <option value="">Select Date</option>
                                                    <option value="01">Sun 1 April</option>
                                                    <option value="02">Mon 2 April</option>
                                                    <option value="03">Tue 3 April</option>
                                                    <option value="04">Wed 4 April</option>
                                                    <option value="05">Thu 5 April</option>
                                                    <option value="07">Fri 6 April</option>
                                                    <option value="08">Sat 7 April</option>
                                                    <option value="09">Sun 8 April</option>
                                                    <option value="10">Mon 9 April</option>
                                                    <option value="11">Tue 10 April</option>
                                                    <option value="12">Wed 11 April</option>
                                                    <option value="05">Thu 12 April</option>
                                                    <option value="07">Fri 13 April</option>
                                                    <option value="08">Sat 14 April</option>
                                                    <option value="09">Sun 15 April</option>
                                                    <option value="10">Mon 16 April</option>
                                                    <option value="11">Tue 17 April</option>
                                                    <option value="12">Wed 18 April</option>
                                                    <option value="05">Thu 19 April</option>
                                                    <option value="07">Fri 20 April</option>
                                                    <option value="08">Sat 21 April</option>
                                                    <option value="09">Sun 22 April</option>
                                                    <option value="10">Mon 23 April</option>
                                                    <option value="11">Tue 24 April</option>
                                                    <option value="04">Wed 25 April</option>
                                                    <option value="05">Thu 26 April</option>
                                                    <option value="07">Fri 27 April</option>
                                                    <option value="08">Sat 28 April</option>
                                                    <option value="09">Sun 29 April</option>
                                                    <option value="10">Mon 30 April</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4">
                                                <label className="form-control-label">Hour</label>
                                                <select name="meeting-hour" className="custom-select form-control">
                                                    <option value="">Select Hour</option>
                                                    <option value="01">07:00 am</option>
                                                    <option value="02">08:00 am</option>
                                                    <option value="03">09:00 am</option>
                                                    <option value="04">10:00 am</option>
                                                    <option value="05">11:00 am</option>
                                                    <option value="07">12:00 am</option>
                                                    <option value="08">01:00 pm</option>
                                                    <option value="09">02:00 pm</option>
                                                    <option value="10">03:00 pm</option>
                                                    <option value="08">04:00 pm</option>
                                                    <option value="09">05:00 pm</option>
                                                    <option value="10">06:00 pm</option>
                                                    <option value="08">07:00 pm</option>
                                                    <option value="09">08:00 pm</option>
                                                    <option value="10">09:00 pm</option>
                                                    <option value="08">10:00 pm</option>
                                                    <option value="09">11:00 pm</option>
                                                    <option value="10">12:00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 widget-scroll" style={{maxHeight:'250px'}}>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Brandon Smith</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Louis Henry</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Nathan Hunter</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Megan Duncan</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-06.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Beverly Oliver</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-07.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Lisa Garett</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-08.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Peter Collins</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-09.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Michael Bradley</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4 mb-3">
                                            <button type="button" className="btn btn-gradient-01" data-toggle="modal" data-target="#delay-modal">
                                                Create Meeting
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-xl-4">
                                <div className="widget widget-20 has-shadow">
                                    
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Files</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Manage Files
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="widget20 owl-carousel">
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/03.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/04.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/05.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/02.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 mr-0 ml-0">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-video-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Video</a></div>
                                                        <div className="files-number">84 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-audio-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Songs</a></div>
                                                        <div className="files-number">786 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-picture-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Photos</a></div>
                                                        <div className="files-number">189 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-zip-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Template</a></div>
                                                        <div className="files-number">36 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-pdf-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Pdf</a></div>
                                                        <div className="files-number">19 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-powerpoint-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Presentation</a></div>
                                                        <div className="files-number">263 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <footer className="main-footer">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                                <p className="text-gradient-02">Design By Saerox</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="documentation.html">Documentation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="changelog.html">Changelog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                    
                    <a href="#" className="go-top"><i className="la la-arrow-up"></i></a>
                    
                    <div className="off-sidebar from-right">
                        <div className="off-sidebar-container">
                            <header className="off-sidebar-header">
                                <ul className="button-nav nav nav-tabs mt-3 mb-3 ml-3" role="tablist" id="weather-tab">
                                    <li><a className="active" data-toggle="tab" href="#messenger" role="tab" id="messenger-tab">Messages</a></li>
                                    <li><a data-toggle="tab" href="#today" role="tab" id="today-tab">Today</a></li>
                                </ul>
                                <a href="#off-canvas" className="off-sidebar-close"></a>
                            </header>
                            <div className="off-sidebar-content offcanvas-scroll auto-scroll">
                                <div className="tab-content">
                                    
                                    <div role="tabpanel" className="tab-pane show active fade" id="messenger" aria-labelledby="messenger-tab">
                                        
                                        <span className="date">Today</span>
                                        <div className="messenger-message messenger-message-sender">
                                            <img className="messenger-image messenger-image-default" src="assets/img/avatar/avatar-02.jpg" alt="..."/>
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                        <span className="mb-2">Brandon wrote</span>
                                                        Hi David, what's up?
                                                    </p>
                                                </div>
                                                <div className="messenger-details">
                                                    <span className="messenger-message-localization font-size-small">2 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-recipient">
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                       Hi Brandon, fine and you?
                                                   </p>
                                                    <p>
                                                       I'm working on the next update of Elisyam
                                                   </p>
                                                </div>
                                                <div className="messenger-details">
                                                    <span className="messenger-message-localisation font-size-small">3 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-sender">
                                            <img className="messenger-image messenger-image-default" src="assets/img/avatar/avatar-02.jpg" alt="..."/>
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                        <span className="mb-2">Brandon wrote</span>
                                                        I can't wait to see
                                                    </p>
                                                </div>
                                                <div className="messenger-details">
                                                    <span className="messenger-message-localization font-size-small">5 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-recipient">
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                       I'm almost done
                                                   </p>
                                                </div>
                                                <div className="messenger-details">
                                                    <span className="messenger-message-localisation font-size-small">10 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="date">Yesterday</span>
                                        <div className="messenger-message messenger-message-sender">
                                            <img className="messenger-image messenger-image-default" src="assets/img/avatar/avatar-05.jpg" alt="..."/>
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                        I updated the server tonight
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-recipient">
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                       Didn't you have any problems?
                                                   </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-sender">
                                            <img className="messenger-image messenger-image-default" src="assets/img/avatar/avatar-05.jpg" alt="..."/>
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                        No!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messenger-message messenger-message-recipient">
                                            <div className="messenger-message-wrapper">
                                                <div className="messenger-message-content">
                                                    <p>
                                                       Great!
                                                   </p>
                                                    <p>
                                                       See you later!
                                                   </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="enter-message">
                                            <div className="enter-message-form">
                                                <input type="text" placeholder="Enter your message..."/>
                                            </div>
                                            <div className="enter-message-button">
                                                <a href="#" className="send"><i className="ion-paper-airplane"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div role="tabpanel" className="tab-pane fade" id="today" aria-labelledby="today-tab">
                                        
                                        <div className="sidebar-heading pt-0">Today</div>
                                        <div className="today-stats mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <i className="la la-users"></i>
                                                    <div className="counter">264</div>
                                                    <div className="heading">Clients</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-cart-arrow-down"></i>
                                                    <div className="counter">360</div>
                                                    <div className="heading">Sales</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-money"></i>
                                                    <div className="counter">$ 4,565</div>
                                                    <div className="heading">Earnings</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="sidebar-heading">Friends</div>
                                        <div className="quick-friends mt-3 mb-3">
                                            <ul className="list-group w-100">
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="javascript:void(0);">Brandon Smith</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="javascript:void(0);">Louis Henry</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="javascript:void(0);">Nathan Hunter</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="javascript:void(0);">Megan Duncan</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-06.jpg" alt="..." className="img-fluid rounded-circle" style={{width: '35px'}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="javascript:void(0);">Beverly Oliver</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        
                                        <div className="sidebar-heading">Settings</div>
                                        <div className="quick-settings mt-3 mb-3">
                                            <ul className="list-group w-100">
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <p className="text-dark">Notifications Email</p>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <label>
                                                                <input className="toggle-checkbox" type="checkbox" checked/>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <p className="text-dark">Notifications Sound</p>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <label>
                                                                <input className="toggle-checkbox" type="checkbox"/>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <p className="text-dark">Chat Message Sound</p>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <label>
                                                                <input className="toggle-checkbox" type="checkbox" checked/>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        <div id="delay-modal" className="modal fade">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <div className="sa-icon sa-success animate" style={{display: 'block'}}>
                            <span className="sa-line sa-tip animateSuccessTip"></span>
                            <span className="sa-line sa-long animateSuccessLong"></span>
                            <div className="sa-placeholder"></div>
                            <div className="sa-fix"></div>
                        </div>
                        <div className="section-title mt-5 mb-5">
                            <h2 className="text-dark">Meeting successfully created</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div id="modal-view-event" className="modal modal-top fade calendar-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title event-title"></h4>
                        <button type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">close</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="media">
                            <div className="media-left align-self-center mr-3">
                                <div className="event-icon"></div>
                            </div>
                            <div className="media-body align-self-center mt-3 mb-3">
                                <div className="event-body"></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default TestDash;