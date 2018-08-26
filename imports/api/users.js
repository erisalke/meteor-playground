import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('userList', function () {
    return Meteor.users.find({});
  });
}
