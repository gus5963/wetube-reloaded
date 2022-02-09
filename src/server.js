import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
//app은 여러가지 설정을 할 수 있다 그중 우리는 app에서 view engine을 pug로 사용할 것이라고 셋팅을 하는 것이다.
app.set("views", process.cwd() + "/src/views");
//express가 기본으로 views파일을 열어보는데 default로  process.cwd()이기 때문에 파일을 wetube파일 에서만 찾는다. 하지만 views의 파일은 /src이기 대문에 setting을 process.cwd()+/src/views로 해줬다.
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//express urlencoded는 express application이 form의 value들을 이해할 수 있도록 하고, 우리가 쓸 수 있는 javascript 형식으로 변형시켜준다.
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
