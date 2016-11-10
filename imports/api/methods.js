import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'changeAvatar': function (user, fileid) {
      var file = 'http://placehold.it/150x150';
      if (fileid) {
          file = Images.findOne({_id: fileid});
      }
      let data = file._id;
      Meteor.users.update(this.userId, {$set: {'profile.avatar': data}});
  },
  'changeEmail': function(email) {
    Meteor.users.update(this.userId,{$set:{'emails.0.address':email}});
  },
})
