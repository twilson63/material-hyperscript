var { h, create, diff, patch } = require('virtual-dom')
var {layout, header, headerRow, title,
  space, nav, navLink, content} = require('../src')(h)

document.body.appendChild(
  create(
    layout([
      header([
        headerRow([
          title('Hello World'),
          space(),
          nav([
            navLink(['Link 1']),
            navLink(['Link 2'])
          ])
        ])
      ]),
      content([
        h('h1', ['Hello World'])
      ])
    ])
  )
)
