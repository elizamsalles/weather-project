let chave = "344de66146893d9ecc9791350b2c9870"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".humidade").innerHTML = "Humidade: " + dados.main.humidity + "%"
    document.querySelector(".sensacao").innerHTML = "Sensação térmica: " +  Math.floor(dados.main.feels_like) + "°C"


}


async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric"
    ).then(resposta => resposta.json())
     
    colocarNaTela(dados)
    
}



function botao(){
    let cidade = document.querySelector(".selecao").value

    buscarCidade(cidade)
}
