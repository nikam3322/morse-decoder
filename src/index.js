const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr2 = [];
    let result = '';
    let dotDash = '';
    let str10 = '';
    let arr10 = expr.split('', 10);
    for (let i = 0; i < arr10.length; i++) {
        str10 = arr10[i];
        while (str10[0] === '0') {
        str10.split(1);
        }
        arr2 = arr10[i].split('',2);
        for (let k = 0; k < arr2.length; k++) {
            if (arr2[i] === '10') {
                dotDash += '.';
            } else if (arr2[i] === '11') {
                dotDash += '-';
            }
        }
        result += MORSE_TABLE[dotDash];
    }
    return result;
}

module.exports = {
    decode
}