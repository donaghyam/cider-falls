const database = {
    guests: [{
        id: 1,
        firstName: "Thom",
        lastName: "York"
        }, {
        id: 2,
        firstName: "Curtis",
        lastName: "Jackson"
        }, {
        id: 3,
        firstName: "Danny",
        lastName: "Carey"
        }, {
        id: 4,
        firstName: "Jermaine",
        lastName: "Cole"
        }, {
        id: 5,
        firstName: "Anthony",
        lastName: "Bourdain"
    }],
    areas: [{
        id: 1,
        name: "Lodge",
        location: "Northwest"
        }, {
        id: 2,
        name: "Lost Wolf ",
        location: "North"
        }, {
        id: 3,
        name: "Chamfort River",
        location: "Northeast"
        }, {
        id: 4,
        name: "Gander River",
        location: "Southwest"
        }, {
        id: 5,
        name: "Campgrounds",
        location: "South"
        }, {
        id: 6,
        name: "Pine Bluffs Trails",
        location: "Southeast"
    }],
    services: [{
        id: 1,
        serviceName: "Lodging"
        }, {
        id: 2,
        serviceName: "Parking"
        }, {
        id: 3,
        serviceName: "Information"
        }, {
        id: 4,
        serviceName: "Picnicking"
        }, {
        id: 5,
        serviceName: "Hiking"
        }, {
        id: 6,
        serviceName: "Rock climbing"
        }, {
        id: 7,
        serviceName: "Rafting"
        }, {
        id: 8,
        serviceName: "Canoeing"
        }, {
        id: 9,
        serviceName: "Fishing"
        }, {
        id: 10,
        serviceName: "Camping"
        }, {
        id: 11,
        serviceName: "Child play areas"
        }, {
        id: 12,
        serviceName: "Network of trails"
        }, {
        id: 13,
        serviceName: "Food vendors"
        }, {
        id: 14,
        serviceName: "Zip Lines"
        }],
    serviceAreas: [{
        id: 1,
        areaId: 1,
        serviceId: 1
        }, {
        id: 2,
        areaId: 1,
        serviceId: 2
        }, {
        id: 3,
        areaId: 1,
        serviceId: 3
        }, {
        id: 4,
        areaId: 1,
        serviceId: 4
        }, {
        id: 5,
        areaId: 2,
        serviceId: 5
        }, {
        id: 6,
        areaId: 2,
        serviceId: 4
        }, {
        id: 7,
        areaId: 2,
        serviceId: 6
        }, {
        id: 8,
        areaId: 3,
        serviceId: 7
        }, {
        id: 9,
        areaId: 3,
        serviceId: 8
        }, {
        id: 10,
        areaId: 3,
        serviceId: 9
        }, {
        id: 10,
        areaId: 3,
        serviceId: 9
        }, {
        id: 11,
        areaId: 4,
        serviceId: 5
        }, {
        id: 12,
        areaId: 4,
        serviceId: 9
        }, {
        id: 13,
        areaId: 5,
        serviceId: 10
        }, {
        id: 14,
        areaId: 5,
        serviceId: 11
        }, {
        id: 15,
        areaId: 5,
        serviceId: 3
        }, {
        id: 16,
        areaId: 5,
        serviceId: 1
        }, {
        id: 17,
        areaId: 5,
        serviceId: 2
        }, {
        id: 13,
        areaId: 6,
        serviceId: 12
        }, {
        id: 14,
        areaId: 6,
        serviceId: 13
        }, {
        id: 15,
        areaId: 6,
        serviceId: 5
        }, {
        id: 16,
        areaId: 6,
        serviceId: 4
        }, {
        id: 17,
        areaId: 6,
        serviceId: 14
        }
]}

//Function to get guests array
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

//Function to get areas array
export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

//Function to get services array
export const getServices = () => {
    return database.services.map(service => ({...service}))
}

//Function to get serviceAreas array
export const getServiceAreas = () => {
    return database.serviceAreas.map(serviceArea => ({...serviceArea}))
}