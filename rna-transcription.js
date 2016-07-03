var DnaTranscriber = function() {};
var NotImplementedException = require('./exceptions/NotImplementedException');
var InvalidParameterException = require('./exceptions/InvalidParameterException');

DnaTranscriber.prototype.translate = function(nucleotide) {
	if ( typeof nucleotide !== 'string' ) {
		throw new InvalidParameterException('This function takes a single string.');
	}

	if ( nucleotide.length !== 1 ) {
		throw new InvalidParameterException('Input should be a single character.');
	}

	switch(nucleotide) {
		case 'G':
			return 'C';
		case 'C':
			return 'G';
		case 'T':
			return 'A';
		case 'A':
			return 'U';
		default:
			throw new InvalidParameterException('Invalid nucleotide.');
	}
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
	var result = '',
		strandLength = 0;
	if ( typeof dnaStrand !== 'string') {
		throw new InvalidParameterException('This function takes a single string.');
	}

	result = '';
	strandLength = dnaStrand.length;
	for ( i = 0 ; i < strandLength ; i++ ) {
		result = result + this.translate(dnaStrand[i]);
	}
	return result;
};

module.exports = DnaTranscriber;