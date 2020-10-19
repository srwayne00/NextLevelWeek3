//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);
/*-23.534212, -47.416210   /  51.505, -0.09 */

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng;
    //remove icon 
    marker && map.removeLayer(marker);

    //add icon Layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//photos upload 
function addPhotoField() {
    console.log('Esta funcionando!')

    //pegar o container de fotos # images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-upload
    const fildsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fildsContainer[fildsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}
//Delete field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//Select yes or not
function toggleSelect(event) {

    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    //colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //pegar o botão clicado
    input.value = button.dataset.value
}
