function validar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = parseInt(document.getElementById("Telefone").value);
    var mensagem = document.getElementById("mensagem").value;
    
    if(nome == "" || email == "" || telefone == "" || mensagem == ""){
        alert("Erro! Por favor preencha todos os campos.");
        return false;
   }else{
        alert("Agradecemos por nos contatar!");
   }
      
}