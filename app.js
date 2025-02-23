const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ฟังก์ชันสุ่มทำนายผลบาคาร่า
const getRandomPrediction = () => {
    const predictions = ["PLAYER", "BANKER", "TIE"];
    const randomIndex = Math.floor(Math.random() * predictions.length);
    return predictions[randomIndex];
};

// สร้าง API สุ่มทำนายผลบาคาร่า
app.get("/predict", (req, res) => {
    const prediction = getRandomPrediction();
    res.json({ prediction });
});

// API สำหรับรับข้อมูลผลลัพธ์จากหน้าบ้าน
app.post("/submit-result", (req, res) => {
    const { round, winner } = req.body;
    console.log(`รอบที่ ${round} : ${winner}`);
    res.json({ message: "ผลลัพธ์ถูกบันทึกแล้ว" });
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
