<template>
  <v-container>
    <v-row justify-center align-center>
      <img width="100%" class="img-news" :src="detailedNews.image" />
    </v-row>

    <v-row class="white px-5">
      <v-col cols="12">
        <h2 class="font-weight-medium futura-medium secondary--text">{{detailedNews.title}}</h2>
      </v-col>
      <v-col cols="12">
        <p
          class="subheading futura-medium grey--text title"
        >{{detailedNews.date}}</p>
      </v-col>
      <v-col cols="12">
        <p class="grey--text" v-html="detailedNews.content"></p>
      </v-col>

      <v-col cols="12">
        <p class="green--text">
          Here would be a whole artile about this Object. 
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailedView",
  data() {
    return {
      currentId: null
    };
  },
  computed: {
    ...mapGetters({
      getNewsById: "getNewsById"
    }),
    detailedNews() {
      return this.getNewsById(this.currentId);
    }
  },
  created() {
    this.currentId = this.$route.params.id;
  }
};
</script>