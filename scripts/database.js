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
    bandMembers: [
        {
            id: 1,
            bandId: 1,
            firstName: "Andy",
            lastName: "Hall",
            birthYear: 1970,
            instrument: "Dobro"
        },
        {
            id: 2,
            bandId: 1,
            firstName: "Andy",
            lastName: "Falco",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 3,
            bandId: 1,
            firstName: "Chris",
            lastName: "Pandolfi",
            birthYear: 1970,
            instrument: "Banjo"
        },
        {
            id: 4,
            bandId: 1,
            firstName: "Jeremy",
            lastName: "Garrett",
            birthYear: 1970,
            instrument: "Fiddle"
        },
        {
            id: 5,
            bandId: 1,
            firstName: "Travis",
            lastName: "Book",
            birthYear: 1970,
            instrument: "Double Bass"
        },
        {
            id: 6,
            bandId: 2,
            firstName: "Marcus",
            lastName: "King",
            birthYear: 1970,
            instrument: "Vocals and Guitar"
        },
        {
            id: 7,
            bandId: 2,
            firstName: "Jack",
            lastName: "Ryan",
            birthYear: 1970,
            instrument: "Drums"
        },
        {
            id: 8,
            bandId: 2,
            firstName: "Stephen",
            lastName: "Campbell",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 9,
            bandId: 2,
            firstName: "Drew",
            lastName: "Smithers",
            birthYear: 1970,
            instrument: "guitar"
        },
        {
            id: 10,
            bandId: 3,
            firstName: "Austin",
            lastName: "Bohlman",
            birthYear: 1970,
            instrument: "Drums"
        },
        {
            id: 11,
            bandId: 3,
            firstName: "Ian",
            lastName: "Mcdonald",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 12,
            bandId: 3,
            firstName: "Kelly",
            lastName: "Finnigan",
            birthYear: 1970,
            instrument: "Vocals and Keyboard"
        },
        {
            id: 13,
            bandId: 3,
            firstName: "Myles",
            lastName: "O'Mahony",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 14,
            bandId: 4,
            firstName: "Anderson",
            lastName: ".Paak",
            birthYear: 1970,
            instrument: "Vocals and Drums"
        },
        {
            id: 15,
            bandId: 4,
            firstName: "Jose",
            lastName: "Rios",
            birthYear: 1970,
            instrument: "Guitar and Backing Vocals"
        },
        {
            id: 16,
            bandId: 4,
            firstName: "Ron",
            lastName: "Avant",
            birthYear: 1970,
            instrument: "Keyboard"
        },
        {
            id: 17,
            bandId: 4,
            firstName: "Kelsey",
            lastName: "Gonzalez",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 18,
            bandId: 4,
            firstName: "Callum",
            lastName: "Connor",
            birthYear: 1970,
            instrument: "DJ"
        },
        {
            id: 19,
            bandId: 5,
            firstName: "Sharon",
            lastName: "Jones",
            birthYear: 1970,
            instrument: "Vocals"
        },
        {
            id: 20,
            bandId: 5,
            firstName: "Binky",
            lastName: "Griptite",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 21,
            bandId: 5,
            firstName: "Gabriel",
            lastName: "Roth",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 22,
            bandId: 5,
            firstName: "Fernando",
            lastName: "Velez",
            birthYear: 1970,
            instrument: "Conga"
        },
        {
            id: 23,
            bandId: 5,
            firstName: "Homer",
            lastName: "Steinweiss",
            birthYear: 1970,
            instrument: "Drums"
        },
        {
            id: 24,
            bandId: 5,
            firstName: "Dave",
            lastName: "Guy",
            birthYear: 1970,
            instrument: "Trumpet"
        },
        {
            id: 25,
            bandId: 5,
            firstName: "Neal",
            lastName: "Sugarman",
            birthYear: 1970,
            instrument: "Tenor Saxophone"
        },
        {
            id: 26,
            bandId: 5,
            firstName: "Joe",
            lastName: "Crispiano",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 27,
            bandId: 5,
            firstName: "Cochemea",
            lastName: "Gastelum",
            birthYear: 1970,
            instrument: "Alto Saxophone"
        },
        {
            id: 28,
            bandId: 5,
            firstName: "Thomas",
            lastName: "Brenneck",
            birthYear: 1970,
            instrument: "Piano"
        },
        {
            id: 29,
            bandId: 5,
            firstName: "Ian",
            lastName: "Hendrickson-Smith",
            birthYear: 1970,
            instrument: "Baritone Saxophone"
        },
        {
            id: 30,
            bandId: 6,
            firstName: "Michael",
            lastName: "Bont",
            birthYear: 1970,
            instrument: "Banjo"
        },
        {
            id: 31,
            bandId: 6,
            firstName: "Dave",
            lastName: "Bruzza",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 32,
            bandId: 6,
            firstName: "Paul",
            lastName: "Hoffman",
            birthYear: 1970,
            instrument: "Mandolin"
        },
        {
            id: 33,
            bandId: 6,
            firstName: "Mike",
            lastName: "Devol",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 34,
            bandId: 6,
            firstName: "Anders",
            lastName: "Beck",
            birthYear: 1970,
            instrument: "Dobro"
        },
        {
            id: 35,
            bandId: 7,
            firstName: "Dan",
            lastName: "Auerbach",
            birthYear: 1970,
            instrument: "Vocals and Guitar"
        },
        {
            id: 36,
            bandId: 7,
            firstName: "Patrick",
            lastName: "Carney",
            birthYear: 1970,
            instrument: "Drums"
        },
        {
            id: 37,
            bandId: 8,
            firstName: "Chris",
            lastName: "Stapleton",
            birthYear: 1970,
            instrument: "Vocals and Guitar"
        },
        {
            id: 38,
            bandId: 8,
            firstName: "Tammy",
            lastName: "Rogers",
            birthYear: 1970,
            instrument: "Fiddle"
        },
        {
            id: 39,
            bandId: 8,
            firstName: "Mike",
            lastName: "Fleming",
            birthYear: 1970,
            instrument: "Bass"
        },
        {
            id: 40,
            bandId: 8,
            firstName: "Matt",
            lastName: "Dame",
            birthYear: 1970,
            instrument: "Guitar and Vocals"
        },
        {
            id: 41,
            bandId: 8,
            firstName: "Brent",
            lastName: "Truitt",
            birthYear: 1970,
            instrument: "Mandolin"
        },
        {
            id: 42,
            bandId: 8,
            firstName: "Richard",
            lastName: "Bailey",
            birthYear: 1970,
            instrument: "Banjo"
        },
        {
            id: 43,
            bandId: 9,
            firstName: "Shawn",
            lastName: "Swain",
            birthYear: 1970,
            instrument: "Mandolin"
        },
        {
            id: 44,
            bandId: 9,
            firstName: "Torrin",
            lastName: "Daniels",
            birthYear: 1970,
            instrument: "Banjo"
        },
        {
            id: 45,
            bandId: 9,
            firstName: "Joe",
            lastName: "Funk",
            birthYear: 1970,
            instrument: "Upright Bass"
        },
        {
            id: 46,
            bandId: 9,
            firstName: "Max",
            lastName: "Davies",
            birthYear: 1970,
            instrument: "Guitar"
        },
        {
            id: 47,
            bandId: 10,
            firstName: "Sarah",
            lastName: "Barthel",
            birthYear: 1970,
            instrument: "Vocals and Instrumentals"
        },
        {
            id: 48,
            bandId: 10,
            firstName: "Josh",
            lastName: "Carter",
            birthYear: 1970,
            instrument: "Vocals and Instrumentals"
        },
        {
            id: 49,
            bandId: 11,
            firstName: "Josh",
            lastName: "Lloyd-Watson",
            birthYear: 1970,
            instrument: "Producer"
        },
        {
            id: 50,
            bandId: 11,
            firstName: "Tom",
            lastName: "McFarland",
            birthYear: 1970,
            instrument: "Producer"
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