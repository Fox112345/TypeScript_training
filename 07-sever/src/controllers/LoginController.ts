import { Router, Response, Request, NextFunction } from "express";
import { get, controller, use, bodyVal, post,  } from "./decorators";


@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="post">
            <div>
                <label>Email</label>
                <input name="email">
            </div>
            <div>
                <label>Pass</label>
                <input name="pass" type="password">
            </div>
            <button>Submit</button>
        </form>
        `);
  }

  @post('/login')
  @bodyVal('email')
  postLogin(req: Request, res: Response) {
    const {email, pass} = req.body

    if (email==='12' && pass==='12') {
        req.session = { loggedIn: true}
        res.redirect('/')
    } else {
        res.send("Invalid")
    }
  };

    @get('/logout')
    getLogout(req: Request, res: Response)  {
        req.session = null
        res.redirect('/')
    }
}
