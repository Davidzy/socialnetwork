// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

Posts.allow({
    insert:function(){
        return true;
    },
    update:function(){
        return true;
    },
    remove:function(userId,doc){
        // return doc && doc.owner._id === userId;
        return true;
    }
});

Meteor.methods({
  'Posts.insert'(message, imageid, imageurl) {
    var post = {
      user: Meteor.user(),
      createdAt: new Date(),
      image: imageid,
      imageurl,
      message,
      likes: [],
      comments: []
    };
    Posts.insert(post);
  }
});
