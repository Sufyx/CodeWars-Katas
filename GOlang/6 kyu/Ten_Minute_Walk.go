/**
 * https://www.codewars.com/kata/54da539698b8a2ad76000228
 */

package kata

func IsValidWalk(walk []rune) bool {
	if len(walk) != 10 {
		return false
	}
	lon := 0
	lat := 0
	for _, w := range walk {
		switch w {
		case 'n':
			lon++
		case 'e':
			lat++
		case 's':
			lon--
		case 'w':
			lat--
		}
	}
	if (lat != 0) || (lon != 0) {
		return false
	}
	return true
}
