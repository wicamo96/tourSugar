// Import function that returns a copy of the bands array
import { getBands } from "./database.js";

// Define and export a function that formats the info from the bands array to be displayed on the html page
export const bands = () => {
    // Declare a variable to begin storing formatted band info
    let htmlString = "<ul>";

    // Invoke getBands to store the bands array in a variable
    const bands = getBands();

    // Iterate through the bands array to get band name
    for (const band of bands) {
        htmlString += `<li>${band.name}</li>`;
    }

    // Close the unordered list
    htmlString += "</ul>";

    // Return the info to be used in main.js
    return htmlString;
}
