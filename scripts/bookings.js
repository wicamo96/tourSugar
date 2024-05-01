// Import functions that return a copy of the bands, bookings, and venues array
import { getBands, getBookings, getVenues } from "./database.js";

// Invoke functions that return a copy of the bands and venues array
const bands = getBands();
const venues = getVenues();



document.addEventListener("click", (click) => {
    // Store info about what was clicked
    const clickTarget = click.target;

    // Check if the data type is booking
    if (clickTarget.dataset.type === "booking") {
        // Find the band from the band array that matches the id stored in the dataset of what was clicked
        const band = bands.find(band => band.id === parseInt(clickTarget.dataset.id));

        // Create a message including band name, genre, founding year, and number of members
        window.alert(`${band.name}
${band.genre}
Formed in ${band.yearFounded}
${band.numOfMembers} band members`);
    }
})



export const bookings = () => {
    // Declare a variable to begin storing the html formatted data
    let htmlString = `<ul>`;

    // Invoke and store bookings array in a variable
    const bookings = getBookings();

    // Iterate through the bands array
    for (const band of bands) {
        // Iterate through the bookings array
        for (const booking of bookings) {
            // Compare booking ids for the band and the current booking to extract further info
            if (band.bookingId === booking.id) {
                // Find the venue id that matches with the venueId for the booking of the current band
                const venue = venues.find(venue => venue.id === booking.venueId);

                // Create the string that displays where and when the current band is playing
                htmlString += `<li data-type="booking" data-id="${band.id}">${band.name} are playing at ${venue.name} on ${booking.date}</li>`;
            }
        }
    }

    // Close the unordered list
    htmlString += `</ul>`;

    // Return the html
    return htmlString;
}