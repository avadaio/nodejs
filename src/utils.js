function isEmpty(obj) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
}

module.exports = isEmpty;
