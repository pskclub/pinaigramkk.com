Vue.component('header-section', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#"><img
        alt=""
        src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZNhHNg7gPFRLlMupVuqB6chXq.jpg"></a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <div class="d-flex align-items-center">
              <div class="mr-1">
                <img
                  alt=""
                  src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZQ2Pepw6qOQDkYi0mdqFpctBC.jpg">
              </div>
              <div>
                <p class="mt-0" style="font-weight: 500;margin-bottom:-8px;">ติดต่อสอบถาม</p>
                <h3 class="m-0" style="font-weight: 800;">02-494-3898, 098-262-7990</h3>
              </div>
            </div>

          </a>
        </li>
      </ul>
    </div>
  </nav>
`
})

Vue.component('navbar-section', {
  template: `
  <div class="bg-white shadow-sm">
    <ul class="nav container nav-text">
      <li class="nav-item">
        <a class="nav-link active" href="#home">หน้าแรก</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#customer">ลูกค้าของเรา</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#howto">ขั้นตอนการสมัคร</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#tanai">ทีมทนายผู้มีประสบการณ์</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#register">สมัครวันนี้ฟรีสัมมนา</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#kkgroup">KK Group</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#safe">ตู้เซฟนิรภัย</a>
      </li>
    </ul>
  </div>
`
})

Vue.component('slide-show-section', {
  template: `  <div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
    <ol class="carousel-indicators">
      <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
      <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img alt="..."
             class="w-100"
             src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZRQN8qxt6zUMK5L7w7RRQyUzt.jpg">
      </div>
      <div class="carousel-item position-relative">
        <img class="w-100"
             src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZRTAvPxNEVc0OOdxuXLWbAX3j.jpg">
        <div class="w-100 pt-5 position-absolute text-white h-100" style="top:0;">
          <div class="container h-100 d-flex align-items-center">
            <div class="w-100">
              <div class="row">
                <div class="col-6">
                  <div style="font-size: 22px;">
                    <p><span class="mr-3"
                             style="display: inline-block;width: 15px;height: 15px;background: #4A4A4A 0% 0% no-repeat padding-box;border-radius: 100%"></span>ไม่อยากให้ลูกหลานทะเลาะเรื่องมรดก
                    </p>
                    <p><span class="mr-3"
                             style="display: inline-block;width: 15px;height: 15px;background: #4A4A4A 0% 0% no-repeat padding-box;border-radius: 100%"></span>จัดทำตามหลักถูกต้องตามกฏหมาย
                    </p>
                    <p><span class="mr-3"
                             style="display: inline-block;width: 15px;height: 15px;background: #4A4A4A 0% 0% no-repeat padding-box;border-radius: 100%"></span>จจัดเก็บในตู้เซฟนิรภัยป้องกันอัคคีภัย และการโจรกรรม
                    </p>
                  </div>


                  <div class="d-flex px-5 justify-content-center">
                    <button class="btn btn-white mr-4">ขอข้อมูลเพิ่มเติม</button>
                    <button class="btn btn-blue">ซื้อพินัยกรรม</button>
                  </div>
                </div>
                <div class="col-5  offset-1">
                  <div class="d-flex justify-content-end">
                    <div class="d-flex">
                      <p>เพียง</p>
                      <p class="text-info" style="text-shadow: 0px 2px 4px #00000080;font-size: 100px">7,000 </p>
                      <p style="align-self: flex-end;">บาท</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
})

Vue.component('customer-section', {
  template: `
  <div class="bg-section" id="customer">
    <div class="container py-5 ">
      <h1 class="text-info mb-5">ลูกค้าของเรา</h1>
      <div class="d-flex mb-5">
        <img alt="" class="mr-4"
             src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZSQaNpbzJMe8VXSi1fpcaoqgu.jpg">
        <div class="position-relative">
          <img
            alt=""
            src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZSe3n8RMrYXnIh0DgcFiuUhRd.jpg">
          <p class="text-center position-absolute w-100 font-weight-bold"
             style="font-size: 28px;top:0;margin-top: 30px;">
            <span>มีพินัยกรรมไว้ สะดวก</span> <br><span>และง่ายในการแบ่งปันมรดก</span></p>
        </div>

      </div>
      <div class="d-flex justify-content-end mb-5">
        <div class="position-relative">
          <img
            alt=""
            src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZSqAOuMvsqzBMx6pt0NxguRzX.jpg">
          <p class="text-center position-absolute w-100 font-weight-bold"
             style="font-size: 28px;top:0;margin-top: 30px;">
            <span>หากไม่มีพินัยกรรม</span> <br><span>อาจเกิดปัญหา และข้อขัดแย้งในทรัพย์สิน</span></p>
        </div>
        <img alt=""
             src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZSVbZGyF3p6SqiG6y8XHPGYrM.jpg">
      </div>
      <h1 class="text-info mb-5">ทำพินัยกรรมไว้ดีอย่างไร</h1>
      <div class="row">
        <div class="col-md-5">
          <img alt=""
               class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YZTHab014teA9jozlOlL4JFSAD.jpg">
        </div>
        <div class="col-md-7">
          <p>
            การทำพินัยกรรมเป็นการแสดงเจตนากำหนดว่าถ้าตายไปแล้วทรัพย์สินจะตกได้แก่ผู้ใดรวมทั้งกำหนดการเผื่อตายในเรื่องอื่นๆที่อาจจะไม่ใช่ทรัพย์สินก็ได้
            เช่น กำหนดว่าให้ใครเป็นผู้จัดการทรัพย์มรดก หรือกำหนดในเรื่องการทำศพ หรือยกศพของตนให้โรงพยาบาล
            หรือตัดไม่ให้ลูกของตนได้รับมรดกเป็นต้น</p>
          <a class="text-info" href="">อ่านรายละเอียดเพิ่มเติม</a>
        </div>
      </div>
    </div>
  </div>
`
})

