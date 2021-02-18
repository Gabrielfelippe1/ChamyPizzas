const mongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("ChammyPizzas"))
            .catch(err => console.log(err));


function findAll(callback){  
    global.conn.collection("Cliente").find({}).toArray(callback);
}

function findCliente(id, callback){  
    global.conn.collection("Cliente").find(new ObjectId(id)).toArray(callback);
}

function findAllGerentes(callback){  
    global.conn.collection("Gerente").find({}).toArray(callback);
}

function findGerente(id, callback){  
    global.conn.collection("Gerente").find(new ObjectId(id)).toArray(callback);
}

function findAgendados(callback){  
    global.conn.collection("Agendamentos").find({}).toArray(callback);
}

function insertOne(cliente, callback){
    global.conn.collection("Cliente").insertOne(cliente, callback);
}

function insertContato(contato, callback){
    global.conn.collection("Contato").insertOne(contato, callback);
}

function insertGerente(gerente, callback){
    global.conn.collection("Gerente").insertOne(gerente, callback);
}

function insertAgendar(agendamento, callback){
    global.conn.collection("Agendamentos").insertOne(agendamento, callback);
}

function deleteGerente(id, callback){
    global.conn.collection("Gerente").deleteOne({_id: new ObjectId(id)}, callback);
}

/*
function findOne(callback){  
    global.conn.collection("Cliente").find(new ObjectId(id)).toArray(callback);
}
*/
module.exports = { findAll, insertOne, insertContato, insertGerente, findCliente, findAllGerentes, findGerente, deleteGerente, insertAgendar, findAgendados }
