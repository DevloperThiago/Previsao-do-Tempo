// Variáveis => espaço do PC que guardamos algo (txt, img, vid)
// Função => Um trecho de código que só é executado quando chamado

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".tempo").innerHTML =  "Temperatura: " + Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".sensacao").innerHTML = "Sensação térmica: " + Math.floor(dados.main.feels_like) + "ºC"
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then( resposta => resposta.json())

        colocarNaTela(dados)
}


function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}
