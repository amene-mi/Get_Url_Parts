class Url {
    #url;
    debugger;
    constructor(url) {
        this.#url = new URL(url);
    }
    href() {
        return this.#url.href;
    }

    origin() {
        return this.#url.origin;
    }

    host() {
        return this.#url.hostname;
    }

    port() {
        return this.#url.port;
    }

    protocol() {
        return this.#url.protocol;
    }

    path() {
        return this.#url.pathname;
    }

    anchor() {
        return this.#url.hash;
    }

    query() {
        return this.#url.search.substr(1).split('&').reduce((obj, property) =>
            (Object.assign(obj, Object.fromEntries([property.split('=')]))), {});
    }
}
//module.exports = Url;
//export { Url };

export const Url = () => {};