function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;

      if (numIndices.hasOwnProperty(complement)) {
          return [numIndices[complement], i];
      }

      numIndices[num] = i;
  }
}

// Example 
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

