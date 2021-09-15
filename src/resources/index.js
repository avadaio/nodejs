const resourceModules = ['connection', 'form', 'contact', 'subscriber', 'review'];

/**
 * Registers resources on the `AvadaEmailMarketing` class.
 *
 * @private
 * @param AVADAIO
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
