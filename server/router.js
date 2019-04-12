const FigureModel = require('./models/figure');

module.exports = (app) => {
    
    app.get("/", (req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        FigureModel.find({})
            .then(figures => {
            res.send(figures);
            });
    })
    app.post("/", (req, res)=>{
        /* Mugger.create(req.body)
          .then(mugger => {
            res.send(mugger);
          }); */
          console.log(req.body);
          
      });
}