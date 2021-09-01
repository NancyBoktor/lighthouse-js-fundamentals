
// calculate the position of the parade based on an array of directional moves.
// hese represent the parade moving in a particular direction by a single space on the grid.

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
    let x=0;
    let y=-0;                                    // The parade begins at [0,0].
    for (let i = 0; i < moves.length; i++){      // We using for loop to reach every element inside the moves array.
       if (moves[i] === 'north'){                // We using else if because we have more than two conditions. 
            y+=1;
    }  else if (moves[i] === 'west'){
           x-=1;
    }  else if (moves[i] ==='east'){
           x+=1; 
    }  else if (moves[i] === 'south'){
           y-=1;
    }
    } return [x, y];                              
}
console.log (finalPosition(moves));
