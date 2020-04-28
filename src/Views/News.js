import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import Footer from './Footer';
import '../Assets/PortalTheme.css';

class News extends Component {
  componentDidMount = () => {
    this.props.NewsActionCall();
  };

  render() {
    const news = this.props.newsData.news;
    return (
      <div>
        <div className="row clear-margins news-section">
          {news &&
            news.map((data, index) => {
              console.log('sdfsdf', data.content.length);
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pt-3" key={index}>
                  <div className="card card-news">
                    <img src={data.photo} className="img-fluid card-image" alt="" />
                    <div className="card-text">
                      <h6>
                        <span className="badge badge-success">{data.ribbon}</span>
                      </h6>
                      <h2>{data.heading}</h2>
                      <p className="news-subheading">{data.subHeading}</p>
                      <p className="news-content">{data.content}</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#myModal">
                      View
                    </button>
                    <div className="modal fade" id="myModal">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title text-left">{data.heading}</h4>
                            <button type="button" className="close" data-dismiss="modal">
                              &times;
                            </button>
                          </div>
                          <img src={data.photo} className="img-fluid card-image" alt="" />
                          <div className="card-text">
                            <p className="news-subheading">{data.subHeading}</p>
                          </div>
                          <div className="modal-body text-justify">{data.content}</div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const CtrNewsData = state.CtrCorona.reNewsData;
  return {
    newsData: CtrNewsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    NewsActionCall: () => dispatch(actionCreator.NewsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
