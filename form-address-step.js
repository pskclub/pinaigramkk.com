Vue.component('address-step', {
  template: `<div>
  <form-step-bar></form-step-bar>
<h1>address step</h1>
<div class="row justify-content-center">
          <div class="d-flex justify-content-center my-4">
            <button class="btn btn-blue btn-block" type="button" @click="$emit('changeStep',5)">สมัคร</button>
          </div>
        </div>
</div>`
})
