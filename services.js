let BASE_API = 'https://pinaigumkk-ecom.pams.ai/api'

function apiOptions () {
  return {
    baseURL: BASE_API,
    headers: {
      'x-timestamp': '2019-08-15 18:24:00',
      'x-device': 'browser',
      language: 'th',
      currency: 'thb',
      Authorization: getMe() && getMe().access_token || null
    }
  }
}

function login (username, password) {
  return NewRequester.post(`/member/login`, {
    username: username,
    password: password
  }, apiOptions())
}

function register ({ email, password, firstname, lastname, contact_email, contact_mobile }) {
  return NewRequester.post(`/member/email`, {
    email: email
  }, apiOptions()).then(res => NewRequester.post(`/member/register`, {
    email, password, firstname, lastname, contact_email, contact_mobile
  }, {
    ...apiOptions(),
    headers: {
      ...apiOptions().headers,
      Authorization: res.data.verify_token
    }
  }))
}

function selectProduct (product_id, sku_id) {
  return NewRequester.post(`/cart/product/add`, {
    'product_id': product_id,
    'sku_id': sku_id,
    'quantity_raw': 1,
    'unselect_others': true
  }, apiOptions())
}

function checkout () {
  return NewRequester.post(`/checkout`, {}, apiOptions())
}

function addAddress (data = {}) {
  return NewRequester.post(`/member/shippingaddress`, {
    'is_default': true,
    'is_default_tax': true,
    'country_id': data.country_id,
    'name_of_shipping': data.name_of_shipping,
    'mobile': data.mobile,
    'address_detail': data.address_detail,
    'province_id': data.province_id,
    'district_id': data.district_id,
    'sub_district_id': data.sub_district_id,
    'zipcode_id': data.zipcode_id
  }, apiOptions())
}

function createOrder (checkout_id) {
  return NewRequester.post(`/order/create`, {
    'checkout_id': checkout_id
  }, apiOptions())
}

function makeOrder (product_id, sku_id, data) {
  return selectProduct(product_id, sku_id)
    .then(() => addAddress({
      'country_id': data.country,
      'name_of_shipping': data.firstName + data.lastName,
      'mobile': data.telephone,
      'address_detail': data.address,
      'province_id': data.province,
      'district_id': data.district,
      'sub_district_id': data.subDistrict,
      'zipcode_id': data.zipcode
    }))
    .then((res) => checkout())
    .then((checkoutRes) => createOrder(checkoutRes.data.checkout_id))
}
