<template>
  <div>
    <v-card flat :height="height" class="overflow-y-auto">
      <v-card-text>
        <v-textarea v-model="schedule" readonly solo flat height="100%"></v-textarea>
      </v-card-text>
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
    height: {
      type: String,
      default: '',
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
