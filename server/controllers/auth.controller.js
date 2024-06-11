import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to created user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //check username
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user)
      return res
        .status(401)
        .json({ message: "invalid username authentication" });

    //check pass
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "invalid pass authentication" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "login success" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to created user" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").json({ message: "successfully logout" });
};
