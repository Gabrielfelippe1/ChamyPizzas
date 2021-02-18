var express = require('express');
const { post } = require('../app');
var router = express.Router();
var util = require('util');
/* GET home page. */
router.get('/', function(req, res, next) {
  global.db.findAll((e, docs) => {
    if(e) { return console.log(e); }
    res.render('index', { title: 'Express', docs: docs });
  });
});

router.get('/index', function(req, res, next) {
  global.db.findAll((e, docs) => {
    if(e) { return console.log(e); }
    res.render('index', { title: 'Express', docs: docs });
  });
});

router.get('/consultarcliente', function(req, res, next) {
  global.db.findAll((e, docs) => {
    if(e) { return console.log(e); }
    res.render('consultarcliente', {docs: docs });
  });
});

router.get('/clientesagendados', function(req, res, next) {
  global.db.findAgendados((e, docs) => {
    if(e) { return console.log(e); }
    res.render('clientesagendados', {docs: docs });
  });
});

router.get('/excluirgerente', function(req, res, next) {
  global.db.findAllGerentes((e, docs) => {
    if(e) { return console.log(e); }
    res.render('excluirgerente', {docs: docs });
  });
});

router.get('/meusagendamentos', function(req, res, next) {
  global.db.findAgendados((e, docs) => {
    if(e) { return console.log(e); }
    res.render('meusagendamentos', {docs: docs });
  });
});

router.get('/cliente/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findCliente(id, (e, docs) => {
    if(e) { return console.log(e); }
    res.render('cliente', {title: 'Cliente',doc: docs[0], action: '/cliente/' + docs[0]._id});
  });
});

router.get('/gerente/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findGerente(id, (e, docs) => {
    if(e) { return console.log(e); }
    res.render('cliente', {title: 'Gerente',doc: docs[0], action: '/gerente/' + docs[0]._id});
  });
});

router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.deleteGerente(id, (e, r) => {
    if(e) { return console.log(e); }
    res.redirect('/excluirgerente');
  });
});

router.get('/cliente', function(req, res, next) {
    res.render('cliente', {doc: {"nome":"","sobrenome":"","email":"","senha":"","endereco":"","num":"","bairro":"","cidade":"","cep":"","uf":"","cpf":"","telefone":"","dia":"","mes":"","ano":"","sexo":""}, action: '/cliente'});
});

router.get('/gerente', function(req, res, next) {
  res.render('cliente', {doc: {"nome":"","sobrenome":"","email":"","senha":"","endereco":"","num":"","bairro":"","cidade":"","cep":"","uf":"","cpf":"","telefone":"","dia":"","mes":"","ano":"","sexo":""}, action: '/gerente'});
});

router.get('/cardapio', function(req, res, next) {
  res.render('cardapio');
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre');
});

router.get('/contato', function(req, res, next) {
  res.render('contato');
});

router.get('/agendar', function(req, res, next) {
  res.render('agendar');
});

router.get('/agendaclientes', function(req, res, next) {
  res.render('agendaclientes');
});

router.get('/adicionargerente', function(req, res, next) {
  res.render('adicionargerente');
});

router.get('/clientesagendados', function(req, res, next) {
  res.render('clientesagendados');
});

router.get('/consultarcliente', function(req, res, next) {
  res.render('consultarcliente');
});

router.get('/excluirgerente', function(req, res, next) {
  res.render('excluirgerente');
});

router.get('/gerencia', function(req, res, next) {
  res.render('gerencia');
});

router.get('/meusagendamentos', function(req, res, next) {
  res.render('meusagendamentos');
});

router.get('/minhaconta', function(req, res, next) {
  res.render('minhaconta');
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});




router.post('/cadastro', function(req, res) {
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var email = req.body.email;
  var senha = req.body.senha;
  var endereco = req.body.endereco;
  var num = parseInt(req.body.num);
  var bairro = req.body.bairro;
  var cidade = req.body.cidade;
  var cep = req.body.cep;
  var uf = req.body.uf;
  var cpf = req.body.cpf;
  var telefone = req.body.telefone;
  var dia = req.body.dia;
  var mes = req.body.mes;
  var ano = req.body.ano;
  var nascimento = dia+"/"+mes+"/"+ano;
  var sexo = req.body.gender;
  
    global.db.insertOne({nome, sobrenome, email, senha, endereco, num, bairro, cidade, cep, uf, cpf, telefone, nascimento, sexo}, (err, result) => {
      if(err) { return console.log(err); }
      res.redirect('/login');
    });
});

//router.get

router.post('/cadastroGerente', function(req, res) {
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var email = req.body.email;
  var senha = req.body.senha;
  var endereco = req.body.endereco;
  var num = parseInt(req.body.num);
  var bairro = req.body.bairro;
  var cidade = req.body.cidade;
  var cep = req.body.cep;
  var uf = req.body.uf;
  var cpf = req.body.cpf;
  var telefone = req.body.telefone;
  var dia = req.body.dia;
  var mes = req.body.mes;
  var ano = req.body.ano;
  var nascimento = dia+"/"+mes+"/"+ano;
  var sexo = req.body.gender;
  
    global.db.insertGerente({nome, sobrenome, email, senha, endereco, num, bairro, cidade, cep, uf, cpf, telefone, nascimento, sexo}, (err, result) => {
      if(err) { return console.log(err); }
      res.redirect('/adicionargerente');
    });
});

router.post('/contato', function(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var telefone = req.body.telefone;
  var mensagem = req.body.mensagem;
  
    global.db.insertContato({nome, email, telefone, mensagem}, (err, result) => {
      if(err) { return console.log(err); }
      res.redirect('/contato');
    });
});

router.post('/agendar', function(req, res) {
  var nome = "Randomilson";
  var sobrenome = "Silva";
  var telefone = "996689578";
  var data = "20/12/2020";
  
    global.db.insertAgendar({nome, sobrenome, telefone, data}, (err, result) => {
      if(err) { return console.log(err); }
      res.redirect('/meusagendamentos');
    });
});

module.exports = router;
