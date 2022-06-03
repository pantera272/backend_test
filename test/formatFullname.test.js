const formatFullname = require('../utils/formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg is null', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" has more or less than two words', () => {
    expect(formatFullname('John Doe One')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe One Two')).to.equal('Error')
  });

  it('should return an John Doe if "fullName" arg is JohN DOE', () => {
    expect(formatFullname('johN DOE')).to.equal('John Doe');
    expect(formatFullname('JohN DoE')).to.equal('John Doe');
  });

});