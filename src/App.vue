<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" class="font-weight-light lp-heading">Launch Potato</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch('fetchNewsDataAPICall')
  }
};
</script>
<style scoped>
.lp-heading {
  cursor: pointer;
}
</style>