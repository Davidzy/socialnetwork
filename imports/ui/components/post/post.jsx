import React from 'react';

export default class Post extends React.Component {
  render() {
    let dimage = '';
    if (this.props.post.imageurl) {
      dimage = (
        <div>
          <div className="panel-thunbnail">
            <img src={this.props.post.imageurl}
              className="image-responsive postimage img-thumbnail"/>
          </div>
        </div>
      );
    }

    return (
      <div className="col-sm-12">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img className="img-circle avatar" src="http://placehold.it/48x48"/>
            </div>
            <div className="pull-left meta">
              <div className="title h5">
                <b>Bill Gates</b>&nbsp;
                made a post
              </div>
              <h6 className="text-muted time">An hour ago</h6>
            </div>
          </div>
          <div className="col-md-12 post-description">
            <h3>{this.props.post.message}</h3>
            <br/>
          </div>
          <div className="col-md-12">
            {dimage}
            <br/>
          </div>
          <div className="actions">
            <a href="#" className="btn btn-default stat-item">
              <i className="fa fa-thumbs-up icon"></i>
            </a>&nbsp;
            10 Likes
          </div>
          <div className="post-footer">
            Comments List
          </div>
        </div>
      </div>
    )
  }
}
