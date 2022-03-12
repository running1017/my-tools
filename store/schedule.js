export const state = () => ({
  VSelectColor: 'teal lighten-2',
  header: '下記からご都合の良い日程はございますでしょうか。',
  footer: 'よろしくお願いいたします。',
  datePadding: true,
  timePadding: true,
  timeSeparator: '～',
  comma: '、',
  bullet: '・',
  stepMinutes: 30,
  startTime: 8,
  endTime: 18,
})

export const mutations = {
  setHeader: (state, newHeader) => (state.header = newHeader),
  setFooter: (state, newFooter) => (state.footer = newFooter),
  setDatePadding: (state, datePadding) => (state.datePadding = datePadding),
  setTimePadding: (state, timePadding) => (state.timePadding = timePadding),
  setTimeSeparator: (state, timeSeparator) => (state.timeSeparator = timeSeparator),
  setComma: (state, comma) => (state.comma = comma),
  setBullet: (state, bullet) => (state.bullet = bullet),
  setStepMinutes: (state, stepMinutes) => (state.stepMinutes = stepMinutes),
  setStartTime: (state, startTime) => (state.startTime = startTime),
  setEndTime: (state, endTime) => (state.endTime = endTime),
}

export const actions = {
  // 内容
}

export const getters = {
  formatOptions(state) {
    return [state.datePadding, state.timePadding, state.timeSeparator, state.comma, state.bullet]
  },
}
