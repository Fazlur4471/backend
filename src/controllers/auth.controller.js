import { User } from "../models/index.js";
import { comparePassword } from "../utils/hash.js";
import { generateToken } from "../services/token.service.js";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ where: { email } });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await comparePassword(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({
    id: admin.id,
    role: admin.role,
  });

  res.json({
    message: "Login successful",
    token,
  });
};
