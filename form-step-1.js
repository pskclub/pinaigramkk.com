Vue.component('register-step-1', {
  data: function () {
    return {
      isAuth: false
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
        <span class="text-danger" style="font-weight: bold">*</span> <span style="color: #0771FF; font-weight: bold">ผู้สมัครทำพินัยกรรม ต้องมีอายุไม่ต่ำกว่า 15ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ และต้องไม่เป็นบุคคลไร้ความสามารถ</span>
      </div>
    </div>
    <div class="row px-5 py-4 justify-content-center">
      <div class="col-9">
        <div class="row form-group">
          <div class="col-5 d-flex align-items-center justify-content-end">
            <label class="text-danger" style="font-weight: bold">*</label> <label style="font-weight: bold">คำนำหน้าชื่อ:</label>
          </div>
          <div class="col-7 d-flex align-items-center justify-content-start">
            <input type="radio" name="title" id="nay" value="nay">
            <label for="nay">นาย</label>
            <input type="radio" name="title" id="nang" value="nang">
            <label for="nang">นาง</label>
            <input type="radio" name="title" id="nangsao" value="nangsao">
            <label for="nangsao">นางสาว</label>
            <input type="radio" name="title" id="other" value="other">
            <label for="other">อื่นๆ</label>
            <input type="text" class="form-control" placeholder="อื่นๆ">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
})
