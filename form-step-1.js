Vue.component('register-step-1', {
    data: function () {
        return {
            isAuth: false,
            firstName: '',
            lastName: '',
            telephone: '',
            email: '',
            personID: '',
            address: '',
            province: '',
            district: '',
            subDistrict: '',
            zipcode: '',
        }
    },
    created: function () {
        this.isAuth = isAuth()
    },
    template: `<div>
  <login-form v-if="!isAuth"></login-form>
  <div v-else>
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
    <div class="row px-5 py-4">
      <div class="col d-flex align-items-center position-relative px-0">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             style="height: 60px;width: 60px; border-radius: 50%; background-color: #f6dc1a; z-index: 1">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">1</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-  content-center"
             style="background-color: #f9ea7d; width: 95%; height: 65%;position: absolute; right: -5%; padding-left: 7%">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกข้อมูลผู้สมัคร</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0 text-white">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             style="height: 60px;width: 60px; border-radius: 50%; background-color: #9a9a9b; z-index: 1">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">2</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
             style="background-color: #d6d6d7; width: 95%; height: 65%;position: absolute; right: -5%; padding-left: 7%">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">ชำระเงิน</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0 text-white">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             style="height: 60px;width: 60px; border-radius: 50%; background-color: #9a9a9b; z-index: 1">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">3</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
             style="background-color: #d6d6d7; width: 95%; height: 65%;position: absolute; right: -5%; padding-left: 7%">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกรายละเอียดเพิ่มเติม</span>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center position-relative px-0 text-white">
        <div class="step-circle text-center p-1 d-flex flex-column justify-content-center"
             style="height: 60px;width: 60px; border-radius: 50%; background-color: #9a9a9b; z-index: 1">
          <h6 style="line-height: 1">Step</h6>
          <h3 style="font-weight: bolder; line-height: 0.5">4</h3>
        </div>
        <div class="step-detail flex-grow-1 d-flex align-items-center justify-content-center"
             style="background-color: #d6d6d7; width: 95%; height: 65%;position: absolute; right: -5%; padding-left: 7%">
          <div class="w-100 px-4 pb-1 text-center" style="overflow-wrap: break-word">
            <span style="font-weight: bolder; font-size: 12px">กรอกที่อยู่สำหรับจัดส่งเอกสาร</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5 py-4">
      <div class="col text-center">
        <span class="text-danger" style="font-weight: bold">*</span> <span
        style="color: #0771FF; font-weight: bold">ผู้สมัครทำพินัยกรรม ต้องมีอายุไม่ต่ำกว่า 15ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ และต้องไม่เป็นบุคคลไร้ความสามารถ</span>
      </div>
    </div>
    <div class="row px-5 py-4 justify-content-center">
      <div class="col-10">
        <div class="row form-group">
          <div class="col-3 d-flex align-items-center justify-content-end">
            <span class="text-danger" style="font-weight: bold">*</span> <span
            style="font-weight: bold">คำนำหน้าชื่อ:</span>
          </div>
          <div class="col-9 d-flex align-items-center justify-content-start">
            <div class="form-check mr-1">
              <input class="form-check-input" checked type="radio" name="title" id="nay" value="nay">
              <label class="form-check-label" for="nay">นาย</label>
            </div>
            <div class="form-check mr-1">
              <input class="form-check-input" type="radio" name="title" id="nang" value="nang">
              <label class="form-check-label" for="nang">นาง</label>
            </div>
            <div class="form-check mr-1">
              <input class="form-check-input" type="radio" name="title" id="nangsao" value="nangsao">
              <label class="form-check-label" for="nangsao">นางสาว</label>
            </div>
            <div class="form-check mr-2">
              <input class="form-check-input" type="radio" name="title" id="other" value="other">
              <label class="form-check-label" for="other">อื่นๆ</label>
            </div>
            <input type="text" class="form-control">
          </div>
        </div>
        <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="firstName"/>
        <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" rules="required"
                             v-model="lastName"/>
        <text-input-optional type="text" name="อีเมล" placeholder="กรอกอีเมล" rules="required" v-model="email"/>
        <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required"
                             v-model="telephone"/>
        <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                             rules="required" v-model="personID"/>
        <div class="row form-group">
          <div class="col-3 d-flex flex-column align-items-end">
            <div>
              <span class="text-danger" style="font-weight: bold">*</span> <span
              style="font-weight: bold; font-size: 14px">ที่อยู่:</span>
            </div>
            <span class="text-muted" style="font-size: 14px">(ตามที่ปรากฏในบัตรประชาชน)</span>
          </div>
          <div class="col-9 d-flex align-items-center justify-content-start">
                        <textarea class="form-control" placeholder="กรอกที่อยู่">
                        </textarea>
          </div>
        </div>
        <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                             rules="required" v-model="email"/>
        <div class="row form-group">
          <div class="col-3 d-flex align-items-center justify-content-end">
            <span class="text-danger" style="font-weight: bold">*</span> <span
            style="font-weight: bold; font-size: 14px">จังหวัด:</span>
          </div>
          <div class="col-7 d-flex align-items-center justify-content-start">
            <select class="form-control">
              <option>กรุณาเลือกจังหวัด</option>
              <option>Bangkok</option>
            </select>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3 d-flex align-items-center justify-content-end">
            <span class="text-danger" style="font-weight: bold">*</span> <span
            style="font-weight: bold; font-size: 14px">อำเภอ/เขต:</span>
          </div>
          <div class="col-7 d-flex align-items-center justify-content-start">
            <select class="form-control">
              <option>กรุณาเลือกอำเภอ/เขต</option>
              <option>Bangkok</option>
            </select>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3 d-flex align-items-center justify-content-end">
            <span class="text-danger" style="font-weight: bold">*</span> <span
            style="font-weight: bold; font-size: 14px">ตำบล/แขวง:</span>
          </div>
          <div class="col-7 d-flex align-items-center justify-content-start">
            <select class="form-control">
              <option>กรุณาเลือกตำบล/แขวง</option>
              <option>หัวหิน</option>
            </select>
          </div>
        </div>
        <text-input-optional className="col-7" type="text" name="รหัสไปรษณีย์" placeholder="กรอกรหัสไปรษณีย์"
                             rules="required" v-model="zipcode"/>
        <div class="row justify-content-center">
          <div class="d-flex justify-content-center my-4">
            <button class="btn btn-blue btn-block">สมัคร</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
})
