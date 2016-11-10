import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from '../avatar/avatar';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
  }
  likePost(e) {
    e.preventDefault();
    var user = Meteor.userId();
    var postid = this.props.post._id;
    Meteor.call('likePost', user, postid);
  }
  renderLikes() {
    var likes = '';
    var likesub = 0;
    var currentUser = String(Meteor.userId());
    if(this.props.post.likes.indexOf(currentUser) !== -1){
        likes = 'You and ';
        likesub = 1;
    }

    switch (this.props.post.likes.length - likesub) {
        case 0:
            return likesub > 0 ? 'You like this':'';
        case 1:
            return likesub > 0 ? likes + '1 other person like this':'1 person likes this';
            break;
        default:
            return likes + (this.props.post.likes.length - likesub) + ' people like this';
            break;
    }
  }
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
              <Avatar klass="img-circle avatar" user={this.props.post.user._id}/>
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
            <a href="#" onClick={this.likePost} className="btn btn-default stat-item">
              <i className="fa fa-thumbs-up icon"></i>
            </a>&nbsp;
            {this.renderLikes()}
          </div>
          <div className="post-footer">
            Comments List
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer( () => {
  return {};//blank object
}, Post);
