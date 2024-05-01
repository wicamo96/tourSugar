// Import function that returns a copy of the bands, bookings, and venues array
import { getBands, getBookings, getVenues, getMembers } from "./database.js";

// Invoke the methods returning band, booking, venue, and member arrays to be used by the event listener
const bandsArray = getBands();
const bookings = getBookings();
const venues = getVenues();
const members = getMembers();


// Add an event listener that displays the venues that the band is playing
document.addEventListener("click", (click) => {
    // Stores info about what was clicked
    const clickTarget = click.target;

    // Test if the clicked item is a band
    if (clickTarget.dataset.type === "band") {

        // Declare an empty array to hold info about members of the band that was clicked
        let memberList = [];

        // Find the info about the band that was clicked from the bandsArray using the .find method and comparing the name in the clickTarget innerText property to names in the bandsArray
        const band = bandsArray.find(band => band.name === clickTarget.innerText)

        // Iterate through the members array
        for (const member of members) {
            // Compare bandId assigned to the current member to the id of the band that was clicked
            if (member.bandId === band.id) {
                // Member is a part of the band that was clicked, add their info to the memberList array
                memberList.push(member);
            }
        }

        // Declare a variable to hold the formatted message about band members
        let message = ""

        // Iterate through the memberList array
        for (const member of memberList) {
// Add the member's first name, last name, and instrument to the message
message += `${member.firstName} ${member.lastName} (${member.instrument})
`
        }

        // Find the booking associated with the band that was clicked
        const booking = bookings.find(booking => booking.id === band.bookingId);

        // Use the .find array method to find the venue info by matching up venueId to the venueId associated with the booking
        const venue = venues.find(venue => venue.id === booking.venueId);

        // Display a message about what members are part of the band and which venue the band you clicked on is playing
        return window.alert(`${message}
            
Upcoming shows:
${venue.name}`);
    }
})



// Define and export a function that formats the info from the bands array to be displayed on the html page
export const bands = () => {
    // Declare a variable to begin storing formatted band info
    let htmlString = "<ul>";

    // Iterate through the bands array to get band name
    for (const band of bandsArray) {
        htmlString += `<li data-type="band" data-bookingid="${band.bookingId}">${band.name}</li>`;
    }

    // Close the unordered list
    htmlString += "</ul>";

    // Return the info to be used in main.js
    return htmlString;
}
