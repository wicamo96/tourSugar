// Import function that returns band info formatted for display in index.html
import { bands } from "./bands.js";

// Import function that returns venue info formatted for display in index.html
import { venues } from "./venues.js";

// Grab the location for where the html info will be inserted and store in the htmlInsert variable
const htmlInsert = document.querySelector("#container");

const allHTMLInsert = `<h1>Tour Some Sugar On Me</h1>
<article>
    <section>
    </section>
</article>
<article class="container">
    <section id="venueList">
        <h2>Venues</h2>
        ${venues()}
    </section>
    <section id="bandList">
        <h2>Bands</h2>
        ${bands()}
    </section>
</article>`


htmlInsert.innerHTML = allHTMLInsert;