/**
 * https://www.codewars.com/kata/526571aae218b8ee490006f4
 */

package kata

import "fmt"

func CountBits(num uint) int {
	bitsNum := fmt.Sprintf("%b", num)
	ones := 0
	for _, digit := range bitsNum {
		ones += int(digit - '0')
	}
	return ones
}
