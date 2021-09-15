const resourceModules = ['connection', 'form', 'contact'];

/**
 * Registers resources on the `AvadaEmailMarketing` class.
 *
 * @param {AvadaEmailMarketing} AvadaEmailMarketing class
 * @private
 */
function registerAll(AVADAIO) {
  resourceModules.forEach(prop => {
    Object.defineProperty(AVADAIO.prototype, prop, {
      configurable: true,
      get: function get() {
        const resource = require(`./${prop}`);

        return Object.defineProperty(this, prop, {
          value: new resource(this)
        })[prop];
      },
      set: function set(value) {
        Object.defineProperty(this, prop, {value});
      }
    });
  });
}

module.exports = {
  registerAll
};
