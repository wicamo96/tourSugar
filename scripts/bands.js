// Import function that returns a copy of the bands, bookings, and venues array
import { getBands, getBookings, getVenues } from "./database.js";

// Invoke the methods returning booking and venue arrays to be used by the event listener
const bookings = getBookings();
const venues = getVenues();


// Add an event listener that displays the venues that the band is playing
document.addEventListener("click", (click) => {
    // Stores info about what was clicked
    const clickTarget = click.target;

    // Test if the clicked item is a band
    if (clickTarget.dataset.type === "band") {
        
        // Iterate through the bookings array to get venueId from the bookingId
        for (const booking of bookings) {
            
            // Compare the bookingId of the band that was clicked to the bookingId from the bookings array
            if (parseInt(clickTarget.dataset.bookingid) === booking.id) {
                
                // Use the .find array method to find the venue info by matching up venueId to the venueId associated with the booking
                const venue = venues.find(venue => venue.id === booking.venueId);

                // Display a message about which venue the band you clicked on is playing
                window.alert(`${clickTarget.innerHTML} are playing at ${venue.name}`);
            }
        }

    }

})



// Define and export a function that formats the info from the bands array to be displayed on the html page
export const bands = () => {
    // Declare a variable to begin storing formatted band info
    let htmlString = "<ul>";

    // Invoke getBands to store the bands array in a variable
    const bands = getBands();

    // Iterate through the bands array to get band name
    for (const band of bands) {
        htmlString += `<li data-type="band" data-bookingid="${band.bookingId}">${band.name}</li>`;
    }

    // Close the unordered list
    htmlString += "</ul>";

    // Return the info to be used in main.js
    return htmlString;
}
