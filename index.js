// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    const pattern = new RegExp(`^${letters}`, 'i');
    return drivers.filter(driver => pattern.test(driver));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  