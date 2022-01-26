//Create basic layout
    //Top: Div to hold logo (left) and title

    //Center: main div. 
        //Aligned left: three columns, two rows
            //Each div represents an area
                //UL services
                //location

        //Aligned right: guests

    //Bottom: contact information
        //email, phone, address

//Create database
const database = {
    guests [
        {
        id: 1,
        firstName: Thom,
        lastName: York
        }, 
        {
        id: 2,
        firstName: Curtis,
        lastName: Jackson
        }, 
        {
        id: 3,
        firstName: Danny,
        lastName: Carrey
        }, 
        {
        id: 4,
        firstName: Jermaine,
        lastName: Cole
        }, 
        {
        id: 5,
        firstName: Anthony,
        lastName: Bourdain
        }
     ],
     areas [
        {
        id: 1,
        name: "Lodge",
        location: "Northwest"
        },
        {
        id: 2,
        name: "Lost Wolf ",
        location: "North"
        },
        {
        id: 3,
        name: "Chamfort River",
        location: "Northeast"
        },
        {
        id: 4,
        name: "Gander River",
        location: "Southwest"
        },
        {
        id: 5,
        name: "Campgrounds",
        location: "South"
        },
        {
        id: 6,
        name: "Pine Bluffs Trails",
        location: "Southeast"
        }
     ],
     services [
        {
        id: 1,
        serviceName: ""
        }
     ]
}
    //Array holding multiple arrays of objects
        //guests
            //id
            //firstname
            //lastname
        //areas
            //id
            //name
            //location
            //serviceId
        //services
            //id
            //service
        //serviceAreas (to connect many-to-many relationship)
            //id
            //areaId
            //serviceId

//Function to get guests array

//Function to get areas array

//Function to get services array

//Function to get serviceAreas array

//Function to iterate through areas and return id
    //Return gets passed into  next function

//Function to display services for each area - parameter of area
    //Create empty html ul variable
        //Iterate through serviceAreas array
            //Check if parameter id matches serviceAreas.areaId
                //If true, iterate through services
                    //Check if service.id in services matches serviceAreas.serviceId
                        //If true, add li of parameter.name to html variable
    //Return html variable

//Function to display location for each area - parameter of area
    //Create empty html string variable
        //Iterate through area parameter
            //Add location property of parameter to html string variable
    //Return html string 

//Function to list guests
    //Create empty html ul variable
    //Iterate through guests
        //Add firstName and lastName li to html ul variable



