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
  <div class="px-5 py-4">
    <span class="text-danger" style="font-weight: bold;">*</span>
    <span style="color: rgb(7, 113, 255); font-weight: bold;">
      {{msg2}}
    </span>
  </div>
</div>`
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
  <preview-bar msg="การแต่งตั้งผู้จัดการมรดก"
               msg2="ผผู้จัดการมรดก ต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ, ไม่เป็นผู้ไร้ความสามารถ และต้องไม่เป็นบุคคลล้มละลาย "/>
  <preview-bar msg="ทรัพย์มรดกทั้งหมดยกให้แก่"
               msg2="ผู้รับพินัยกรรม"/>

  <div class="row justify-content-center  border-top mt-4">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-default btn-block mr-4" type="button">ย้อนกลับ</button>
      <button class="btn btn-blue btn-block" type="button">ยืนยัน</button>
    </div>
  </div>
</div>`
})
