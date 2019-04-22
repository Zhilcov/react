const FigureModel = require('./models/figure');
const UsersModel = require('./models/user');
const config = require('./config');
const _ = require('lodash');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');


function createToken (body) {
  return jwt.sign(
      body,
      config.jwt.secretOrKey,
      {expiresIn: config.expiresIn}
  );
}

module.exports = (app) => {

    app.get("/", (req,res)=>{
      FigureModel.find({})
      .then(figures => {
      res.send(figures);      
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    app.get("/getUsers", (req,res)=>{
      UsersModel.find({isAdmin:false})
      .then(users => {
      res.send(users);      
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    app.get("/user/:name", async (req,res)=>{
      let user = await UsersModel.findOne({username: {$regex: _.escapeRegExp(req.params.name), $options: "i"}}).lean().exec();
         await FigureModel.find({ownUser:user._id})
           .then((figures)=>{
             res.send(figures)
           }) 
    })

    app.post("/", (req, res)=>{
        FigureModel.find().sort({id:-1}).limit(1)
         .then((id)=>{
          var count = id[0].id
            FigureModel.create(Object.assign({},req.body,{id:count+1}))
            .then((figure)=>{
                res.send(figure)
            })
            .catch((err)=>console.log(err)
            )
        })
        .catch(()=>{
          var count = 0
          FigureModel.create(Object.assign({},req.body,{id:count+1}))
          .then((figure)=>{
              res.send(figure)
          })
        })
    });

    app.post("/setAdmin/:id", async (req, res)=>{
      let user = await UsersModel.findOne({_id: req.body.id}).exec() || {name:"e"}; 
        if(user.isAdmin){
          UsersModel.findByIdAndUpdate({_id: req.params.id}, {isAdmin:true})
            .then(()=>{
              res.status(200).send("set");
            })
        }else {
          res.status(403).send("Нет доступа")
        }
    });

    app.post("/changePassword", async (req, res)=>{
      let user = await UsersModel.findOne({_id: req.body.user}).exec(); 
      let password = req.body.password
      let newPassword = req.body.newPassword
      if(user != void(0) && bcrypt.compareSync(password, user.password)) {
        UsersModel.findByIdAndUpdate({_id: req.body.user},{password:bcrypt.hashSync(newPassword, 12),lastPasswordChange:Date.now()})  
          .then((userr)=>{
              res.status(200).send({lastChange:userr.lastPasswordChange});
        })               
      }else{
        res.status(203).send("Прежний пароль введён неправильно"); 
      }
    });

    app.post("/changeUsername", async (req, res)=>{
      let user = await UsersModel.findOne({_id: req.body.user}).exec(); 
      let newUsername= req.body.username
      if(user != void(0)) {
        UsersModel.findByIdAndUpdate({_id: req.body.user}, {username:newUsername})  
          .then( async ()=>{
              user = await UsersModel.findOne({_id: req.body.user}).exec();
              res.status(200).send(user);
        })               
      }else{
        res.status(203).send("Прежний пароль введён неправильно"); 
      }
    });

    app.delete("/delFigure/:id", async (req, res)=>{
       let figure = await FigureModel.findOne({id: req.params.id}).exec() || {ownUser:"e"};
       let user = await UsersModel.findOne({_id: req.body.id}).exec() || {name:"e"}; 
        if((figure.ownUser === req.body.id) || user.isAdmin){
          await FigureModel.deleteOne({id: req.params.id})
          .then(figure => {
            res.send(figure);
          })
          .catch((err)=>{
            console.log(err);
          }) 
        }else {
          res.status(403).send("Нет доступа")
        }
      });
    
    app.delete("/delUser/:id", async (req, res)=>{
         let user = await UsersModel.findOne({_id: req.body.id}).exec() || {name:"e"}; 
         if(user.isAdmin){
            FigureModel.deleteMany({ownUser:req.params.id})
            .then(()=>{
                  UsersModel.deleteOne({_id:req.params.id})
                  .then(user=>{
                    res.send(user);
                  })
                  .catch((err)=>{
                    console.log(err);
                  }) 
            })
            .catch((err)=>{
              console.log(err);
            }) 
         }else {
          res.status(403).send("Нет доступа")
        }
    });  
    
    app.put("/:id", (req, res)=>{
        FigureModel.findOneAndUpdate({id: req.params.id}, req.body)
          .then(() => {
            FigureModel.findOne({id: req.params.id})
              .then(figure => {
                res.send(figure);
              })
              .catch((err)=>console.log(err))
          });
      });

    app.get("/hideRecycle/:id", (req,res)=>{
      FigureModel.findOneAndUpdate({id: req.params.id}, {recycle:false})
      .then(() => {
        FigureModel.findOne({id: req.params.id})
          .then(figure => {
            res.send(figure);
          });
      });
    })
    
    app.get("/showRecycle/:id", (req,res)=>{
      if(req.params.id !==  null){
        FigureModel.findOneAndUpdate({id: req.params.id}, {recycle:true})
        .then(() => {
          FigureModel.findOne({id: req.params.id})
            .then(figure => {
              res.send(figure);
            });
        })
        .catch((err)=>console.log(err))
      }else{
        res.status(400).send({});
      }  
    })
    

    app.post('/register', async (req, res) => {
      try {
          let user = await UsersModel.findOne({username: {$regex: _.escapeRegExp(req.body.username), $options: "i"}}).lean().exec();
          if(user != void(0)) return res.status(203).send({message: "User already exist"});

          user = await UsersModel.create({
              username: req.body.username,
              password: req.body.password
          });     

          const token = createToken({id: user._id, username: user.username});
/* 
          res.cookie('token', token, {
              httpOnly: true
          });
 */        
          res.status(200).send({token:token,
                                user:user.username, 
                                id :user._id, 
                                admin: user.isAdmin,
                                lastChange: user.lastPasswordChange  });

      } catch (e) {
          console.error("E, register,", e);
          res.status(500).send({message: "some error"});
      }
  });



      app.post('/login', async (req, res) => {
        try {
            let user = await UsersModel.findOne({username:req.body.username}).lean().exec();
            if(user != void(0) && bcrypt.compareSync(req.body.password, user.password)) {
                const token = createToken({id: user._id, username: user.username});
                res.status(200).send({token:token,
                                      user:user.username, 
                                      id :user._id, 
                                      admin: user.isAdmin,
                                      lastChange: user.lastPasswordChange });
            } else res.status(203).send({message: "User not exist or password not correct"});
        } catch (e) {
            console.error("E, login,", e);
            res.status(500).send({message: "some error"});
        }
    });
    
}