import { fishList } from './fishList.js';
import { tipList } from './tipList.js';
import { locationList } from './locationList.js';
import { mostHolyFish, soldierFish, regularFish } from './fishList.js'; 

document.addEventListener('DOMContentLoaded', () => {
    // Generate the fish list
    const fishHTML = fishList();

    // Generate the care tips   
    const tipHTML = tipList();

    // Generate the location list
    const locationHTML = locationList();

    // Render each HTML string to the correct DOM element
    const fishListRender = document.getElementById('fishListRender');
    if (fishListRender) {
        fishListRender.innerHTML = fishHTML;
    } else {
        console.error('Element with ID "fishListRender" not found.');
    }

    const tipListRender = document.getElementById('tipList');
    if (tipListRender) {
        tipListRender.innerHTML = tipHTML;
    } else {
        console.error('Element with ID "tipList" not found.');
    }

    const locationListRender = document.getElementById('locationList');
    if (locationListRender) {
        locationListRender.innerHTML = locationHTML;
    } else {
        console.error('Element with ID "locationList" not found.');
    }
});

const fishes = [
    { name: "Nemo", length: 3 },
    { name: "Dory", length: 4 },
    { name: "Gurgle", length: 5 },
    // Add more fish objects here
];

// Generate HTML strings for different types of fish
const holyFishHTML = mostHolyFish(fishes).map(fish => `<div>${fish.name}</div>`).join('');
const soldierFishHTML = soldierFish(fishes).map(fish => `<div>${fish.name}</div>`).join('');
const regularFishHTML = regularFish(fishes).map(fish => `<div>${fish.name}</div>`).join('');

// Update the DOM with all three HTML strings
const domReference = document.getElementById('fishListRender'); 
if (domReference) {
    domReference.innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;
} else {
    console.error('Element with ID "fishContainer" not found.');
}
