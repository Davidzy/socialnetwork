import React from 'react';
// import SignupForm from '../components/signup/signupform';
import SignupFormContainer from '../components/signup/signupform-container';
import Header from '../components/header/header';
import FeatureList from '../components/features/featurelist';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <FeatureList />
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <SignupFormContainer />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
