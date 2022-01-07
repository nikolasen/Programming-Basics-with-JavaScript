function petShop(input) {
    let dogs = input[0];
    let animals = input[1];
    let moneyForDogs = dogs * 2.50;
    let moneyForAnimals = animals * 4;
    let sum = moneyForDogs + moneyForAnimals; 
    console.log(`${sum}`);
}
petShop();