/**
 * Created by v.bogoroditskiy on 7/10/2015.
 */

var skipSpace= require('./parser/skipSpace'),
    parse = require('./parser/parse'),
    evaluate = require('./evaluator/evaluator'),
    topEnv = require('./environment/topEnv'),
    expect =  require('expect.js');

describe('Skip', function() {

        describe('#skipSpace()', function() {
            it('should delete space before string', function() {
                expect(skipSpace("     abra-kadabra")).to.eql("abra-kadabra");
            });
        });

        describe('#parse()', function() {
            it('parse string to object', function() {
                expect(parse("hello")).to.eql({ type: 'word', name: 'hello' });
            });

            it('parse string to object', function() {
                expect(parse(("+(a, 10)"))).to.eql(
                    {type: "apply",
                        operator: {type: "word", name: "+"},
                        args: [{type: "word", name: "a"},
                        {type: "value", value: 10}]})
            });

            it('check that string value', function() {
                expect(parse('string')).to.be.a('object');
            });

            it('check when user enter null', function() {
                expect(parse(null)).to.be.null;
            });

            it('check when user enter undefined', function() {
                expect(parse(undefined)).to.be.undefined;
            });

            it('check when user enter number', function() {
                expect(parse(12)).to.be.false;
            });

            it('check when user enter array', function() {
                expect(parse([2,4])).to.be.false;
            });

            it('check when user enter object', function() {
                expect(parse({1:[2,3]})).to.be.false;
            });

        });

        describe('#evaluate()', function() {
            it('Should return false', function() {
                var prog = parse("if(true, false, true)");
                expect(evaluate(prog, topEnv)).to.equal(false);
            });

        });



});