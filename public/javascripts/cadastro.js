const db = require("../../db");

function validar(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("e-mail").value;
    var senha = document.getElementById("senha").value;
    var endereco = document.getElementById("endereço").value;
    var num = parseInt(document.getElementById("numero").value);
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var cep = document.getElementById("cep").value;
    var uf = document.getElementById("uf").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mês").value;
    var ano = document.getElementById("ano").value;
    
    if(nome == "" || sobrenome == "" || email == "" || senha == "" || endereco == "" || num == "" || bairro == "" || cidade == "" || cep == "" || uf == "" || cpf == "" || telefone == "" || dia == "" || mes == "" ||ano == ""){
      alert("Erro! Por favor preencha todos os campos.");
      return false;
    }else if(Number.isNaN(num)){
      alert("Erro! Campo Nº não é um número");
      return false;
    }else if( uf != "AC" && uf != "AL" && uf != "AP" && uf != "AM" && uf != "BA" && uf != "CE" && uf != "DF" && uf != "ES" && uf != "GO" && uf != "MA" && uf != "MT" && uf != "MS" && uf != "MG" && uf != "PA" && uf != "PB" && uf != "PR" && uf != "PE" && uf != "PI" && uf != "RJ" && uf != "RN" && uf != "RS" && uf != "RO" && uf != "RR" && uf != "SC" && uf != "SP" && uf != "SE" && uf != "TO"){
      alert("Erro! UF inválida");
      return false;
    }else if(db.getCollection('Cliente').find({"cpf": cpf}) == cpf){
      alert("Erro! Pessoa já cadastrado");
      return false;
    }else if(db.getCollection('Gerente').find({"cpf": cpf}) == cpf){
      alert("Erro! Gerente já cadastrado");
    return false;
    }else if(Number.isNaN(dia)|| dia <=0 || dia>31){
      alert("Erro! Campo dia não é um número ou é inválido");
      return false;
    }else if(Number.isNaN(mes)|| mes<=0 ||mes>12){
      alert("Erro! Campo mes não é um número ou é inválido");
      return false;
    }else if(Number.isNaN(ano)||ano <=1900 || ano >= 2007){
      alert("Erro! Campo ano não é um número ou é inválido");
      return false;
    }
    if(document.getElementById("female").checked == true){
      sexo = "F";
    }
    else{
      sexo = "M";
    }
  alert("Cadastro feito com sucesso!"); 
}