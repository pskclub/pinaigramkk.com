Vue.component('radio-input', {
  props: {
    value: {
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
    options: {
      type: Array,
      default: () => ([])
    },
    vid: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    currentValue: null
  }),
  created () {
    this.currentValue = this.value
  },
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-12 d-flex align-items-center justify-content-center">
      <radio-input-field :errors="errors" v-model="currentValue" v-bind="$props"/>
    </div>
  </div>
</ValidationProvider>
  `
})

Vue.component('radio-input-field', {
  props: {
    value: {
      default: ''
    },
    errors: {
      type: Array,
      default: []
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
    options: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    onChange (val) {
      this.$emit('input', val)
    }
  },
  template: `     <div class="align-items-center justify-content-start d-flex">
  <div v-for="option in options" :key="option.value" class="form-check mr-1" @click="onChange(option.value)">
    <input class="form-check-input" :name="name" :checked="value === option.value" type="radio">
    <label class="form-check-label">{{option.label}}</label>
  </div>
</div>
  `
})

Vue.component('start-name-input-field', {
  props: {
    value: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: []
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
    }
  },
  methods: {
    onChange (val) {
      this.$emit('input', val)
    },
    isElse () {
      return this.value !== 'นาย' && this.value !== 'นาง' && this.value !== 'นางสาว'
    }
  },
  template: `     <div class="align-items-center justify-content-start d-flex">
  <div class="form-check mr-1" @click="onChange('นาย')">
    <input class="form-check-input" :name="name" :checked="value === 'นาย'" type="radio">
    <label class="form-check-label">นาย</label>
  </div>
  <div class="form-check mr-1" @click="onChange('นาง')">
    <input class="form-check-input" :name="name" :checked="value === 'นาง'" type="radio" value="nang">
    <label class="form-check-label">นาง</label>
  </div>
  <div class="form-check mr-1" @click="onChange('นางสาว')">
    <input class="form-check-input" :name="name" :checked="value === 'นางสาว'" type="radio" value="nangsao">
    <label class="form-check-label">นางสาว</label>
  </div>
  <div class="form-check mr-2" @click="onChange('')">
    <input class="form-check-input" type="radio" value="other" :checked="isElse()">
    <label class="form-check-label">อื่นๆ</label>
  </div>
  <div v-if="isElse()">
    <input type="text" @input="onChange($event.target.value)" :value="value" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
    <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
  </div>
</div>
  `
})

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
    },
    value (val) {
      this.currentValue = this.value
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
  template: `<ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end">
      <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
      style="font-weight: bold">คำนำหน้าชื่อ:</span>
    </div>
    <div class="col-9 d-flex align-items-center justify-content-start">
      <start-name-input-field :errors="errors" v-model="currentValue" v-bind="$props"/>
    </div>
  </div>
</ValidationProvider>
  `
})

Vue.component('manager-options-input-field', {
  props: {
    value: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: []
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
    }
  },
  methods: {
    onChange (val) {
      this.$emit('input', val)
    },
    isElse () {
      return this.value !== 'คู่สมรส' && this.value !== 'บุตร'
    }
  },
  template: `     <div class="align-items-center justify-content-start d-flex">
  <div class="form-check mr-1" @click="onChange('คู่สมรส')">
    <input class="form-check-input" :name="name" :checked="value === 'คู่สมรส'" type="radio">
    <label class="form-check-label">คู่สมรส</label>
  </div>
  <div class="form-check mr-1" @click="onChange('บุตร')">
    <input class="form-check-input" :name="name" :checked="value === 'บุตร'" type="radio">
    <label class="form-check-label">บุตร</label>
  </div>
  <div class="form-check mr-2" @click="onChange('')">
    <input class="form-check-input" type="radio" value="other" placeholder="ความสัมพันธ์" :checked="isElse()">
    <label class="form-check-label">บุคคลอื่น</label>
  </div>
  <div v-if="isElse()">
    <input type="text" @input="onChange($event.target.value)" :value="value" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
    <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
  </div>
</div>
  `
})

Vue.component('manager-options-input', {
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
    index: {
      type: Number,
      default: 1
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  methods: {
    onSelect (val) {
      this.currentValue = val
    },
    isElse () {
      return this.currentValue !== 'คู่สมรส' && this.currentValue !== 'บุตร'
    }
  },
  template: `<ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end">
      <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
      style="font-weight: bold;font-size: 14px">{{name}} :</span>
    </div>
    <div class="col-9 d-flex align-items-center justify-content-start">
      <manager-options-input-field :errors="errors" v-model="currentValue" v-bind="$props"/>
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" :rules="rules" v-slot="{ errors }">
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex flex-column align-items-end">
      <div>
        <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
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

Vue.component('select-input', {
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
    options: {
      type: Array,
      default: () => ([])
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex flex-column align-items-end">
      <div>
        <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
        style="font-weight: bold; font-size: 14px">{{name}}:</span>
      </div>
      <span class="text-muted" v-if="desc" style="font-size: 14px">{{desc}}</span>
    </div>
    <div class="col-9">
     <select  v-model="currentValue" class="custom-select" :class="{ 'form-control w-100' :true, 'is-invalid': errors[0]}" :placeholder="placeholder">
        <option :selected="!currentValue" disabled value="">{{placeholder}}</option>
        <option :selected="currentValue === option.value" v-for="option in options" :key="option.value">{{option.label}}</option>
      </select>
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
    type: {
      type: String,
      default: 'text'
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :vid="vid || name" :name="name" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end text-right">
      <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div class="col-9">
      <input v-model="currentValue" :type="type" :class="{ 'form-control' :true, 'is-invalid': errors[0]}"
             :placeholder="placeholder || name">
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</ValidationProvider>
  `
})

const initStatus = () => ({
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorData: null,
  progress: 0,
  progressTotal: 0
})

Vue.component('upload-image-input-inner', {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    image: initStatus()
  }),
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val)
    }
  },
  methods: {
    save (files) {
      this.resetStatus()
      this.image.isLoading = true
      this.imagePublic(files[0], this.onUploadProgress).then(res => {
        this.image.isSuccess = true
        this.$emit('input', res.data.url)
      }).catch(err => {
        this.image.isError = true
        this.image.errorData = error
      }).finally(() => {
        this.image.isLoading = false
      })
    },
    imagePublic (file, onUploadProgress) {
      const formData = new FormData()
      formData.append('file', file, file.name)
      return NewRequester.post(`/uploader/profile`, formData, {
        ...apiOptions(),
        onUploadProgress
      })
    },
    onUploadProgress (progressEvent) {
      this.image.progress = progressEvent.loaded
      this.image.progressTotal = progressEvent.total
    },
    resetStatus () {
      this.image = initStatus()
      this.clearInput()
    },
    clearInput () {
      this.$refs.file.type = 'text'
      this.$refs.file.type = 'file'
    }
  },
  template: `
<div>
  <input
      :disabled="image.isLoading"
      @change="(e)=> save(e.target.files)"
      accept="image/*"
      class="form-control"
      name="file"
      ref="file"
      title="Drag image here to upload"
      type="file">
        <img
      :src="value"
      class="img-responsive  mt-3"
      style="max-height: 300px;max-width: 100%;"
      v-if="value">
</div>
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
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  template: `<ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end text-right">
      <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div class="col-9">
      <upload-image-input-inner v-model="currentValue"></upload-image-input-inner>
    </div>
    <div class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </div>
</ValidationProvider>
  `
})

Vue.component('select-address-input', {
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
    parent: {
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
    currentValue: '',
    options: []
  }),
  watch: {
    currentValue (val) {
      // allows us to use v-model on our input.
      this.$emit('input', val)
    },
    parent (val, oldVal) {
      if (val !== oldVal) {
        this.currentValue = ''
        this.fetch()
      }
    },
    value (val) {
      this.currentValue = this.value
    }
  },
  mounted: function () {
    this.fetch()
  },
  methods: {
    fetch: function () {
      if (this.parent) {
        NewRequester.get(`address/child/${this.parent}`, apiOptions()).then(res => {
          this.options = res.data.items.map((item) => ({ value: item.addr_id, label: item.name }))
        })
      }
    }
  },
  template: `<ValidationProvider :name="name" :vid="vid" :rules="rules" v-slot="{ errors }">
  <div class="row form-group">
    <div class="col-3 d-flex align-items-center justify-content-end">
      <span class="text-danger" v-if="rules.search('required') !== -1" style="font-weight: bold">*</span> <span
      style="font-weight: bold; font-size: 14px">{{name}}:</span>
    </div>
    <div class="col-9 d-flex">
      <select class="form-control" :disabled="options.length === 0" v-model="currentValue">
        <option value="">{{placeholder}}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{option.label}}</option>
      </select>
      <div class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</ValidationProvider>
  `
})
