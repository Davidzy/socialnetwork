import React from 'react';
import StatusForm from './statusform';
import Post from '../post/post';
import Ad from '../ad/ad';

export default class Main extends React.Component{
  render() {
    var adobj = {
      _id: 1,
      text: "My First Ad",
      title: 'Some Company',
      image: 'http://placehold.it/150x150'
    };
    let posts = this.props.posts.map(record => <Post key={record._id} post={record}/>);
    return (
      <div className="col-sm-9 col-sm-11" id="main">
        <div>
          <div className="full col-sm-9">
            <div className="row">
              <div className="col-sm-9">
                <StatusForm />
                {posts}
                <button className="btn btn-md">More</button>
              </div>
              <div className="col-sm-3">
                <Ad ad={adobj} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
