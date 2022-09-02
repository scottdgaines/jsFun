const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {

  // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
  orangePetNames(pets) {
    return pets.filter(pet => {
      return pet.color === 'orange'
    }).map((pet) => {
      return pet.name
    })

    // Annotation:
    // This problem had two steps to it: because we had to return multiple elements containing a specific property, 
    //we couldn't use .find() which would only return the first element containing the specific property, but instead used
    //.filter() which would return all an array of elements with that property.
    //once we had that array of objects, we needed to iterate over that new array to return only the name property. I initially
    //use a forEach() to push into another array, but refactored it with .map() which returns another array of the same length as the
    //initial array automatically (instead of having to create a new one). .map() returned a new array of only the name property
    //from the original array of orange pets.
  },

  // Sort the kitties by their age
  sortByAge(pets) {
    const sortedPets = pets.sort((pet2, pet1) => {
      return pet1.age - pet2.age
    });
    return sortedPets
     
    // Annotation:
    // we will be modifying the OG array with sort(), arranging the elements in descending orde
    //based on their age. I listed the parameters as kitten2 and kitten1 to demonstrate which element the 
    //method is using (the first parameter, though usually listed as 'a' is actually the second element
    //in the array, so to visually demonstrate that I listed it as kitten2). Returning kitten2.age-kitten1.age
    //would arrange the elements in ascending order based on age, so we reversed the order so they would
    //descend.
  },

     // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
  growUp(pets) {
   const grownUpPet = pets.map(pet => {
      pet.age = pet.age + 2   
      return pet
    })
    return grownUpPet
  }
};

//ANNOTATION:
//the OG array is already sorted according to age, so all we had to do was return another
//array of kitties/pets who have grown up by two years. Since we're returning a new array
//that is of the same length, I know we needed to use map(). To access the specific properties
//we need to mutate, we used the arrayName.propertyName + 2 to increase it by two. Since we 
//needed to return the whole pet object to the array instead of only their increased age property
//we returned 'pet'

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods

   // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
