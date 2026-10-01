const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Node.js App</title>
      </head>

      <body style="font-family: Arial; text-align: center; margin-top: 80px;">
        <h1>CI/CD Deployment Successful 🚀</h1>
        <p>Node.js + Docker + GitHub Actions + Docker Hub + AWS EC2</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});