Vue.component('howto-section', {
  template: `
   <div class="container py-5" id="howto">
    <h1 class="text-info text-center mb-5">ขั้นตอนการสมัคร</h1>
    <div class="d-flex text-center flex-column ">
      <div class="d-flex text-center mb-3">
        <div class="position-relative" style="width: 281.25px">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbmZ07XxBn4l08xwd8XmBs8j6P.jpg">
          <div class="position-absolute text-center w-100" style="top:130px;">
            <div class="d-flex align-items-center flex-column" style="height: 100px;">
              <h3 class="font-weight-bold w-100">สมัคร</h3>
              <p class="font-weight-bold w-100">กรอกข้อมูลต่างๆ ของท่าน</p>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="height: 120px;">
              <img
                alt=""
                class="mt-4"
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfImLJaLJv94KasDSA4vAwCWme.jpg">
            </div>
          </div>
        </div>
        <div class="position-relative" style="width: 281.25px">
          <img alt=""
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbmcBIG3TpOogt47ixMoVq3qwU.jpg">
          <div class="position-absolute text-center w-100" style="top:130px;">
            <div class="d-flex align-items-center" style="height: 100px;">
              <p class="font-weight-bold w-100">หากข้อมูลไม่ครบถ้วนทีมทนายความ <br> จะติดต่อกลับเพื่อขอข้อมูลเพิ่มเติม
              </p>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="height: 120px;">
              <img
                class="mt-4"
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfJXSi9AGfAO3r1G4WriMTu6fM.jpg">
            </div>
          </div>
        </div>
        <div class="position-relative" style="width: 281.25px">
          <img alt=""
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbmeIq2lKESjJRNUWbD5JfiMeD.jpg">
          <div class="position-absolute text-center w-100" style="top:130px;">
            <div class="d-flex align-items-center" style="height: 100px;">
              <p class="font-weight-bold w-100">จัดทำพินัยกรรม</p>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="height: 120px;">
              <img
                class="mt-4"
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfJZsy6g20Xb5Icnuv1jROMrBO.jpg">
            </div>
          </div>
        </div>
        <div class="position-relative" style="width: 281.25px">
          <img alt=""
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbmgLJVrxS5UPM9PRcy5KCnz2f.jpg">
          <div class="position-absolute text-center w-100" style="top:130px;">
            <div class="d-flex align-items-center" style="height: 100px;">
              <p class="font-weight-bold w-100">ส่งพินัยกรรมถึงท่านพร้อมลงนาม</p>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="height: 120px;">
              <img
                class="mt-4"
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfJcx1nQaWd0QfDoevjouzS7b0.jpg">
            </div>

          </div>
        </div>
      </div>

      <img alt="" class="w-100"
           src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbmUMffZJPFDNgnlf5oYYEcFad.jpg">
    </div>

  </div>
  `
})

Vue.component('tanai-section', {
  template: `
<div class="tanai" id="tanai">
  <div class="container py-5">
    <h1 class="text-info mb-5">ทีมทนายผู้มีประสบการณ์</h1>
    <div class="text-center">
      <img alt="" class="mb-3"
           src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbpHAjjeqVgRYSJqDE3EwdFzKY.jpg">
      <h4 class="mb-5 font-weight-bold">KT International Law Company Limited</h4>
      <p> บริษัท เคที อินเตอร์เนชั่นแนล ลอว์ จำกัด เป็นสำนักงานทนายความที่ขึ้นทะเบียนกับสภาทนายความแห่งประเทศไทย
        ตั้งแต่ปี พ.ศ. 2548 รับบริการจัดทำพินัยกรรมให้กับลูกค้ามาแล้วกว่า 10 ปี
        และบริการยื่นคำร้องขอต่อศาลให้มีคำสั่งแต่งตั้งผู้จัดการมรดกมาแล้วมากกว่า 100 เรื่อง ทั่วราชอาณาจักรไทย </p>
    </div>
  </div>
</div>
  `
})

