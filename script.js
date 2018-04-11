function mostrar(dados) {
    let latitude = dados.results[0].geometry.location.lat;
    let longitude = dados.results[0].geometry.location.lng;
    let nomeCidade = dados.results[0].formatted_address;

    let htmlNome = document.createElement("p");
    htmlNome.innerHTML = "Cidade: " + nomeCidade;

    let htmlLatitude = document.createElement("p");
    htmlLatitude.innerHTML = "Latitude: "+ latitude;
    let htmlLongitude = document.createElement("p");
    htmlLongitude.innerHTML = "Longitude: "+ longitude;

    let divResposta = document.querySelector("#resultado");
    divResposta.appendChild(htmlNome);
    divResposta.appendChild(htmlLatitude);
    divResposta.appendChild(htmlLongitude);

}

function extrair(resposta) {
    console.log(resposta.ok);
    return resposta.json();
}

function buscarLatLong(){
    let boxInput = document.querySelector("input");
    let cidade = boxInput.value;
    const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
    let url = baseUrl + "?address=" + cidade;
    fetch(url).then(extrair).then(mostrar);
}

let botao = document.querySelector("button");
botao.onclick = buscarLatLong;
