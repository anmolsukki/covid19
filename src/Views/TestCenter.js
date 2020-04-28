import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import Footer from './Footer';
import '../Assets/PortalTheme.css';

class TestCenter extends Component {
  componentDidMount = () => {
    this.props.vrdlActionCall();
  };

  render() {
    const vrdl = this.props.vrdlData.tests;
    return (
      <div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 pt-5 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <h3>LIST OF Test Center</h3>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      Sr.No.
                    </th>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      State
                    </th>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      LIST OF VRDLs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vrdl &&
                    vrdl.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-left" style={{ paddingLeft: '15px' }}>
                            {index + 1}
                          </td>
                          <td style={{ paddingLeft: '15px' }}>{data.state}</td>
                          <td style={{ paddingLeft: '15px' }}>
                            <span>{data.listOfVRDLs}</span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const CtrVrdlData = state.CtrCorona.reTestData;
  return {
    vrdlData: CtrVrdlData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vrdlActionCall: () => dispatch(actionCreator.VrdlAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestCenter);
