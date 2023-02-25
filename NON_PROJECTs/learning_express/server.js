const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
require('dotenv').config();
app.use(express.json())

console.log("____________________")
function beforeCall(){
    console.log();
}
beforeCall();

function generateAccessToken(data) {
    console.log(data);
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '12s' })
}

app.post('/getToken', async (req,res) => {
    const { username, password } = req.body;
    const forJWTsign = {username};
    const accessToken = generateAccessToken(forJWTsign); 
    const refreshToken = jwt.sign(forJWTsign, process.env.REFRESH_TOKEN_SECRET)

    return res.status(200).send({ accessToken: accessToken, refreshToken: refreshToken });
})

app.post('/verifyToken', authenticateToken, (req, res) => {
    console.log("hehe");

    const data = 
    {
      newToken : req.newToekn
    }
    return res.json(data);
})

function authenticateToken(req, res, next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    req.newToekn = token;

    try
    {
        const verifyJWTtoken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(verifyJWTtoken)
        {
            console.log("token valid!")
            next();
            return;
        }
    }
    catch 
    {
        console.log("token expired!")
        try
            {
            const refreshToken = req.body.token;

            const verifyRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            
            if(verifyRefreshToken)
            {
                console.log("refresh token valid, creating auth token")
                const username = verifyRefreshToken.username;
                const forJWTsign = {username};
                const newTokenValue = generateAccessToken(forJWTsign);
                req.newToekn = newTokenValue;
                //returned new access token to user
                next();

                return;
            }
        }
        catch
        {
            return res.status(403).send("refresh token not valid");
        }
    }
}





// app.use(func)




app.get('/users', (req, res) =>{
    console.log("user")
    res.send('Users page')
})

function func(req, res, next){
    console.log("func called")
    // res.json({ accessToken: 0 })
    let uname = "shan";
    const data = {uname};
    const tok = "4a628a0a6471e92e689b8c2c4c9d084b7a5604abfcc0eb3a6b0952453f15771b63b63be57c8a04d2e9a0557c3fd7924b4b456d85a959c8fddd49b0bb102d84d1"
    console.log(jwt.sign(data, tok));
    

    // next();
    console.log("fun 2")
    res.send('ayoo page')
    return;
}

app.listen(8080)