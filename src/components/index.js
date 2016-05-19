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
      if (isSelector(first)) {
        if (typeof rest[0] === 'Object') {
          rest[0] = Object.assign({}, {'upgrade-hook': new UpgradeHook() }, rest[0])
        }
        return h(tag + first, ...rest)
      } else {
        if (typeof first === 'Object') {
          first = Object.assign({}, {'upgrade-hook': new UpgradeHook() }, first)
        }
        return h(tag, first, ...rest)
      }
    }


const materialTags = h => {
  const createTag = node(h)
  const exported = { }
  Object.keys(TAGS).forEach(n => {
    exported[n] = createTag(n)
  })
  return exported
}

module.exports = materialTags

function UpgradeHook (){}
UpgradeHook.prototype.hook = (node, propertyName, previousValue) => {
  if (!componentHandler && console) {
    return console.log('componentHander not found')
  }
  setTimeout(_ => componentHandler.upgradeElement(node), 0)

}
