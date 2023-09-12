function arraySum(nums) {
  if (nums.length === 0) {
    return 0;
  }

  return nums[0] + arraySum(nums.slice(1));
}

module.exports = arraySum;
