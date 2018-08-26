import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messages', function messagesPublication() {
    return Messages.find({});
  });
}

Meteor.methods({
  'messages.send'(text, room) {
    check(text, String);
    check(room, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      room,
      text,
      createdAt: new Date(),
      owner: this.userId,
      sender: Meteor.users.findOne(this.userId).username,
    });
  }
});