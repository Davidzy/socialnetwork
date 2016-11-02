import React from 'react';

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
                      signup
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
