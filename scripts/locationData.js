   const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]
document.addEventListener("DOMContentLoaded", ()=>{
    const selectLocation = document.getElementById("selectLocation");
    selectLocation.onchange = filterByState;

    const length = locationsArray.length;
    for (let i = 0; i < length; i++) {
        let option = document.createElement("option");
        option.textContent = locationsArray[i];
        selectLocation.appendChild(option);
    }

    displayParks(nationalParksArray)
})

function filterByState() {
    //this code fires everytime they make a change
                
    let selected = document.getElementById("selectLocation").value;
    const parks = [];
    for(i=0; i< nationalParksArray.length; i++){
        if(nationalParksArray[i].State == selected){
            parks.push(nationalParksArray[i]);
        }
    }
    displayParks(parks)
}

function displayParks(parks) {
    const parentDiv = document.getElementById("displayParks")
    parentDiv.innerText = ""

    parks.forEach(park => {
        individulPark(park, parentDiv)
    });
        
} 

function individulPark(park, parentDiv) {
    // create a div for each product
    const parkDiv = document.createElement("div");
    parkDiv.classList.add("park") ;
    // add product to the container
    parentDiv.appendChild(parkDiv);
 // create the product info div 
    const parkInfoDiv = document.createElement("div");
    parkDiv.appendChild(parkInfoDiv);

    addName(park, parkInfoDiv);
    addAddress(park, parkInfoDiv);
    addContact(park, parkDiv);
    // addSite(park, parkDiv);
}

function addName(park, parkInfoDiv) {
    // add product header
    const parkName = document.createElement("h6")
    parkName.innerText = park.LocationName;
    parkInfoDiv.appendChild(parkName);
}

function addAddress(park, parkInfoDiv) {
    const parkAddress = document.createElement("p");

    parkAddress.innerText = "Address: ";
    for (const key in park) {
        if (key == "Address" || key == "City" || key == "Zip") {
            if(park[key] != 0) parkAddress.innerText +=` ${park[key]}`;
        }
        else if (key == "State")parkAddress.innerText +=`, ${park[key]}`
    }
    
    parkInfoDiv.appendChild(parkAddress);
    
}

function addContact(park, parkInfoDiv) {
    const contactInfo = document.createElement("p")
    for (const key in park) {
        if (key == "Phone") {
            if(park[key] != 0) contactInfo.innerText +=`Phone: ${park[key]}`;
        }
        else if (key == "Fax") {
            if(park[key] != 0) contactInfo.innerText +=` Fax: ${park[key]}`;
        }
    }
    
    parkInfoDiv.appendChild(contactInfo);
}
