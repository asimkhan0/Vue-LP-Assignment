<template>
  <v-container fill-height>
    <v-layout row wrap mx-3>
      <template v-for="(card, index) in items">
        <v-flex xs12 :key="index" :class="card.order">
          <NewsComponent
					  :id="card.id"
            :image="card.image"
            :items="card.items"
            :color="card.color"
            :title="card.title"
            :date="card.date"
            :content="card.content"
          ></NewsComponent>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import NewsComponent from "@/components/NewsComponent";

export default {
	name: 'ObjectList',
  components: {
    NewsComponent
	},
	props: {
		items: {
			type: Array,
			default: []
		}
	}
};
</script>

<style>
</style>
