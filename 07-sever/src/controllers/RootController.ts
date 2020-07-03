import { get, controller, use } from "./decorators";
import { Request, Response, NextFunction } from "express";

function requiredAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) return next();

  return res.status(403).send("Not permited");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn)
      res.send(`
        <div>
            <div>You are logged in</div>
            <a href="/auth/logout">Logout</a> 
        </div>
    `);
    else
      res.send(`
        <div>
            <div>You are not logged in</div>
            <a href="/auth/login">Login</a>
        </div>
    `);
  }

  @get("/protected")
  @use(requiredAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    Welcome!
    `);
  }
}
