import express, { Request, Response} from 'express'
import {router} from "./routs/loginRouts";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({ keys: ['ergwaerg']}))
app.use(router)

app.listen(3000, () => {
    console.log("Listen 3000")
})