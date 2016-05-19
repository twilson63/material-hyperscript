const isValidString =
  param =>
    typeof param === 'string' && param.length > 0

const startsWith =
  (string, start) =>
    string[0] === start

const isSelector =
  param =>
    isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))

module.exports = h => (first, ...rest) => {
  var tagName = [
    'div',
    'material-icons',
    'mdl-badge'
  ].join('.')
  if (isSelector(first))
    return h(tagName + first, ...rest)
  else if (first === 'undefined')
    return h(tagName)
  else {
    return h(tagName, first, ...rest)
  }
}
