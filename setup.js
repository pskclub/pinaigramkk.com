Vue.component('ValidationProvider', VeeValidate.ValidationProvider)
Vue.component('ValidationObserver', VeeValidate.ValidationObserver)
VeeValidate.extend('required', value => {
  if (value === "long") {
    return true
  } else {
    return 'This is required field'
  }
})
