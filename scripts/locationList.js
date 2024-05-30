import { database } from './fishData.js';

export const locationList = () => {
    // Generate an HTML representation of each location
    let locationHTML = '';

    // Access the locations array from the database
    const locationArray = database.locations;

    for (const location of locationArray) {
        locationHTML += `
        <article class="locations">
            <section class="location">
                <div class="location__details">
                    <h2 class="location__name">${location.name}</h2>
                    <p class="location__description">${location.description}</p>
                </div>
            </section>
        </article>`
    }

    return locationHTML;
};