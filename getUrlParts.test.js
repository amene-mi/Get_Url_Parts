  import  Url  from "./getUrlParts";
//const Url = require('./getUrlParts');
describe('Test url class', () => {

    let myUrl;
    beforeEach(() => {
        myUrl= new Url('https://www.freecodecamp.org:8080/news/how-to-start-unit-testing-javascript');
    });

    it('should be truthy', () => {
        expect(myUrl).toBeTruthy();
    });

    it('get host', () => {
        expect(myUrl.host()).toBe('www.freecodecamp.org');
    });

    it('get href', () => {
        expect(myUrl.href()).toBe('https://www.freecodecamp.org:8080/news/how-to-start-unit-testing-javascript');
    });

    it('get protocol', () => {
        expect(myUrl.protocol()).toBe('https:');
    });

    it('get path', () => {
        expect(myUrl.path()).toBe('/news/how-to-start-unit-testing-javascript');
    });

    it('get port', () => {
        expect(myUrl.port()).toBe('8080');
    });
});