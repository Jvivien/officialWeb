const express = require('express');
const path = require('path');
const morgan = require('morgan');

const morganMiddleware = morgan("short");
// const filePath = path.join(__dirname, "./index.html");
const app = express();
app.use(express.static(path.join(__dirname, 'official')))
// app.use(morganMiddleware);
//
// app.use((req, res) => {
//   res.send(filePath, err => {
//     if(err){
//       next(new Error("Error sending file!"));
//     }else{
//       console.log('File success to send');
//     }
//   });
// })
//
// app.use(function(err, req, res, next) {
//     console.error(err);
//     next(err);
// });
//
// app.use(function(err, req, res, next) {
//   res.status(500);
//   res.send("Internal server error.");
// });

app.listen(3000, () => {
  console.log('App started on port 3000');
})
