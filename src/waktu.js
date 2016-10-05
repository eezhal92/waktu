var utils = require('./utils')

function Waktu(time) {
  if (typeof time == 'string') {
    utils.validateTimeString(time)

    time = time.split(':')

    this.hour = utils.normalize(time[0])
    this.minute = utils.normalize(time[1])
  } else if (time instanceof Date) {
    this.hour = utils.normalize(time.getHours())
    this.minute = utils.normalize(time.getMinutes())
  }
}

Waktu.prototype.getMinute = function () {
  return this.minute
}

Waktu.prototype.getHour = function () {
  return this.hour
}

module.exports = Waktu
