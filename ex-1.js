function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (diff === numbers[j]) {
        result = [i, j];
      }
    }
  }
  return result;
}

const numbers = [2, 7, 11, 15];
const target1 = 9;
const target2 = 23;

console.log(twoSum(numbers, target1));
console.log(twoSum(numbers, target2));
