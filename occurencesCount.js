let arr = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9];


Array.prototype.occurencesCount = function(value) {
  return this.filter(element => element === value).length;
}

console.log(arr.occurencesCount(1));
console.log(arr.occurencesCount(2));
console.log(arr.occurencesCount(9));

