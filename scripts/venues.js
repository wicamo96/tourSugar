// Import function that returns a copy of the venues array
import { getVenues } from "./database.js";



// Define and export a function that takes the returns venue names formatted to be displayed on the html page
export const venues = () => {

    // Begin building an unordered list to store formatted info in the htmlString variable
    let htmlString = `<ul>`;

    // Invoke function that returns a copy of the venues array and store in venues variable
    const venues = getVenues();

    // Iterate through venues array to extract venue names and add to the unordered list
    for (const venue of venues) {
        htmlString += `<li>${venue.name}</li>`;
    }

    // Close the unordered list
    htmlString += `</ul>`;

    return htmlString;
}