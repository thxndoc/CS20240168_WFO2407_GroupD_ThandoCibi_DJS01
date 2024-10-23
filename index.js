/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const MS2_TO_KMH_UNIT_CONVERTER = 12960

const initialVelocityAsKmPerHour = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeAsSeconds = 3600; // seconds (1 hour)
const initialDistanceInKm = 0; // distance (km)
const initialFuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKg = 0.5; // fuel burn rate (kg/s)


const updatedDistanceInKm = initialDistanceInKm + (initialVelocityAsKmPerHour * timeAsSeconds/3600) //calculates new distance
const remainingFuelInKg = initialFuelInKg - (fuelBurnRateInKg * timeAsSeconds) //calculates remaining fuel

//Pick up an error with how the function below is called and make it robust to such errors
const calculateNewVelocity = (initialVelocityAsKmPerHour, acceleration, timeAsSeconds) => { 
  //convert acceleration from m/s to km/h
  const accelerationAsKmPerHour = acceleration * MS2_TO_KMH_UNIT_CONVERTER

  return initialVelocityAsKmPerHour + (accelerationAsKmPerHour * timeAsSeconds/3600)
}

const updatedVelocityAsKmPerHour = calculateNewVelocity(initialVelocityAsKmPerHour, acceleration, timeAsSeconds) //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${updatedVelocityAsKmPerHour} km/h`);
console.log(`Corrected New Distance: ${updatedDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKg} kg`);






