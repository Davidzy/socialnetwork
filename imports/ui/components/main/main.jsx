import React from 'react';
import StatusForm from './statusform';

export default class Main extends React.Component{
  render() {
    return (
      <div className="col-sm-9 col-sm-11" id="main">
        <div>
          <div className="full col-sm-9">
            <div className="row">
              <div className="col-sm-9">
                <StatusForm />
                Posts
                <button className="btn btn-md">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
