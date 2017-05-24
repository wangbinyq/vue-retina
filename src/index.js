let retina

const directive = {
  inserted (el, binding) {
    el.dataset.rjs = binding.value
    if (retina) {
      retina([el])
    }
  },
  update (el, binding, vnode, oldVnode) {
    const newSrc = vnode.data.attrs && vnode.data.attrs.src
    const oldSrc = vnode.data.attrs && oldVnode.data.attrs.src
    if (binding.value !== binding.oldValue 
      || newSrc !== oldSrc) {
      el.dataset.rjs = binding.value
      el.removeAttribute('data-rjs-processed')
      if (retina) {
        retina([el])
      }
    }
  }
}

export default function (Vue, options) {

  retina = Vue.retina = options.retina
  if (!Vue.retina) {
    console.error('vue-retina need retina')
    return 
  }

  Vue.directive('rjs', directive)
  Vue.directive('retina', directive)
}