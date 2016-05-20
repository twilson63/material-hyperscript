var isValidString =
  function ( param ) { return typeof param === 'string' && param.length > 0; }

var startsWith =
  function (string, start) { return string[0] === start; }

var isSelector =
  function ( param ) { return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#')); }

var TAGS = {
  badge: 'div.material-icons.mdl-badge',
  fab: 'button.mdl-button.mdl-js-button.mdl-button--fab',
  btn: 'button.mdl-button.mdl-js-button',
  iconBtn: 'button.mdl-button.mdl-js-button.mdl-button--icon',
  miniFab: 'button.mdl-button.mdl-js-button.mdl-button--fab.mdl-button--mini-fab',
  textField: 'div.mdl-textfield.mdl-js-textfield',
  textFieldInput: 'input.mdl-textfield__input',
  textFieldLabel: 'label.mdl-textfield__label'
}

var node = function ( h ) { return function ( tagName ) { return function (first) {
      var rest = [], len = arguments.length - 1;
      while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

      var tag = TAGS[tagName]
      if (isSelector(first)) {
        if (typeof rest[0] === 'Object') {
          rest[0] = Object.assign({}, {'upgrade-hook': new UpgradeHook() }, rest[0])
        }
        return h.apply(void 0, [ tag + first ].concat( rest ))
      } else {
        if (typeof first === 'Object') {
          first = Object.assign({}, {'upgrade-hook': new UpgradeHook() }, first)
        }
        return h.apply(void 0, [ tag, first ].concat( rest ))
      }
    }; }; }


var materialTags = function ( h ) {
  var createTag = node(h)
  var exported = { }
  Object.keys(TAGS).forEach(function ( n ) {
    exported[n] = createTag(n)
  })
  return exported
}

module.exports = materialTags

function UpgradeHook (){}
UpgradeHook.prototype.hook = function (node, propertyName, previousValue) {
  if (!componentHandler && console) {
    return console.log('componentHander not found')
  }
  setTimeout(function ( _ ) { return componentHandler.upgradeElement(node); }, 0)

}
