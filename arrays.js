// let favouriteSongs = [
//     "Smells like teen spirit - Nirvana",
//     "Imagine - John Lennon",
//     "Bohemian Rhapsody - Queen"

// ];

// favouriteSongs.pop() // removes last item in array

// console.log(favouriteSongs);


let favouriteWebsites = [
    "Google",
    "Sky Sports",
    "BBC News"

];

console.log(favouriteWebsites)

favouriteWebsites.push("Amazon", "Youtube")
console.log(favouriteWebsites)

favouriteWebsites.pop()
console.log()

console.log(favouriteWebsites);

favouriteWebsites.shift() //REMOVES FIRST ELEMENT IN ARRAY
console.log(favouriteWebsites)

favouriteWebsites.unshift("Samsung") //ADDS NEW ELEMENT IN THE BEGINNING
console.log(favouriteWebsites)

console.log(favouriteWebsites.slice(1)); //REMOVES numbered item in index and temp creates a new array

let newArray = favouriteWebsites.slice(1);
console.log(newArray)
//console.log(favouriteWebsites)

favouriteWebsites.splice(3, 1, "facebook") // adds new elements to an array by replacing original elements.
console.log(favouriteWebsites)

