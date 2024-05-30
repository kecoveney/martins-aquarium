import { database } from './fishData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';

     // Access the fish array from the database
     const fishArray = database.fish;

    for (const fish of fishArray) {
        fishHTML += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name} image" class="fish_image">
            <div class="fish__details">
                    <h2 class="fish__name">${fish.name}</h2>
                    <p class="fish_species">${fish.species}</p>
                    <p class="fish_length">${fish.length}</p>
                    <p class="fish_location">${fish.location}</p>
                    <p class="fish_diet">${fish.diet}</p>
                </div>
            </article>`
            
        
        
    }   
    return fishHTML
};

// Function to filter fish that are multiples of 3 in length
export const mostHolyFish = (fishArray) => {
    const holyFish = fishArray.filter(fish => fish.length % 3 === 0);
    return holyFish;
}

// Function to filter fish that are multiples of 5 in length
export const soldierFish = (fishArray) => {
    const soldierFish = fishArray.filter(fish => fish.length % 5 === 0);
    return soldierFish;
}

// Function to filter fish that are neither multiples of 3 nor 5 in length
export const regularFish = (fishArray) => {
    const regularFish = fishArray.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0);
    return regularFish;
}