import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SillyGuid } from '/imports/helpers';

export const ChatRooms = new Mongo.Collection('chatRooms');

if (Meteor.isServer) {
  Meteor.publish('chatRooms', function chatRoomsPublication() {
    return ChatRooms.find({});
  });
}

Meteor.methods({
  'chatRooms.create'(name) {
    check(name, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    ChatRooms.insert({
      name,
      url: SillyGuid()
    });
  }
});
