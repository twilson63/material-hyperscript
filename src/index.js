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
