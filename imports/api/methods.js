import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'changeAvatar': function (user, fileid) {
      var file = 'http://placehold.it/150x150';
      console.log(2, fileid);
      if (fileid) {
          file = Images.findOne({_id: fileid});
          console.log(3, file);
      }
      console.log(4, file);
      // var data = file._id;

      // Meteor.users.update(this.userId, {$set: {'profile.avatar': data}});
  },
})
