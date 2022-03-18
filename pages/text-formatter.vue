<template>
  <v-container>
    <v-row>
      <h1>{{ title }}</h1>
    </v-row>
    <v-row>
      <p>{{ description }}</p>
    </v-row>
    <v-row>
      <v-col>工事中...</v-col>
    </v-row>
  </v-container>
</template>

<script>
import pages from '@/assets/pages.ts'
const thisPage = pages.find((p) => p.to === '/text-formatter')
const { title, description } = thisPage

export default {
  name: 'TextFormatterPage',
  data: () => ({
    title,
    description,
  }),
  head: () => ({
    title,
  }),
}
</script>

<style></style>
