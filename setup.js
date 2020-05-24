Vue.component('ValidationProvider', VeeValidate.ValidationProvider)
Vue.component('ValidationObserver', VeeValidate.ValidationObserver)
VeeValidate.extend('required', {
  validate: value => !!(value || '').trim(),
  computesRequired: true,
  message: () => 'This is required field'
})
