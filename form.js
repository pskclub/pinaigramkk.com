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
    }
  },
  data: () => ({
    currentValue: ''
  }),
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val);
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" rules="required" v-slot="{ errors }">
  <div class="form-group">
    <label>{{name}}</label>
    <input :type="type" v-model="currentValue" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
    <div class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </div>
</ValidationProvider>
  `
})
