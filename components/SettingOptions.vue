<template>
  <v-card color="grey darken-2">
    <v-card-title>
      オプション
      <v-spacer></v-spacer>
      <v-btn text color="teal lighten-5" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <v-subheader> 時刻幅選択 </v-subheader>
          <v-card-text>
            <v-select
              v-model="startTime"
              label="開始時刻"
              dense
              color="teal lighten-2"
              :items="startTimeChoices"
            ></v-select>
            <v-select
              v-model="endTime"
              label="終了時刻"
              dense
              color="teal lighten-2"
              :items="endTimeChoices"
            ></v-select>
          </v-card-text>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-subheader> 時刻選択ステップ </v-subheader>
          <v-card-text>
            <v-select
              v-model="stepMinutes"
              dense
              color="teal lighten-2"
              :items="stepMinutesChoices"
            ></v-select>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SettingOptions',
  data: () => ({
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
    stepMinutes: {
      get() {
        return this.$store.state.schedule.stepMinutes
      },
      set(stepMinutes) {
        this.$store.getters['schedule/setStepMinutes']
      },
    },
    startTime: {
      get() {
        return this.$store.state.schedule.startTime
      },
      set(startTime) {},
    },
    endTime: {
      get() {
        return this.$store.state.schedule.endTime
      },
      set(endTime) {},
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