Vue.component('register-section', {
  props: {
    fromStep: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      step: 0,
      isAuth: false,
      productId: '',
      skuId: qs['skuId'],
      registerStepData: null,
      addressStepData: null
    }
  },
  created: function () {
    this.step = this.fromStep
    this.isAuth = isAuth()
  },
  computed: {
    product: function () {
      return products[this.skuId]
    }
  },
  methods: {
    onSelectProduct (productId, skuId) {
      this.productId = productId
      this.skuId = skuId
      this.$emit('next')
      this.setStep(1)
    },
    setProduct (productId, skuId) {
      window.$('#conditionModal').modal('show')
      this.productId = productId
      this.skuId = skuId
    },
    setStep (step) {
      this.step = step
    },
    paymentStepSubmit (form) {
      makeOrder(this.productId, this.skuId, this.registerStepData, form).catch(e => {
        console.log(JSON.stringify(e))
        alert(JSON.stringify(e.response.data))
      })
    },
    registerStepSubmit (form) {
      this.registerStepData = form
      if (!this.isAuth) {
        register({
          email: form.email,
          password: form.password,
          firstname: form.firstName,
          lastname: form.lastName,
          contact_email: form.email,
          contact_mobile: form.telephone
        })
          .then((res) => {
            setCookie('me', encodeURIComponent(JSON.stringify(res.data)))
            alert('register success')
            this.setStep(2)
          }).catch(e => {
          console.log(JSON.stringify(e))
          alert(JSON.stringify(e.response.data))
        })
      } else {
        this.setStep(2)
      }
    },
    detailStepSubmit (form) {
      createForm(qs['id'] + 'detail', form, qs['id'] + 'detail').then(() => {
        this.setStep(4)
      }).catch(e => {
        console.log(JSON.stringify(e))
        alert(JSON.stringify(e.response.data))
      })
    },
    addressStepSubmit (form) {
      this.addressStepData = form
      createForm(qs['id'] + 'address', form, qs['id'] + 'address').then(() => {
        this.setStep(5)
      }).catch(e => {
        console.log(JSON.stringify(e))
        alert(JSON.stringify(e.response.data))
      })
    }
  },
  template: `<div class="container py-5" id="register">
  <div v-if="step === 0">
    <h1 class="text-info text-center">สมัครวันนี้ฟรีสัมมนา</h1>
    <div class="text-center mt-5" style="color:#525553;">
      <p class="mb-0" style="font-size: 24px"><b>ในวันที่ 25 กุมภาพันธ์ 2563</b></p>
      <p style="font-size: 24px">ที่สำนักงานใหญ่ <b>KK Group</b></p>
    </div>
  </div>

  <div v-if="step > 0">
    <register-step :skuId="skuId" :isAuth="isAuth" @reset="setStep(0)" @changeStep="setStep"
                   @submit="registerStepSubmit" v-if="step === 1"></register-step>
    <payment-step :skuId="skuId" @reset="setStep(0)" @changeStep="setStep" @submit="paymentStepSubmit"
                  v-if="step === 2"></payment-step>
    <detail-step :skuId="skuId" @reset="setStep(0)" @changeStep="setStep" @submit="detailStepSubmit"
                 v-if="step === 3"></detail-step>
    <address-step :skuId="skuId" @reset="setStep(0)" @changeStep="setStep" @submit="addressStepSubmit"
                  v-if="step === 4"></address-step>
    <complete-step :addressStepData="addressStepData" :skuId="skuId" @reset="setStep(0)" @changeStep="setStep"
                   v-if="step === 5"></complete-step>
  </div>
  <div v-else class="row equal p-5">
    <div class="col-md-4 ">
      <div class="card h-100">
        <div class="card-body d-flex  flex-column">
          <h2 class="text-info font-weight-bold  text-center" style="height: 80px">Easy Will</h2>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YcI8T1QrJGKFGXpTdS9NyswQi1.jpg"
            style="position: absolute;right: 0;top:0;">
          <div>
            <div class="text-center mt-5 mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Yc6LIpv5eSeQcMnWVpHOGghgvp.jpg">
            </div>
            <ul class="product-list">
              <li>ร่างพินัยกรรมโดยกำหนดสัดส่วนการรับมรดก และส่งให้ถึงมือคุณ</li>
              <li>มีผลถูกต้องใช้บังคับได้ตามกฎหมาย</li>
            </ul>
          </div>
          <div class="text-center d-flex justify-content-end flex-column" style="flex:1">
            <p class="font-weight-bold" style="font-size: 45px;color: #0771FF">7,000 บาท</p>
            <div class="d-flex justify-content-center">
              <button @click="setProduct('1dROVSw0zZG6QucAMQ7Sw8Wc2JR', '1dROVXqKRKAQNQ0deStt6185EpW')"
                      class="btn btn-blue btn-block">สมัคร
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body d-flex  flex-column">
          <h2 class="text-info font-weight-bold  text-center" style="height: 80px">Will & Safe Custody</h2>
          <div>
            <div class="text-center mt-5 mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Yc6LIpv5eSeQcMnWVpHOGghgvp.jpg">
            </div>
            <ul class="product-list">
              <li>ร่างพินัยกรรมโดยกำหนดสัดส่วนหรือจำแนกการรับมรดก และส่งให้ถึงมือคุณ</li>
              <li><b>จัดเก็บรักษาพินัยกรรมไว้ในตู้นิรภัยของบริษัท 10 ปี ปลอดภัยสบายใจ</b></li>
              <li>มีผลถูกต้องใช้บังคับได้ตามกฎหมาย</li>
            </ul>
          </div>
          <div class="text-center d-flex justify-content-end flex-column" style="flex:1;">
            <p class="font-weight-bold" style="font-size: 45px;color: #0771FF">20,000 บาท</p>
            <div class="d-flex justify-content-center">
              <button @click="setProduct('1dROcydNBbFYPzUy143PEKXdrPV', '1dROcrxCLiVP8P5p0uFx8g86H88')"
                      class="btn btn-blue btn-block">สมัคร
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body d-flex  flex-column">
          <h2 class="text-info font-weight-bold  text-center" style="height: 80px">Comprehensive Will Plus A</h2>
          <div>
            <div class="text-center mt-5 mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Yc6LIpv5eSeQcMnWVpHOGghgvp.jpg">
            </div>
            <ul class="product-list">
              <li>ร่างพินัยกรรมโดยกำหนดสัดส่วนหรือจำแนกการรับมรดก และส่งให้ถึงมือคุณ</li>
              <li>จัดเก็บรักษาพินัยกรรมไว้ในตู้นิรภัยของบริษัทตลอดชีพ
                ปลอดภัยสบายใจและยื่นคำร้องขอต่อศาลเพื่อจัดการมรดกให้เป็นไปตาม
                ความประสงค์ของท่าน
              </li>
              <li>มีผลถูกต้องใช้บังคับได้ตามกฎหมาย</li>
            </ul>
          </div>
          <div class="text-center d-flex justify-content-end flex-column" style="flex:1;">
            <p class="font-weight-bold" style="font-size: 45px;color: #0771FF">40,000 บาท</p>
            <div class="d-flex justify-content-center">
              <button @click="setProduct('1dROkNXnyQxuuK7M87AXdBcOJuK', '1dROkLb71QYd49g5Fw4E9uoxDhY')"
                      class="btn btn-blue btn-block">สมัคร
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="modal fade footer-modal" id="conditionModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="pb-3">
          <h4 class="text-center mb-4" style="color: #0771FF;">ข้อกำหนดเงื่อนไขการรับบริการร่างพินัยกรรม</h4>
          <div class="border-top border-bottom ">
            <div style="white-space: pre-line;word-break: break-word;max-height: 400px;overflow-y: auto"
                 class="my-3 px-3 ">
              <div v-if="product">
                1. ข้าพเจ้าขอแต่งตั้งให้ บริษัท เคเค เว็ลธ์ แมเนจเม้นท์ จำกัด (ซึ่งต่อไปในข้อกำหนดนี้เรียกว่า “บริษัท)
                ดำเนินการจัดร่างทำพินัยกรรมให้แก่ข้าพเจ้าตลอดจนเป็นผู้จัดเก็บรักษาพินัยกรรมของข้าพเจ้ามีกำหนดระยะเวลาตามใบคำขอสมัครเพื่อรับบริการเท่านั้น
                โดยอาศัยข้อมูลที่แจ้งให้ทราบตามใบคำขอจัดทำร่างพินัยกรรม
                2. ข้าพเจ้าได้ชำระค่าธรรมเนียมในการจัดร่างทำพินัยกรรมตามใบคำขอสมัครเพื่อรับบริการ เป็นจำนวนเงินทั้งสิ้น
                {{product.price}} บาท ให้กับ บริษัท โดยตรงเมื่อได้มีการยื่นใบคำขอสมัครเพื่อรับบริการแล้ว
                3. ข้าพเจ้าตกลงว่า จะไม่ดำเนินการเรียกร้องให้บริษัทคืนค่าธรรมเนียมทั้งหมด หรือแต่เพียงบางส่วน
                เมื่อได้มีการชำระเงินตามใบคำขอสมัครเพื่อรับบริการ ไม่ว่าจะด้วยสาเหตุใดก็ตาม ยกเว้นในกรณีที่ บริษัท
                จะปฏิเสธคำขอของข้าพเจ้า
                4. ข้าพเจ้าตกลงที่จะแจ้งข้อมูลต่าง ๆ ที่ต้องใช้ในการจัดทำร่างพินัยกรรมให้แก่บริษัท ภายในกำหนด 90
                วันนับตั้งแต่วันที่ข้าพเจ้าได้ชำระเงินค่าธรรมเนียมและยื่นใบคำขอสมัครเพื่อรับบริการ
                และหากครบกำหนดเวลาข้าพเจ้าขอสละสิทธิการรับบริการร่างพินัยกรรม หรือการบริการอื่นใด
                ที่เกี่ยวข้องกับการพินัยกรรมที่ข้าพเจ้าได้ก่อให้เกิดขึ้นกับบริษัท
                5. ข้าพเจ้ายินยอมให้ บริษัท เปิดเผยหรือให้ข้อมูลใดๆ ของข้าพเจ้าแก่ตัวแทน ผู้กระทำการแทน ทนายความ
                และ/หรือคู่ค้า ที่ได้รับการแต่งตั้งโดย บริษัท เพื่ออำนวยความสะดวกในการจัดทำพินัยกรรมให้แก่ข้าพเจ้า
                6. ข้าพเจ้าเข้าใจดีว่า บริษัท รวมถึง พนักงาน ตัวแทน ทนายความ พันธมิตรทางธุรกิจ และ/หรือ ผู้กระทำการแทน
                มีหน้าที่ในการจัดทำร่างพินัยกรรมตามคำสั่งที่ข้าพเจ้าได้สั่งไว้เท่านั้น และรวมถึงบริการอื่น ๆ
                ที่ข้าพเจ้าได้ยื่นใบคำขอสมัครเพื่อรับบริการ
                และยืนยันข้อมูลที่ได้ให้ไว้เพื่อจัดร่างทำพินัยกรรมของข้าพเจ้านั้นเป็นความจริงทุกประการ
                รวมถึงจะเป็นผู้รับผิดชอบในความเสียหายใดๆ ที่อาจเกิดขึ้นจากคำสั่งของข้าพเจ้า
                และจะไม่ดำเนินการเรียกร้องให้รับผิดชอบในความล่าช้าใดๆ ที่อาจเกิดขึ้น
                หรือหากข้อกำหนดในพินัยกรรมไม่สามารถดำเนินการได้ตามกฎหมายและ/หรือกระทบกระเทือนถึงสิทธิของบุคคลอื่นใด
                โดยข้าพเจ้าเป็นผู้ให้คำสั่งไว้
                7. ข้าพเจ้าตกลงและเข้าใจว่า มีข้อกำหนดบางส่วนในพินัยกรรมของข้าพเจ้านั้น เป็นข้อกำหนดมาตรฐานของบริษัท และ
                ข้าพเจ้าขอยอมรับว่า ข้อความดังกล่าวนั้นเป็นไปตามความประสงค์ของข้าพเจ้า
                8. ข้าพเจ้ายอมรับและเข้าใจว่าค่าธรรมเนียมในการบริการต่าง ๆ ของบริษัทนั้น อาจมีการเปลี่ยนแปลง ได้
                เมื่อข้าพเจ้าได้ยื่นใบคำขอสมัครเพื่อรับบริการแล้ว
                ข้าพเจ้าตกลงและยินยอมว่าจะไม่ดำเนินการเรียกร้องให้คืนค่าธรรมเนียมทั้งหมด หรือบางส่วน
                เมื่อได้มีการยื่นใบคำขอสมัครเพื่อรับบริการไม่ว่าด้วยสาเหตุใดก็ตาม ยกเว้นในกรณีที่บริษัท
                ปฏิเสธคำขอของข้าพเจ้า
                9. บริษัท จะมีหนังสือแจ้งเตือนการต่ออายุการเก็บรักษาพินัยกรรมของข้าพเจ้า
                ส่งไปยังสถานที่อันเป็นที่อยู่ตามที่ข้าพเจ้าได้แจ้งไว้ในเอกสารฉบับนี้
                หรือตามสถานที่อันเป็นที่อยู่ซึ่งข้าพเจ้า ได้ทำหนังสือแจ้งเป็นลายลักษณ์อักษรถึง บริษัท 1
                เดือนล่วงหน้าก่อนวันหมดอายุ ค่าธรรมเนียมการต่ออายุจะจ่ายให้กับ บริษัท โดยตรง บริษัท
                จะไม่รับผิดชอบต่อการจัดเก็บรักษาพินัยกรรมของข้าพเจ้า
                หากไม่มีการดำเนินการต่ออายุภายหลังจากครบกำหนดระยะเวลาตามใบคำขอสมัครเพื่อรับบริการ
                10. ในกรณีที่ข้าพเจ้าไม่มารับพินัยกรรมจาก บริษัท หลังจากวันครบกำหนด บริษัท
                สามารถเลือกใช้สิทธิต่ออายุสัญญาการเก็บรักษาพินัยกรรมต่อไป
                หรือดำเนินการส่งพินัยกรรมของข้าพเจ้าโดยทางไปรษณีย์ตามสถานที่อันเป็นที่อยู่ที่ได้ระบุไว้ในเอกสารฉบับนี้
                หรือตามสถานที่อันเป็นที่อยู่ซึ่งข้าพเจ้าได้ทำหนังสือแจ้งเป็นลายลักษณ์อักษรถึง บริษัท โดยบริษัท
                จะดำเนินการคิดอัตราค่าบริการตามจริง หรือหากบริษัทเลือกที่จะใช้สิทธิส่งคืน เมื่อบริษัท
                ได้ส่งคืนตามสถานที่อันเป็นที่อยู่แล้ว บริษัท จะพ้นจากความรับผิด และพ้นจากหน้าที่
                หรือบทบาทผู้ดูแลรักษาพินัยกรรมทันที
                11. ข้าพเจ้าแต่งตั้งให้ บริษัท ส่งบัตรเก็บรักษาพินัยกรรมจำนวน 3
                ฉบับไปยังที่อยู่ของข้าพเจ้าที่แจ้งไว้ในเอกสารฉบับนี้
                ข้าพเจ้าจะเป็นผู้รับผิดชอบในการส่งบัตรเก็บรักษาพินัยกรรม
                และอธิบายถึงข้อกำหนดการใช้บัตรแก่บุคคลที่ข้าพเจ้ามอบอำนาจให้แต่งตั้งให้
                และมอบหมายให้เบิกพินัยกรรมเมื่อข้าพเจ้าล่วงลับแล้ว
                12. ตลอดชีวิตของข้าพเจ้าการเบิก
                หรือปลดทิ้งซึ่งพินัยกรรมตามคำขอของข้าพเจ้าจะกระทำโดยข้าพเจ้าเท่านั้นและกระทำที่สำนักงานใหญ่ของบริษัท
                ซึ่งเป็นสถานที่เก็บรักษาพินัยกรรม
                โดยข้าพเจ้าจะต้องแสดงบัตรเก็บรักษาพินัยกรรมพร้อมทั้งบัตรประจำตัวประชาชนตัวจริงเมื่อมีการขอเบิกพินัยกรรม
                13. เมื่อหรือหลังจากที่ข้าพเจ้าเสียชีวิตแล้ว บริษัท
                จะพิจารณาส่งคืนพินัยกรรมแก่บุคคลที่ข้าพเจ้าได้ระบุไว้ในพินัยกรรมว่า ให้เป็นผู้รับมอบอำนาจกระทำการ
                หรือแต่งตั้งให้เป็นผู้จัดการมรดก
                เมื่อมีการขอเบิกพินัยกรรมบุคคลนั้นต้องแสดงบัตรเก็บรักษาพินัยกรรมพร้อมทั้งบัตรประจำตัวประชาชน
                และใบมรณะบัตรของข้าพเจ้า ทั้งนี้ บริษัท
                ขอสงวนสิทธิ์ในการให้ผู้เบิกพินัยกรรมได้นั้นต้องเป็นผู้ที่บริษัทพิจารณาแล้วเห็นสมควรเท่านั้น
                14. ในกรณีที่ข้าพเจ้าให้ บริษัท เก็บรักษาพินัยกรรมฉบับใหม่ และฉบับต่อๆไป บริษัท
                จะพิจารณาส่งคืนพินัยกรรมฉบับเก่าไปยังที่อยู่ของข้าพเจ้าที่ระบุไว้
                หรือตามที่อยู่ที่ข้าพเจ้าได้ทำหนังสือแจ้งเป็นลายลักษณ์อักษรถึง บริษัท
                15. ข้าพเจ้าเป็นผู้รับผิดชอบที่จะแจ้งให้ บริษัท
                ทราบกรณีที่มีการเปลี่ยนแปลงที่อยู่รวมถึงรายละเอียดอื่นๆหากข้าพเจ้ามิได้แจ้ง เปลี่ยนแปลงที่อยู่และบริษัท
                ส่งเอกสารใดๆ ไปยังที่อยู่เดิม ให้ถือว่าการส่งเอกสารนั้นๆ เป็นการส่งที่ชอบด้วยกฎหมายแล้ว
                16. ข้อกำหนดและเงื่อนไขนี้ จะมีผลบังคับและผูกพัน แก่ทายาท ญาติ ผู้จัดการมรดก ผู้รับมอบอำนาจ ตัวแทน
                ผู้รับมรดกตลอดจนบุคคลผู้เกี่ยวข้องกับพินัยกรรมฉบับนี้ของข้าพเจ้า
                17. ความไม่ชอบด้วยกฏหมาย หรือการบังคับใช้ไม่ได้ของเงื่อนไข และข้อกำหนดไม่ว่าส่วนใดส่วนหนึ่ง
                จะไม่ส่งผลกระทบไปถึงสัญญา เงื่อนไขหรือข้อกำหนดอื่นๆ ให้ตกเป็นโมฆะ
                18. ข้าพเจ้าตกลงและเข้าใจว่า บริษัท ขอสงวนสิทธิ์ในการเพิ่ม ลบ
                หรือแก้ไขส่วนหนึ่งส่วนใดของข้อกำหนดและเงื่อนไขข้างต้น โดยบริษัทจะแจ้งให้ทราบล่วงหน้า การเพิ่มเติม
                การแก้ไข หรือลบทิ้งจะถือเป็นส่วนหนึ่งของสัญญาและจะมีผลผูกพันต่อทุกฝ่ายที่เกี่ยวข้อง
              </div>
            </div>
            <div class="form-group mx-3 form-check">
              <input readonly type="checkbox" checked class="form-check-input">
              <label class="form-check-label">ข้าพเจ้าเข้าใจและยอมรับข้อกำหนดการรับบริการดังกล่าว</label>
            </div>
          </div>
        </div>
        <div class="text-center py-3" style="margin: 0 auto;">
          <button @click="onSelectProduct(productId, skuId)" type="button" class="btn btn-primary border"
                  data-dismiss="modal"
                  style="width: 200px;">
            ตกลง
          </button>
          <button type="button" class="btn btn-light border" data-dismiss="modal"
                  style="width: 200px;background-color: white">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center" v-if="step === 0">
    <p class="mb-0" style="font-size: 22px;"><span class="text-danger">*</span>
      นโยบายและเงื่อนไขการยกเลิกการจัดทำร่างพินัยกรรมภายใน 7 วัน
    </p>
    <a class="text-info" href="#" style="font-size: 22px;">อ่านรายละเอียดเพิ่มเติม</a>
    <p class="mt-5" style="font-size: 28px">สอบถามข้อมูลเพิ่มเติมได้ที่ <img
      alt="" class="mx-2" height="15px"
      src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Ybpm1JCApZJNUZMhoN6sGNehWU.jpg">
      <b>02-494-3898, 098-262-7990 ต่อแผนกพินัยกรรม</b></p>
  </div>
</div>
  `
})

