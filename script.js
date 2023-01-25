var langue = "francais";

function changer_langue() {
    if (langue == "francais"){
        anglais()
    }
    else {
        francais()
    }
}

function anglais() {
    //navbar
    document.getElementById('navbar_acceuil').innerHTML = "Home";
    document.getElementById('navbar_presentation').innerHTML = "Presentation";
    document.getElementById('navbar_portfolio').innerHTML = "Our builds";
    document.getElementById('navbar_contact').innerHTML = "Contact";
    document.getElementById('changer_langue').innerHTML = "Francais";
    //section 1
    document.getElementById('sous_titre').innerHTML = "The Minecraft building team";
    document.getElementById('presentation_titre').innerHTML = "Presentation";
    document.getElementById('presentation_texte').innerHTML = "We are a french Minecraft building team created the 1st january 2023 with the objective to create big community projects.";
    document.getElementById('notre_equipe').innerHTML = "Our team";
    document.getElementById('portfolio').innerHTML = "Our builds";
    langue = "anglais"
}

function francais() {
    //navbar
    document.getElementById('navbar_acceuil').innerHTML = "Accueil";
    document.getElementById('navbar_presentation').innerHTML = "Presentation";
    document.getElementById('navbar_portfolio').innerHTML = "Nos constructions";
    document.getElementById('navbar_contact').innerHTML = "Contact";
    document.getElementById('changer_langue').innerHTML = "Anglais";
    //sections
    document.getElementById('sous_titre').innerHTML = "La team de build Minecraft";
    document.getElementById('presentation_titre').innerHTML = "Présentation";
    document.getElementById('presentation_texte').innerHTML = "Nous sommes une équipe de construction francaise fondée le 1 janvier 2023 sur Minecraft ayant comme objectif de réaliser de grands projets communautaires.";
    document.getElementById('notre_equipe').innerHTML = "Notre équipe";
    document.getElementById('portfolio').innerHTML = "Nos constructions";
    langue = "francais"
}
