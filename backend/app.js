const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/api/login", async (ctx) => {
  ctx.body = "login success";
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("server running at port 3000...");
});
