var { h, create, diff, patch } = require('virtual-dom')
var { layout, header, headerRow, title,
  spacer, nav, navLink, content, grid, cell_11, cell_1,
  cell_5, card, cardTitle
} = require('../src')(h)

document.body.appendChild(
  create(
    layout([
      header([
        headerRow([
          title('Material Hyperscript'),
          spacer(),
          nav([
            navLink(['Home']),
            navLink(['Components'])
          ])
        ])
      ]),
      content([
        grid([
          cell_11('.mdl-cell--1-offset', [
            h('h1', ['Welcome']),
            h('p', [`To Material-Hyperscript, a module that combines
              material design lite with hyperscript.
            `])
          ])
        ]),
        grid([
          cell_5('.mdl-cell--1-offset', [
            card('.mdl-shadow--2dp', [
              cardTitle([
                h('pre', [
                  h('code', [`
layout([
  header([
    //...
  ]),
  content([
    //...
  ])
])
                  `])
                ])
              ])
            ]),
          ]),
          cell_5([
            card('.mdl-shadow--2dp', [
              cardTitle([
                h('img', {src: 'http://placehold.it/300'})
              ])
            ])
          ])
        ])
      ])
    ])
  )
)
