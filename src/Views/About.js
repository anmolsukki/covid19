import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mt-5 mx-auto">
              <div className="about-page">
                <h1 className="heading">About</h1>
                <p className="description">
                  coronacontrol is run by team of developers, researchers, and volunteers with the
                  goal of making world statistics available in a thought-provoking and time relevant
                  format to a wide audience around the world. coronacontrol is owned by Inspigear
                  India Pvt Ltd, an independent company. We have no political, governmental, or
                  corporate affiliation.
                </p>
                <h4 className="heading">Trusted Authority</h4>
                <p className="description">
                  coronacontrol was voted as one of the best free reference websites.
                </p>
                <h4 className="heading">Other Projects</h4>
                <p className="description">
                  Within the Real Time Statistics Project, we have launched Game engine in slot wise
                  approach and soon to launch food on wheel in railway. We pioneered two methods of
                  visualizing data: the Single Unit Isotype and the Live Isotype (details).
                </p>
                <h4 className="heading">How it works</h4>
                <p className="description">
                  The live counters show the real-time estimate as computed by our realtime data,
                  which processes the latest data and projections provided by the most reputable
                  organizations and statistical offices in the world.
                </p>
                <h4 className="heading">Why Live Counters?</h4>
                <p className="description">
                  When using static numbers to describe numerical change through time, we fail to
                  provide a sense of the relationship between the magnitude of change and the flow
                  of time, which is how we experience change in real life. What static numbers fail
                  to provide is the perception of the frequency and timing of events, the rhythm, an
                  essential part of nature and a tool for understanding the physical phenomena
                  surrounding us. Only by employing live counters we are able to convey these
                  elements and truly grasp the magnitude of the quantitative change through time.
                </p>
                <h4 className="heading">Questions and Feedback</h4>
                <p className="description">
                  Please refer to the frequently asked questions. For other questions or to send us
                  your feedback, please contact us twitter: @coronacontrol or mail:{' '}
                  <Link to="#">rupesh.kumar@yatrirestro.com</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
