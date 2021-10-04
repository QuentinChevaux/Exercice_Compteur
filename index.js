let date_finale = new Date("Jul 20, 2022 17:00:00");

let every_second = setInterval(function() {

    let date_actuelle = new Date();

    let distance = date_finale - date_actuelle;

    let jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    let heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((distance % (1000 * 60)) / 1000); 

    document.getElementById("jour").innerHTML = jours + " jours";

    document.getElementById("heures").innerHTML = heures + " Heures";

    document.getElementById("minutes").innerHTML = minutes + " Minutes";

    document.getElementById("secondes").innerHTML = secondes + " Secondes";

}, 500);
