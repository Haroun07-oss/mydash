import { horloge } from "./horloge.js";
import { meteo } from "./meteo.js";
import { todo } from "./todo.js";

horloge()
meteo()
todo()



//setInterval(() => {
//const watchId = navigator.geolocation.watchPosition((position) => {
    //console.log("Nouvelle position :", position.coords.latitude, position.coords.longitude);
//});

// Pour arrêter de suivre l'utilisateur plus tard :
// navigator.geolocation.clearWatch(watchId);
//}, 1000);

//pour la météo
// On déclare les variables pour pouvoir les réutiliser ailleurs si besoin

let utilisateur = prompt('Entrez votre nom');

document.cookie= `utilisateur=${utilisateur};expires =${new Date(2026,11,17).toUTCString()}`

const btntheme = document.getElementById('theme-toggle');

btntheme.addEventListener('click', function(){

});
