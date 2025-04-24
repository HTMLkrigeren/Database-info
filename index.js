
var ansatte = [
    {
        ansattId: 1,
        forNavn: "Los",
        etterNavn: "Pollos",
        stilling: "Prosjekt leder",
        ferdigheter: "bla bla bla ble ble ble blu blu blu, habababbababalululululubu",
        bilde: "./bilder/don pollo.jpg"
    },
    {
        ansattId: 2,
        forNavn: "Eik",
        etterNavn: "Dedekam",
        stilling: "vaktmester",
        ferdigheter: "Gamer, billiard bord, slapp, jobbet på kiwi, skummelt spill og dysleksi",
        bilde: "./bilder/eik_dedekam.avif"
    },
    {
        ansattId: 3,
        forNavn: "Kobralim",
        etterNavn: "Salabin",
        stilling: "Manager",
        ferdigheter: "jfsoijfejfdsojfndsoingfdoinfdoinbfdoinbjfdnboifdnoidnbi",
        bilde: "./bilder/kobralim.jpg"
    },
    {
        ansattId: 4,
        forNavn: "Harribo",
        etterNavn: "Snekerbod",
        stilling: "Lærling",
        ferdigheter: "fdsfdsfdsgdsgds",
        bilde: "./bilder/house.webp"
    },
    {
        ansattId: 5,
        forNavn: "Idun",
        etterNavn: "Tomatketsjup",
        stilling: "Manager",
        ferdigheter: "fkdpogkfdokgpofdkgpofdgpodkfkpokf",
        bilde: "./bilder/brit.jpg"
    },
];

ansatte.forEach(element => {
    document.getElementById("btn").addEventListener("click", function () {
        let inpt = document.getElementById("søk").value;

        if (inpt.toLowerCase() === element.forNavn.toLowerCase() || inpt.toLowerCase() === element.etterNavn.toLowerCase() || inpt.toLowerCase() === element.forNavn.toLowerCase() + " " + element.etterNavn.toLowerCase()) {
            console.log(element.forNavn + " " + element.etterNavn);
            document.getElementById("info").innerHTML = '';
            document.getElementById("tekstInfo").innerHTML = '';

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
            
        }
    })
   
})
