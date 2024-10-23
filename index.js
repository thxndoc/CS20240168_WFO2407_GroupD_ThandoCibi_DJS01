/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const MS2_TO_KMH_UNIT_CONVERTER = 12960

// calculations for new distance
const distanceParameters = {
  initialDistanceInKm : 0, // distance (km)
  initialVelocityAsKmPerHour : 10000, // velocity (km/h)
  timeAsSeconds : 3600 // seconds (1 hour)
}

const calculateNewDistanceInKm = (distanceParameters) => {
  const { initialDistanceInKm, initialVelocityAsKmPerHour, timeAsSeconds } = distanceParameters
  if (isNaN(initialDistanceInKm)) throw new Error ('"initialDistanceInKm" needs to be a number') // check that value of property is not a string
  if (isNaN(initialVelocityAsKmPerHour)) throw new Error ('"initialVelocityAsKmPerHour" needs to be a number') // check that value of property is not a string
  if (isNaN(timeAsSeconds)) throw new Error ('"timeAsSeconds" needs to be a number') // check that value of property is not a string

  return initialDistanceInKm + (initialVelocityAsKmPerHour * timeAsSeconds/3600) //calculates new distance
}
const updatedDistanceInKm = calculateNewDistanceInKm(distanceParameters)


// calculations for remaining fuel
const fuelParameters = {
  initialFuelInKg : 5000, // remaining fuel (kg)
  fuelBurnRateInKg : 0.5, // fuel burn rate (kg/s)
  timeAsSeconds : 3600 // seconds (1 hour)
}
const calculateRemainingFuelInKg = (fuelParameters) => {
  const { initialFuelInKg, fuelBurnRateInKg, timeAsSeconds } = fuelParameters

  return initialFuelInKg - (fuelBurnRateInKg * timeAsSeconds) //calculates remaining fuel
}
const remainingFuelInKg = calculateRemainingFuelInKg(fuelParameters)

//Pick up an error with how the function below is called and make it robust to such errors
// calculations for new velocity
const velocityParameters = {
  initialVelocityAsKmPerHour : 10000, // velocity (km/h)
  acceleration : 3, // acceleration (m/s^2) 
  timeAsSeconds : 3600 // seconds (1 hour)
}

const calculateNewVelocity = (velocityParameters) => { 
  const { initialVelocityAsKmPerHour, acceleration, timeAsSeconds } = velocityParameters

  if (!initialVelocityAsKmPerHour) throw new Error ('"initialVelocityAsKmPerHour" is required')
  if (!acceleration) throw new Error ('"acceleration" is required')
  if (!timeAsSeconds) throw new Error ('"timeAsSeconds" is required')

  //convert acceleration from m/s to km/h
  const accelerationAsKmPerHour = acceleration * MS2_TO_KMH_UNIT_CONVERTER

  return initialVelocityAsKmPerHour + (accelerationAsKmPerHour * timeAsSeconds/3600)
}
const updatedVelocityAsKmPerHour = calculateNewVelocity(velocityParameters) //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${updatedVelocityAsKmPerHour} km/h`);
console.log(`Corrected New Distance: ${updatedDistanceInKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKg} kg`);






