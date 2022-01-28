import { getAreas, getServiceAreas, getServices } from "./database.js";

//Define variable to store imported areas array
export const areasArray = getAreas()

//Define variable to store imported service areas array
const serviceAreaArray = getServiceAreas()

//Define variable to store imported services array
const servicesArray = getServices()



//Function to add service name to serviceAreaArray - parameter of serviceAreas
const addServiceNames = (serviceAreas) => {
    //iterate through serviceAreas
    for (const currentServiceArea of serviceAreas) {
        //iterate through areas array
        for (const currentArea of areasArray) {
            //check if area.id equals parameter.areaId
            if (currentArea.id === currentServiceArea.areaId)
            //if true, iterate through services
            for (const service of servicesArray){
                //check if service.id equals parameter.serviceId
                if (service.id === currentServiceArea.serviceId){
                    //if true, add serviceName key/value for each
                    currentServiceArea.name = service.serviceName
                }
            }
        }
    }
    //Return serviceAreas
    return serviceAreas
}

//Function to list name in html
const areaNames = (areaObject) => {
    //create variable to hold html ul
    let htmlAreaName = ""
        //add curentArea.name to html variable
        htmlAreaName += `<h2 id="${areaObject.location}">${areaObject.name}</h2>`
    return htmlAreaName
}

//Function to display services 
const displayServices = (areaObject) => {
    //Create variable to hold updated service areas array
    const serviceAreasWithNames = addServiceNames(serviceAreaArray)
    //Create empty html ul variable
    let htmlServices = `<ul id="${areaObject.location}"><h1>Services:</h1>`
    //Iterate through serviceAreasWithNames
    for (const currentServiceArea of serviceAreasWithNames) {
        //Check if current area id matches serviceAreas.areaId
        if (areaObject.id === currentServiceArea.areaId){
            //If true, add li of currentServiceArea.name to html variable
            htmlServices += `<li>${currentServiceArea.name}</li>`
        }
    }
    htmlServices += "</ul>"
    //Return html variable
    return htmlServices
}

//Function to display location
const displayLocation = (areaObject) => {
    //Create empty html string variable
    let htmlLocations = `<div id="${areaObject.location}">`
    //Add location property of parameter to html string variable
    htmlLocations += `Location in park: ${areaObject.location}</div>`
    //Return html string 
    return htmlLocations
}


//Function to put name, services, and location together - one function to rule them all
export const area = () => {
    //create empty html article
    let htmlObject = "<article>"
    //Iterate through areas
    for (const currentArea of areasArray) {
        //for each area, invoke areaNames, displayServices, and displayLocation
        htmlObject += `${areaNames(currentArea)}`
        htmlObject += `${displayServices(currentArea)}`
        htmlObject += `${displayLocation(currentArea)}`
    }
    htmlObject += "</article>"
    return htmlObject
}
