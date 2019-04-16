const FigureModel = require('./models/figure');

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
    app.post("/", (req, res)=>{
        FigureModel.find().sort({id:-1}).limit(1)
         .then((id)=>{
          var count = id[0].id
            FigureModel.create(Object.assign({},req.body,{id:count+1}))
            .then((figure)=>{
                res.send(figure)
            })
        })
        .catch(()=>{
          var count = 0
          FigureModel.create(Object.assign({},req.body,{id:count+1}))
          .then((figure)=>{
              res.send(figure)
          })
        })
    });

    app.delete("/delFigure/:id", (req, res)=>{        
        FigureModel.deleteOne({id: req.params.id})
          .then(figure => {
            res.send(figure);
          })
          .catch((err)=>{
            console.log(err);
          })
      });
    
      
    app.put("/:id", (req, res)=>{
        FigureModel.findOneAndUpdate({id: req.params.id}, req.body)
          .then(() => {
            FigureModel.findOne({id: req.params.id})
              .then(figure => {
                res.send(figure);
              });
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
      if(req.params.id){
        FigureModel.findOneAndUpdate({id: req.params.id}, {recycle:true})
        .then(() => {
          FigureModel.findOne({id: req.params.id})
            .then(figure => {
              res.send(figure);
            });
        });
      }  
    }) 
}