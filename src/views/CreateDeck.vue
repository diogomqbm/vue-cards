<template>
  <form class="createDeck" @submit.prevent="submit">
    <div class="createDeck__inputs">
      <CardInput 
        :label="`CARD ${index}`" 
        v-for="index in 10" 
        :key="index"
        placeholder="Enter card"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import CardInput from '@/components/CardInput.vue';
import { getValuesFromForm, areAllCardsValid, hasDuplicates } from '../utils/form';

export default {
  name: 'CreateDeck',
  components: {
    CardInput
  },

  methods: {
    submit(e: Event) {
      const values = getValuesFromForm(e.target as HTMLFormElement);
      console.log(!areAllCardsValid(values));
      if (hasDuplicates(values) || !areAllCardsValid(values)) {
        alert("no");
      }
      return "null"
    }
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
