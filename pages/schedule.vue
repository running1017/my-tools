<template>
  <v-container>
    <v-row>
      <h1>スケジュール整形</h1>
    </v-row>
    <v-row>
      <p>打ち合わせの日程調整時にメールで送る文面を作成するツールです。</p>
    </v-row>
    <v-row>
      <v-col cols="12" lg="5">
        <v-card flat>
          <v-card-actions class="pa-4">
            <v-btn text outlined color="teal lighten-5" class="mr-4" @click="copyToClipboard">
              <v-icon>mdi-content-copy</v-icon>コピー
            </v-btn>
            <v-dialog v-model="setting" width="400">
              <template #activator="{ on, attrs }">
                <v-btn v-bind="attrs" text outlined color="teal lighten-5" v-on="on">
                  <v-icon>mdi-cog</v-icon>オプション
                </v-btn>
              </template>
              <SettingOptions @close="setting = false" />
            </v-dialog>
          </v-card-actions>
          <v-divider class="mx-2"></v-divider>
          <v-card
            flat
            class="overflow-y-auto"
            :height="$vuetify.breakpoint.lg ? cardHeight : undefined"
          >
            <ScheduleFormatter ref="viewer" :values="values" />
          </v-card>
        </v-card>
      </v-col>

      <v-col cols="12" lg="7">
        <v-card flat>
          <v-card-actions class="pa-4">
            <v-btn text outlined color="teal lighten-5" @click="addValue">
              <v-icon>mdi-plus-circle-outline</v-icon>候補追加
            </v-btn>
          </v-card-actions>
          <v-divider class="mx-2"></v-divider>
          <v-card flat :height="cardHeight" class="overflow-y-auto">
            <transition-group name="time-selector">
              <div v-for="value in values" :key="value.id" class="py-0 mx-2 time-selector-item">
                <TimeSelector
                  :value="values.find((el) => el.id == value.id)"
                  @input="updateValue"
                  @delete="deleteValue(value.id)"
                />
                <v-divider></v-divider>
              </div>
            </transition-group>
          </v-card>
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
    setting: false,
  }),
  head: () => ({
    title: 'スケジュール調整文',
  }),
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name
    },
    cardHeight() {
      // 画面サイズに合わせて高さを変更する
      switch (this.breakpoint) {
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
              timeRange: [10, 12],
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
    copyToClipboard() {
      this.$refs.viewer.copyToClipboard()
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

.time-selector-item {
  transition: all 0.5s ease;
}

.time-selector-enter-from,
.time-selector-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.time-selector-leave-active {
  position: absolute;
}
</style>
