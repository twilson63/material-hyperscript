var isValidString =
  function ( param ) { return typeof param === 'string' && param.length > 0; }

var startsWith =
  function (string, start) { return string[0] === start; }

var isSelector =
  function ( param ) { return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#')); }

module.exports = function ( h ) { return function (first) {
  var rest = [], len = arguments.length - 1;
  while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

  var tagName = [
    'div',
    'material-icons',
    'mdl-badge'
  ].join('.')
  if (isSelector(first))
    return h.apply(void 0, [ tagName + first ].concat( rest ))
  else if (first === 'undefined')
    return h(tagName)
  else {
    return h.apply(void 0, [ tagName, first ].concat( rest ))
  }
}; }
