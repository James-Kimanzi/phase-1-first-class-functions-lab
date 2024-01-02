const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const firstTwoDrivers = selectingDrivers[0](drivers);
const lastTwoDrivers = selectingDrivers[1](drivers);

console.log(firstTwoDrivers);
console.log(lastTwoDrivers);



const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(200));

const fareTripler = createFareMultiplier(3);

console.log(fareTripler(200));

const selectDifferentDrivers = function(drivers, selectFunction) {
  return selectFunction(drivers);
};

console.log(firstTwoDrivers);
console.log(lastTwoDrivers);

