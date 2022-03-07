<template>
  <v-container class="px-8">
    <v-row align="end">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" class="mr-6 mb-7" @click="deleteValue" v-on="on">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>削除</span>
      </v-tooltip>
      <v-col align-self="start" cols="10" md="4">
        <v-subheader>日付選択</v-subheader>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          min-width="auto"
        >
          <template #activator="{ attrs, on }">
            <v-text-field
              v-model="datetime"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              dense
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            color="teal darken-2"
            locale="ja"
            show-adjacent-months
            :day-format="(date) => new Date(date).getDate()"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col align-self="start">
        <v-subheader>時刻選択</v-subheader>
        <v-range-slider
          v-model="timeRange"
          :min="sliderMin"
          :max="sliderMax"
          :step="sliderStep"
          color="teal darken-1"
          thumb-label="always"
          thumb-size="40"
          ticks
          tick-size="4"
          :tick-labels="timeLabels"
        >
          <template #thumb-label="{ value: sliderValue }">
            {{ timeFormatter(sliderValue) }}
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TimeSelector',
  props: {
    value: {
      type: Object,
      default: () => ({
        date: null,
        timeRange: [null, null],
        id: null,
      }),
    },
    stepMinutes: {
      type: Number,
      default: 30,
    },
    startTime: {
      type: Number,
      default: 8.0,
    },
    endTime: {
      type: Number,
      default: 18.0,
    },
  },
  data: () => ({
    menu: false,
    daysName: ['日', '月', '火', '水', '木', '金', '土'],
  }),
  computed: {
    date: {
      get() {
        return this.value.date
      },
      set(date) {
        this.updateValue({ date })
      },
    },
    timeLabels() {
      const length = ((this.endTime - this.startTime) / this.stepMinutes) * 60
      const labels = Array(length)
      labels[0] = this.timeFormatter(this.startTime)
      labels.push(this.timeFormatter(this.endTime))
      return labels
    },
    timeRange: {
      get() {
        return this.value.timeRange
      },
      set(timeRange) {
        this.updateValue({ timeRange })
      },
    },
    sliderMin() {
      return this.startTime
    },
    sliderMax() {
      return this.endTime
    },
    sliderStep() {
      return this.stepMinutes / 60
    },
    datetime() {
      const dateObj = new Date(this.date)
      const month = String(dateObj.getMonth() + 1).padStart(2, '0')
      const date = String(dateObj.getDate()).padStart(2, '0')
      const day = this.daysName[dateObj.getDay()]
      return `${month}/${date}（${day}）`
    },
  },
  methods: {
    timeFormatter(time) {
      const hour = Math.floor(time)
      const minute = (time - Math.floor(time)) * 60
      return String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0')
    },
    save(date) {
      this.$refs.menu.save(date)
    },
    updateValue(diff) {
      this.$emit('input', { ...this.value, ...diff })
    },
    deleteValue() {
      this.$emit('delete')
    },
  },
}
</script>
