const bcrypt = require('bcryptjs');
//const { ObjectId } = require('mongodb');
const LocalStrategy = require('passport-local').Strategy;

const users = [{
    _id: 1,
    nome: "adm",
    senha: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW",
    email: "adm@teste.com.br",
    telefone: "000000000"
}];

module.exports = function(passport){
    function findUser(email){
        return users.find(item => item.email === email);
        //return global.db.collection("Cliente").findOne({"nome": nome});
    }
    function findUserByID(id){
        return users.find(item => item._id === id);
        //const ObjectID = require("mongodb").ObjectId;
        //return global.db.collection("Cliente").findOne(ObjectId(id));
    }
    passport.serializeUser((user, done)=>{
        done(null, user._id);
    })
    passport.deserializeUser((id, done)=>{
        try {
            const user = findUserByID(id);
            done(null, user);
        } catch (err) {
            console.log(err);
            return done(err, null);
        }
    })
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha'
    },
    (username, password, done)=>{
        try {
            const user = findUser(username);
            if(!user) return done(null, false);
            const isValid = bcrypt.compare(password, user.password);
            if(!isValid) return done(null, false);
            return done(null, true);
        } catch (err) {
            console.log(err);
            return done(err, false);
        }
    }))
}