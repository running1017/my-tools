<template>
  <v-row>
    <v-col>
      <v-text-field v-model="pattern" dense :color="color"></v-text-field>
    </v-col>
    <v-col class="text-center" align-self="center">
      <v-icon>mdi-arrow-right-box</v-icon>
    </v-col>
    <v-col>
      <v-text-field v-model="newSubstr" dense :color="color"></v-text-field>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col>
      <v-btn-toggle :value="toggle" :color="btnColor" :background-color="color" multiple>
        <v-btn v-model="reg" @click="reg = !reg">
          <span>regex</span>
          <v-icon>mdi-regex</v-icon>
        </v-btn>
        <v-btn v-model="all" @click="all = !all">
          <span>all</span>
          <v-icon>mdi-checkbox-marked</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    rule: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    color: 'teal lighten-2',
    btnColor: 'light-green darken-3',
  }),
  computed: {
    pattern: {
      get() {
        return this.rule.pattern
      },
      set(pattern) {
        this.update('pattern', pattern)
      },
    },
    newSubstr: {
      get() {
        return this.rule.newSubstr
      },
      set(newSubstr) {
        this.update('newSubstr', newSubstr)
      },
    },
    reg: {
      get() {
        return this.rule.reg
      },
      set(reg) {
        this.update('reg', reg)
      },
    },
    all: {
      get() {
        return this.rule.all
      },
      set(all) {
        this.update('all', all)
      },
    },
    toggle() {
      return [this.reg, this.all].reduce((arr, val, i) => (val ? arr.concat(i) : arr), [])
    },
  },
  methods: {
    update(key, value) {
      this.$emit('update', { ...this.rule, [key]: value })
    },
  },
}
</script>

<style></style>
