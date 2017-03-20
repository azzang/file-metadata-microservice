const express = require('express');
const multer = require('multer');

const upload = multer(); // leave out options so files aren't saved to disk
const app = express();

app.use('/', express.static(__dirname));

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT || 5000);
