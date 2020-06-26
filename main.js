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
      skuId: '',
      registerStepData: null
    }
  },
  created: function () {
    this.step = this.fromStep
    this.isAuth = isAuth()
  },
  methods: {
    onSelectProduct (productId, skuId) {
      this.productId = productId
      this.skuId = skuId
      this.$emit('next')
      this.setStep(1)
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
      <register-step :isAuth="isAuth" @reset="setStep(0)" @changeStep="setStep" @submit="registerStepSubmit" v-if="step === 1"></register-step>
      <payment-step @reset="setStep(0)" @changeStep="setStep" @submit="paymentStepSubmit" v-if="step === 2"></payment-step>
      <detail-step @reset="setStep(0)" @changeStep="setStep" v-if="step === 3"></detail-step>
      <address-step @reset="setStep(0)" @changeStep="setStep" v-if="step === 4"></address-step>
      <complete-step @reset="setStep(0)" @changeStep="setStep" v-if="step === 5"></complete-step>
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
              <button @click="onSelectProduct('1dROVSw0zZG6QucAMQ7Sw8Wc2JR', '1dROVXqKRKAQNQ0deStt6185EpW')" class="btn btn-blue btn-block">สมัคร</button>
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
              <button @click="onSelectProduct('1dROcydNBbFYPzUy143PEKXdrPV', '1dROcrxCLiVP8P5p0uFx8g86H88')" class="btn btn-blue btn-block">สมัคร</button>
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
              <button @click="onSelectProduct('1dROkNXnyQxuuK7M87AXdBcOJuK', '1dROkLb71QYd49g5Fw4E9uoxDhY')" class="btn btn-blue btn-block">สมัคร</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <p class="mb-0" style="font-size: 22px;"><span class="text-danger">*</span>
      นโยบายและเงื่อนไขการยกเลิกการจัดทำร่างพินัยกรรมภายใน 7 วัน
    </p>
    <a class="text-info" href="" style="font-size: 22px;">อ่านรายละเอียดเพิ่มเติม</a>
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
                  <h4 class="text-center mb-4" style="color: #0771FF;">{{modalTitle}}</h4>
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
