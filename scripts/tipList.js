import { database } from './fishData.js';
export const tipList = () => {
    // Generate an HTML representation of each fish
    let tipHTML = '';

     // Access the fish array from the database
     const tipArray = database.tips;

    for (const tip  of tipArray) {
        tipHTML += `
        <article class="tip">
            <div class="tip__details">
                    <h2 class="tip_topic">${tip.topic}</h2>
                    <p class="tip_text">${tip.text}</p>
                </div>
            </article>`
            
        
        
    }   
    return tipHTML
};