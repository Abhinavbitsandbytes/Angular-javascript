class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        return helper(nums, 0, target);
    }
    int helper(int nums[], int i, int target){
        if(i==nums.length){
            if(target==0){
                return 1;
            } else{
                return 0;
            }
        }
        int take1 = helper(nums, i+1, nums[i]-target);
        int take2 = helper(nums, i+1, nums[i]+target);
        return take1+take2;
    }
}