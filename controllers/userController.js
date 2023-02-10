import User from '../models/userModel';

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.find({ email });
    if (user) {
      return res.json({
        success: false,
        message: 'User already exists. Please login.',
      });
    }
    // TODO: - Hash the password before saving
    user = new User({ name, email, password });
    await User.save();
    res.json({
      success: true,
      message: 'User registered.',
      data: {
        ...user,
        password: '',
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: 'There was a problem while registering user',
      data: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.find({ email });
    if (!user) {
      return res.json({
        success: false,
        message: 'User does not exist. Please register',
      });
    }
    // TODO: Compare the passwords
    let match = false;
    if (match) {
      res.json({
        success: true,
        message: 'User logged in.',
        data: { ...user, password: '' },
      });
    } else {
      res.json({
        success: false,
        message: 'Email or password is incorrect. Please try again',
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: 'There was a problem while loggin in the user',
      data: error.message,
    });
  }
};

export default { registerUser, loginUser };
