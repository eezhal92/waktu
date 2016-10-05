function normalize(number) {
  if (typeof number === 'number') number = ''+number
  if (number.length === 1) number = '0'+number

  return number
}

function validateTimeString(timeString) {
  var time = timeString.split(':').filter(time => time !== '')
  if (time.length !== 2) {
    throw new Error('Error, Please give format h:m or hh:mm')
  }

  if (time[0].length > 2 || time[0].length < 1) {
    throw new Error('Error, Hour length must be 1 or 2')
  }

  if (time[1].length > 2 || time[1].length < 1) {
    throw new Error('Error, Minute length must be 1 or 2')
  }

  if (isNaN(+time[0])) {
      throw new Error('Error, hour should be a number')
  }

  if (isNaN(+time[1])) {
      throw new Error('Error, minute should be a number')
  }

  if (+time[0] > 23 || +time[0] < 0) {
      throw new Error('Error, hour should be in range 0 - 23')
  }

  if (+time[1] > 59 || +time[1] < 0) {
      throw new Error('Error, minute should be in range 0 - 59')
  }
}

module.exports = {
  normalize: normalize,
  validateTimeString: validateTimeString
}
