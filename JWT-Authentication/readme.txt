npm init -y
npm i express jsonwebtoken dotenv
npm i --save-dev nodemon
npm run devStart 
devStart is defined in package.json 

generating random string : 
in terminal : 
 node 
 require('crypto').randomBytes(64).toString('hex')
 