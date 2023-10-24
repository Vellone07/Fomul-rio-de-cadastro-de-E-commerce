function consultaCEP() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado");
            } else {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            }
        })
        .catch(error => {
            console.error("Erro ao consultar o CEP: " + error);
        });
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var cep = document.getElementById("cep").value;
    var logradouro = document.getElementById("logradouro").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);
    console.log("CEP: " + cep);
    console.log("Logradouro: " + logradouro);
    console.log("Bairro: " + bairro);
    console.log("Cidade: " + cidade);
    console.log("Estado: " + estado);
});




