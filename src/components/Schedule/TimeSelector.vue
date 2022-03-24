<template>
  <v-container fluid class="pb-1 mb-2">
    <v-row align="end">
      <v-col>
        <v-row>
          <v-col align-self="start" cols="12" md="3" lg="4" xl="3">
            <v-subheader v-if="!$vuetify.breakpoint.xs">日付選択</v-subheader>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="slide-y-transition"
              min-width="auto"
            >
              <template #activator="{ attrs, on }">
                <v-text-field
                  v-model="formattedDate"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  dense
                  color="teal darken-2"
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
            <v-subheader v-if="!$vuetify.breakpoint.xs">時刻選択</v-subheader>
            <v-range-slider
              v-model="timeRange"
              :min="startTime"
              :max="endTime"
              :step="stepMinutes / 60"
              color="teal darken-1"
              thumb-label="always"
              :thumb-size="$vuetify.breakpoint.xs ? 30 : 40"
              ticks
              tick-size="4"
              :tick-labels="timeLabels"
            >
              <template #thumb-label="{ value: sliderValue }">
                {{ timeFormatter(sliderValue, true) }}
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
      </v-col>

      <v-divider vertical class="my-2"></v-divider>

      <v-col cols="2" sm="1" align-self="center">
        <v-btn icon @click="deleteValue">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { timeFormatter, dateFormatter } from '~/assets/scheduleFunc'

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
    stepMinutes() {
      return this.$store.state.schedule.stepMinutes
    },
    startTime() {
      return this.$store.state.schedule.startTime
    },
    endTime() {
      return this.$store.state.schedule.endTime
    },
    timeLabels() {
      const length = ((this.endTime - this.startTime) / this.stepMinutes) * 60 + 1
      const labels = Array(length)
      for (let t = this.startTime; t <= this.endTime; t++) {
        if (this.endTime - this.startTime <= 10 || t % 2 === 0) {
          labels[((t - this.startTime) * 60) / this.stepMinutes] = String(t)
        }
      }
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
      return dateFormatter(this.date, true)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.menu = true
    })
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
