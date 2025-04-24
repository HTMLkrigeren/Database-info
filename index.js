var ansatte = [
    {
        ansattId: 1,
        forNavn: "Los",
        etterNavn: "Pollos",
        stilling: "Prosjekt leder",
        ferdigheter: "bla bla bla ble ble ble blu blu blu, habababbababalululululubu",
        bilde: "./bilder/don pollo.jpg",
        hjemmeMobil: "838193210932109",
        jobbMobil: "3198u135893485432109",
    },
    {
        ansattId: 2,
        forNavn: "Eik",
        etterNavn: "Dedekam",
        stilling: "vaktmester",
        ferdigheter: "Gamer, billiard bord, slapp, jobbet på kiwi, skummelt spill og dysleksi",
        bilde: "./bilder/eik_dedekam.avif",
        hjemmeMobil: "838193210932109",
        jobbMobil: "3198u135893485432109",
    },
    {
        ansattId: 3,
        forNavn: "Kobralim",
        etterNavn: "Salabin",
        stilling: "Manager",
        ferdigheter: "jfsoijfejfdsojfndsoingfdoinfdoinbfdoinbjfdnboifdnoidnbi",
        bilde: "./bilder/kobralim.jpg",
        hjemmeMobil: "838193210932109",
        jobbMobil: "3198u135893485432109",
    },
    {
        ansattId: 4,
        forNavn: "Harribo",
        etterNavn: "Snekerbod",
        stilling: "Lærling",
        ferdigheter: "fdsfdsfdsgdsgds",
        bilde: "./bilder/house.webp",
        hjemmeMobil: "838193210932109",
        jobbMobil: "3198u135893485432109",
    },
    {
        ansattId: 5,
        forNavn: "Idun",
        etterNavn: "Tomatketsjup",
        stilling: "Manager",
        ferdigheter: "fkdpogkfdokgpofdkgpofdgpodkfkpokf",
        bilde: "./bilder/brit.jpg",
        hjemmeMobil: "838193210932109",
        jobbMobil: "3198u135893485432109",
    },
];

document.getElementById("btn").addEventListener("click", function () {
    let inpt = document.getElementById("søk").value.trim().toLowerCase();

    document.getElementById("info").innerHTML = '';
    document.getElementById("tekstInfo").innerHTML = '';
    document.getElementById("feilMelding").innerHTML = '';

    let funnet = false;

    ansatte.forEach(element => {

        if (
            inpt === element.forNavn.toLowerCase() ||
            inpt === element.etterNavn.toLowerCase() ||
            inpt === element.forNavn.toLowerCase() + " " + element.etterNavn.toLowerCase()
        ) {
            funnet = true;

            console.log(element.ansattId);
            
            let bilde = document.createElement("img");
            bilde.src = element.bilde;
            document.getElementById("info").append(bilde);

            let overSkrift = document.createElement("h1");
            overSkrift.textContent = element.forNavn + " " + element.etterNavn;
            document.getElementById("tekstInfo").append(overSkrift);

            let info = document.createElement("p");
            info.textContent = element.ferdigheter;
            document.getElementById("tekstInfo").append(info);

            let stilling = document.createElement("h5");
            stilling.textContent = "Stilling; " + element.stilling;
            document.getElementById("tekstInfo").append(stilling);

            let mobilHjemme = document.createElement("h6");
            mobilHjemme.textContent = "Privat telefon nummer; " + element.hjemmeMobil;
            document.getElementById("tekstInfo").append(mobilHjemme);

            let jobbMobil = document.createElement("h6");
            jobbMobil.textContent = "Jobb telefon nummer; " + element.jobbMobil;
            document.getElementById("tekstInfo").append(jobbMobil);
        }
    });

    if (!funnet) {
        let feilMelding = document.createElement("p");
        feilMelding.textContent = "Denne personen eksisterer ikke, sjekk om navnet er skrevet riktig.";
        document.getElementById("feilMelding").append(feilMelding);
    }
});