import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const quizResultSchema = new Schema(
  {
    takenBy: { type: Schema.Types.ObjectId, ref: 'user' },
    subject: String,
    numberOfQuestions: Number,
    difficulty: String,
    maximumMarks: Number,
    marksObtained: Number,
  },
  { timestamps: true }
);

const QuizResult = model('quizresult', quizResultSchema);

export default QuizResult;