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

export { updateColorblindnessData };
