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