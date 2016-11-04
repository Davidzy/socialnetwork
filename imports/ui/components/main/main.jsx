import React from 'react';
import StatusForm from './statusform';
import Post from '../post/post';

export default class Main extends React.Component{
  render() {
    return (
      <div className="col-sm-9 col-sm-11" id="main">
        <div>
          <div className="full col-sm-9">
            <div className="row">
              <div className="col-sm-9">
                <StatusForm />
                <Post />
                <button className="btn btn-md">More</button>
              </div>
              <div className="col-sm-3">
                Ads
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
