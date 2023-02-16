
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  console.log("Users get request");
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  console.log("request for adding : ");
  console.log(req.body);

  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.password;

  const newUser = new User(
    {username: username, 
    email: email,
    password: pass});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/verify').post((req, res) => {

    console.log("request for verifying : ");

  
    const uname = req.body.username;
    const pass = req.body.password;

    console.log(uname, pass);
  
    let querry = User.findOne({username:uname, password:pass})
    console.log(querry);
    
    if(!querry) return res.status(400).json({
        message: "User Not Exist"
      });
    else return res.status(200).json({
        message: "User found"
      });

        // .then(() => res.json('User added!'))
        // .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router; 