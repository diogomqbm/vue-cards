<template>
  <form class="createDeck" @submit.prevent="submit">
    <div class="createDeck__inputs">
      <card-input 
        :label="`CARD ${item}`" 
        v-for="item in 10" 
        :key="item"
        placeholder="Enter card"
      />
    </div>
    <div class="createDeck__rotation">
      <card-input
        label="Rotation Card" 
        placeholder="Enter card"
        isRotation="true"
      />
    </div>
    <button 
      :disabled="isLoading" 
      class="createDeck__submit" 
      type="submit"
    >
      {{ isLoading ? 'Loading' : 'Submit' }}
    </button>
  </form>
</template>

<script lang="ts">
import CardInput from '@/components/CardInput.vue';
import { Component, Vue } from 'vue-property-decorator';
import { areAllCardsValid, hasDuplicates, getFormValues } from '../utils/form';
import { isValidCard } from '../utils/cards';
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('createDeck');

@Component({
  name: 'CreateDeck',
  components: {
    CardInput
  },
  computed: {
    ...mapState([
      'isLoading'
    ])
  },
  methods: {
    ...mapActions([
      'generateDeck'
    ])
  }
})

export default class CreateDeck extends Vue {
  generateDeck: any; //typescript workaround mapped Action
  isLoading!: boolean;

  public submit(e: Event) {
    const { deck, rotationCard } = getFormValues(e.target as HTMLFormElement);
    const isSomethingWrong = !areAllCardsValid(deck) || hasDuplicates(deck) || !isValidCard(rotationCard);
    if (isSomethingWrong) {
      return alert('Your cards are not valid');
    }
    return this.generateDeck({ deck, rotationCard })
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

  .createDeck__rotation {
    margin: 4rem 0;
  }

  .createDeck__submit {
    padding: 8px;
    border-radius: 8px;
    box-shadow: none;
    border: 0;
    font-size: 2rem;
    background-color: #1C0063;
    font-weight: 600;
    color: var(--title-color);
    cursor: pointer;
  }

</style>
