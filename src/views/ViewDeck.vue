<template>
  <div>
    <p v-for="card in sortedCards" :key="card">{{ card }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { createNamespacedHelpers } from 'vuex';
import { getIdFromPath } from '../utils/window';

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('viewDeck');

@Component({
  name: 'ViewDeck',
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