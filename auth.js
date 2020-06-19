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
  <div style="background-color: #FBEC7D" class="p-4 row mx-5">
    <div class="col-md-5 border-right d-flex flex-column justify-content-center"
         style="border-color: #000000 !important;">
      <h4 class="font-weight-bold">เคยสมัครแล้ว?</h4>
      <p>เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน</p>
    </div>
    <div class="col-md-7">
      <form @submit.prevent="onSubmit">
        <text-input-optional v-model="email" name="Email" rules="required"/>
        <text-input-optional type="password" v-model="password" name="Password" rules="required"/>
        <div class="row">
          <div class="col-9 offset-3">
            <button type="submit" class="btn btn-dark" :disabled="invalid" style="background-color: #000000!important;width: 200px">
              Login
            </button>
          </div>
        </div>

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
        }).catch(() => {
          alert('login fail')
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
