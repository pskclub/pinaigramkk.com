Vue.component('address-step', {
  props: {
    skuId: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      addressOptions: [
        {
          value: 1,
          label: 'ใช้ที่อยู่เดียวกับบัตรประชาชน'
        },
        {
          value: 2,
          label: 'ใช้ที่อยู่อื่นในการรับเอกสาร'
        }
      ],
      address_type: 1,
      form: {
        start_name: '',
        firstName: '',
        lastName: '',
        address: '',
        telephone: '',
        province: '',
        country: countryId,
        district: '',
        subDistrict: '',
        zipcode: ''
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
    },
    fillForm () {
      getForm('step', qs['id'] + 'register').then((res) => {
        this.form = {
          ...this.form,
          ...res.data.forms
        }
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.fillForm()
  },
  watch: {
    'address_type': {
      immediate: true,
      handler: function (val, old) {
        if (val !== old) {
          if (val === 1) {
            this.fillForm()
          } else {
            this.form = {}
          }
        }
      }
    }
  },
  template: `<div>
  <step-header :skuId="skuId"/>
  <form-step-bar :step="4"></form-step-bar>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">กรอกที่อยู่สำหรับจัดส่งเอกสาร</h5>
  </div>

  <ValidationObserver v-slot="{ invalid }" ref="form">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="mb-5">
          <radio-input name="ที่อยู่" rules="required" :options="addressOptions" v-model="address_type"/>
        </div>
        <start-name-input name="คำนำหน้าชื่อ" rules="required" v-model="form.start_name"/>
        <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required"
                             v-model="form.firstName"/>
        <text-input-optional type="text" name="นามสกุล" v-model="form.lastName" placeholder="นามสกุล (ภาษาไทย)"
                             rules="required"/>
        <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required|numeric"
                             v-model="form.telephone"/>
        <text-input-optional type="text" v-model="form.email" name="อีเมล" placeholder="กรอกอีเมล" rules="required|email"/>
        <text-area-input name="ที่อยู่" placeholder="กรอกที่อยู่" desc="(ตามที่ปรากฏในบัตรประชาชน)"
                         rules="required" v-model="form.address"/>
        <select-address-input :parent="form.country" name="จังหวัด" placeholder="กรุณาเลือกจังหวัด"
                              rules="required" v-model="form.province"/>
        <select-address-input :parent="form.province" name="อำเภอ/เขต" placeholder="กรุณาเลือกอำเภอ/เขต"
                              rules="required" v-model="form.district"/>
        <select-address-input :parent="form.district" name="ตำบล/แขวง" placeholder="กรุณาเลือกตำบล/แขวง"
                              rules="required" v-model="form.subDistrict"/>
        <select-address-input :parent="form.subDistrict" name="รหัสไปรษณีย์" placeholder="กรอกรหัสไปรษณีย์"
                              rules="required" v-model="form.zipcode"/>
      </div>
    </div>
    <div class="row justify-content-center  border-top mt-4">
      <div class="d-flex justify-content-center my-4">
        <button class="btn btn-default btn-block mr-4" type="button" @click="$emit('changeStep',3)">ย้อนกลับ</button>
        <button class="btn btn-blue btn-block" :disabled="invalid" type="button" @click="onSubmit">ยืนยัน</button>
      </div>
    </div>
  </ValidationObserver>
</div>`
})
