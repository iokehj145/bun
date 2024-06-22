import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { Database } from "bun:sqlite";

const Users = new Database("./Users.sqlite", {create: true});
Users.run(`CREATE TABLE IF NOT EXISTS users (name TEXT, password TEXT, email TEXT)`);

const app = new Elysia();
app.use(cors());
interface User {
    name: string;
    password: string;
    email: string;
}

app.get("/", async () => {
    return ("Hello world, from Yaric!") //
})

app.post("/user", async(request: any) => {
 try{
    const user : User = await (request.body as Promise<User>)
    Users.run(`INSERT INTO USERS VALUES('${user.name}', '${user.password}', '${user.email}')`);
    console.log(`Add user ${user.name}, email ${user.email}, password ${user.password}`)
    } 
    catch(error){
    console.log(error);
    return (error)
 }
})

app.get("/users", async() => {
  try {
    return await Promise.resolve(Users.query("SELECT * FROM USERS").all())
    }
    catch (error){
    console.log(error);
    return error
  }
})

app.listen(8000, () => {
    console.log("Server begin")
});