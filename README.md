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
[expample](https://wangbinyq.github.io/vue-retina/test/)

```js
import Vue from 'vue/dist/vue.common.js'
import retina from 'retinajs'
import VueRetina from '../src/index'

Vue.use(VueRetina, {retina})
```

```html
<img :src="img" v-rjs="3">
```

### Todo
- [ ] deal size not match when src changed

### License
MIT
