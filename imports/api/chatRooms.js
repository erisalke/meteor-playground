import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatRooms = new Mongo.Collection('chatRooms');

if (Meteor.isServer) {
  Meteor.publish('chatRooms', function chatRoomsPublication() {
    return ChatRooms.find({});
  });
}