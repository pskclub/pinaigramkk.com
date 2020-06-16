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
  },{
    ... apiOptions(),
    headers: {
      ... apiOptions().headers,
      Authorization : res.data.verify_token
  }
  }))
}
