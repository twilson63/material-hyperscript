# Material Hyperscript

Material Design Lite is a project that implements the Material Design:

> Material Design Lite lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.

This project uses MDL to implement `hyperscript` components for `mdl`

Hyperscript can be used in several frameworks: CycleJS, Mercury, React - or stand-alone.

## Example

``` js
var { h, create, diff, patch } = require('virtual-dom')
var {layout, header, headerRow, title,
  space, nav, navLink, content} = require('material-hyperscript')(h)

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
```

## Install

```
npm install material-design-lite --save
npm install material-hyperscript --save
```

## Setup

index.html - head

``` html
<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
<script src="/node_modules/material-design-lite/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Documentation

[TODO]


Changelog
----

material-hyperscript follows [semantic versioning](http://semver.org/). To see a changelog with all material-hyperscript releases, check out the [Github releases page](https://github.com/twilson63/material-hyperscript/releases).

For a concise list of breaking changes, there's the [wiki list of breaking changes](https://github.com/twilson63/material-hyperscript/wiki/Breaking-changes).

Contributing
------------

We're always looking for new contributors! If you'd like to try your hand at writing code, writing documentation, designing the website, writing a blog post, or answering [questions on StackOverflow](http://stackoverflow.com/search?tab=newest&q=material-hyperscript), then we'd love to have your input.

If you have a pull request that you'd like to submit, please read the [contributing guide](https://github.com/twilson63/material-hyperscript/blob/master/CONTRIBUTING.md) for info on style, commit message format, and other (slightly!) nitpicky things like that. Material-hyperscript is heavily tested, so you'll also want to check out the [testing guide](https://github.com/twilson63/material-hyperscript/blob/master/TESTING.md).
