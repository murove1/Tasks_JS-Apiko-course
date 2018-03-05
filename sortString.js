function sortString(string) {
  if (string === "") {
    return "";
  }

  let arr = string.split(" ");
  console.log("Input String:", string);
  console.log("Input Array:", arr);

  arr.sort(function(a, b) {
    let intA = parseInt(a.replace(/\D+/g, ""));
    let intB = parseInt(b.replace(/\D+/g, ""));

    if (intA > intB) return 1;
    if (intA < intB) return -1;
  });

  console.log("Output array:", arr);
}

sortString("g5et ski3lls on6 use1 your2 to4 7top");
console.log(sortString(""));
