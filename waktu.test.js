const waktu = require('./waktu')

test('can get hour and minute', () => {
  const pagi = new waktu('6:00')
  expect(pagi.getHour()).toBe('06')
  expect(pagi.getMinute()).toBe('00')
})

test('can initialized with Date object', () => {
  var date = new Date('October 9, 2016 09:30:00')
  const pagi = new waktu(date)
  expect(pagi.getHour()).toBe('09')
  expect(pagi.getMinute()).toBe('30')
})

test('throw error when time string not correct', () => {
  function wrongHour() {
    new waktu('116:00')
  }

  expect(wrongHour).toThrowError('Error, Hour length must be 1 or 2')

  function wrongMinute() {
    new waktu('16:000')
  }

  expect(wrongMinute).toThrowError('Error, Minute length must be 1 or 2')

  function wrongFormat() {
    new waktu('16:')
  }

  function wrongFormat2() {
    new waktu('0022')
  }

  function wrongFormat3() {
    new waktu(':59')
  }

  expect(wrongFormat).toThrowError('Error, Please give format h:m or hh:mm')
  expect(wrongFormat2).toThrowError('Error, Please give format h:m or hh:mm')
  expect(wrongFormat3).toThrowError('Error, Please give format h:m or hh:mm')

  function wrongHourString() {
    new waktu('xx:56')
  }

  function wrongMinuteString() {
    new waktu('21:xx')
  }

  expect(wrongHourString).toThrowError('Error, hour should be a number')
  expect(wrongMinuteString).toThrowError('Error, minute should be a number')

  function hourExceeded() {
    new waktu('24:00')
  }

  function minuteExceeded() {
    new waktu('23:60')
  }

  expect(hourExceeded).toThrowError('Error, hour should be in range 0 - 23')
  expect(minuteExceeded).toThrowError('Error, minute should be in range 0 - 59')
})
