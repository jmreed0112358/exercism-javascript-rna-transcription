var DnaTranscriber = require('./rna-transcription');
var NotImplementedException = require('./exceptions/NotImplementedException');
var InvalidParameterException = require('./exceptions/InvalidParameterException');
var dnaTranscriber = new DnaTranscriber();

const validInputs = [ 'G', 'C', 'T', 'A' ];
const validOutputs = [ 'C', 'G', 'A', 'U' ];

describe('translate', function() {
  it('throws exception when given junk input.', function () {
    expect(function() {
      dnaTranscriber.translate(666);
    }).toThrow(
      new InvalidParameterException('This function takes a single string.'));
  });

  it('throws exception when given invalid input.', function () {
    expect(function() {
      dnaTranscriber.translate('HHHHHHHEEEEEFFFFF');
    }).toThrow(
      new InvalidParameterException('Input should be a single character.'));
  });

  it('throws exception when given invalid input.', function () {
    expect(function() {
      dnaTranscriber.translate('H');
    }).toThrow(
      new InvalidParameterException('Invalid nucleotide.'));
  });

  it('translates a valid nucleotide', function () {
    for ( i = 0 ; i < validInputs.length ; i++ ) {
      expect(dnaTranscriber.translate(validInputs[i])).toEqual(validOutputs[i]);
    }
  })
});

describe('toRna()', function() {

  it('throws exceptions when given junk input', function() {
    expect(function() {
      dnaTranscriber.toRna(10);
    }).toThrow(
      new InvalidParameterException('This function takes a single string.'));
  });

  it('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU');
  });
});
