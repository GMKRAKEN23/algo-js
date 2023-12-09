function pickLearners(InputAr, n) {

    if (n > 0 && n < InputAr.length) {

      let learnersSelectioned = [];

      for (let i = 0; i < n; i++) {
        let indexAleatoire = Math.floor(Math.random() * InputAr.length);
        learnersSelectioned.push(InputAr[indexAleatoire]);
      }
  
      return learnersSelectioned;
    }
}

let tabLearners = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

let learnersSelectioned = pickLearners(tabLearners, 5);

console.log("Apprenants sélectionnés aléatoirement :", learnersSelectioned);