export default {
  /**
   * 获取时间字符串。例如 2018-01-01 10:00:00
   * @param timestamp
   * @returns {string}
   */
  getTimeString (timestamp) {
    if (timestamp) {
      const time = new Date(timestamp)
      let dateStr = ''
      const year = time.getFullYear()
      const month = String(time.getMonth() + 1).length === 1 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)
      const day = String(time.getDate()).length === 1 ? '0' + time.getDate() : time.getDate()
      dateStr = year + '-' + month + '-' + day
      let timeStr = ''
      const hours = time.getHours()
      const hh = String(hours).length === 1 ? '0' + hours : hours
      const minutes = time.getMinutes()
      const mm = String(minutes).length === 1 ? '0' + minutes : minutes
      const seconds = time.getSeconds()
      const ss = String(seconds).length === 1 ? '0' + seconds : seconds
      timeStr = hh+':'+mm+':'+ss
      return dateStr + ' ' + timeStr
    } else {
      return ''
    }
  },
  /**
   * 获取时间字符串，无分割。例如 20180101100000
   * @param timestamp
   * @returns {string}
   */
  getTimeString2 (timestamp) {
    if (timestamp) {
      const time = new Date(timestamp)
      let dateStr = ''
      const year = String(time.getFullYear())
      const month = String(time.getMonth() + 1).length === 1 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1) + ''
      const day = String(time.getDate()).length === 1 ? '0' + time.getDate() : time.getDate() + ''
      dateStr = year + month + day
      let timeStr = ''
      const hours = time.getHours()
      const hh = String(hours).length === 1 ? '0' + hours : hours
      const minutes = time.getMinutes()
      const mm = String(minutes).length === 1 ? '0' + minutes : minutes
      const seconds = time.getSeconds()
      const ss = String(seconds).length === 1 ? '0' + seconds : seconds
      timeStr = hh+':'+mm+':'+ss
      return dateStr + timeStr
    } else {
      return ''
    }
  }
}
