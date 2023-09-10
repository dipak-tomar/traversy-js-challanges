function arrayIntersection(arr1, arr2) {
  const commonArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !commonArray.includes(arr1[i])) {
      commonArray.push(arr1[i]);
    }
  }
  return commonArray;
}

module.exports = arrayIntersection;
