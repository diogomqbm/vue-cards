<template>
  <form class="createDeck">
    <div class="createDeck__inputs">
      <CardInput :label="`CARD ${index}`" v-for="index in 10" :key="index"/>
    </div>
  </form>
</template>

<script>
import CardInput from '@/components/CardInput.vue';

export default {
  name: 'CreateDeck',
  data() {
    return {
      inputs: [{
        value: "",
        valid: false
      }]
    }
  },
  components: {
    CardInput
  }
}
</script>

<style scoped>

  .createDeck {
    margin: 2rem;
  }

  .createDeck__inputs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;
  }

</style>
