let date_finale = new Date("Jul 20, 2022 8:00:00").getTime();

let every_second = setInterval(function() {

    let date_actuelle = new Date().getTime();

    let distance = date_finale - date_actuelle;

    console.log(distance);

    let jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    let heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("jour").innerHTML = jours + " jours";

    document.getElementById("heures").innerHTML = heures + " Heures";

    document.getElementById("minutes").innerHTML = minutes + " Minutes";

    document.getElementById("secondes").innerHTML = secondes + " Secondes";

}, 1000);
