const statusCode = require('../utils/status-code')
const tables = require('../config/table-config/create-table.js')

const javascriptErrorInfo = {
  async saveJavascriptErrorInfo(ctx, logInfo) {
    try {
      const errList = await tables.tableInstance.JavascriptErrorInfo.create(logInfo)
      ctx.status = 200
      ctx.body = statusCode.SUCCESS_200('success', errList)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = javascriptErrorInfo
