<template>
  <v-container>
    <v-row>
      <h1>{{ title }}</h1>
    </v-row>
    <v-row>
      <p>{{ description }}</p>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-card height="100%">
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
      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-container>
            <v-row>
              <v-col v-for="(ruleGroup, i) in ruleGroups" :key="i" cols="12">
                <TextFormatterRuleGroupEditor :id="i" :rule-group="ruleGroup" @update="update" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pages from '~/assets/pages'
import { replaceByRules, preset } from '~/assets/textFunc'
const { title, description } = pages.find((p) => p.name === 'text-formatter')

export default {
  name: 'TextFormatterPage',
  data: () => ({
    title,
    description,
    beforeText: '',
    ruleGroups: preset,
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
  },
  methods: {
    update(index, newRule) {
      this.$set(this.ruleGroups[index], 'rules', newRule)
    },
  },
}
</script>

<style></style>
