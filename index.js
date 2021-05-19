// Code your solution here
const findMatching = (drivers, keywords) => {
    return drivers.filter(function (element) { return element.toUpperCase() === keywords.toUpperCase()});
}

const fuzzyMatch = (drivers, keywords) => drivers.filter(function (element) { return element.indexOf(keywords) === 0 });

const matchName = (drivers, keywords) => drivers.filter(function (element) { return element.name === keywords });