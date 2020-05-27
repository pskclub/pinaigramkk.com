Vue.component('login-form', {
  data: function () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (data) {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return
        }

        login(this.email, this.password).then((res) => {
          setCookie('me', encodeURIComponent(JSON.stringify(res.data)))
          alert('login success')
          window.location.replace('/')
        })
      })
    }
  },
  template: `<ValidationObserver v-slot="{ invalid }" ref="form">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form @submit.prevent="onSubmit">
         <text-input v-model="email" name="Email" rules="required" />
         <text-input type="password" v-model="password" name="Password" rules="required" />
        <button type="submit" class="btn btn-primary" :disabled="invalid">Login</button>
      </form>
    </div>
  </div>
</ValidationObserver>
  `
})

Vue.component('register-form', {
  data: function () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (data) {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return
        }

        login(this.email, this.password).then((res) => {
          setCookie('me', encodeURIComponent(JSON.stringify(res.data)))
          alert('login success')
          window.location.replace('/')
        })
      })
    }
  },
  template: `<ValidationObserver v-slot="{ invalid }" ref="form">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form @submit.prevent="onSubmit">
         <text-input v-model="email" name="Email" rules="required" />
         <text-input type="password" v-model="password" name="Password" rules="required" />
        <button type="submit" class="btn btn-primary" :disabled="invalid">Login</button>
      </form>
    </div>
  </div>
</ValidationObserver>
  `
})
