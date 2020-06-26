let PAYMENT_TYPE = {
  COD: 'kerry-cash-on-delivery',
  CREDIT_CARD: 'credit-card-debit-card'
}

function requestPaymentTokenAsync (options) {
  return NewRequester.get(`/payment/${options.type}/tokenreq`, apiOptions())
}

function requestPaymentInfoAsync (options) {
  return NewRequester.post(`/payment/${options.type}/paymentreq`, options, apiOptions())
}

function getEGHLCardTokenAsync (url, payload) {
  const formData = new FormData()
  for (let [key, value] of Object.entries(payload)) {
    formData.append(key, value)
  }

  return NewRequester.post(url, formData)
}

function transformPaymentForm (data) {
  if (!data.card.number) {
    return data
  }
  return {
    ...data,
    card: {
      ...data.card,
      number: data.card.number.replace(/-/g, '')
        .replace(/ /g, ''),
      exp: transformCardExp(data.card.exp)
    }
  }
}

function transformCardExp (cardExp) {
  cardExp = cardExp.replace('-', '').replace('/', '')
  return `20${cardExp.substr(2, 2)}${cardExp.substr(0, 2)}`
}

function postGHL (payment = {}) {
  let form = document.createElement('form')
  form.method = 'post'
  form.action = payment.payment_info.payment_url

  let params = {
    TokenType: payment.payment_info.token_type,
    Token: payment.payment_info.token,
    PymtMethod: payment.payment_info.payment_method,
    ServiceID: payment.payment_info.service_id,
    TransactionType: payment.payment_info.transaction_type,
    PaymentID: payment.payment_info.payment_id,
    OrderNumber: payment.payment_info.order_no,
    PaymentDesc: payment.payment_info.payment_desc,
    MerchantReturnURL: payment.payment_info.return_url,
    MerchantCallBackURL: payment.payment_info.callback_url,
    Amount: payment.payment_info.amount,
    CurrencyCode: payment.payment_info.currency_code,
    CustIP: payment.payment_info.customer_ip,
    IssuingBank: payment.payment_info.issuing_bank,
    CustName: payment.payment_info.customer_name,
    CustEmail: payment.payment_info.customer_email,
    CustPhone: payment.payment_info.customer_phone,
    HashValue: payment.payment_info.hash_value,
    Param6: payment.payment_info.param_6,
    Param7: payment.payment_info.param_7,
    CustOCP: payment.payment_info.cust_ocp,
    LanguageCode: payment.payment_info.language_code
  }

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input')
      hiddenField.type = 'hidden'
      hiddenField.name = key
      hiddenField.value = params[key]
      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

async function execPayment (orderId, skuId, payload) {
  console.log('payload', payload)
  payload.card.number = (payload.card.number || '').replace(/-/g, '')
    .replace(/ /g, '')
  payload.card.exp = transformCardExp(payload.card.exp || '')
  const redirectURL = `${BASE_URL}/pages/order-complete?id=${orderId}&skuId=skuId`
  let res
  try {
    const paymentToken = (await requestPaymentTokenAsync({
      type: payload.type
    })).data
    const cardToken = (await getEGHLCardTokenAsync(paymentToken.payment_url, {
      ServiceID: paymentToken.service_id,
      PaymentID: paymentToken.payment_id,
      CustIP: paymentToken.customer_ip,
      CardExp: payload.card?.exp,
      CardCVV2: payload.card?.cvv,
      TransactionType: paymentToken.transaction_type,
      CardNo: payload.card?.number,
      CardHolder: payload.card?.holder,
      HashValue: paymentToken.hash_value
    })).data

    if (cardToken.ErrStatus !== '0') {
      throw cardToken.ErrMsg
    }

    const paymentInfo = (await requestPaymentInfoAsync({
      type: payload.type,
      card_token_type: 'new',
      token: cardToken.SOP_Token,
      payment_id: paymentToken.payment_id,
      order_id: orderId,
      redirect_url: redirectURL,
      is_primary: payload.card?.is_primary || false,
      is_save: payload.card?.is_save || false,
      email: payload.card.email
    })).data

    res = {
      order_id: orderId,
      ...payload,
      payment_info: paymentInfo
    }

  } catch (e) {
    console.log('error', e)
  }

  return res
}
