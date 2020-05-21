let PAYMENT_TYPE = {
  COD: 'kerry-cash-on-delivery',
  CREDIT_CARD: 'credit-card-debit-card'
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
