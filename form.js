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
        currentValue(val) {
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

Vue.component('text-input-optional', {
    props: {
        value: {
            type: String,
            default: ''
        },
        rules: {
            type: [String, Object],
            default: ''
        },
        placeholder: {
            type: String,
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
        className: {
            type: String,
            default: 'col-9'
        },

    },
    data: () => ({
        currentValue: ''
    }),
    watch: {
        currentValue(val) {
            // allows us to use v-model on our input.
            this.$emit('input', val);
        }
    },
    template: `<ValidationProvider :name="name" rules="required" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end">
      <span class="text-danger" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div :class="['d-flex align-items-center justify-content-start', className]">
      <input v-model="currentValue" :type="type" :class="{ 'form-control' :true, 'is-invalid': errors[0]}"
             :placeholder="placeholder">
    </div>
    <div class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </div>
</ValidationProvider>
  `
})
