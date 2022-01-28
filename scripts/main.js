
import { area } from "./areas.js"
import { guests } from "./guests.js"

    //Center: main div. 
        //Aligned left: three columns, two rows
            //Each div represents an area
                //UL services
                //location

        //Aligned right: guests

    //Bottom: contact information
        //email, phone, address

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="mainContainer">
<article class="title-container">
    <h1 id="title">Cider Falls</h1>
    <div id="logo"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJw8DmDrojGH7deBRCZH4l05-pVCuyJ9Jk9lew%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1"></img></div> 
</article>
<article class="park-sections-container">
    <section class="park-sections">
    ${area()}
    </section>
    <section class="guest-list">
    ${guests()}
    </section>
</article>

<article class="contact">
    (281)330-8004<br>
    theArsonistHadOddlyShapedFeet@hotmail.com <br>
    4029 Brick Church Pike, 
    Nashville, TN
</article>
</article>
`

mainContainer.innerHTML = applicationHTML