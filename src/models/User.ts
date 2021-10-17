import { mongoose } from '../database';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema);

export { User };