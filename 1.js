// que1

const nums = [3, 0, 1, 2, 4, 5, 6, 7, 9];


for (let i = 0; i <= nums.length - 1; i++) {
const sorted = nums.sort();
  if (sorted[i] != i) {
    console.log("missing number is ", i); 
  }
}

// que2

var value = [2, 7, 11, 15];
let target = 9;
for (let i = 0; i <= value.length; i++) {
  for (let j = value.length - 1; j >= 0; j--) {
    if (value[i] + value[j] == target) {
      console.log("position [", i, j, "]");
      i = value.length; 
    }
  }
}