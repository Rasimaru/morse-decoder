const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let result = '';
	let i = 0;

	while (i < expr.length / 10) {
		let sliced = expr.slice(i * 10, i * 10 + 10);
		i++;
		if (sliced[0] === '*') {
			result += ' ';
			continue;
		}

		let char = '';
		let b = 0;

		while (b < 10) {
			if (sliced.slice(b, b + 2) === '10') {
				char += '.';
			} else if (sliced.slice(b, b + 2) === '11') {
				char += '-';
			}
			b += 2;
		}
		result += MORSE_TABLE[char];
	}
	return result;
}

module.exports = {
	decode
}
