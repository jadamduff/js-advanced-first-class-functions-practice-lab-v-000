// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver, i, arr) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver, i, arr) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  let newArr = [...drivers];
  return newArr.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}
