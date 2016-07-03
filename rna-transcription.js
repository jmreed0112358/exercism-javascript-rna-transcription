var DnaTranscriber = function() {};
var NotImplementedException = require('./exceptions/NotImplementedException');
var InvalidParameterException = require('./exceptions/InvalidParameterException');

DnaTranscriber.prototype.translate = function(nucleotide) {
	throw new NotImplementedException();
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
	var result = '',
		strandLength = 0;
	if ( typeof dnaStrand !== 'string') {
		throw new InvalidParameterException('DnaTranscriber.toRna takes a single string.');
	}

	result = '';
	strandLength = 0;
	for ( i = 0 ; i < strandLength ; i++ ) {
		result += this.translate(strandLength[i]);
	}

};

module.exports = DnaTranscriber;