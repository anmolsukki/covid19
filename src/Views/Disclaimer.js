import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/PortalTheme.css';

class Disclaimer extends Component {
  render() {
    return (
      <div style={{ background: '#f3f1f1' }}>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-3 mx-auto">
              <div className="about-page">
                <h1 className="heading">Disclaimer for Inspigear India Pvt Ltd</h1>
                <p className="description">
                  If you require any more information or have any questions about our site's
                  disclaimer, please feel free to contact us by email at{' '}
                  <Link to="#">rupesh.kumar@yatrirestro.com</Link>
                </p>
                <h4 className="heading">Disclaimers for coronacontrol.in</h4>
                <p className="description">
                  All the information on this website -{' '}
                  <a href="http://www.coronacontrol.in">http://www.coronacontrol.in</a> - is
                  published in good faith and for general information purpose only. coronacontrol.in
                  does not make any warranties about the completeness, reliability and accuracy of
                  this information. Any action you take upon the information you find on this
                  website (coronacontrol.in), is strictly at your own risk. coronacontrol.in will
                  not be liable for any losses and/or damages in connection with the use of our
                  website. Our Disclaimer was generated with the help of the{' '}
                  <a href="https://www.disclaimergenerator.net/">Disclaimer Generator</a> and the{' '}
                  <a href="https://www.disclaimer-generator.com.com">Disclaimer Generator</a>.
                </p>
                <p className="description">
                  From our website, you can visit other websites by following hyperlinks to such
                  external sites. While we strive to provide only quality links to useful and
                  ethical websites, we have no control over the content and nature of these sites.
                  These links to other websites do not imply a recommendation for all the content
                  found on these sites. Site owners and content may change without notice and may
                  occur before we have the opportunity to remove a link which may have gone 'bad'.
                </p>
                <p className="description">
                  Please be also aware that when you leave our website, other sites may have
                  different privacy policies and terms which are beyond our control. Please be sure
                  to check the Privacy Policies of these sites as well as their "Terms of Service"
                  before engaging in any business or uploading any information.
                </p>
                <h4 className="heading">Consent</h4>
                <p className="description">
                  By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>
                <h4 className="heading">Update</h4>
                <p className="description">
                  Should we update, amend or make any changes to this document, those changes will
                  be prominently posted here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Disclaimer;
