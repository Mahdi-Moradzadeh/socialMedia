const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  { 
    email: { type: String, required: true, unique: true, match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'The email address is not valid!'] },
    
    username: { type: String,required: true,unique: true,trim: true, },

    friends: [ { type: Schema.Types.ObjectId, ref: 'User', },],

    thoughts: [ { type: Schema.Types.ObjectId, ref: 'Thought', },],
  },
  {
    toJSON: { virtuals: true, },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
