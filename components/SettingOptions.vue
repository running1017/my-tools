<template>
  <v-card color="grey darken-2">
    <v-card-title>
      フォーマットオプション
      <v-spacer></v-spacer>
      <v-btn text color="teal lighten-5" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="datePadding"
              label="日付形式"
              dense
              :color="color"
              :items="datePaddingChoices"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="timePadding"
              label="時刻形式"
              dense
              :color="color"
              :items="timePaddingChoices"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="timeSeparator"
              label="時刻幅記号"
              dense
              :color="color"
              :items="timeSeparatorChoices"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="comma"
              label="区切り記号"
              dense
              :color="color"
              :items="commaChoices"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="bullet"
              label="行頭記号"
              dense
              :color="color"
              :items="bulletChoices"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>

    <v-divider></v-divider>

    <v-card-title> スライダーオプション </v-card-title>
    <v-container>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="startTime"
              label="開始時刻"
              :color="color"
              :items="startTimeChoices"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="endTime"
              label="終了時刻"
              :color="color"
              :items="endTimeChoices"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select
              v-model="stepMinutes"
              label="時刻の選択幅"
              :color="color"
              :items="stepMinutesChoices"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SettingOptions',
  data: () => ({
    datePaddingChoices: [
      { text: '0埋めあり', value: true },
      { text: '0埋めなし', value: false },
    ],
    timePaddingChoices: [
      { text: '0埋めあり', value: true },
      { text: '0埋めなし', value: false },
    ],
    timeSeparatorChoices: ['～', '~', '-'],
    commaChoices: ['、', ', '],
    bulletChoices: [
      { text: '・', value: '・' },
      { text: '- ', value: '- ' },
      { text: 'スペース', value: '　' },
      { text: 'なし', value: '' },
    ],
    stepMinutesChoices: [
      { text: '15分刻み', value: 15 },
      { text: '30分刻み', value: 30 },
      { text: '1時間刻み', value: 60 },
    ],
    startTimeChoices: [
      { text: '00:00', value: 0.0 },
      { text: '06:00', value: 6.0 },
      { text: '08:00', value: 8.0 },
    ],
    endTimeChoices: [
      { text: '18:00', value: 18.0 },
      { text: '20:00', value: 20.0 },
      { text: '24:00', value: 24.0 },
    ],
    setting: false,
  }),
  computed: {
    color() {
      return this.$store.state.schedule.VSelectColor
    },
    datePadding: {
      get() {
        return this.$store.state.schedule.datePadding
      },
      set(datePadding) {
        this.$store.commit('schedule/setDatePadding', datePadding)
      },
    },
    timePadding: {
      get() {
        return this.$store.state.schedule.timePadding
      },
      set(timePadding) {
        this.$store.commit('schedule/setTimePadding', timePadding)
      },
    },
    timeSeparator: {
      get() {
        return this.$store.state.schedule.timeSeparator
      },
      set(timeSeparator) {
        this.$store.commit('schedule/setTimeSeparator', timeSeparator)
      },
    },
    comma: {
      get() {
        return this.$store.state.schedule.comma
      },
      set(comma) {
        this.$store.commit('schedule/setComma', comma)
      },
    },
    bullet: {
      get() {
        return this.$store.state.schedule.bullet
      },
      set(bullet) {
        this.$store.commit('schedule/setBullet', bullet)
      },
    },
    stepMinutes: {
      get() {
        return this.$store.state.schedule.stepMinutes
      },
      set(stepMinutes) {
        this.$store.commit('schedule/setStepMinutes', stepMinutes)
      },
    },
    startTime: {
      get() {
        return this.$store.state.schedule.startTime
      },
      set(startTime) {
        this.$store.commit('schedule/setStartTime', startTime)
      },
    },
    endTime: {
      get() {
        return this.$store.state.schedule.endTime
      },
      set(endTime) {
        this.$store.commit('schedule/setEndTime', endTime)
      },
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
