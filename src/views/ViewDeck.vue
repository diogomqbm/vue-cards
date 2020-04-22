<template>
  <div class="viewDeck">
    <div class="viewDeck__cards">
      <Card 
        :code="card" 
        v-for="card in sortedCards" 
        :key="card"
      />
    </div>
    <div class="viewDeck__infos">
      <div>
        <label class="infos__label">High Card: </label>
        <label>{{ sortedCards[0] }}</label>
      </div>
      <div>
        <label class="infos__label">Full House Combo: </label>
        <label v-if="!fullHouseCombos.length">None</label>
      </div>
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
      'sortedCards',
      'fullHouseCombos'
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
  fullHouseCombos!: string[][];

  mounted() {
    this.requestPiles(getIdFromPath());
  }
}
</script>

<style scoped>

  .viewDeck {
    padding: 20px;
  }

  .viewDeck__cards {
    display: flex;
    padding: 20px;
  }

  .viewDeck__infos {
    text-align: left;
    font-size: 1.5rem;
  }

  .infos__label {
    font-weight: 600;
  }

</style>