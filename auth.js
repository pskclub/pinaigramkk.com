Vue.component('login-form', {
  components: {},
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
         <text-input v-model="email" name="Email" rules="required" />
         <text-input v-model="password" name="Password" rules="required" />
        <button type="submit" class="btn btn-primary" :disabled="invalid">Login</button>
      </form>
    </div>
  </div>
</ValidationObserver>
  `
})
