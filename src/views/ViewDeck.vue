<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { createNamespacedHelpers } from 'vuex';
import { getIdFromPath } from '../utils/window';

const { mapState, mapActions } = createNamespacedHelpers('viewDeck');

@Component({
  name: 'ViewDeck',
  computed: {
    ...mapState([
      'cardsPile',
      'rotationPile'
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

  mounted() {
    this.requestPiles(getIdFromPath());
  }
}
</script>