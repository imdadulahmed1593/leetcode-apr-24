// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1



var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// python implementation
// class Solution(object):
//     def maxArea(self, height):
//         """
//         :type height: List[int]
//         :rtype: int
//         """
//         left = 0
//         right = len(height) - 1
//         max_area = 0

//         while left < right:
//             width = right - left
//             current_area = min(height[left], height[right]) * width
//             max_area = max(max_area, current_area)

//             if height[left] < height[right]:
//                 left += 1
//             else:
//                 right -= 1

//         return max_area
