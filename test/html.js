var assert = require('assert');
var should = require('should');
var fs = require('fs');
var lint = require('html-minifier-lint').lint;

var html = fs.readFileSync('./index.html', 'utf8');
var resultLint = lint(html);
var isValid = false;
if (typeof resultLint === 'undefined' || !resultLint) {
  isValid = true;
}

describe('HTML', function() {
  it('is the HTML valid?', function() {
    (isValid).should.be.equal(true);
  });
});