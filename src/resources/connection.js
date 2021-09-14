class Connection {
    /**
     * @constructor
     *
     * @param {AvadaEmailMarketing} avadaio
     */
    constructor(avadaio) {
        this.avadaio = avadaio;
    }
    test () {
        return this.avadaio.makeRequest({body: {}, endpoint: '/connects', isTest: true});
    }
}

module.exports = Connection