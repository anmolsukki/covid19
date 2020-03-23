import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import '../Assets/PortalTheme.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.contactUsActionCall();
  };

  render() {
    const confirmCases = this.props.contactData.data && this.props.contactData.data.total.confirmed;
    const deathCases = this.props.contactData.data && this.props.contactData.data.total.deaths;
    const activeCases = this.props.contactData.data && this.props.contactData.data.total.active;
    const recoveredCases =
      this.props.contactData.data && this.props.contactData.data.total.recovered;
    return (
      <div className="app is-collapsed">
        <div id="loader">
          <div className="spinner"></div>
        </div>
        <div>
          <div>
            <main className="space-top">
              <div id="mainContent">
                <div className="row gap-20 masonry pos-r">
                  <div className="masonry-sizer col-md-6"></div>
                  <div className="masonry-item w-100">
                    <div className="row gap-20">
                      <div className="col-md-3">
                        <div className="layers bd bgc-white p-20">
                          <div className="layer w-100 mB-10">
                            <h6 className="lh-1">Total Cases</h6>
                          </div>
                          <div className="layer w-100">
                            <h2>{confirmCases}</h2>
                            <div className="peers ai-sb fxw-nw">
                              <div className="peer peer-greed">
                                <span id="sparklinedash"></span>
                              </div>
                              <div className="peer">
                                <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">
                                  +10 Today
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="layers bd bgc-white p-20">
                          <div className="layer w-100 mB-10">
                            <h6 className="lh-1">Hospitalized Cases</h6>
                          </div>
                          <div className="layer w-100">
                            <h2>{activeCases}</h2>
                            <div className="peers ai-sb fxw-nw">
                              <div className="peer peer-greed">
                                <span id="sparklinedash2"></span>
                              </div>
                              <div className="peer">
                                <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">
                                  {Math.ceil((activeCases * 100) / confirmCases)}% of total cases
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="layers bd bgc-white p-20">
                          <div className="layer w-100 mB-10">
                            <h6 className="lh-1">Recovered Cases</h6>
                          </div>
                          <div className="layer w-100">
                            <h2>{recoveredCases}</h2>
                            <div className="peers ai-sb fxw-nw">
                              <div className="peer peer-greed">
                                <span id="sparklinedash3"></span>
                              </div>
                              <div className="peer">
                                <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">
                                  {Math.ceil((recoveredCases * 100) / confirmCases)}% of total cases
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="layers bd bgc-white p-20">
                          <div className="layer w-100 mB-10">
                            <h6 className="lh-1">Deaths</h6>
                          </div>
                          <div className="layer w-100">
                            <h2>{deathCases}</h2>
                            <div className="peers ai-sb fxw-nw">
                              <div className="peer peer-greed">
                                <span id="sparklinedash4"></span>
                              </div>
                              <div className="peer">
                                <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">
                                  {Math.ceil((deathCases * 100) / confirmCases)}% of total cases
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-12">
                    <div className="bd bgc-white">
                      <div className="peers fxw-nw@lg+ ai-s">
                        <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                          <div className="layers">
                            <div className="layer w-100 mB-10">
                              <h6 className="lh-1">World Wide</h6>
                            </div>
                            <div className="layer w-100">
                              <div id="world-map-marker"></div>
                            </div>
                          </div>
                        </div>
                        <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                          <div className="layers">
                            <div className="layer w-100">
                              <div className="layers">
                                <div className="layer w-100">
                                  <h5 className="mB-5">35,056</h5>
                                  <small className="fw-600 c-grey-700">Cases From USA</small>
                                  <span className="pull-right c-grey-600 fsz-sm">10.24%</span>
                                  <div className="progress mT-10">
                                    <div
                                      className="progress-bar bgc-deep-purple-500"
                                      role="progressbar"
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: '10%' }}>
                                      <span className="sr-only">10% Complete</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="layer w-100 mT-15">
                                  <h5 className="mB-5">45,054</h5>
                                  <small className="fw-600 c-grey-700">Cases From Europe</small>
                                  <span className="pull-right c-grey-600 fsz-sm">12%</span>
                                  <div className="progress mT-10">
                                    <div
                                      className="progress-bar bgc-green-500"
                                      role="progressbar"
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: '12%' }}>
                                      <span className="sr-only">12% Complete</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="layer w-100 mT-15">
                                  <h5 className="mB-5">20,021</h5>
                                  <small className="fw-600 c-grey-700">Cases From Australia</small>
                                  <span className="pull-right c-grey-600 fsz-sm">8%</span>
                                  <div className="progress mT-10">
                                    <div
                                      className="progress-bar bgc-light-blue-500"
                                      role="progressbar"
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: '8%' }}>
                                      <span className="sr-only">8% Complete</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="layer w-100 mT-15">
                                  <h5 className="mB-5">100,023</h5>
                                  <small className="fw-600 c-grey-700">Cases From Asia</small>
                                  <span className="pull-right c-grey-600 fsz-sm">30%</span>
                                  <div className="progress mT-10">
                                    <div
                                      className="progress-bar bgc-blue-grey-500"
                                      role="progressbar"
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: '30%' }}>
                                      <span className="sr-only">30% Complete</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="peers pT-20 mT-20 bdT fxw-nw@lg+ jc-sb ta-c gap-10">
                                <div className="peer">
                                  <div
                                    className="easy-pie-chart"
                                    data-size="80"
                                    data-percent="100"
                                    data-bar-color="#2196f3">
                                    <span></span>
                                  </div>
                                  <h6 className="fsz-sm">Total Cases</h6>
                                  <h5>342,407</h5>
                                </div>
                                <div className="peer">
                                  <div
                                    className="easy-pie-chart"
                                    data-size="80"
                                    data-percent="5"
                                    data-bar-color="#f44336">
                                    <span></span>
                                  </div>
                                  <h6 className="fsz-sm">Deaths</h6>
                                  <h5>14,762</h5>
                                </div>
                                <div className="peer">
                                  <div
                                    className="easy-pie-chart"
                                    data-size="80"
                                    data-percent="30"
                                    data-bar-color="#ff9800">
                                    <span></span>
                                  </div>
                                  <h6 className="fsz-sm">Recovered</h6>
                                  <h5>99,041</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-md-6">
                    <div className="bd bgc-white">
                      <div className="layers">
                        <div className="layer w-100 pX-20 pT-20">
                          <h6 className="lh-1">Monthly Stats</h6>
                        </div>
                        <div className="layer w-100 p-20">
                          <canvas id="line-chart" height="220"></canvas>
                        </div>
                        <div className="layer bdT p-20 w-100">
                          <div className="peers ai-c jc-c gapX-20">
                            <div className="peer">
                              <span className="fsz-def fw-600 mR-10 c-grey-800">
                                10% <i className="fa fa-level-up c-green-500"></i>
                              </span>
                              <small className="c-grey-500 fw-600">Cases</small>
                            </div>
                            <div className="peer fw-600">
                              <span className="fsz-def fw-600 mR-10 c-grey-800">
                                2% <i className="fa fa-level-down c-red-500"></i>
                              </span>
                              <small className="c-grey-500 fw-600">Active</small>
                            </div>
                            <div className="peer fw-600">
                              <span className="fsz-def fw-600 mR-10 c-grey-800">
                                15% <i className="fa fa-level-up c-green-500"></i>
                              </span>
                              <small className="c-grey-500 fw-600">Death</small>
                            </div>
                            <div className="peer fw-600">
                              <span className="fsz-def fw-600 mR-10 c-grey-800">
                                8% <i className="fa fa-level-down c-red-500"></i>
                              </span>
                              <small className="c-grey-500 fw-600">Recovered</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-md-6">
                    <div className="bd bgc-white p-20">
                      <div className="layers">
                        <div className="layer w-100 mB-10">
                          <h6 className="lh-1">India Corona Map</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-md-6">
                    <div className="bd bgc-white">
                      <div className="layers">
                        <div className="layer w-100 p-20">
                          <h6 className="lh-1">State Wise Report</h6>
                        </div>
                        <div className="layer w-100">
                          <div className="bgc-light-blue-500 c-white p-20">
                            <div className="peers ai-c jc-sb gap-40">
                              <div className="peer peer-greed">
                                <h5>March 2020</h5>
                                <p className="mB-0">Corona Report</p>
                              </div>
                              <div className="peer">
                                <h3 className="text-right">Total: 432</h3>
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive p-20">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="bdwT-0">State</th>
                                  <th className="bdwT-0">Cases</th>
                                  <th className="bdwT-0">Active</th>
                                  <th className="bdwT-0">Death</th>
                                  <th className="bdwT-0">Recovered</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="fw-600">Andhara Pradesh</td>
                                  <td>
                                    <span className="badge bgc-blue-50 c-blue-700 p-10 lh-0 tt-c badge-pill">
                                      15
                                    </span>
                                  </td>
                                  <td>12</td>
                                  <td>
                                    <span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">
                                      3
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-success">8</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="fw-600">Andhara Pradesh</td>
                                  <td>
                                    <span className="badge bgc-blue-50 c-blue-700 p-10 lh-0 tt-c badge-pill">
                                      15
                                    </span>
                                  </td>
                                  <td>12</td>
                                  <td>
                                    <span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">
                                      3
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-success">8</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="ta-c bdT w-100 p-20">
                        <Link to="#">Check all States</Link>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-md-6">
                    Use this container for some other chart
                  </div>
                </div>
              </div>
            </main>
            <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
              <span>
                Copyright © 2020&nbsp;
                <a
                  href="http://coronacontrol.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Corona_control">
                  Corona control
                </a>
                . All rights reserved.
              </span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const CtrContactData = state.CtrContact.reduContactData;
  return {
    contactData: CtrContactData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    contactUsActionCall: () => dispatch(actionCreator.ContactUsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
