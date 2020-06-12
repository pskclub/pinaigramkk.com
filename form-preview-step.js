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
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">ผู้สมัครทำพินัยกรรม</h5>
  </div>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">การแต่งตั้งผู้จัดการมรดก</h5>
  </div>
  <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
    <h5 class="mb-0">ทรัพย์มรดกทั้งหมดยกให้แก่</h5>
  </div>
  <div class="row justify-content-center  border-top mt-4">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-default btn-block mr-4" type="button">ย้อนกลับ</button>
      <button class="btn btn-blue btn-block" type="button">ยืนยัน</button>
    </div>
  </div>
</div>`
})
