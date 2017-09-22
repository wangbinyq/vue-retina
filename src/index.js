let retina

function setupRetina (el, binding, vnode, oldVnode) {
    const newSrc = vnode ? (vnode.data.attrs && vnode.data.attrs.src) : 0
    const oldSrc = oldVnode ? (oldVnode.data.attrs && oldVnode.data.attrs.src) : 1
    if (binding.value !== binding.oldValue 
      || newSrc !== oldSrc) {
      el.setAttribute('data-rjs', binding.value || 2)
      el.removeAttribute('data-rjs-processed')
      if (retina) {
        if (el._onload) {
          el.removeEventListener('load', el._onload)
        }
        el._onload = () => retina([el])
        el.addEventListener('load', el._onload) 
      }
    }
}

const directive = {
  inserted (el, binding) {
    setupRetina(el, binding)
  },
  update (el, binding, vnode, oldVnode) {
    setupRetina(el, binding, vnode, oldVnode)
  },

  unbind (el) {
    if (el._onload) {
      el.removeEventListener('load', el._onload)
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