/**
 * https://www.codewars.com/kata/530e15517bc88ac656000716
 */

function rot13(message) {
    let res = '';
    for (let c = 0; c < message.length; c++) {
        let charCode = message.charCodeAt(c);
        if ((charCode >= 97) && (charCode <= 122)) {
            charCode += 13;
            if (charCode > 122)
                charCode = 96 + (charCode - 122);
        } else if ((charCode >= 65) && (charCode <= 90)) {
            charCode += 13;
            if (charCode > 90)
                charCode = 64 + (charCode - 90);
        }
        res += String.fromCharCode(charCode);
    }
    return res;
}