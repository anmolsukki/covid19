import React, { Component } from 'react';

class TestCenter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Hospitals Statics</h2>
          <div className="card">
            <div className="card-header">
              <h3>National</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">1,457 persons: 1 Doctor</h5>
              <h5 className="card-title">1,000 persons: 1 Bed</h5>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Specification</th>
                    <th scope="col">Count</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Rural Hospitals</td>
                    <td>39620</td>
                    <td>Less than Required</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Rural Beds</td>
                    <td>559176</td>
                    <td>Less</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Urban Hospitals</td>
                    <td>7544</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Urban Beds</td>
                    <td>862346</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Total Hospitals</td>
                    <td>47164</td>
                    <td>Poor</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Total Beds</td>
                    <td>1421522</td>
                    <td>Poor</td>
                  </tr>
                </tbody>
              </table>
              <p className="card-text">
                Source: <small>Ministry of Health and Rural Development.</small>
              </p>
              <a
                href="https://pib.gov.in/PressReleasePage.aspx?PRID=1539877"
                className="btn btn-primary">
                Check More
              </a>
            </div>
          </div>
          <div className="clearfix" style={{ marginTop: '20px' }}></div>
          <h3>Regional</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">State</th>
                <th scope="col">
                  Hospitals<small>(Rural)</small>
                </th>
                <th scope="col">
                  Hospitals<small>(Urban)</small>
                </th>
                <th scope="col">
                  Beds <small>(Rural)</small>
                </th>
                <th scope="col">
                  Beds <small>(Urban)</small>
                </th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Andhra Pradesh</td>
                <td>193</td>
                <td>65</td>
                <td>6480</td>
                <td>16658</td>
                <td>
                  258, <span>23138 beds</span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Andhra Pradesh</td>
                <td>193</td>
                <td>65</td>
                <td>6480</td>
                <td>16658</td>
                <td>
                  258, <span>23138 beds</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TestCenter;