Vue.component('kkgroup-section', {
  template: `
    <div class="bg-section" id="kkgroup">
    <div class="container py-5 ">
      <h1 class="text-info mb-5">KK Group</h1>
      <p class="font-weight-bold" style="color:#525553;">
        ด้วยประสบการณ์ทางด้านประกันชีวิต และ พินัยกรรม มากกว่า50 ปี เรามั่นใจว่าบริการของเราเป็นที่ 1 ในตลาด
        เราเน้นการบริหารงานแบบ "ไทย" คือ ให้ความอบอุ่นด้วยมิตรภาพ และความเข้าใจของพี่น้องชาวไทยด้วยกัน
      </p>
      <div class="row">
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLWUfVNRSl97Rx4vOLXBpwbjZ.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLYDxqs0Qs4H554KvfeTuTcRy.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLa3mlUWTHWCPGG4FwcKnlSZg.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLbrCDxu8JsT54JkJPsN7jM0Y.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLdjybt7akgAfwxhVZ5flACjn.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLfjTbq6V6cV85HmR5wHjuYNx.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLiQLem1zPdKUm5dkqvVuKTl1.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLkDMIV6qtiFLxSMImXLG6c3x.jpg">
        </div>
        <div class="col-md-4 mb-3">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfLlwdbic4aQFsZw8uFR9kanjZ.jpg">
        </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('safe-section', {
  template: `
    <div id="safe">
    <div class="container py-5 ">
      <h1 class="text-info mb-5">ตู้เซฟนิรภัยป้องกันอัคคีภัย</h1>
      <p class="font-weight-bold" style="color:#525553;">
        ตู้เซฟนิรภัยที่ใช้เก็บพินัยกรรม มีระบบรักษาความปลอดภัยตลอด 24 ชั่วโมง
      </p>
      <div class="row">
        <div class="col-md-4">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfKWjS2uGLzcqVozBekg2s0v8D.jpg">
          <p class="text-center text-info mt-3">ตู้เซฟนิรภัยป้องกันอัคคีภัย</p>
        </div>
        <div class="col-md-4">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfKZzYn0SdCyDgRHxQZWqcbGQ2.jpg">
          <p class="text-center text-info mt-3">ตู้เซฟนิรภัยป้องกันอัคคีภัย</p>
        </div>
        <div class="col-md-4">
          <img alt="" class="w-100"
               src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YfKcCT4vEImLg6sTpP8NZIvwWe.jpg">
          <p class="text-center text-info mt-3">ตู้เซฟนิรภัยป้องกันอัคคีภัย</p>
        </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('map-section', {
  template: `
  <div class="py-5 bg-white">
    <h1 class="text-info text-center mb-5">แผนที่เดินทางมา KK CITY</h1>
    <div>
      <iframe allowfullscreen class="w-100"
              frameborder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.964217414735!2d100.40013931526573!3d13.960735596177702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28f2f10481e13%3A0xb1ad80b9489e392e!2sKK%20City!5e0!3m2!1sth!2sth!4v1583328341651!5m2!1sth!2sth"
              style="border:0;height: 500px"></iframe>
    </div>
    <div class="text-center mt-3" style="color: #525553;">
      <img alt=""
           src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1YbwkMN8Jf5v2GHtZ1G7CejlT8D.jpg">
      <b>Open on</b> <a href="">Google Maps</a>
    </div>
    <div class="text-center mt-4">
      <img alt=""
           src="https://s3-ap-southeast-1.amazonaws.com/pam4-sansiri/ecom/public/1Ybx0aRBpG3BJiLLAtcSeTWzghU.jpg">
    </div>
    <div class="d-flex justify-content-center mt-3 font-weight-bold">
      <div><p>บริษัท เคเค เว็ลธ์ แมแนจเม้นท์ จำกัด <br>
        KK Wealth Management Co., Ltd.
      </p></div>
      <div class="border-left mx-5" style="border-left-color: #000000 !important;"></div>
      <div><p>บริษัท เคที อินเตอร์เนชั่นแนล ลอว์ จำกัด <br>
        KT International Law Company Limited</p></div>
    </div>
    <p class="text-center mt-3"><b>8/39 อาคาร เคเค ซิตี้ หมู่ที่ 9 ถ.บางบัวทอง-สุพรรณบุรี <br>
      ต.ละหาร อ.บางบัวทอง จ.นนทบุรี 11110
    </b></p>
    <p class="text-center"><b>Tel.</b> <span class="text-info">02-494-3898, 098-262-7990</span></p>
  </div>
  `
})

const footerModalContent = {
  privacy: privacy,
  conditions: condition,
  shippingStep: shippingStep,
  refundStep: refundStep
}

Vue.component('footer-section', {
  data: function () {
    return {
      modalText: footerModalContent.privacy,
      modalTitle: ''
    }
  },
  methods: {
    onPrivacy: function () {
      this.modalText = footerModalContent.privacy
      this.modalTitle = 'นโยบายความเป็นส่วนตัว'
    },
    onCondition: function () {
      this.modalText = footerModalContent.conditions
      this.modalTitle = 'ข้อกำหนดเงื่อนไข'
    },
    onShipping: function () {
      this.modalText = footerModalContent.shippingStep
      this.modalTitle = 'ขั้นตอนจัดส่ง'
    },
    onRefund: function () {
      this.modalText = footerModalContent.refundStep
      this.modalTitle = 'ขั้นตอนคืนหรือเปลี่ยน'
    }
  },
  template: `<div>
  <div style="background-color: #F9E014">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="modal fade footer-modal" id="policyModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header border-bottom-0">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="pb-3">
                  <h4 class="text-center mb-4" style="color: #0771FF;">ข้อกำหนดเงื่อนไขการรับบริการร่างพินัยกรรม </h4>
                  <div class="border-top border-bottom ">
                    <div style="white-space: pre-line;word-break: break-word;max-height: 400px;overflow-y: auto"
                         class="my-3 px-3 ">
                      {{modalText}}
                    </div>
                  </div>

                </div>
                <div class="text-center py-3" style="margin: 0 auto;">
                  <button type="button" class="btn btn-light border" data-dismiss="modal"
                          style="width: 200px;background-color: white">
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center my-3 lead pointer" data-toggle="modal" data-target="#policyModal" @click="onPrivacy">
            นโยบายความเป็นส่วนตัว</p>
        </div>
        <div class="col">
          <p class="text-center my-3 lead pointer" data-toggle="modal" data-target="#policyModal" @click="onCondition">
            ข้อกำหนดเงื่อนไข</p>
        </div>
        <div class="col">
          <p class="text-center my-3 lead pointer" data-toggle="modal" data-target="#policyModal" @click="onShipping">
            ขั้นตอนจัดส่ง</p>
        </div>
        <div class="col">
          <p class="text-center my-3 lead pointer" data-toggle="modal" data-target="#policyModal" @click="onRefund">
            ขั้นตอนคืนหรือเปลี่ยน</p>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center py-3" style="background-color: #4A4A4A;color: white;font-size: 14px">
    <p class="m-0">
      Copyright © 2020 KKGRP | All Rights Reserved
    </p>
    <p class="m-0">Web Design by <a class="text-info" href="https://3dsinteractive.com">3DS INTERACTIVE</a></p>
  </div>
</div>
  `
})
Vue.component('main-section', {
  data: function () {
    return {
      state: 0
    }
  },
  template: `<div>
  <header-section/>
    <navbar-section/>
    <slide-show-section v-if="state === 0"/>
    <customer-section v-if="state === 0"/>
    <howto-section v-if="state === 0"/>
    <tanai-section v-if="state === 0"/>
    <register-section @next="()=> state = 1"/>
    <kkgroup-section v-if="state === 0"/>
    <safe-section v-if="state === 0"/>
    <map-section v-if="state === 0"/>
   <footer-section/>
</div>
  `
})

Vue.component('main-order-complete-section', {
  data: function () {
    return {
      state: 0
    }
  },
  created () {
    if (!qs['id'] || !qs['skuId']) {
      window.location.replace('/')
    }
  },
  mounted () {
    getForm('step', qs['id'] + 'register').catch((res) => {
      window.location.replace('/')
    })
  },
  template: `<div>
  <header-section/>
    <navbar-section/>
    <register-section @next="()=> state = 1" :fromStep="3"/>
   <footer-section/>
</div>
  `
})
var app = new Vue({
  el: '#main',
  data: {
    message: 'Hello Vue!',
    isShow: true
  }
})
