const isValidString =
  param =>
    typeof param === 'string' && param.length > 0

const startsWith =
  (string, start) =>
    string[0] === start

const isSelector =
  param =>
    isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'))

const TAGS = {
  badge: 'div.material-icons.mdl-badge'
}

const node = h =>
  tagName =>
    (first, ...rest) => {
      var tag = TAGS[tagName]
      if (isSelector(first))
        return h(tag + first, ...rest)
      else if (first === 'undefined')
        return h(tag)
      else {
        return h(tag, first, ...rest)
      }
    }


const materialTags = h => {
  const createTag = node(h)
  const exported = { }
  return Object.keys(TAGS).forEach(n => {
    exported[n] = createTag(n)
  })

}

module.exports = materialTags
