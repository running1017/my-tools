import { dateFormatter, timeFormatter, timeListFormatter } from '../assets/scheduleFunc'

// dateFormatter
describe.each([
  ['2022-03-09', true, '03/09（水）'],
  ['2022-03-09', false, '3/9（水）'],
])('dateFormatter', (date, padding, expected) => {
  test(`padding${padding ? 'あり' : 'なし'}`, () => {
    expect(dateFormatter(date, padding)).toBe(expected)
  })
})

// timeFormatter
describe.each([
  [5, true, '05:00'],
  [5, false, '5:00'],
  [7.5, true, '07:30'],
  [7.5, false, '7:30'],
  [12.25, true, '12:15'],
  [12.25, false, '12:1'],
])('timeFormatter', (time, padding, expected) => {
  test(`return ${expected} padding${padding ? 'あり' : 'なし'}`, () => {
    expect(timeFormatter(time, padding)).toBe(expected)
  })
})

// timeListFormatter
describe.each([
  [[[5, 7.5]], false, '～', '、', '5:00～7:30'],
  [
    [
      [1.5, 3],
      [10, 15.25],
    ],
    true,
    '～',
    '、',
    '01:30～03:00、10:00～15:15',
  ],
])('timeListFormatter', (timeList, padding, separator, comma, expected) => {
  test(`return ${expected}`, () => {
    expect(timeListFormatter(timeList, padding, separator, comma)).toBe(expected)
  })
})
