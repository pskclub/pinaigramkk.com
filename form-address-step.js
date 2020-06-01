Vue.component('address-step', {
  template: `<div>
  <form-step-bar :step="4"></form-step-bar>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">กรอกที่อยู่สำหรับจัดส่งเอกสาร</h5>
  </div>

  <div class="row justify-content-center">
    <div class="col-10">
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
            <span class="text-danger" style="font-weight: bold">*</span>
            <span style="font-weight: bold; font-size: 14px">ที่อยู่:</span>
          </div>

          <span class="text-muted text-right" style="font-size: 14px">(ตามที่ปรากฏในบัตรประชาชน)</span>
        </div>
        <div class="col-9 d-flex align-items-center justify-content-start">
          <textarea class="form-control" placeholder="กรอกที่อยู่"></textarea>
        </div>
      </div>
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
          <span class="text-danger" style="font-weight: bold">*</span>
          <span style="font-weight: bold; font-size: 14px">ตำบล/แขวง:</span>
        </div>
        <div class="col-7 d-flex align-items-center justify-content-start">
          <select class="form-control">
            <option>กรุณาเลือกตำบล/แขวง</option>
            <option>หัวหิน</option>
          </select>
        </div>
      </div>
      <text-input-optional
        className="col-7" type="text"
        name="รหัสไปรษณีย์" placeholder="กรอกรหัสไปรษณีย์"
        rules="required" v-model="zipcode"/>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',5)">สมัคร</button>
    </div>
  </div>
</div>`
})
