<template>
  <v-card color="grey darken-2">
    <v-card-title>
      <span>{{ ruleGroup.name }}</span>
      <v-spacer></v-spacer>
      <v-icon @click="close">mdi-close</v-icon>
    </v-card-title>
    <v-card-text>
      <TextFormatterRuleEditor
        v-for="(rule, i) in ruleGroup.rules"
        :key="i"
        :rule="rule"
        @update="update"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    ruleGroup: {
      type: Object,
      default: () => ({
        id: null,
        name: '',
        rules: [],
      }),
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    update(newRule) {
      const updateIndex = this.ruleGroup.rules.findIndex((el) => el.id === newRule.id)
      const newRules = [...this.ruleGroup.rules]
      newRules[updateIndex] = newRule
      this.$emit('update', this.ruleGroup.id, newRules)
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
