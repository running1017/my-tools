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
          <v-transition-fade>
            <v-card
              nuxt
              :to="page.to"
              :elevation="hover ? 12 : 2"
              :color="hover ? 'blue-grey darken-4' : undefined"
              :class="{ 'on-hover': hover }"
              height="100%"
            >
              <v-img height="200" :src="imgPath + page.img" contain>
                <template #placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title>{{ page.title }}</v-card-title>
              <v-card-text>{{ page.description }}</v-card-text>
            </v-card>
          </v-transition-fade>
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
  }),
  head: () => ({
    title: 'トップ',
  }),
  computed: {
    imgPath() {
      return this.$router.options.base + 'pageImage/'
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: background-color 0.3s, opacity 0.3s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
}
</style>
