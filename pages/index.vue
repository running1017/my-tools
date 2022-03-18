<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>トップページです</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="page in pages" :key="page.title" cols="12" sm="6" lg="4">
        <v-hover v-slot="{ hover }">
          <v-card
            nuxt
            :to="page.to"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            height="100%"
          >
            <v-img
              height="200"
              :src="imgPath + page.img"
              contain
              :class="{ 'on-hover': hover, 'align-end': true }"
            ></v-img>
            <v-card-title color="red">{{ page.title }}</v-card-title>
            <v-card-text>{{ page.description }}</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pages from '@/assets/pages/pages.ts'

export default {
  name: 'IndexPage',
  data: () => ({
    pages,
    imgPath: '/pageImage/',
  }),
  head: () => ({
    title: 'トップ',
  }),
}
</script>

<style scoped>
.v-image {
  transition: opacity 0.4s ease-in-out;
}

.v-image:not(.on-hover) {
  opacity: 0.6;
}
</style>
