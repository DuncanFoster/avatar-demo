Meteor.publish("userCollection", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId});
  }
  else {
    this.ready();
  }
});