## [Retinajs](https://github.com/jgnewman/retinajs) Binding of Vue

### Install

With [Yarn](https://yarnpkg.com):
```bash
yarn add vue-retina
```

With npm:
```bash
npm install vue-retina --save
```

### Usage
[example](https://wangbinyq.github.io/vue-retina/test/)

```js
import Vue from 'vue/dist/vue.common.js'
import retina from 'retinajs'
import VueRetina from 'vue-retina'

Vue.use(VueRetina, {retina})
```

```html
<img :src="img" v-rjs="3">
```

### Todo
- [ ] change image size properly when image src is changed

### License
MIT
