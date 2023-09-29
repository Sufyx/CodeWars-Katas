/**
 * https://www.codewars.com/kata/554b4ac871d6813a03000035
 */

package kata

import (
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	chars := strings.Split(string(in), " ")
	max, _ := strconv.Atoi(chars[0])
	min, _ := strconv.Atoi(chars[0])
	for _, char := range chars {
		num, _ := strconv.Atoi(char)
		if num > max {
			max = num
		}
		if num < min {
			min = num
		}
	}
	return strconv.Itoa(max) + " " + strconv.Itoa(min)
}
