/**
 * https://www.codewars.com/kata/55f2b110f61eb01779000053
 */

package kata

func GetSum(a, b int) int {
	start := a
	end := b
	if a > b {
		start = b
		end = a
	}
	sum := 0
	for i := start; i <= end; i++ {
		sum += i
	}
	return sum
}
