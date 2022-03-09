<template>
  <v-container>
    <v-row>
      <h1>スケジュール整形</h1>
    </v-row>
    <v-row>
      <p>ああああああ{{ $vuetify.breakpoint.name }}</p>
    </v-row>
    <v-row>
      <v-col cols="12" lg="5">
        <ScheduleFormatter
          :values="values"
          :height="['lg', 'xl'].includes($vuetify.breakpoint.name) ? cardHeight : undefined"
        />
      </v-col>
      <v-col cols="12" lg="7">
        <v-card flat :height="cardHeight" class="overflow-y-auto">
          <v-card-actions>
            <v-btn icon class="ml-6 mb-2" @click="addValue">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <v-dialog v-model="setting" width="500">
              <template #activator="{ on, attrs }">
                <v-btn v-bind="attrs" icon class="mx-6 mb-2" v-on="on">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>
              <v-card color="grey darken-2" style="height: 50vh">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-subheader> 時刻幅選択 </v-subheader>
                      <v-card-text>
                        <v-select
                          v-model="startTime"
                          label="開始時刻"
                          dense
                          :items="startTimeChoices"
                        ></v-select>
                        <v-select
                          v-model="endTime"
                          label="終了時刻"
                          dense
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
                          :items="stepMinutesChoices"
                        ></v-select>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-card-actions>
          <v-container fluid>
            <v-row>
              <v-col v-for="value in values" :key="value.id" cols="12" class="py-0">
                <v-divider></v-divider>
                <TimeSelector
                  :value="values.find((el) => el.id == value.id)"
                  :step-minutes="stepMinutes"
                  :start-time="startTime"
                  :end-time="endTime"
                  @input="updateValue"
                  @delete="deleteValue(value.id)"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SchedulePage',
  data: () => ({
    values: [
      {
        date: new Date().toISOString().substr(0, 10),
        timeRange: [10, 12],
        id: 0,
      },
    ],
    stepMinutes: 30, // 選択できる時刻の幅が何分刻みか
    stepMinutesChoices: [
      { text: '15分刻み', value: 15 },
      { text: '30分刻み', value: 30 },
      { text: '1時間刻み', value: 60 },
    ],
    startTime: 8.0, // 開始時刻
    startTimeChoices: [
      { text: '00:00', value: 0.0 },
      { text: '06:00', value: 6.0 },
      { text: '08:00', value: 8.0 },
    ],
    endTime: 18.0, // 終了時刻
    endTimeChoices: [
      { text: '18:00', value: 18.0 },
      { text: '20:00', value: 20.0 },
      { text: '24:00', value: 24.0 },
    ],
    setting: false,
  }),
  head: () => ({
    title: 'スケジュール調整文',
  }),
  computed: {
    cardHeight() {
      // 画面サイズに合わせて高さを変更する
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '300px'
        case 'sm':
          return '400px'
        case 'md':
          return '500px'
        case 'lg':
          return '600px'
        case 'xl':
          return '700px'
        default:
          return undefined
      }
    },
  },
  methods: {
    addValue() {
      // idはユニークかつ単調増加
      const newValue =
        this.values.length === 0
          ? {
              date: new Date().toISOString().substr(0, 10),
              timeRange: [0, 10],
              id: -1,
            }
          : { ...this.values[0] }
      newValue.id += 1
      this.values.unshift(newValue)
    },
    deleteValue(id) {
      const deleteIndex = this.values.findIndex((el) => el.id === id)
      this.values.splice(deleteIndex, 1)
    },
    updateValue(value) {
      const updateIndex = this.values.findIndex((el) => el.id === value.id)
      this.values.splice(updateIndex, 1, value)
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #1e1e1e;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #6a6a6a;
  border-radius: 5px;
}
</style>
