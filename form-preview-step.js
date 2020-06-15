Vue.component('preview-bar', {
  props: {
    msg: {
      type: String
    },
    msg2: {
      type: String
    }
  },
  template: `<div>
  <div class="mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">{{msg}}</h5>
  </div>
  <div class="py-4">
    <span style="color: #0771FF; font-weight: bold;">
      {{msg2}}
    </span>
  </div>
</div>`
})

Vue.component('preview-step-line', {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  template: `
<div class="row mb-4">
  <div class="col-sm-3 text-right"><b>{{title}} :</b></div>
  <div class="col-sm-9">{{desc}}</div>
</div>
  `
})

Vue.component('preview-step', {
  props: {
    msg: {
      type: String
    }
  },
  data: function () {
    return {
      form: {
        start_name: '',
        firstName: '',
        lastName: '',
        personID: '',
        address: '',
        province: '',
        district: '',
        subDistrict: '',
        zipcode: ''
      }
    }
  },
  template: `<div>
  <preview-bar msg="ผู้สมัครทำพินัยกรรม"
               msg2="ผู้สมัครทำพินัยกรรม ต้องมีอายุไม่ต่ำกว่า 15 ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ และต้องไม่เป็นบุคคลไร้ความสามารถ"/>
  <preview-step-line title="คำนำหน้าชื่อ" desc="dsds"/>
  <preview-step-line title="ชื่อ" desc="dsds"/>
  <preview-step-line title="นามสกุล" desc="dsds"/>
  <preview-step-line title="เบอร์โทรศัพท์" desc="dsds"/>
  <preview-step-line title="อีเมล" desc="dsds"/>
  <preview-step-line title="เลขบัตรประจำตัวประชาชน" desc="dsds"/>
  <preview-step-line title="ที่อยู่" desc="dsds"/>
  <preview-bar msg="การแต่งตั้งผู้จัดการมรดก"
               msg2="ผผู้จัดการมรดก ต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ, ไม่เป็นผู้ไร้ความสามารถ และต้องไม่เป็นบุคคลล้มละลาย "/>
  <preview-step-line title="คำนำหน้าชื่อ" desc="dsds"/>
  <preview-step-line title="ชื่อ" desc="dsds"/>
  <preview-step-line title="นามสกุล" desc="dsds"/>
  <preview-step-line title="เบอร์โทรศัพท์" desc="dsds"/>
  <preview-step-line title="อีเมล" desc="dsds"/>
  <preview-step-line title="เลขบัตรประจำตัวประชาชน" desc="dsds"/>
  <preview-step-line title="ที่อยู่" desc="dsds"/>
  <preview-bar msg="ทรัพย์มรดกทั้งหมดยกให้แก่"
               msg2="ผู้รับพินัยกรรม"/>
  <preview-step-line title="คำนำหน้าชื่อ" desc="dsds"/>
  <preview-step-line title="ชื่อ" desc="dsds"/>
  <preview-step-line title="นามสกุล" desc="dsds"/>
  <preview-step-line title="เบอร์โทรศัพท์" desc="dsds"/>
  <preview-step-line title="อีเมล" desc="dsds"/>
  <preview-step-line title="เลขบัตรประจำตัวประชาชน" desc="dsds"/>
  <preview-step-line title="ที่อยู่" desc="dsds"/>

  <div class="row justify-content-center  border-top mt-4">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-default btn-block mr-4" type="button" @click="$emit('back')">ย้อนกลับ</button>
      <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',4)">ยืนยัน</button>
    </div>
  </div>
</div>`
})