const modPrompts = {
  studentsPerMod() {
    const students = mods.map(function(mod) {
      return {
        mod: mod.mod, 
        studentsPerInstructor: mod.students / mod.instructors}
    })
     return students

    // Annotation:
    // we're returning an array that is the same length as the OG, so that says map()
    //we are returning an array of objects, so the return in map needs to create an object for
    //each iteration
    //
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
const classPrompts = {
  feClassrooms() {
    const feRooms = classrooms.filter(room => {
      return room.program.includes('FE')
    })
    return feRooms
  },

  //Annotation:
  //using .filter to target all the FE rooms (instead of find() which would only 
  //target the first instance of it) and using "includes" as part of our 
  //implicit conditional to say return only the rooms whos program property includes
  //the string "FE"

// Create an object where the keys are 'feCapacity' and 'beCapacity',
// and the values are the total capacity for all classrooms in each program e.g.
// {
//   feCapacity: 110,
//   beCapacity: 96
// }
  totalCapacities() {
    let capacities = []
    
    const feCapacities = classrooms.filter(classroom => {
      return classroom.program === "FE";
    }).reduce((capacity, classroom) => {
      capacity += classroom.capacity;
      return capacity
    }, 0)
    
    capacities.push(feCapacities)
    
    const beCapacities = classrooms.filter(classroom => {
      return classroom.program === "BE";
    }).reduce((capacity, classroom) => {
      capacity += classroom.capacity;
      return capacity;
    }, 0)
    
    capacities.push(beCapacities)
    
    const totalCapacities = capacities.reduce((object, capacity) => {
      return object = {
        feCapacity: capacities[0],
        beCapacity: capacities[1]
      }
    }, {})
    
    return totalCapacities
    

    // Annotation:
   //this doozy had at least 5 steps. Because we were looking to ultimately return one
   //value (an object) with two accumulated values, I had to use reduce three times
   //First we had to filter the OG array into FE and BE programs, then reduce each total
   //in order to get the individual totals for both programs. We wanted to combine those two
   //figures into a single object, which would imply reduce, so we had to push both totals
   //into another empty array where reduce could work with them. We then used reduce
   //to create the new object detailing both totals
  },
    
// Return the array of classrooms sorted by their capacity (least capacity to greatest)
  sortByCapacity() {
    const sortedClassrooms = classrooms.sort((class2, class1) => {
      return class2.capacity - class1.capacity
    })
    return sortedClassrooms

    // Annotation:
    //A basic use of sort(). 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
      // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
  getAverageTemps() {
      const averageTemps = weather.map(function(temp) {
        const average = (temp.temperature.high + temp.temperature.low) / 2
        return average
      })
      return averageTemps

    // Annotation:
    // Since we're returning the average temperature for each element in the weather 
    //array, ie: an array of the same length, just modified, I decided map() was
    //the way to go. we accessed each temperature.high, and added it to each temperature.low
    //then divided it by two (or we could have divided it by temerature.length to keep it dynamic)
    //to return the average
  },
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
  findSunnySpots() {
    const sunnySpots = weather.filter(location => {
      return location.type.includes('sunny')
    }).map(sunnySpot => {
      return `${sunnySpot.location} is ${sunnySpot.type}.`
    })
    return sunnySpots

    // Annotation:
   //because the OG array contains more than just sunny spots, we had to first
   //user filter to return all the locations that included 'sunny'. 
   //then we wanted to return an array of an equal length to that newly created array
   //but modified a little, so we used map to create a new array of equal length
   //but interpolating a string to describe each element of the array.
  },

      // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
  findHighestHumidity() {
      const mostHumid = weather.sort((location2, location1) => {
        return location1.humidity - location2.humidity
      })
      return mostHumid[0]

    // Annotation:
//because we don't know what the highest value for weather.humidity, we can't
//use find(). Instead, sorting the OG array from highest to lowest based on
//the value of the property humidity would automatically put the highest one
//at index 0. So by returning index zero of that new array, we know it will
//be the highest one

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {

/// Return an object containing the names of which parks I need to visit
// and the ones I have already visited eg:
// {
//   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
//   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
//}
  getParkVisitList() {
    let namesOfParks = [];

      const parksToVisit = nationalParks.filter(park => {
        return park.visited === false;
      }).map(park => {
        return park.name
      });
    
  
      const parksVisited = nationalParks.filter(park => {
        return park.visited === true;
      }).map(park => {
        return park.name
      });
      
      namesOfParks.push(parksToVisit);
      namesOfParks.push(parksVisited);

      const parkVisitList = namesOfParks.reduce((object, list) => {
        return object = { parksToVisit: namesOfParks[0], parksVisited: namesOfParks[1]}
      });

      return parkVisitList;

    // Annotation:
    // We first had to filter all the parks according to whether their visited status
    //was true or false, then we had to map those results into an array of equal length
    //but containing only the names (could I have done this with reduce as well, since an
    //array is a single value?)
    //we then needed to reduce those two arrays into a single value (an object), and since
    //reduce can only work with one array at a time, I push both arrays into another, new
    //array  which I then reduced into a new object
    
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const parksInEachState = nationalParks.map(state => {
      return {[state.location]: state.name}
      })
    return parksInEachState

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const sortedActivities = []
    
    const activities = nationalParks.map(park => {
      return park.activities
    }).flat()
      .forEach(activity => {
        if (!sortedActivities.includes(activity)) {
        sortedActivities.push(activity)
        }
    })

    return sortedActivities

    // Annotation:
    // FIRST: we had to be able to access only the activities. Using
    //map we return an array containing only those activity arrays, since
    //they didn't need to be associated with their parks anymore.
    //next we needed to put all those activities into a single array, so
    //we chained flat(). next, we declared a new, empty array of sortedActivities
    //. Then we iterated over array containing all the activities and said, "
    //for each one of these activities, if the new empty array does not include
    //this specific activity, we're going to push it to that new array.
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  // Return the total beer count of all beers for every brewery e.g.
  // 40
 getBeerCount() {
    const beerCount = breweries.reduce((totalBeers, brewerie) => {
      totalBeers = totalBeers + brewerie.beers.length
      return totalBeers
    }, 0)
    return beerCount

    // Annotation:
    // We're using reduce() because we need to return a single
    //value from the accumulation of the arrays. 
    //the accumulator is totalBeers (where everything is being added to), 
    //the currentValue is beer (the individual element / value that will be added to the acc)
    //we have to return the accumulator (declared in the param as totalBeers)
    // we have to assign the iterator to a const so that we can 
    //return that const so that the getBeerCount will not return undefined
    //the initialValue parameter has to be define here, becuase the first element in the 
    //array we're iterating over is an object, not a number, so we have to
    //define the value of that object as a number so the method can properly add
  },

    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]
  getBreweryBeerCount() {
      const beerCount = breweries.map(brewerie => {
        return {
          name: brewerie.name,
          beerCount: brewerie.beers.length}
      })
      return beerCount

//REDUCE:
//    const brewerieCount = breweries.reduce((totalCount, brewerie) => {
  //       totalCount.push({
  //         name: brewerie.name,
  //         beerCount: brewerie.beers.length
  //       })
  //       return totalCount
  //     }, [])
  //     return brewerieCount
  //   }

    // Annotation:
    // my first instinct was using map() since we were returning an array of 
    //equal length to the OG. After working through both map() and reduce(), map
    // seems to be the cleaner way.
    //using reduce: since reduce returns a single value, but that value can be
    //any data type (an array or an object both technically being single values).
    //you create the accumulator as an array, and push and object of name and beer
    //count into that array. We have to make sure to define the initialValue of
    //the accumulator array though with the []
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
