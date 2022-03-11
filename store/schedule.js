export const state = () => ({
  VSelectColor: 'teal lighten-2',
  header: '下記からご都合の良い日程はございますでしょうか。',
  footer: 'よろしくお願いいたします。',
  datePadding: 2,
  timePadding: 2,
  timeSeparator: '～',
  comma: '、',
  bullet: '・',
  stepMinutes: 30,
  startTime: 8,
  endTime: 18,
})

export const mutations = {
  setHeader(state, newHeader) {
    state.header = newHeader
  },
  setFooter(state, newFooter) {
    state.footer = newFooter
  },
  setStepMinutes(state, stepMinutes) {
    state.stepMinutes = stepMinutes
  },
  setStartTime(state, startTime) {
    state.startTime = startTime
  },
  setEndTime(state, endTime) {
    state.endTime = endTime
  },
}

export const actions = {
  // 内容
}

export const getters = {
  formatOptions(state) {
    return [state.datePadding, state.timePadding, state.timeSeparator, state.comma, state.bullet]
  },
}
