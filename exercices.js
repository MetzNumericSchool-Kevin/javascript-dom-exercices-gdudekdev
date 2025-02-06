// Quel est le titre de la boutique?

const titreBoutique=document.querySelector("h1");
const nomBoutique=titreBoutique.textContent;

console.log(nomBoutique);

//Des informations manquent !

const paragrapheBienvenue = document.querySelector("#description_boutique");
const nouveauParagraphe =document.createElement("p");

nouveauParagraphe.textContent="Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
paragrapheBienvenue.appendChild(nouveauParagraphe);


//Roger, enfoiré !

const jaloux = titreBoutique.querySelector("span");
jaloux.remove();

// Archibald n'est pas là, appelons le !

const bouttonCall= document.querySelector("#call_archibald");

bouttonCall.addEventListener("click", ()=>{
    alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});


// Faisons un peu de magie

const boites = document.querySelector("#boites_magique");
const boutonRouge = document.querySelector("#btn_change_red");
const boutonBleu = document.querySelector("#btn_change_blue")
const boutonVert = document.querySelector("#btn_change_green")

boutonRouge.addEventListener("click",()=>{
    boites.children[0].style.backgroundColor="red"
})
boutonBleu.addEventListener("click",()=>{
    boites.children[0].style.backgroundColor="blue"
    boites.children[1].style.backgroundColor="blue"
})
boutonVert.addEventListener("click",()=>{
    for (let i = 0; i < boites.children.length; i++) {
        boites.children[i].style.backgroundColor = "green";
    }
})

// Aventurier, voici ma boutique!

const listPotions = document.querySelector("#liste_potions");
const potionTemplate = document.querySelector("#template_potion");
const newPotion = potionTemplate.content.cloneNode(true);
const potions = [
    {
      nom: "Potion de soin",
      description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
      prix: 10,
    },
    {
      nom: "Potion de sommeil",
      description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
      prix: 50,
    },
  ];

  potions.forEach(potion => {
    const newPotion = potionTemplate.content.cloneNode(true); // Clone inside the loop
    console.log(potion)
    const nomPotion = newPotion.querySelector(".nom_potion");
    const prixPotion = newPotion.querySelector(".prix_potion");
    const descPotion = newPotion.querySelector(".description_potion");

    if (nomPotion) {
      nomPotion.textContent = potion['nom'];
    } else {
      console.warn(".nom_potion not found in template");
    }

    if (prixPotion) {
      prixPotion.textContent = potion['prix'];
    } else {
      console.warn(".prix_potion not found in template");
    }

    if (descPotion) {
      descPotion.textContent = potion['description'];
    } else {
      console.warn(".description_potion not found in template");
    }

    listPotions.appendChild(newPotion);
  });