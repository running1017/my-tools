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
                  v-model="before"
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
                  v-model="after"
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
              <v-col v-for="rule in rules" :key="rule.id">
                <div>
                  <p>{{ rule.pattern }}→{{ rule.newSubstr }}</p>
                </div>
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
import { replaceByRules } from '~/assets/textFunc'
const { title, description } = pages.find((p) => p.name === 'text-formatter')

export default {
  name: 'TextFormatterPage',
  data: () => ({
    title,
    description,
    before: '',
    rules: [
      { id: 0, pattern: '\\w', newSubstr: '--', reg: true, all: true },
      { id: 1, pattern: '\\w', newSubstr: ':', reg: false, all: true },
    ],
  }),
  head: () => ({
    title,
  }),
  computed: {
    after() {
      return replaceByRules(this.before, this.rules)
    },
  },
  methods: {},
}
</script>

<style></style>
