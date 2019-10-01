<template>
  <v-card flat :color="color" class="pa-2 elevation-3 mb-3" @click="$router.push(`/detailed-view/${id}`)">
    <v-container class="px12">
        <v-layout row wrap class="py-2">
          <v-flex xs12 md4 class="" fill-height>
            <v-layout justify-center align-center fill-height>
              <img width="100%" class="img-news" :src="image">
            </v-layout>
          </v-flex>
          <v-flex xs12 md8 fill-height class="pt-4" :class="$vuetify.breakpoint.smAndUp ? 'pl-2' : ''">
                <p class="font-weight-medium futura-medium secondary--text">{{`[ID: ${id}] ${title}`}}</p>
                <p class="subheading futura-medium grey--text"
                   :class="[$vuetify.breakpoint.xs ? 'body-1' :  'title']">{{date}}</p>
                <p class="grey--text" v-html="content"></p>
          </v-flex>
        </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  props: {
    id: {
      type: [String, Number]
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'white'
    },
    content: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.img-news {
  max-width: 400px;
  background-size: contain;
  border: 1px solid rgba(221, 221, 221, 0.705);
  border-radius: 2px;
}


.v-card {
    transition: all 0.5s;
}
.v-card:hover {
    transform: scale(1.01);
}
</style>
