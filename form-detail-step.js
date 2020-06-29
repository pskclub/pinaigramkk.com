Vue.component('detail-step-1', {
  props: {
    msg: {
      type: String
    },
    index: {
      type: Number,
      default: 1
    }
  },
  watch: {
    form: {
      deep: true,
      immediate: true,
      handler (val) {
        // allows us to use v-model on our input.
        this.$emit('input', val)
      }
    }
  },
  data: function () {
    return {
      form: {
        manager: '',
        start_name: '',
        firstName: '',
        lastName: '',
        personID: '',
        personIDPic: '',
        telephone: '',
        email: '',
        address: '',
        province: '',
        district: '',
        subDistrict: '',
        zipcode: ''
      }
    }
  },
  template: `<div>
  <div class="px-5 py-4 text-center">
    <span class="text-danger" style="font-weight: bold;">*</span>
    <span style="color: rgb(7, 113, 255); font-weight: bold;">
   {{msg}} 
    </span>
  </div>
  <div class="row justify-content-center">
    <div class="col-10">
      <manager-options-input name="ผู้จัดการมรดก" :index="index" :rules="index === 1? 'required':''"
                             v-model="form.manager"/>
      <start-name-input name="คำนำหน้าชื่อ" rules="" v-model="form.start_name"/>
      <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" :rules="index === 1? 'required':''"
                           v-model="form.firstName"/>
      <text-input-optional type="text" name="นามสกุล" v-model="form.lastName" placeholder="นามสกุล (ภาษาไทย)"
                           :rules="index === 1? 'required':''"/>
      <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                           rules="numeric|length:13" v-model="form.personID"/>
      <upload-image-input name="สำเนาบัตรประชาชน" placeholder="กรอกที่อยู่"
                          rules="" v-model="form.personIDPic"/>
      <text-input-optional type="text" name="เบอร์โทรศัพท์" placeholder="กรอกเบอร์โทรศัพท์" rules="numeric"
                           v-model="form.telephone"/>
      <text-input-optional type="text" name="อีเมล" v-model="form.email" placeholder="กรอกอีเมล" rules="email"/>
      <text-area-input name="ที่อยู่" placeholder="กรอกที่อยู่" desc="(ตามที่ปรากฏในบัตรประชาชน)"
                       rules="" v-model="form.address"/>
      <select-address-input :parent="form.country" name="จังหวัด" placeholder="กรุณาเลือกจังหวัด"
                            rules="" v-model="form.province"/>
      <select-address-input :parent="form.province" name="อำเภอ/เขต" placeholder="กรุณาเลือกอำเภอ/เขต"
                            rules="" v-model="form.district"/>
      <select-address-input :parent="form.district" name="ตำบล/แขวง" placeholder="กรุณาเลือกตำบล/แขวง"
                            rules="" v-model="form.subDistrict"/>
      <text-input-optional type="text" name="รหัสไปรษณีย์" placeholder="กรอกรหัสไปรษณีย์"
                           rules="" v-model="form.zipcode"/>
    </div>
  </div>
</div>
  `
})

