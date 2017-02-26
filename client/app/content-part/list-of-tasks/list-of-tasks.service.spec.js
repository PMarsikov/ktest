// unit test for setSeverity service
/*eslint-env mocha, mocha, jasmine*/
/*globals inject inject*/
describe("setSeverity",function(){
    var setSeverity;
    beforeEach(module("contentPart"));
// inject setSeverity service
    beforeEach(inject(function(_setSeverity_){
        setSeverity=_setSeverity_;
    }));
// match it's value to string
    it("should return default severity value",function(){
       expect(setSeverity).toEqual("Choose severity");
    });
});
