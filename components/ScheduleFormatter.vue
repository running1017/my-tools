<template>
  <div>
    <v-container fluid class="mt-4">
      <v-row class="mx-2">
        <v-textarea
          v-model="header"
          label="ヘッダー"
          :color="color"
          outlined
          rows="1"
          auto-grow
        ></v-textarea>
      </v-row>
      <v-row class="mx-2">
        <v-textarea
          v-model="schedule"
          label="日程候補（自動入力）"
          :color="color"
          outlined
          readonly
          rows="1"
          auto-grow
        ></v-textarea>
      </v-row>
      <v-row class="mx-2">
        <v-textarea
          v-model="footer"
          label="フッター"
          :color="color"
          outlined
          rows="1"
          auto-grow
        ></v-textarea>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar">
      {{ noticeText }}
    </v-snackbar>
  </div>
</template>

<script>
import { scheduleFormatter } from '@/assets/schedule'

export default {
  name: 'SchaduleFormatter',
  props: {
    values: {
      type: Array,
      default: () => [
        {
          date: null,
          timeRange: [null, null],
          id: null,
        },
      ],
    },
  },
  data: () => ({
    snackbar: false,
    noticeText: '',
  }),
  computed: {
    schedule() {
      return scheduleFormatter(this.values, ...this.$store.getters['schedule/formatOptions'])
    },
    color() {
      return this.$store.state.schedule.VSelectColor
    },
    header: {
      get() {
        return this.$store.state.schedule.header
      },
      set(newHeader) {
        this.$store.commit('schedule/setHeader', newHeader)
      },
    },
    footer: {
      get() {
        return this.$store.state.schedule.footer
      },
      set(newFooter) {
        this.$store.commit('schedule/setFooter', newFooter)
      },
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.header + '\n\n' + this.schedule + '\n\n' + this.footer)
        .then(() => {
          this.noticeText = 'コピー成功'
        })
        .catch(() => {
          this.noticeText = 'コピーできませんでした'
        })
      this.snackbar = true
    },
  },
}
</script>

<style></style>
