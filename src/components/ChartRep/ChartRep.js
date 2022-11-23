import React, { Component } from "react";

class ChartRep extends Component {
  render() {
    return (
      <div className="row flex-row">
        <div className="col-xl-12 col-md-6">
          <div className="widget widget-09 has-shadow">
            <div className="widget-header d-flex align-items-center">
              <h2>Delivered Orders</h2>
              <div className="widget-options">
                <button type="button" className="btn btn-shadow">
                  View all
                </button>
              </div>
            </div>

            <div className="widget-body">
              <div className="row">
                <div className="col-xl-10 col-12 no-padding">
                  <div>
                    <div
                      className="chartjs-size-monitor"
                      style={{position:'absolute',left:'0px',top:'0px',right:'0px',bottom:'0px',overflow:'hidden',pointerEvents:'none', visibility: 'hidden', zIndex: '-1'}}
                    >
                      <div
                        className="chartjs-size-monitor-expand"
                        style={{position:'absolute',left:'0px',top:'0px',right:'0px',bottom:'0px',overflow:'hidden',pointerEvents:'none', visibility: 'hidden', zIndex: '-1'}}
                      >
                        <div style={{position:'absolute',left:'0px',top:'0px',right:'0px',bottom:'0px',overflow:'hidden',pointerEvents:'none', visibility: 'hidden', zIndex: '-1'}}></div>
                      </div>
                      <div
                        className="chartjs-size-monitor-shrink"
                        style={{position:'absolute',left:'0px',top:'0px',right:'0px',bottom:'0px',overflow:'hidden',pointerEvents:'none', visibility: 'hidden', zIndex: '-1'}}
                      >
                        <div style={{position:'absolute',width:'200%',height:'200%',left:'0', top:'0'}}></div>
                      </div>
                    </div>
                    <canvas
                      id="orders"
                      width="1173"
                      height="386"
                      className="chartjs-render-monitor"
                      style={{display: 'block', width: '1173px', height: '586px'}}
                    ></canvas>
                  </div>
                </div>
                <div className="col-xl-2 col-12 d-flex flex-column my-auto no-padding text-center">
                  <div className="new-orders">
                    <div className="title">New Orders</div>
                    <div className="circle-orders">
                      <canvas width="120" height="120"></canvas>
                      <div className="percent-orders">
                        43<i>%</i>
                      </div>
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
    );
  }
}

export default ChartRep;
