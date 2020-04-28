import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import { Chart } from 'react-google-charts';
import Footer from './Footer';
import '../Assets/PortalTheme.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleState: 8,
      visibleCountry: 8,
    };
  }

  componentDidMount = () => {
    this.props.stateWiseActionCall();
    this.props.worldCasesActionCall();
  };

  loadMoreState = () => {
    this.setState((prev) => {
      return { visibleState: prev.visibleState + 8 };
    });
  };

  loadMoreCountry = () => {
    this.setState((prev) => {
      return { visibleCountry: prev.visibleCountry + 8 };
    });
  };

  render() {
    const confirmCases = this.props.stateWiseData.total && this.props.stateWiseData.total.confirmed;
    const hospitlizeCases = this.props.stateWiseData.total && this.props.stateWiseData.total.active;
    const recoverCases = this.props.stateWiseData.total && this.props.stateWiseData.total.recovered;
    const deathsCases = this.props.stateWiseData.total && this.props.stateWiseData.total.deaths;
    const statewise = this.props.stateWiseData.statewise;
    const worldData = this.props.worldData && this.props.worldData.data;
    const usaData = worldData && worldData.filter((word) => word.country === 'USA');
    const italyData = worldData && worldData.filter((word) => word.country === 'Italy');
    const australiaData = worldData && worldData.filter((word) => word.country === 'Austria');
    const indiaData = worldData && worldData.filter((word) => word.country === 'India');
    let mapData = [['Country', 'Cases', 'Today Cases']];
    for (let key in worldData) {
      mapData.push([worldData[key].country, worldData[key].cases, worldData[key].todayCases]);
    }

    return (
      <div className="fade-in">
        <div className="work-senario">
          <div className="row clear-margins">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pt-3">
              <div className="card">
                <div className="work-target-box green">
                  <img src="Images/progress-icon1.png" alt="" />
                  <div className="title">Total Cases</div>
                  <div className="count green">{confirmCases}</div>
                  <div className="percent">
                    <span className="green">Till Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pt-3">
              <div className="card">
                <div className="work-target-box darkblue">
                  <img src="Images/progress-icon2.png" alt="" />
                  <div className="title">Hospitalized Cases</div>
                  <div className="count darkblue">{hospitlizeCases}</div>
                  <div className="percent">
                    <span className="darkblue">
                      {Math.ceil((hospitlizeCases * 100) / confirmCases)}% of total cases
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pt-3">
              <div className="card">
                <div className="work-target-box purple">
                  <img src="Images/progress-icon3.png" alt="" />
                  <div className="title">Recovered Cases</div>
                  <div className="count purple">{recoverCases}</div>
                  <div className="percent">
                    <span className="purple">
                      {Math.ceil((recoverCases * 100) / confirmCases)}% of total cases
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pt-3">
              <div className="card">
                <div className="work-target-box red">
                  <img src="Images/progress-icon4.png" alt="" />
                  <div className="title">Deaths</div>
                  <div className="count red">{deathsCases}</div>
                  <div className="percent">
                    <span className="red">
                      {Math.ceil((deathsCases * 100) / confirmCases)}% of total cases
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="card">
                <div className="row clear-margins">
                  <div
                    className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 clear-padings"
                    style={{ paddingRight: '0' }}>
                    <div className="card card-border">
                      <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="GeoChart"
                        data={mapData}
                        mapsApiKey="AIzaSyB3dxK1t-xQR6KFgpL1-SoiBOfCerKMwIc"
                        rootProps={{ 'data-testid': '1' }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 clear-padings">
                    <div className="card card-border">
                      <h2 className="business-user">Most Affected Countries</h2>
                      <div className="business-user">
                        <div className="user-collaps">
                          <div className="user-name">
                            <div className="name-t">
                              <h2>
                                {usaData && usaData[0].cases ? (
                                  usaData && usaData[0].cases
                                ) : (
                                  <div className="lds-dual-ring"></div>
                                )}
                              </h2>
                            </div>
                          </div>
                          <div className="employee-progress">
                            <div className="title">
                              Today's Cases From USA: {usaData && usaData[0].todayCases}
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${Math.ceil(
                                    usaData &&
                                      (usaData[0].active * 100) / (usaData && usaData[0].cases)
                                  )}%`,
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Active Cases:{' '}
                                {Math.ceil(
                                  usaData &&
                                    (usaData[0].active * 100) / (usaData && usaData[0].cases)
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="business-user">
                        <div className="user-collaps">
                          <div className="user-name">
                            <div className="name-t">
                              <h2>
                                {italyData && italyData[0].cases ? (
                                  italyData && italyData[0].cases
                                ) : (
                                  <div className="lds-dual-ring"></div>
                                )}
                              </h2>
                            </div>
                          </div>
                          <div className="employee-progress">
                            <div className="title">
                              Today's Cases From Italy: {italyData && italyData[0].todayCases}
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${Math.ceil(
                                    italyData &&
                                      (italyData[0].active * 100) /
                                        (italyData && italyData[0].cases)
                                  )}%`,
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Active Cases:{' '}
                                {Math.ceil(
                                  italyData &&
                                    (italyData[0].active * 100) / (italyData && italyData[0].cases)
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="business-user">
                        <div className="user-collaps">
                          <div className="user-name">
                            <div className="name-t">
                              <h2>
                                {australiaData && australiaData[0].cases ? (
                                  australiaData && australiaData[0].cases
                                ) : (
                                  <div className="lds-dual-ring"></div>
                                )}
                              </h2>
                            </div>
                          </div>
                          <div className="employee-progress">
                            <div className="title">
                              Today's Cases From Austria:{' '}
                              {australiaData && australiaData[0].todayCases}
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${Math.ceil(
                                    australiaData &&
                                      (australiaData[0].active * 100) /
                                        (australiaData && australiaData[0].cases)
                                  )}%`,
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Active Cases:{' '}
                                {Math.ceil(
                                  australiaData &&
                                    (australiaData[0].active * 100) /
                                      (australiaData && australiaData[0].cases)
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="business-user">
                        <div className="user-collaps">
                          <div className="user-name">
                            <div className="name-t">
                              <h2>
                                {indiaData && indiaData[0].cases ? (
                                  indiaData && indiaData[0].cases
                                ) : (
                                  <div className="lds-dual-ring"></div>
                                )}
                              </h2>
                            </div>
                          </div>
                          <div className="employee-progress">
                            <div className="title">
                              Today's Cases From India: {indiaData && indiaData[0].todayCases}
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${Math.ceil(
                                    indiaData &&
                                      (indiaData[0].active * 100) /
                                        (indiaData && indiaData[0].cases)
                                  )}%`,
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Active Cases:{' '}
                                {Math.ceil(
                                  indiaData &&
                                    (indiaData[0].active * 100) / (indiaData && indiaData[0].cases)
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clear-margins">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-5 text-center">
              <div className="card">
                <div className="card-header">
                  <h3>World's Cases</h3>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Country
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Cases
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Active
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Recovered
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Death
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {worldData &&
                        worldData.slice(0, this.state.visibleCountry).map((data, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-left" style={{ paddingLeft: '15px' }}>
                                {data.country}
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-success">{data.cases}</span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-primary">
                                  {data.active}
                                </span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-warning">
                                  {data.recovered}
                                </span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-danger">{data.deaths}</span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {this.state.visibleCountry < worldData && worldData.length === undefined
                  ? null
                  : worldData &&
                    worldData.length && (
                      <button
                        style={{ cursor: 'pointer' }}
                        onClick={this.loadMoreCountry}
                        type="button">
                        Show More
                      </button>
                    )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-5 text-center">
              <div className="card">
                <div className="card-header">
                  <h3>State Wise Cases</h3>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          State
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Cases
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Active
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Recovered
                        </th>
                        <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                          Death
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {statewise &&
                        statewise.slice(0, this.state.visibleState).map((data, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-left" style={{ paddingLeft: '15px' }}>
                                {data.state}
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-success">
                                  {data.confirmed}
                                </span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-primary">
                                  {data.active}
                                </span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-warning">
                                  {data.recovered}
                                </span>
                              </td>
                              <td style={{ paddingLeft: '15px' }}>
                                <span className="badge badge-pill badge-danger">{data.deaths}</span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {this.state.visibleState < statewise && statewise.length === undefined
                  ? null
                  : statewise &&
                    statewise.length && (
                      <button
                        style={{ cursor: 'pointer' }}
                        onClick={this.loadMoreState}
                        type="button">
                        Show More
                      </button>
                    )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const CtrStateWiseData = state.CtrCorona.reStateData;
  const CtrWorldData = state.CtrCorona.reWorldData;
  return {
    stateWiseData: CtrStateWiseData,
    worldData: CtrWorldData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stateWiseActionCall: () => dispatch(actionCreator.StateWiseAction()),
    worldCasesActionCall: () => dispatch(actionCreator.WorldCasesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
