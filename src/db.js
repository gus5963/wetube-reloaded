import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// database에 연결시켜주는 과정이다.

const db = mongoose.connection;
//mongoose의 default connection이다.
const handleError = (error) => console.log("⛔️ DB Error", error);
const handleConnect = () => console.log("💡 Connected to DB");
db.on("error", handleError);
db.once("open", handleConnect);
