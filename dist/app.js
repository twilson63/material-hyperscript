var ref = require('virtual-dom');
var h = ref.h;
var create = ref.create;
var diff = ref.diff;
var patch = ref.patch
//var h = require('hyperscript')
//var badge = require('./components/badge')(h)
var c = require('./components')(h)
var badge = c.badge

// document.body.appendChild(
//   h('div', [
//     badge('.mdl-badge--overlap', { 'data-badge': '1' }, ['account_box'])
//   ])
// )
document.body.appendChild(
  create(
    h('div', [
      badge('.mdl-badge--overlap', { attributes: { 'data-badge': '1' }}, ['account_box'])
    ])
  )
)
