<template>
  <div>
    <v-layout justify-end class="px-5">

      <v-layout class="justify-end align-center mt-2">
        <span class="title mr-2">Sort by:</span>
        <v-btn-toggle v-model="sortTerm" class="mr-3">
          <v-btn text value="id">ID</v-btn>
          <v-btn text value="title">title</v-btn>
        </v-btn-toggle>
      </v-layout>

      <v-flex xs6 md4>
        <v-text-field v-model="searchTerm" hide-details prepend-icon="search"></v-text-field>
      </v-flex>

    </v-layout>

    <ObjectList :items="itemsToDisplay" />
  </div>
</template>

<script>
import ObjectList from "../components/ObjectList";
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    ObjectList
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      newsItems: "getNewsData",
      search: "getSearchTerm",
      sort: "getSortTerm",
    }),
    itemsToDisplay() {
      // SEARCH ON TITLE && CONTENT
      return this.newsItems.filter(
        item =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    searchTerm: {
      set (value) {
        this.$store.dispatch('searchTermChange', value)
      },
      get () {
        return this.search
      }
    },
    sortTerm: {
      set (value) {
        this.$store.dispatch('sortTermChange', value)
      },
      get () {
        return this.sort
      }
    }
  },
  watch: {
    sortTerm: {
      immediate: true,
      handler (newVal, oldVal) {
        this.sortItems(newVal);
      },
      deep: true
    }
  },
  methods: {
    sortItems (key =  'id') {
      this.newsItems.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
  }
};
</script>
<style scoped>
.v-application .px-5 {
  padding-right: 48px !important;
  padding-left: 48px !important;
}
</style>
