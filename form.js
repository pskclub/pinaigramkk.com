Vue.component('start-name-input', {
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
      this.$emit('input', val)
    }
  },
  methods: {
    onSelect (val) {
      this.currentValue = val
    },
    isElse () {
      return this.currentValue !== 'นาย' && this.currentValue !== 'นาง' && this.currentValue !== 'นางสาว'
    }
  },
  template: `<ValidationProvider :name="name" rules="required" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end">
      <span class="text-danger" style="font-weight: bold">*</span> <span
      style="font-weight: bold">คำนำหน้าชื่อ:</span>
    </div>
    <div class="col-9 d-flex align-items-center justify-content-start">
      <div class="form-check mr-1"  @click="onSelect('นาย')">
        <input class="form-check-input" :name="name" :checked="currentValue === 'นาย'" type="radio">
        <label class="form-check-label" >นาย</label>
      </div>
      <div class="form-check mr-1" @click="onSelect('นาง')">
        <input class="form-check-input" :name="name" :checked="currentValue === 'นาง'"  type="radio" value="nang">
        <label class="form-check-label" >นาง</label>
      </div>
      <div class="form-check mr-1" @click="onSelect('นางสาว')">
        <input class="form-check-input" :name="name" :checked="currentValue === 'นางสาว'"  type="radio" value="nangsao">
        <label class="form-check-label" >นางสาว</label>
      </div>
      <div class="form-check mr-2" @click="onSelect('')">
        <input class="form-check-input" type="radio" value="other" :checked="isElse()">
        <label class="form-check-label">อื่นๆ</label>
      </div>
      <div v-if="isElse()">
        <input type="text" v-model="currentValue" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
      </div>
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</ValidationProvider>
  `
})


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
      this.$emit('input', val)
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

Vue.component('text-area-input', {
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
    desc: {
      type: String,
      default: ''
    },

      placeholder: {
          type: String,
          default: ''
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
      this.$emit('input', val)
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" rules="required" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex flex-column align-items-end">
      <div>
        <span class="text-danger" style="font-weight: bold">*</span> <span
        style="font-weight: bold; font-size: 14px">{{name}}:</span>
      </div>
      <span class="text-muted" v-if="desc" style="font-size: 14px">{{desc}}</span>
    </div>
    <div class="col-9">
    <textarea :class="{ 'form-control w-100' :true, 'is-invalid': errors[0]}" :placeholder="placeholder"
              v-model="currentValue"></textarea>
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
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
    vid: {
      type: String,
      default: undefined
    },
  },
  data: () => ({
    currentValue: ''
  }),
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val)
    }
  },
  template: `<ValidationProvider :name="name" rules="required" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end text-right">
      <span class="text-danger" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div class="col-9">
    <div :class="['d-flex align-items-center justify-content-start', className]">
      <input v-model="currentValue" :type="type" :class="{ 'form-control' :true, 'is-invalid': errors[0]}"
             :placeholder="placeholder">
    </div>
    </div>
    <div class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </div>
</ValidationProvider>
  `
})

Vue.component('upload-image-input', {
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
    vid: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: 'col-9'
    }

  },
  data: () => ({
    currentValue: ''
  }),
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val)
    }
  },
  template: `<ValidationProvider :name="name" rules="required" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end text-right">
      <span class="text-danger" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div :class="['d-flex align-items-center justify-content-start', className]">
      <input type="file" v-model="currentValue" :class="{ 'form-control' :true, 'is-invalid': errors[0]}"
             :placeholder="placeholder">
    </div>
    <div class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </div>
</ValidationProvider>
  `
})
