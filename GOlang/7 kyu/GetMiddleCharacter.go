/**
 * https://www.codewars.com/kata/56747fd5cb988479af000028
 */

package kata

func GetMiddle(s string) string {
	mid := len(s) / 2
	midStr := string(s[mid])
	if len(s)%2 == 0 {
		midStr = string(s[mid-1]) + midStr
	}
	return midStr
}
