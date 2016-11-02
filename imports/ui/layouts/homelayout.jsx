import React from 'react';
import SignupForm from '../components/signup/signupform';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <div>
          Header
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      features
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <SignupForm />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
