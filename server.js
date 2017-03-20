var express = require('express');
var multer = require('multer');
var upload = multer(); // leave out options so files aren't saved to disk
var app = express();

app.use('/', express.static(__dirname));

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT || 5000);
