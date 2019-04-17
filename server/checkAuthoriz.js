const passport = require('passport');

function checkAuth (req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, decryptToken, jwtError) => {
        if(jwtError != void(0) || err != void(0)) return  res.send({message: "не авторизован"});
        req.user = decryptToken;
        next();
    })(req, res, next);
}

module.exports = checkAuth;