// Code your solution in this file!
// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Returns the absolute number of blocks from 42nd Street
  }
  
  // Function 2: distanceFromHqInFeet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get the number of blocks
    return blocks * 264; // Return the distance in feet
  }
  
  // Function 3: distanceTravelledInFeet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Return the absolute distance in feet
  }
  
  // Function 4: calculatesFarePrice
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get the distance in feet
  
    if (distance <= 400) {
      return 0; // The first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // If the distance exceeds 2500 feet
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  