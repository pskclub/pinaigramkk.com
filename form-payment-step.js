Vue.component('payment-step', {
  props: {
    skuId: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      form: {
        number: '',
        holder: '',
        exp: '',
        cvv: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return
        }

        this.$emit('submit', this.form)
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  template: `<ValidationObserver v-slot="{ invalid }" ref="form">
 <step-header :skuId="skuId"/>
  <form-step-bar :step="2"></form-step-bar>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="border p-5">
        <text-input-optional name="หมายเลขบัตร" placeholder="0000 0000 0000 0000" rules="required"
                             v-model="form.number"/>
        <text-input-optional name="ชื่อที่ปรากฎบนบัตร" placeholder="กรอกชื่อบนบัตรเครดิต/เดบิต" rules="required"
                             v-model="form.holder"/>
        <text-input-optional name="วันหมดอายุ" placeholder="MM/YY" rules="required" v-model="form.exp"/>
        <text-input-optional name="CVV" placeholder="000" rules="required" v-model="form.cvv"/>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-blue btn-block" :disabled="invalid" type="button" @click="onSubmit">ชำระเงิน</button>
    </div>
  </div>
</ValidationObserver>`
})
