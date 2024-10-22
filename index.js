/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityAsKmPerHour = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeAsSeconds = 3600; // seconds (1 hour)
const initialDistanceInKm = 0; // distance (km)
const initialFuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKg = 0.5; // fuel burn rate (kg/s)


const updatedDistance = initialVelocityAsKmPerHour + (initialVelocityAsKmPerHour * timeAsSeconds) //calculates new distance
const remainingFuel = fuelBurnRateInKg * timeAsSeconds //calculates remaining fuel
const updatedVelocityAsKmPerHour = calcNewVel(initialVelocityInKmPerHour, acceleration, timeAsSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (initialVelocityAsKmPerHour, acceleration, timeAsSeconds) => { 
  return initialVelocityAsKmPerHour + (acceleration * timeAsSeconds)
}

console.log(`Corrected New Velocity: ${updatedVelocityAsKmPerHour} km/h`);
console.log(`Corrected New Distance: ${updateDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






