import React, { Component } from "react";

class DefaultFooter1 extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer content-inner fixed-bottom">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
              <p className="text-gradient-02">Copyright &copy; 2020 | SendthatCake.com</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/documentation">
                    How to Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <a href="#" className="go-top">
          <i className="la la-arrow-up"></i>
        </a>
      </div>
    );
  }
}

export default DefaultFooter1;
