import { Elysia } from "elysia";
import {cors} from '@elysiajs/cors'
const app = new Elysia()
.use(cors())
.get("/", () => {return {hello : "Hello Elysia"}})
.listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
