<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat>{{ ruleGroup.name }}</v-card>
      </v-col>
      <v-col>
        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>

          <v-card color="grey darken-2">
            <v-card-title>{{ ruleGroup.name }}</v-card-title>
            <v-card-text>
              <TextFormatterRuleEditor
                v-for="(rule, i) in rules"
                :key="i"
                :rule="rule"
                @update="update"
              />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    ruleGroup: {
      type: Object,
      default: () => ({
        name: '',
        rules: [],
      }),
    },
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    dialog: false,
    rules: [],
  }),
  mounted() {
    this.resetRules()
  },
  methods: {
    update(newRule) {
      const updateIndex = this.rules.findIndex((el) => el.id === newRule.id)
      this.rules.splice(updateIndex, 1, newRule)
      this.$emit('update', this.id, this.rules)
    },
    resetRules() {
      this.rules.splice(0, this.rules.length)
      this.rules.push(...this.ruleGroup.rules)
    },
  },
}
</script>

<style></style>
