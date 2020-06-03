Vue.component('detail-step', {
  template: `<div>
  <form-step-bar :step="3"></form-step-bar>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">การแต่งตั้งผู้จัดการมรดก</h5>
  </div>
  <div class="px-5 py-4 text-center"><span class="text-danger" style="font-weight: bold;">*</span>
    <span style="color: rgb(7, 113, 255); font-weight: bold;">
    ผู้จัดการมรดก ต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ, ไม่เป็นผู้ไร้ความสามารถ และต้องไม่เป็นบุคคลล้มละลาย 
    </span>
  </div>
  <div class="row justify-content-center">
    <div class="col-10">
      <start-name-input name="คำนำหน้าชื่อ" rules="required" v-model="start_name"/>
      <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="firstName"/>
      <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" rules="required"/>
      <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                           rules="required" v-model="personID"/>
      <upload-image-input name="สำเนาบัตรประชาชน" placeholder="กรอกที่อยู่"
                          rules="required" v-model="address"/>
      <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required"
                           v-model="telephone"/>
      <text-input-optional type="text" name="อีเมล" placeholder="กรอกอีเมล" rules="required"/>
      <text-area-input name="ที่อยู่" placeholder="กรอกที่อยู่" desc="(ตามที่ปรากฏในบัตรประชาชน)"
                       rules="required" v-model="address"/>
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
  <div class="px-5 py-4 text-center"><span class="text-danger" style="font-weight: bold;">*</span>
    <span style="color: rgb(7, 113, 255); font-weight: bold;">
    หากผู้จัดการมรดกคนที่ 1 ของข้าฯ ถึงแก่กรรมก่อน หรือไม่ยอมรับ หรือไม่มีความสามารถ ข้าฯ ขอแต่งตั้งผู้จัดการมรดกคนที่ 2 (แทนที่)
    </span>
  </div>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">ทรัพย์มรดกทั้งหมดยกให้แก่</h5>
  </div>
  <div class="py-4">
    <span style="color: rgb(7, 113, 255); font-weight: bold;">
  ผู้รับพินัยกรรม
    </span>
  </div>
  <div class="border rounded py-4 px-3">
    <p>1.ชื่อ-นามสกุล ทายาทหรือผู้รับมรดก</p>
    <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="firstName"/>
    <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" rules="required"/>
    <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                         rules="required" v-model="personID"/>
    <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="required"
                         v-model="telephone"/>
    <text-input-optional type="text" name="อีเมล" placeholder="กรอกอีเมล" rules="required"/>
  </div>
  <div class="row justify-content-center">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',4)">สมัคร</button>
    </div>
  </div>
</div>`
})
