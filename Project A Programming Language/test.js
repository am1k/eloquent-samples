/**
 * Created by v.bogoroditskiy on 7/10/2015.
 */

var skipSpace= require('./parser/skipSpace'),
    parse = require('./parser/parse'),
    expect =  require('expect.js');

describe('Skip', function() {

        describe('#skipSpace()', function() {
            it('should delete space before string', function() {
                expect(skipSpace("     abra-kadabra")).to.eql("abra-kadabra");
            });
        });

        describe('#parse()', function() {
            it('first test', function() {
                expect(parse("# hello\nx")).to.eql({ type: 'word', name: 'x' });
            });
        });

});