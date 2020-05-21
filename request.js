let ERROR_CODE = {
  ALERT: 'ALERT',
  ERROR: 'ERROR',
  FAIL: 'FAIL',
  TIMEOUT: 'TIMEOUT',
  INVALID_PARAMS: 'INVALID_PARAMS',
  UNAUTHORIZED: 'UNAUTHORIZED'
}
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

const refMiddleware = async (ref, path, options = {}) => {
  let res = ref
  let count = 0
  if (ref.data.ref && ref.data.code === 'REF') {
    async function getRef () {
      count++
      res = await NewRequester.get(path, {
        ...options,
        headers: {
          ...options.headers,
          ref: ref.data.ref
        }
      })

      if (res.data.code === 'PROCESSING') {
        if (count >= 20) {
          throw {
            response: {
              data: {
                code: ERROR_CODE.TIMEOUT,
                message: ERROR_CODE.TIMEOUT
              }
            }
          }
        }
        await timeout(500)
        await getRef()
      }
    }

    await getRef()
  }

  return res
}

const checkErrorMiddleWare = (data, path, options = {}) => {
  if (data.data.code) {
    const errorData = {
      response: data
    }
    switch (data.data.code) {
      case ERROR_CODE.ALERT:
        throw  errorData
        break
      case ERROR_CODE.ERROR:
        throw errorData
        break
      case ERROR_CODE.FAIL:
        throw errorData
        break
      case ERROR_CODE.INVALID_PARAMS:
        throw errorData
        break
      case ERROR_CODE.UNAUTHORIZED:
        throw errorData
        break
    }
  }

  return data
}

class Requester {
  service

  constructor (options = {}) {
    this.service = axios.create(options)
  }

  get (path, options = {}) {
    return this.service.get(path, options).then((res) => checkErrorMiddleWare(res, path, options))
  }

  put (path, payload, options = {}) {
    return this.service.put(path, payload, options).then((ref) => refMiddleware(ref, path, options))
      .then((res) => checkErrorMiddleWare(res, path, options))
  }

  delete (path, options = {}) {
    return this.service.delete(path, options).then((ref) => refMiddleware(ref, path, options))
      .then((res) => checkErrorMiddleWare(res, path, options))
  }

  post (path, payload, options = {}) {
    return this.service.post(path, payload, options).then((ref) => refMiddleware(ref, path, options))
      .then((res) => checkErrorMiddleWare(res, path, options))
  }
}

let NewRequester = new Requester({
  headers: {}
})
