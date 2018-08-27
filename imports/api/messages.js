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

    if (!this.userId) {
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

Meteor.methods({
  'messages.edit'(text, messageId) {
    check(text, String);
    check(messageId, String);

    const message = Messages.findOne(messageId);
 
    if (message.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.update(messageId, { $set: { text } });
  }
});

Meteor.methods({
  'messages.remove'(messageId) {
    check(messageId, String);

    const message = Messages.findOne(messageId);
 
    if (message.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.remove(messageId);
  }
});

Meteor.methods({
  'messages.sendPrivate'(text, userPair) {
    check(text, String);
    check(userPair, Array.of(String));

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      userPair,
      text,
      isPrivate: true,
      createdAt: new Date(),
      owner: this.userId,
      sender: Meteor.users.findOne(this.userId).username,
    });
  }
});
