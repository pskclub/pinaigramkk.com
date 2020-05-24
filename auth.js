Vue.component('login-form', {
  data: function () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate().then(success => {
        console.log('555', success)
        if (!success) {
          return
        }

        alert('Form has been submitted!')
      })
    }
  },
  template: `<ValidationObserver v-slot="{ invalid }" ref="form">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form @submit.prevent="onSubmit">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>Email address</label>
            <input type="text" v-model="email" :class="{ 'form-control' :true, 'is-invalid': errors[0]}">
            <div class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </div>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>Password</label>
            <input type="password" :class="{ 'form-control' :true, 'is-invalid': errors[0]}" v-model="password">
            <div class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </div>
        </ValidationProvider>
        <button type="submit" class="btn btn-primary" :disabled="invalid">Login</button>
      </form>
    </div>
  </div>
</ValidationObserver>
  `
})
