const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.get("/", (req, res) => {
  //console.log("tell me all of the essentials")
  res.sendFile(__dirname + "/index.html");
  //res.sendStatus(404);
  //res.render("index",{text:"Testing"});
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat message", (msg) => {
  //console.log("Message contents: "+msg); 
  io.emit("chat message", msg);
  });


});


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//
