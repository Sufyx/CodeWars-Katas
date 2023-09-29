/**
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3
 */

package kata

import "strings"

func GetCount(str string) (count int) {
	count = 0
	chars := strings.Split(string(str), "")
	for i := 0; i < len(chars); i++ {
		if chars[i] == "a" || chars[i] == "e" || chars[i] == "i" || chars[i] == "o" || chars[i] == "u" {
			count++
		}
	}
	return count
}
