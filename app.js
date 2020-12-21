//Get btn
const btnGet = document.getElementById('btn-get');
const output = document.getElementById('output');
//Event Listeners
btnGet.addEventListener('click', getPic);
//Functions
function getPic(){
    fetch('https://foodish-api.herokuapp.com/api/')
    .then((res) => res.json())
    .then((res) => {
        let imageLink = res.image;
        let getImage =  `<img class="image-content" src="${imageLink}">`;
        output.innerHTML = getImage;
    });
}
