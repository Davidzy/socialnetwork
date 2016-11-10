import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Comments } from '../../../api/comments';
import Avatar from '../avatar/avatar'
import Fullname from '../user/fullname'

class CommentsList extends React.Component {
  addComment(e) {
    e.preventDefault();
    let comment = ReactDOM.findDOMNode(this.refs.comment).value.trim();
    let post = this.props.post;
    if (comment !== '') {
        Meteor.call('addComment', comment, post);
        ReactDOM.findDOMNode(this.refs.comment).value = '';
    }
  }
  render() {
    let rows = this.props.comments.map(function(comment) {
      let timesince = moment(comment.createdOn).fromNow();
      return (
          <li key={comment._id} id={comment._id} className="comment">
              <a className="pull-left" href="#">
                  <Avatar klass="small" user={comment.user}/>
              </a>
              <div className="comment-body">
                  <div className="comment-heading">
                      <h4 className="user"><Fullname user={comment.user}/></h4>
                      <h5 className="time">{timesince}</h5>
                  </div>
                  <p>{comment.message} &nbsp;</p>
              </div>
          </li>
      )
    });
    return (
      <div>
        <div className="input-group">
          <input ref="comment" className="form-control" placeholder="Add a comment" type="text"/>
            <span className="input-group-addon">
              <i onClick={this.addComment.bind(this)} className="fa fa-edit"></i>
            </span>
        </div>
        <ul className="comments-list">
            {rows}
        </ul>
      </div>
    )
  }
}

export default createContainer(({ post }) => {
  let comments = [];
  comments = Comments.find({post: post._id}).fetch();
  return {
    comments
  }
}, CommentsList);
