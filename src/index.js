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
	let ten = /.{10}/g
    const tenBytes = expr.match(ten);
    let result = tenBytes.map(tenByte => {
        if(tenByte=='**********')
            return ' ';
		let two = /.{2}/g
        const twoBytes = tenByte.match(two);
        let morseCode = twoBytes.map(e=>{
            return e=='10'?'.':e=='11'?'-':'';
        })
		let res = MORSE_TABLE[morseCode.join('')]
        return res;
    }).join('');
    return result;
}

module.exports = {
    decode
}