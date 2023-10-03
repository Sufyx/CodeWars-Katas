/**
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */

package kata

func Persistence(n int) int {
	count := 0
	num := n
	for num > 9 {
		count++
		mult := 1
		for num > 0 {
			mult *= (num % 10)
			num /= 10
		}
		num = mult
	}
	return count
}
