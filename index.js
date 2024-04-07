const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((accum, value) => accum + value, 0)
console.log(totalBatteries)

