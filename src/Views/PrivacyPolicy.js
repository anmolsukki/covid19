import React, { Component } from 'react';
import '../Assets/PortalTheme.css';

class PrivacyPolicy extends Component {
  render() {
    return (
      <div style={{ background: '#f3f1f1' }}>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-3 mx-auto">
              <div className="about-page">
                <h1 className="heading">Who we are</h1>
                <p className="description">
                  Our website address is:
                  <a href="http://coronacontrol.in">http://coronacontrol.in</a> What personal data
                  we collect and why we collect it
                </p>
                <h4 className="heading">Comments</h4>
                <p className="description">
                  When visitors leave comments on the site we collect the data shown in the comments
                  form, and also the visitor’s IP address and browser user agent string to help spam
                  detection.
                </p>
                <p className="description">
                  An anonymized string created from your email address (also called a hash) may be
                  provided to the Gravatar service to see if you are using it. The Gravatar service
                  privacy policy is available here: https://automattic.com/privacy/. After approval
                  of your comment, your profile picture is visible to the public in the context of
                  your comment.
                </p>
                <h4 className="heading">Media</h4>
                <p className="description">
                  If you upload images to the website, you should avoid uploading images with
                  embedded location data (EXIF GPS) included. Visitors to the website can download
                  and extract any location data from images on the website.
                </p>
                <h4 className="heading">Contact forms: Cookies</h4>
                <p className="description">
                  If you leave a comment on our site you may opt-in to saving your name, email
                  address and website in cookies. These are for your convenience so that you do not
                  have to fill in your details again when you leave another comment. These cookies
                  will last for one year.
                </p>
                <p className="description">
                  If you visit our login page, we will set a temporary cookie to determine if your
                  browser accepts cookies. This cookie contains no personal data and is discarded
                  when you close your browser.
                </p>
                <p className="description">
                  When you log in, we will also set up several cookies to save your login
                  information and your screen display choices. Login cookies last for two days, and
                  screen options cookies last for a year. If you select “Remember Me”, your login
                  will persist for two weeks. If you log out of your account, the login cookies will
                  be removed.
                </p>
                <p className="description">
                  If you edit or publish an article, an additional cookie will be saved in your
                  browser. This cookie includes no personal data and simply indicates the post ID of
                  the article you just edited. It expires after 1 day.
                </p>
                <p className="description">
                  Embedded content from other websites Articles on this site may include embedded
                  content (e.g. videos, images, articles, etc.). Embedded content from other
                  websites behaves in the exact same way as if the visitor has visited the other
                  website.
                </p>
                <p className="description">
                  These websites may collect data about you, use cookies, embed additional
                  third-party tracking, and monitor your interaction with that embedded content,
                  including tracking your interaction with the embedded content if you have an
                  account and are logged in to that website.
                </p>
                <h4 className="heading">Analytics</h4>
                <p className="description">Who we share your data with</p>
                <p className="description">How long we retain your data</p>
                <p className="description">
                  If you leave a comment, the comment and its metadata are retained indefinitely.
                  This is so we can recognize and approve any follow-up comments automatically
                  instead of holding them in a moderation queue.
                </p>
                <p className="description">
                  For users that register on our website (if any), we also store the personal
                  information they provide in their user profile. All users can see, edit, or delete
                  their personal information at any time (except they cannot change their username).
                  Website administrators can also see and edit that information.
                </p>
                <h4 className="heading">What rights you have over your data</h4>
                <p className="description">
                  If you have an account on this site, or have left comments, you can request to
                  receive an exported file of the personal data we hold about you, including any
                  data you have provided to us. You can also request that we erase any personal data
                  we hold about you. This does not include any data we are obliged to keep for
                  administrative, legal, or security purposes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PrivacyPolicy;
