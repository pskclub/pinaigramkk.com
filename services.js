let BASE_API = 'https://stg-ecom.pams.ai/api'

function apiOptions () {
  return {
    baseURL: BASE_API,
    headers: {
      'x-timestamp': '2019-08-15 18:24:00',
      'x-device': 'browser',
      language: 'th',
      currency: 'thb',
      Authorization: getMe().access_token
    }
  }
}

function login (username, password) {
  return NewRequester.post(`/member/login`, {
    username: username,
    password: password
  }, apiOptions())
}

function register (email) {
  return NewRequester.post(`/member/email`, {
    email: email
  }, apiOptions())
}
