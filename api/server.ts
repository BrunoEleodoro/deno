import { Application, Router } from "./deps.ts";

const app = new Application({port: 3001});

app.get("/", (ctx) => {
  return {"hello": "world"};
});

app.post("/formtest", async (ctx) => {
  return ctx.req.body;
});

await app.run();