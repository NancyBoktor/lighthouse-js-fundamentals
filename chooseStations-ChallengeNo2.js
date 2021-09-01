// Needing for console the station with  
//capacity of at least 20, and be a school or community centre.

// each station itself is an array.

const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];

  // Making a function to compair between the stations 
  // and the requirements.

 function chooseStations (stations) {               // Now we need to go inside each station alon by using Loop statement.
    let goodStation = [] ;                   // Declaring a variable to collect all stations which the function will return.
    for (var station of stations){
                                                                // Now we need to compair each station with our requirement by using if statement.
     if (station[1] >= 20 &&  station[2] === 'school' || station[2] === 'community centre'){
               goodStation.push (station[0]);
     }
 ; }  
   return goodStation;
 
}

  console.log (chooseStations(stations));

  
  





    