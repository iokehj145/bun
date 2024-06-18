import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
const app = new Elysia();
app.use(cors());

app.get("/", async () => {
  console.log("Handling GET /");
  try {
    return ("hello world");
  } catch (error) {
    console.error("Error handling request:", error);
    throw error;
  }
});
app.listen(8000)

console.log("Server begin");