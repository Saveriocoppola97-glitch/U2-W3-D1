class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  owner = function (otherPet) {
    return this.ownerName === otherPet.ownerName;
  };
}

const form = document.getElementById("petForm");
const container = document.getElementById("allP");

let lastPet = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = document.getElementById("nameP").value;
  const ownerName = document.getElementById("owner").value;
  const species = document.getElementById("speciesP").value;
  const breed = document.getElementById("breedP").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const p = document.createElement("p");
  p.textContent = `${petName} (${species}, ${breed}) -Padrone: ${ownerName}`;

  if (lastPet && newPet.owner(lastPet)) {
    p.textContent += " → stesso padrone";
  }

  container.appendChild(p);

  lastPet = newPet;

  form.reset();
});
