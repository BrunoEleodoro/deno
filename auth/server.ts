import { Application, Router } from "./deps.ts";

const app = new Application({ port: 3001 });

// Middleware
app.use((ctx) => {
  ctx.cookies["user.session"] = "qwertz";
  delete ctx.cookies["user.session"];
  return;
});

app.get("/", (ctx) => {
  return { "secret": Deno.env.get("SECRET") };
});

await app.run();
