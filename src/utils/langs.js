const { DEFAULT_LANG } = require("../../propreties")

module.exports.getLangPrefix = lang => {
  return lang && lang !== DEFAULT_LANG ? `/${lang}` : ""
}

module.exports.getHTMLLang = lang => {
  return lang.split("-")[0]
}