Vue.component('detail-step-2', {
  props: {
    index: {
      type: Number
    }
  },
  watch: {
    form: {
      deep: true,
      immediate: true,
      handler (val) {
        // allows us to use v-model on our input.
        this.$emit('input', val)
      }
    }
  },
  data: function () {
    return {
      relationOptions: [
        {
          value: '100%',
          label: '100%'
        },
        {
          value: '95%',
          label: '95%'
        },
        {
          value: '90%',
          label: '90%'
        },
        {
          value: '85%',
          label: '85%'
        },
        {
          value: '80%',
          label: '80%'
        }
      ],
      form: {
        firstName: '',
        lastName: '',
        personID: '',
        personIDPic: '',
        relation: '',
        share: ''
      }
    }
  },
  template: `<div class="border rounded py-4 px-3 mb-4">
  <div class="d-flex align-items-center justify-content-between mb-3">
    <p>{{index+1}}.ชื่อ-นามสกุล ทายาทหรือผู้รับมรดก</p>
    <div v-if="index !== 0">
      <button class="btn btn-primary" type="button" @click="$emit('delete',index)">ลบ</button>
    </div>
  </div>
  <text-input-optional type="text" name="ชื่อ" placeholder="ชื่อ (ภาษาไทย)" rules="required" v-model="form.firstName"/>
  <text-input-optional type="text" name="นามสกุล" placeholder="นามสกุล (ภาษาไทย)" v-model="form.lastName"
                       rules="required"/>
  <text-input-optional type="text" name="เลขบัตรประจำตัวประชาชน" placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                       rules="numeric|length:13" v-model="form.personID"/>
  <upload-image-input name="สำเนาบัตรประชาชน" placeholder="กรอกที่อยู่"
                      rules="" v-model="form.personIDPic"/>
  <manager-options-input name="ความสัมพันธ์ต่อผู้ทำพินัยกรรม" rules="required" v-model="form.relation"/>
  <select-input placeholder="เลือกจำนวนสัดส่วน" :options="relationOptions" name="ส่วนแบ่ง" v-model="form.share"/>
</div>
  `
})

Vue.component('detail-step', {
  data: function () {
    return {
      skuId: qs['skuId'],
      isShowPreview: false,
      form: {
        owner: {},
        owner2: {},
        children: [{}]
      }
    }
  },
  methods: {
    addChild: function () {
      this.form = {
        ...this.form,
        children: [
          ...this.form.children,
          {}
        ]
      }
    },
    deleteChild: function (index) {
      this.form = {
        ...this.form,
        children: [this.form.children.filter((item, i) => i !== index)]
      }
    },
    onPreview: function () {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return
        }

        this.isShowPreview = true
      })
    },
    onSubmit: function () {
      this.$emit('submit', this.form)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  template: `<div>
  <step-header :skuId="skuId"/>
  <hr>
  <form-step-bar :step="3"></form-step-bar>
  <preview-step :detailData="form" v-if="isShowPreview" @submit="onSubmit" @changeStep="$emit('changeStep',$event)" @back="isShowPreview = false"/>
  <ValidationObserver v-show="!isShowPreview" v-slot="{ invalid }" ref="form">
    <div class="mb-4  mt-5" style="padding: 10px 15px;
    background-color: rgb(248, 222, 25);
    border-radius: 50px;">
      <h5 class="mb-0">การแต่งตั้งผู้จัดการมรดก</h5>
    </div>
    <detail-step-1
      :index="1"
      v-model="form.owner"
      msg="ผู้จัดการมรดก ต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์, ไม่เป็นผู้เสมือนไร้ความสามารถ, ไม่เป็นผู้ไร้ความสามารถ และต้องไม่เป็นบุคคลล้มละลาย"/>
    <detail-step-1
      :index="2"
      v-model="form.owner2"
      msg="หากผู้จัดการมรดกคนที่ 1 ของข้าฯ ถึงแก่กรรมก่อน หรือไม่ยอมรับ หรือไม่มีความสามารถ ข้าฯ ขอแต่งตั้งผู้จัดการมรดกคนที่ 2 (แทนที่)"/>

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
    <detail-step-2 v-model="form.children[index]" :key="index" :index="index" v-for="(child,index) in form.children"
                   @delete="deleteChild"/>
    <button class="btn btn-primary" type="button" @click="addChild">เพิ่มทายาทหรือผู้รับมรดก</button>
    <div class="row justify-content-center  border-top mt-4">
      <div class="d-flex justify-content-center my-4">
        <button class="btn btn-blue btn-block" type="button" @click="onPreview" :disabled="false">ต่อไป</button>
      </div>
    </div>
  </ValidationObserver>
</div>`
})
