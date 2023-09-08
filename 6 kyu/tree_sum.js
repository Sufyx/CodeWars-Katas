/**
 * https://www.codewars.com/kata/5800580f8f7ddaea13000025
 */

function sumTheTreeValues(root) {
    if (!root) return 0;
    return root.value
        + sumTheTreeValues(root.left)
        + sumTheTreeValues(root.right);
}