const FigureModel = require('./models/figure');

module.exports = (app) => {
    app.get("/", (req,res)=>{
        FigureModel.find({})
            .then(figures => {
            res.send(figures);
            });
    })
    app.post("/", (req, res)=>{
        FigureModel.find().sort({id:-1}).limit(1)
         .then((id)=>{
           var count = id[0].id;
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
          });
      });

}