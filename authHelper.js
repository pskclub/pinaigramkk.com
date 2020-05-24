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
