Vue.component('detail-step', {
  template: `<div>
  <form-step-bar :step="3"></form-step-bar>
  <h1>detail step</h1>
  <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="firstName"/>
  <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" rules="required"/>
  <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                       rules="required" v-model="personID"/>
  <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required"
                       v-model="telephone"/>
  <text-input-optional type="text" name="อีเมล" placeholder="กรอกอีเมล" rules="required"/>
  <div class="row form-group">
    <div class="col-3 d-flex flex-column align-items-end">
      <div>
        <span class="text-danger" style="font-weight: bold">*</span> <span
        style="font-weight: bold; font-size: 14px">ที่อยู่:</span>
      </div>
      <span class="text-muted" style="font-size: 14px">(ตามที่ปรากฏในบัตรประชาชน)</span>
    </div>
    <div class="col-9 d-flex align-items-center justify-content-start">
      <textarea class="form-control" placeholder="กรอกที่อยู่"></textarea>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',4)">สมัคร</button>
    </div>
  </div>
</div>`
})
