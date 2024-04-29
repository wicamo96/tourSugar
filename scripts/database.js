const database = {
    bands: [
        {
            id: 1,
            bookingId: 3,
            name: "Infamous Stringdusters",
            numOfMembers: 5,
            genre: "Bluegrass",
            yearFounded: 2006
        },
        {
            id: 2,
            bookingId: 1,
            name: "Marcus King Band",
            numOfMembers: 6,
            genre: "Blues",
            yearFounded: 2013
        },
        {
            id: 3,
            bookingId: 2,
            name: "Monophonics",
            numOfMembers: 4,
            genre: "Psychedelic Soul",
            yearFounded: 2005
        },
        {
            id: 4,
            bookingId: 2,
            name: "Anderson .Paak & The Free Nationals",
            numOfMembers: 4,
            genre: "R&B",
            yearFounded: 2010
        },
        {
            id: 5,
            bookingId: 4,
            name: "Sharon Jones & The Dap-Kings",
            numOfMembers: 11,
            genre: "Funk/Soul",
            yearFounded: 1996
        },
        {
            id: 6,
            bookingId: 5,
            name: "Greensky Bluegrass",
            numOfMembers: 5,
            genre: "Jamgrass",
            yearFounded: 2000
        },
        {
            id: 7,
            bookingId: 6,
            name: "The Black Keys",
            numOfMembers: 2,
            genre: "Garage Rock",
            yearFounded: 2001
        },
        {
            id: 8,
            bookingId: 7,
            name: "The Steeldrivers",
            numOfMembers: 5,
            genre: "Bluegrass",
            yearFounded: 2005
        },
        {
            id: 9,
            bookingId: 8,
            name: "Kitchen Dwellers",
            numOfMembers: 4,
            genre: "Galaxy Grass",
            yearFounded: 2010
        },
        {
            id: 10,
            bookingId: 9,
            name: "Phantogram",
            numOfMembers: 2,
            genre: "Electronic Rock",
            yearFounded: 2007
        },
        {
            id: 11,
            bookingId: 9,
            name: 'Jungle',
            numOfMembers: 2,
            genre: "Neo Soul",
            yearFounded: 2013
        }
    ],
    bookings: [
        {
            id: 1,
            date: "05/03/2024",
            venueId: 1
        },
        {
            id: 2,
            date: "05/03/2024",
            venueId: 2 
        },
        {
            id: 3,
            date: "05/03/2024",
            venueId: 3
        },
        {
            id: 4,
            date: "05/03/2024",
            venueId: 4
        },
        {
            id: 5,
            date: "05/04/2024",
            venueId: 1
        },
        {
            id: 6,
            date: "05/04/2024",
            venueId: 2
        },
        {
            id: 7,
            date: "05/04/2024",
            venueId: 3
        },
        {
            id: 8,
            date: "05/04/2024",
            venueId: 4
        },
        {
            id: 9,
            date: "05/04/2024",
            venueId: 5
        }
    ],
    venues: [
        {
            id: 1,
            name: "The National",
            address: "708 E Broad St, Richmond, VA 23219",
            squareFootage: 30000,
            maximumOccupancy: 1500
        },
        {
            id: 2,
            name: "The Southern Cafe & Music Hall",
            address: "103 1st St s, Charlottesville, VA 22902",
            squareFootage: 3000,
            maximumOccupancy: 300
        },
        {
            id: 3,
            name: "The Paramount Theater",
            address: "215 E Main St, Charlottesville, VA 22902",
            squareFootage: 25000,
            maximumOccupancy: 1100
        },
        {
            id: 4,
            name: "The Anthem",
            address: "901 Wharf Street SW, Washington, DC 20024",
            squareFootage: 57000,
            maximumOccupancy: 6000
        },
        {
            id: 5,
            name: "The Orange Peel",
            address: "101 Biltmore Ave, Asheville, NC 28801",
            squareFootage: 23000,
            maximumOccupancy: 1050
        }
    ]
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}));
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}));
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}));
}