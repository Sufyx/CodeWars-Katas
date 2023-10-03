/**
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc
 */

package kata

func FindOutlier(integers []int) int {
	oddCounter := 0
	oddCounter += (integers[0] & 1)
	oddCounter += (integers[len(integers)-1] & 1)
	oddCounter += (integers[len(integers)/2] & 1)
	norm := 0
	if oddCounter > 1 {
		norm = 1
	}
	for _, n := range integers {
		if (n & 1) != norm {
			return n
		}
	}
	return -1
}
