import { Meteor } from 'meteor/meteor';
import { Posts } from './posts';
import { Comments } from './comments';
import { DBMessage } from './messages';
import { DBFriends } from './friends';

Meteor.methods({
  'changeAvatar'(user, fileid) {
      var file = 'http://placehold.it/150x150';
      if (fileid) {
          file = Images.findOne({_id: fileid});
      }
      let data = file._id;
      Meteor.users.update(this.userId, {$set: {'profile.avatar': data}});
  },
  'changeEmail'(email) {
    Meteor.users.update(this.userId,{$set:{'emails.0.address':email}});
  },
  'Posts.insert'(message, imageurl) {
    var post = {
      user: Meteor.user(),
      createdAt: new Date(),
      imageurl,
      message,
      likes: [],
      comments: []
    };
    Posts.insert(post);
  },
  'Post.remove'(id) {
    Posts.remove(id);
  },
  'Message.remove'(id) {
    DBMessage.remove(id)
  },
  'addComment': function (message, post) {
    var user = this.userId;
    var date = new Date();
    var comment = {message: message, post: post._id, user: user, createdOn: date};
    Comments.insert(comment)
  },
  'sendMessage':function(person, subject, message, friendREQ){
    var to = Meteor.users.findOne({_id: person});
    var from = Meteor.users.findOne({_id: this.userId});
    var msg = {
      to,
      fromuser:from._id,
      title:subject,
      message,
      friendREQ,
      createdOn:new Date()
    };
    console.log(msg);
    if (person == this.userId) {
      throw new Meteor.Error("You can not send yourself a message.")
    }
    DBMessage.insert(msg);
  },
  'askFriend': function (friendid, message) {

    var from = Meteor.users.findOne({_id: this.userId});
    var to = Meteor.users.findOne({_id: friendid});
    var message = {
      to,
      fromuser: from._id,
      title: from.profile.firstname + ' ' + from.profile.lastname + ' wants to be your friend.',
      message,
      friendREQ: true,
    };
    console.log(friendid, this.userId);
    if (friendid == this.userId) {
      throw new Meteor.Error("You can not friend yourself.")
    }
    DBMessage.insert(message);
  },
  'confirmFriend': function (message) {
    console.log(message.to._id, message.fromuser);
    Meteor.users.update(message.to._id, {$addToSet: {'profile.friends': message.fromuser}});
    Meteor.users.update(message.fromuser, {$addToSet: {'profile.friends': message.to._id}});
    DBMessage.remove(message._id);
  },
  'removeFriend': function (userid, friendid) {

  },
  'likePost': function (userid, postid) {
    console.log(userid, postid);
    Posts.update(postid, {$addToSet: {likes: this.userId}});
  }
  })
