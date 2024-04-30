// Import function that returns a copy of the bands, bookings, and venues array
import { getBands, getBookings, getVenues } from "./database.js";

//Invoke functions returning bands and bookings array
const bands = getBands();
const bookings = getBookings();



// Define a click event listener that displays info on which bands are playing at the venue that was clicked
document.addEventListener("click", (click) => {
    // Store info about the item that was clicked
    const clickTarget = click.target;


    if (clickTarget.dataset.type === "venue") {

        // Declare an array to store bands that booked the venue clicked
        let bandList = [];

        
        // Iterate through the bookings array to compare the venueId
        for (const booking of bookings) {
            // check if the booking.venueId is equal to the id of the venue that was clicked
            if (booking.venueId === parseInt(clickTarget.dataset.id)) {

                // Iterate through bands array
                for (const band of bands) {
                
                    // Compare each bookingId in the bands array as its iterated with the id of the booking
                    if (booking.id === band.bookingId) {
    
                        // This band booked the venue, add to the bandList array to be used to provide a message below
                        bandList.push(band.name);
    
                    }
                }
            }
        }
        // Checking if there are no bands that booked the venue and providing the proper message if so
        if (bandList.length === 0) {
            window.alert(`No bands are playing at ${clickTarget.innerHTML}`)
        }
        // Else bands did book the venue and a formatted message will be produced below
        else {
            // Declare a message variable to begin building a message to be displayed
            let message = ""

            // Declare a counter variable that allows for proper flow through the if, else if, ..., else statements to format the bands
            let counter = 0

            // Iterate through the bandList array to begin making the message
            for (const band of bandList) {
                // Checks if this band is the last where at least 3 bands are booked for the venue
                if (counter === bandList.length - 1 && counter !== 0 && bandList.length >= 3) {
                    message += `, and ${band}`
                }
                // Checks if this band is the last where there are only 2 bands booked for the venue
                else if (counter === bandList.length - 1 && counter !== 0) {
                    message += ` and ${band}`
                }
                // Checks if this is the second through second to last band that booked the venue
                else if (counter < bandList.length - 1 && counter > 0) {
                    message += `, ${band}`
                    counter++
                }
                // Otherwise this is the first band and add to the message variable with no formatting
                else {
                    message += band
                    counter++
                }              
            }
            // Display the formatted info
            window.alert(`${message} have booked ${clickTarget.innerHTML}`);
        }
    }
})



// Define and export a function that takes the returns venue names formatted to be displayed on the html page
export const venues = () => {

    // Begin building an unordered list to store formatted info in the htmlString variable
    let htmlString = `<ul>`;

    // Invoke function that returns a copy of the venues array and store in venues variable
    const venues = getVenues();

    // Iterate through venues array to extract venue names and add to the unordered list
    for (const venue of venues) {
        htmlString += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`;
    }

    // Close the unordered list
    htmlString += `</ul>`;

    return htmlString;
}