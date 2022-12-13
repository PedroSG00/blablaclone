export const calculateTripPrice = (distance) => {

    const averageGasPrice = 1.75
    const fuelConsumption = 6.4

    let consumedFuel = Math.ceil((distance / 1000) * fuelConsumption * averageGasPrice)

    return consumedFuel

}