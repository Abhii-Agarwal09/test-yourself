import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    isColorblind: { type: Boolean, default: false },
    colorBlindnessType: String,
    totalQuizAttempt: Number,
    totalQuizMarksObtained: Number,
    rankInLeaderboard: Number,
    quizzesGiven: {
      type: [Schema.Types.ObjectId],
      ref: 'quizresult',
    },
  },
  { timestamps: true }
);

const User = model('user', userSchema);

export default User;
