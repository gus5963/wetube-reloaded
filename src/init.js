import "./db";
// server는 db.js 전체를 import하게 된다. 그러므로 내 서버는 mongo에 연결이 된 것.
import "./models/video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
