Vue.component('text-input', {
  props: {
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    vid: {
      type: String,
      default: undefined
    },
    isColumn: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    currentValue: ''
  }),
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" rules="required" v-slot="{ errors }">
  <div :class="{'form-group': true,'row' : !isColumn}">
    <label :class="{'col-sm-2 col-form-label text-right': !isColumn}">{{name}}</label>
    <div :class="{'col-sm-10': !isColumn}">
      <input :type="type" v-model="currentValue" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</ValidationProvider>
  `
})
