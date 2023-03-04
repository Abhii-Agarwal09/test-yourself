import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {
  try {
    const { name, email, password, isColorblind, colorBlindnessType } =
      req.body;
    let user;
    user = await User.findOne({ email });
    if (user) {
      return res.json({
        success: false,
        message: 'User already exists. Please login',
      });
    }
    const hashedPass = await bcrypt.hash(password, 12);
    console.log(hashedPass);
    // console.log(hashedPassword);
    user = new User({
      name,
      email,
      password: hashedPass,
      isColorblind,
      colorBlindnessType,
    });
    await user.save();
    return res.json({
      success: true,
      message: 'User registered successfully',
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: err,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: 'Email or password is incorrect',
      });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: 'There was an error trying to login',
        });
      }
      if (result) {
        return res.json({ success: true, message: 'Logged in', data: user });
      }
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: err,
    });
  }
};

export { registerUser, loginUser };
