Vue.component('complete-step', {
  props: {
    skuId: {
      type: String,
      default: ''
    },
    addressStepData: {
      type: Object
    }
  },
  data: function () {
    return {
      me: getMe(),
      product: products[this.skuId]
    }
  },
  template: `<div>
  <p class="text-center"><img
    src="https://s3-ap-southeast-1.amazonaws.com/pam-pushandmotion/ecom/public/1dq0E2Bi6SQRNAWwipzVsTbQ5x5.png" alt="">
  </p>
  <h5 class="text-center"><b>คำขอทำพินัยกรรมเสร็จสมบูรณ์ ขอบคุณที่ไว้วางใจให้เราดูแลคุณ</b></h5>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <p><b>เลขที่สมาชิก</b></p>
      <p class="text-info mt-4"><b>{{me.user_id}}</b></p>
    </div>
    <div class="col-md-4">
      <b>วันที่ทำการ</b>
      <p class="text-info mt-4"><b>{{new Date()}}</b></p>
    </div>
    <div class="col-md-4">
      <b>ค่าใช้จ่ายทั้งหมด</b>
      <p class="text-info mt-4"><b>{{product.price}}</b></p>
    </div>

  </div>
  <p class="mt-4"><b>ชื่อและที่อยู่ผู้รับเอกสาร</b></p>
  <p class="text-info m-0"><b>{{addressStepData.start_name}} {{addressStepData.firstName}}
    {{addressStepData.lastName}}</b></p>
  <address class="text-info">
    {{addressStepData.address}}<br>
    {{addressStepData.telephone}}
  </address>

  <h6 class="text-center mt-5"><span style="color: red">*</span> <b>เอกสารจะจัดส่งถึงท่านภายใน 7 วันทำการ
    สอบถามเพิ่มเติมโทร 02-494-3898
    ต่อแผนกพินัยกรรม </b></h6>
  <div class="row justify-content-center  border-top mt-4 w-100">
    <div class="d-flex justify-content-center my-4">
      <a class="btn btn-primary" href="/">กลับสู่หน้าแรก</a>
    </div>
  </div>
</div>
</div>`
})
