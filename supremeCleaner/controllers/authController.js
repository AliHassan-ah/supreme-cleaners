import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import otpModel from "../models/otpModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const registerController = async (req, res) => {
  try {
    const { email, password, Con_password } = req.body;

    if (!email || !password || !Con_password) {
      return res.send({
        message: "Please provide email, password, and confirm password",
      });
    }

    if (password !== Con_password) {
      return res.send({ message: "Passwords do not match" });
    }

    const alreadyExist = await userModel.findOne({ email });
    if (alreadyExist) {
      return res.status(200).send({
        success: false,
        message: "User Already Exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "The user is registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in the Registration",
      error,
    });
  }
};

//Login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(500).send({
        success: false,
        message: "email",
        error,
      });
    }
    if (!password) {
      return res.status(500).send({
        success: false,
        message: "password",
        error,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "The user does not exist",
      });
    }
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "User Login Successfully",
      user: {
        First_name: user.First_name,
        Last_name: user.Last_name,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Invalid Credentials",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("protected Router");
};

/////////////////////////////////////////////////////////////////////////////////
export const forgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Email is :", email);
    const user = await userModel.findOne({ email });
    console.log("The User is ", user);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const confirmationCode = generateUniqueCode(); // Generate a unique confirmation code

    const otpEntry = await otpModel.findOneAndUpdate(
      { email },
      { code: confirmationCode, expireIn: new Date().getTime() + 300 * 1000 }, // Set expiration time (e.g., 10 minutes)
      { upsert: true, new: true }
    );

    await sendEmailWithConfirmationCode(email, otpEntry.code);

    res.status(200).send({
      success: true,
      message: "Email sent with confirmation code",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in forget password request",
      error,
    });
  }
};

/////////////////////////////////////////////////////////
function generateUniqueCode() {
  const confirmationCode = generateRandomCode();
  return confirmationCode.toString(); // Convert to string if needed
}
////////////////
function generateRandomCode() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Send email with confirmation code
async function sendEmailWithConfirmationCode(email, confirmationCode) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "habebullah8522@gmail.com", // Replace with your email address
      pass: process.env.APP_PASSWORD, // Replace with your email password or an app password if you have 2-factor authentication enabled
    },
  });

  let info = await transporter.sendMail({
    from: "habebullah8522@gmail.com", // Replace with your email address
    to: email, // Receiver's email address
    subject: "Password Reset Confirmation Code",
    text: `Your confirmation code is: ${confirmationCode}`,
  });

  console.log("Email sent: %s", info.messageId);
}
/////////////////////////////////////////////////////////////////
export const ResetPasswordController = async (req, res) => {
  try {
    const { email, confirmationCode, newPassword, Con_password } = req.body;

    if (!email) {
      return res.send({ message: "email is not found" });
    }
    if (!confirmationCode) {
      return res.send({ message: "confirmationCode is not found" });
    }
    if (!newPassword) {
      return res.send({ message: "password is not found" });
    }
    if (!Con_password) {
      return res.send({ message: "Con_password is not found" });
    }

    if (newPassword !== Con_password) {
      return res.send({
        success: false,
        message: "New password and confirm password do not match",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const otpEntry = await otpModel.findOne({ email, code: confirmationCode });
    if (!otpEntry || otpEntry.expireIn < new Date()) {
      return res.status(400).send({
        success: false,
        message: "Invalid or expired confirmation code",
      });
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save(); // Save the updated password

    res.status(200).send({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in changing password",
      error,
    });
  }
};
