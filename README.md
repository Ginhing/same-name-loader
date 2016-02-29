# same-name-loader
auto require the assets whose filename is same to the module

## example
say we have:
```
└── components
    └── menu
        ├── index.js
        ├── menu.sass
        └── menu.tpl
      ...
```

In other module
```
require('same-name?ext=sass!./menu')
```
will require the `./menu/menu.sass` also


## License
[MIT](https://opensource.org/licenses/MIT)
