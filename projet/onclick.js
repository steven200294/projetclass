 // Tableau contenant les chemins des images
 let images = ["pl1.png", "pl2.png", "pl3.png", "pl4.png", "pl5.png", "pl6.png"];

// Fonction pour changer l'image
function changerImage(index) {
  console.log("Fonction changerImage appelée avec l'index : " + index); // Débogage

  // Récupérer l'élément image
  let image = document.getElementById("imageAffichee");
  console.log("Elément image trouvé : ", image); // Débogage

  // Changer la source de l'image en fonction de l'index passé
  image.src = images[index];
  console.log("La source de l'image est changée en : ", image.src); // Débogage
}
    
    