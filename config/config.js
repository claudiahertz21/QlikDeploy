const loginTypes = {
  INTERACTIVE_LOGIN: 'interactive-login',
  JWT_LOGIN: 'jwt-login'
}

module.exports = {
  loginTypes,
  currentLoginType: loginTypes.JWT_LOGIN,

  // app config
  qlikWebIntegrationId: "TjmIyaAVR4KfOPslWjcepMe8lj2kCtFV",
  tenantDomain: "nordiskfilm.eu.qlikcloud.com",
  appId: "ac42365c-d49b-402e-9fea-9c7534a92411",
  objectId: "PzGYQD",

  // token config
  issuer: "DRF",
  keyid: "949329a5-7170-4131-97d6-0f95e4ee7072"
};