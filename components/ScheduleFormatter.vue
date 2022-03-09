<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-textarea v-model="schedule" readonly solo rows="3" flat></v-textarea>
      </v-card-text>
      <v-btn @click="copyToClipboard">コピー</v-btn>
    </v-card>

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
      return scheduleFormatter(this.values)
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.schedule)
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
