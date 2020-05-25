function isAuth () {
  try {
    return !!JSON.parse(decodeURIComponent(getCookie('me'))).access_token
  } catch (e) {
    return false
  }
}

function getMe () {
  try {
    return JSON.parse(decodeURIComponent(getCookie('me')))
  } catch (e) {
    return null
  }
}

function getCookie (name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

function setCookie (cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
