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
  txtField: 'div.mdl-textfield.mdl-js-textfield',
  txtInput: 'input.mdl-textfield__input',
  txtLabel: 'label.mdl-textfield__label',
  slider: 'input.mdl-slider.mdl-js-slider',
  icon: 'i.material-icons',
  menu: 'ul.mdl-menu.mdl-js-menu',
  menuItem: 'li.mdl-menu__item',
  tooltip: 'div.mdl-tooltip',
  dataTable: 'div.mdl-data-table.mdl-js-data-table',
  thCell: 'th.mdl-data-table__cell--non-numeric',
  tdCell: 'td.mdl-data-table__cell--non-numeric',
  _switch: 'label.mdl-switch.mdl-js-switch',
  cbSwitch: 'input.mdl-switch__input',
  lblSwitch: 'span.mdl-switch__label',
  spinner: 'div.mdl-spinner.mdl-js-spinner',
  list: 'ul.mdl-list',
  listItem: 'li.mdl-list__item',
  liPrimary: 'span.mdl-list__item-primary-content',
  liIcon: 'i.material-cons.mdl-list__item-icon',
  liLink: 'a.mdl-list__item-secondary-action',
  liSecondary: 'a.mdl-list__item-secondary-content',
  liBody: 'span.mdl-list__item-text-body',
  layout: 'div.mdl-layout.mdl-js-layout',
  header: 'header.mdl-layout__header',
  headerRow: 'div.mdl-layout__header-row',
  title: 'div.mdl-layout-title',
  space: 'div.mdl-layout-space',
  nav: 'nav.mdl-navigation',
  navLink: 'a.mdl-navigation__link',
  drawer: 'div.mdl-layout__drawer',
  content: 'main.mdl-layout__content'
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
