/**
 * https://www.codewars.com/kata/57e5279b7cf1aea5cf000359
 */

function maxSum(root, sum = 0) {
    if (!root) return sum;
    sum += root.value;
    return Math.max(maxSum(root.left, sum), maxSum(root.right, sum));
}