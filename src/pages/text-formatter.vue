<template>
  <v-container>
    <v-row>
      <h1>{{ title }}</h1>
    </v-row>
    <v-row>
      <p>{{ description }}</p>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card :height="cardHeight">
          <v-container>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="beforeText"
                  label="変換前テキスト"
                  rows="1"
                  auto-grow
                  hide-details
                  outlined
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-icon>mdi-arrow-down-bold</v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="afterText"
                  label="変換後テキスト"
                  rows="1"
                  auto-grow
                  hide-details
                  readonly
                  outlined
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card :height="cardHeight">
          <v-container v-show="!showEditor" style="position: absolute">
            <v-row v-for="(ruleGroup, i) in ruleGroups" :key="i">
              <v-col>
                <p>{{ ruleGroup.name }}</p>
              </v-col>
              <v-col>
                <v-icon @click="openEditor(i, ruleGroup)">mdi-cog</v-icon>
              </v-col>
            </v-row>
          </v-container>
          <v-scroll-y-transition>
            <v-container v-show="showEditor">
              <TextFormatterRuleGroupEditor
                :rule-group="editRuleGroup"
                @update="update"
                @close="showEditor = false"
              />
            </v-container>
          </v-scroll-y-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { pages } from '~/assets/pages'
import { replaceByRules, preset } from '~/assets/textFunc'
const { title, description } = pages.find((p) => p.name === 'text-formatter')

export default {
  name: 'TextFormatterPage',
  data: () => ({
    title,
    description,
    beforeText: '',
    editRuleGroup: {
      id: null,
      name: '',
      rules: [],
    },
    ruleGroups: preset,
    showEditor: false,
  }),
  head: () => ({
    title,
  }),
  computed: {
    flattenRules() {
      return this.ruleGroups.map((r) => r.rules).flat()
    },
    afterText() {
      return replaceByRules(this.beforeText, this.flattenRules)
    },
    cardHeight() {
      // 画面サイズに合わせて高さを変更する
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
        case 'md':
          return '400px'
        case 'lg':
          return '500px'
        case 'xl':
          return '630px'
        default:
          return undefined
      }
    },
  },
  methods: {
    update(index, newRule) {
      this.$set(this.ruleGroups[index], 'rules', newRule)
    },
    openEditor(index, ruleGroup) {
      Object.assign(this.editRuleGroup, { ...ruleGroup, id: index })
      this.showEditor = true
    },
  },
}
</script>

<style></style>
