<template>
  <div class="viewDeck">
    <div class="deck__container">
      <Card 
        :code="card" 
        v-for="card in sortedCards" 
        :key="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { createNamespacedHelpers } from 'vuex';
import { getIdFromPath } from '../utils/window';

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('viewDeck');

@Component({
  name: 'ViewDeck',
  components: {
    Card
  },
  computed: {
    ...mapState([
      'rotationPile'
    ]),
    ...mapGetters([
      'sortedCards'
    ])
  },
  methods: {
    ...mapActions([
      'requestPiles'
    ])
  }
})
export default class ViewDeck extends Vue {
  requestPiles: any;
  sortedCards!: string[];

  mounted() {
    this.requestPiles(getIdFromPath());
  }
}
</script>

<style scoped>

  .deck__container {
    display: flex;
    padding: 20px;
  }

</style>