<template>
  <v-container class="px-8 pb-1">
    <v-row align="end">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" class="mr-6 mb-7" @click="deleteValue" v-on="on">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>削除</span>
      </v-tooltip>
      <v-col align-self="start" cols="12" md="3">
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
              v-model="formattedDate"
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
          :min="startTime"
          :max="endTime"
          :step="stepMinutes / 60"
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
import { timeFormatter, dateFormatter } from '@/assets/schedule'

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
      labels[0] = timeFormatter(this.startTime)
      labels.push(timeFormatter(this.endTime))
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
    formattedDate() {
      return dateFormatter(this.date)
    },
  },
  methods: {
    timeFormatter,
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
