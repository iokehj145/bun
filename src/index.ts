import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
const app = new Elysia();
app.use(cors());
interface User {
    name: string;
    password: string;
    email: string;
}
let users: User[] = [{name: "Yaric", password: "12345", email: "Some@gmail.com"}];

app.get("/", async () => {
    return ("Hello world, from Yaric!")
})

app.post("/user", async(request) => {
 try{
    const user : User = await (request.body as Promise<User>);
    users.push(user);
    console.log(`Add user ${user.name}, email ${user.email}, password ${user.password}`);
    return (`I make user ${user.name}, email ${user.email}, password ${user.password}`)
    } 
    catch(error){
    return (error);
 }
})

app.get("/users", () => {
    return (users)
})
app.listen(8000)

console.log("Server begin");