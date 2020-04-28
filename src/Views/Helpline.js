import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import Footer from './Footer';
import '../Assets/PortalTheme.css';

class Helpline extends Component {
  componentDidMount = () => {
    this.props.ResionalContactActionCall();
  };

  render() {
    const contactData = this.props.contactData.contacts;
    return (
      <div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 pt-5 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <h3>National Helpline</h3>
                  <p>+91-11-23978046</p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <h2 className="toll-free">
                    1075<small>Toll Free</small>
                  </h2>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      Sr. No.
                    </th>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      State
                    </th>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      Number
                    </th>
                    <th scope="col" className="text-left" style={{ paddingLeft: '15px' }}>
                      Alternate Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contactData &&
                    contactData.regional.map((data, index) => {
                      var numbers = data.number;
                      var numbersArr = numbers.split(',');
                      return (
                        <tr key={index}>
                          <td className="text-left" style={{ paddingLeft: '15px' }}>
                            {index + 1}
                          </td>
                          <td style={{ paddingLeft: '15px' }}>{data.loc}</td>
                          <td style={{ paddingLeft: '15px' }}>
                            <span className="badge badge-pill badge-primary">{numbersArr[0]}</span>
                          </td>
                          <td style={{ paddingLeft: '15px' }}>
                            <span className="badge badge-pill badge-warning">
                              {numbersArr[1] ? numbersArr[1] : '--'}
                            </span>
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
  const CtrContactData = state.CtrCorona.reContactData;
  return {
    contactData: CtrContactData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ResionalContactActionCall: () => dispatch(actionCreator.ResionalContactAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Helpline);
