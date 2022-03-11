export const state = () => ({
  VSelectColor: 'teal lighten-2',
  header: '下記からご都合の良い日程はございますでしょうか。',
  footer: 'よろしくお願いいたします。',
})

export const mutations = {
  setHeader(state, newHeader) {
    state.header = newHeader
  },
  setFooter(state, newFooter) {
    state.footer = newFooter
  },
}

export const actions = {
  // 内容
}

export const getters = {
  // 内容
}
