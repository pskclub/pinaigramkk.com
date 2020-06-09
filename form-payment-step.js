Vue.component('payment-step', {
  data: function () {
    return {
      card_number: '',
      card_name: '',
      exp: '',
      cvv: ''
    }
  },
  template: `<div>
  <form-step-bar :step="2"></form-step-bar>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="border p-5">
        <text-input-optional name="หมายเลขบัตร" placeholder="0000 0000 0000 0000" rules="required"
                             v-model="card_number"/>
        <text-input-optional name="ชื่อที่ปรากฎบนบัตร" placeholder="กรอกชื่อบนบัตรเครดิต/เดบิต" rules="required"
                             v-model="card_name"/>
        <text-input-optional name="วันหมดอายุ" placeholder="MM/YY" rules="required" v-model="exp"/>
        <text-input-optional name="CVV" placeholder="000" rules="required" v-model="cvv"/>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="d-flex justify-content-center my-4">
      <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',3)">ชำระเงิน</button>
    </div>
  </div>
</div>`
})
