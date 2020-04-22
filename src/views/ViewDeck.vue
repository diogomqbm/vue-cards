<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="shouldDisplayError">
    Failed trying to fetch piles from deck!<br/>
    Please, try again.
  </h1>
  <div v-else class="viewDeck">
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
        <ul class="infos__list">
          <li v-for="(combo, index) in fullHouseCombos" :key="index">{{ combo.join() }}</li>
        </ul>
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
      'rotationPile',
      'isLoading',
      'error'
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
  isLoading!: boolean;
  error!: null | string;

  mounted() {
    this.requestPiles(getIdFromPath());
  }

  get shouldDisplayError(): boolean {
    return !!this.error;
  }
}
</script>

<style scoped>

  .viewDeck {
    padding: 20px;
  }

  .viewDeck__cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;
    background-color: var(--light-background);
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--light-grey);
  }

  .viewDeck__infos {
    text-align: left;
    font-size: 1.5rem;
  }

  .infos__label {
    font-weight: 600;
  }

  .infos__list {
    margin: 0;
  }

</style>