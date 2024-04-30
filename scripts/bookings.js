// Import functions that return a copy of the bands, bookings, and venues array
import { getBands, getBookings, getVenues } from "./database.js";

// Invoke functions that return a copy of the bands and venues array
const bands = getBands();
const venues = getVenues();



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
                htmlString += `<li>${band.name} are playing at ${venue.name} on ${booking.date}</li>`;
            }
        }
    }

    // Close the unordered list
    htmlString += `</ul>`;

    // Return the html
    return htmlString;
}