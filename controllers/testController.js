import QuizResult from '../models/quizResultModel.js';
import User from '../models/userModel.js';

const updateColorblindnessData = async (req, res) => {
  try {
    const { email, type } = req.body;
    console.log(email, type);
    if (!email || !type) {
      return res.json({ success: false, message: 'Invalid email or type' });
    }
    const user = await User.findOneAndUpdate(
      { email },
      { isColorblind: true, colorBlindnessType: type },
      { new: true }
    );
    res.json({
      success: true,
      message: 'User colorblindness details updated',
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'There was an error' });
  }
};

const quizSubmit = async (req, res) => {
  try {
    const {
      email,
      maximumMarks,
      subject,
      difficulty,
      marksObtained,
      numberOfQuestions,
    } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    const quizResult = new QuizResult({
      takenBy: user._id,
      maximumMarks,
      subject,
      difficulty,
      marksObtained,
      numberOfQuestions,
    });
    await quizResult.save();
    user.quizzesGiven.push(quizResult._id);
    await user.save();
    res.json({
      success: true,
      message: 'Quiz attempted',
      data: {
        user,
        quizResult,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'There was an error' });
  }
};

export { updateColorblindnessData, quizSubmit };
