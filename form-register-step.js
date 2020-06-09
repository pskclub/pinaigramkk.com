
Vue.component('form-step-bar', {
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getStepStyle: function (step) {
      return `height: 60px;width: 60px; border-radius: 50%; background-color: ${this.step >= step ? '#f6dc1a' : '#9a9a9b'}; z-index: 1;`
    },
    getStepDetailStyle: function (step) {
      return `background-color: ${this.step >= step ? '#f9ea7d' : 'rgb(214, 214, 215)'}; width: 95%; height: 65%;position: absolute; right: -5%; padding-left: 7%;border-bottom-right-radius: 20px;border-top-right-radius: 20px;`
    }
  },
  template: `
       <div class="row px-5 py-4">
      <div class="col d-flex align-items-center position-relative px-0">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             :style="getStepStyle(1)">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">1</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-  content-center"
             :style="getStepDetailStyle(1)">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกข้อมูลผู้สมัคร</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             :style="getStepStyle(2)">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">2</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
             :style="getStepDetailStyle(2)">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">ชำระเงิน</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
               :style="getStepStyle(3)">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">3</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
             :style="getStepDetailStyle(3)">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกรายละเอียดเพิ่มเติม</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
               :style="getStepStyle(4)">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">4</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
              :style="getStepDetailStyle(4)">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกที่อยู่สำหรับจัดส่งเอกสาร</span>
          </div>
        </div>
      </div>
    </div>
    `
})

Vue.component('register-step', {
  data: function () {
    return {
      isAuth: false,
      start_name: '',
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      personID: '',
      country: countryId,
      address: '',
      province: '',
      district: '',
      subDistrict: '',
      zipcode: '',
      password: '',
      password_confirm: ''
    }
  },
  created: function () {
    this.isAuth = isAuth()
  },
  template: `<div>
  <div class="row justify-content-center p-4">
    <div class="col-auto">
      <img style="height: 100px"
           src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Yc6LIpv5eSeQcMnWVpHOGghgvp.jpg">
    </div>
    <div class="col-6">
      <div>
        <h2>Easy Will</h2>
      </div>
      <div class="pl-4">
        <ul class="p-0" style="font-size: 20px; color:#525553;">
          <li>ร่างพินัยกรรมโดยกำหนดสัดส่วนการรับมรดก และส่งให้ถึงมือคุณ</li>
          <li>มีผลถูกต้องใช้บังคับได้ตามกฏหมาย</li>
        </ul>
      </div>
      <div class="pl-4">
        <h2 style="color: #0771FF;">7,000 บาท</h2>
      </div>
    </div>
    <div class="col-auto">
      <a href="#" @click.prevent="$emit('reset')">ดูแพ็คเกจอื่น</a>
    </div>
  </div>
  <hr>
  <form-step-bar></form-step-bar>
  <login-form v-if="!isAuth"></login-form>
  <div class="row px-5 py-4">
    <div class="col text-center">
      <span class="text-danger" style="font-weight: bold">*</span> <span
      style="color: #0771FF; font-weight: bold">ผู้สมัครทำพินัยกรรม ต้องมีอายุไม่ต่ำกว่า 15ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ และต้องไม่เป็นบุคคลไร้ความสามารถ</span>
    </div>
  </div>

  <div class="row px-5 py-4 justify-content-center">
    <div class="col-10">
      <start-name-input name="คำนำหน้าชื่อ" rules="required" v-model="start_name"/>
      <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="firstName"/>
      <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" rules="required"
                           v-model="lastName"/>
      <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required"
                           v-model="telephone"/>
      <text-input-optional type="text" name="อีเมล" placeholder="กรอกอีเมล" rules="required" v-model="email"/>
      <text-input-optional v-if="!isAuth" type="password" name="รหัสผ่าน" placeholder="กรอกรหัสผ่าน" vid="password" rules="required" v-model="password"/>
      <text-input-optional v-if="!isAuth" type="password" name="ยืนยันรหัสผ่าน" placeholder="กรอกยืนยันรหัสผ่าน" rules="required|confirmed:password" v-model="password_confirm"/>
      <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                           rules="required" v-model="personID"/>
      <text-area-input name="ที่อยู่" placeholder="กรอกที่อยู่" desc="(ตามที่ปรากฏในบัตรประชาชน)"
                       rules="required" v-model="address"/>
      <select-address-input :parent="country" name="จังหวัด" placeholder="กรุณาเลือกจังหวัด"
                            rules="required" v-model="province"/>
      <select-address-input :parent="province" name="อำเภอ/เขต" placeholder="กรุณาเลือกอำเภอ/เขต"
                            rules="required" v-model="district"/>
      <select-address-input :parent="district" name="ตำบล/แขวง" placeholder="กรุณาเลือกตำบล/แขวง"
                            rules="required" v-model="subDistrict"/>
      <text-input-optional className="col-7" type="text" name="รหัสไปรษณีย์" placeholder="กรอกรหัสไปรษณีย์"
                           rules="required" v-model="zipcode"/>
      <div class="row justify-content-center">
        <div class="d-flex justify-content-center my-4">
          <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',2)">สมัคร</button>
        </div>
      </div>
    </div>
  </div>
</div>
`
})


