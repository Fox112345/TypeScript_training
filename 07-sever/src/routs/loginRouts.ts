import {Router, Response, Request, NextFunction} from "express";

interface ReqWithBody extends Request{
    body: { [key: string]: string | undefined}
}

function requiredAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session?.loggedIn) return next()

    return res.status(403).send('Not permited')
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
    `)
});

router.post('/login', (req: ReqWithBody, res: Response) => {
    const {email, pass} = req.body

    if (email==='12' && pass==='12') {
        req.session = { loggedIn: true}
        res.redirect('/')
    } else {
        res.send("Invalid")
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session?.loggedIn) res.send(`
        <div>
            <div>You are logged in</div>
            <a href="/logout">Logout</a> 
        </div>
    `)
    else res.send(`
        <div>
            <div>You are not logged in</div>
            <a href="/login">Login</a>
        </div>
    `)
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = null
    res.redirect('/')
})

router.get('/protected', requiredAuth, (req: Request, res: Response) => {
    res.send(`
    Welcome!
    `)
})

export { router };