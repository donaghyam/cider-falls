//Define variable to store imported guests array

import { getGuests } from "./database.js"

const guestsArray = getGuests()



//Function to list guests
export const guests = () => {
    //Create empty html ul variable
    let hmtlGuests = `<ul id="guest-list"><h2>Park Guests</h2>`
        //Iterate through guests
        for (const currentGuest of guestsArray) {
            //Add firstName and lastName li to html ul variable
            hmtlGuests += `<li>${currentGuest.firstName} ${currentGuest.lastName}`
    }
    hmtlGuests += "</ul>"
    return hmtlGuests
}

