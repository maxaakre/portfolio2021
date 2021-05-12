const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "../dist", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
