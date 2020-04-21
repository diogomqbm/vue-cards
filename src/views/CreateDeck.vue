<template>
  <form class="createDeck" @submit.prevent="submit">
    <div class="createDeck__inputs">
      <card-input 
        :label="`CARD ${index}`" 
        v-for="(item, index) in deck" 
        :key="index"
        v-model="item.value"
        placeholder="Enter card"
      />
    </div>
    <div class="createDeck__rotation">
      <card-input
        label="Rotation Card" 
        v-model="rotationCard"
        placeholder="Enter card"
        isRotation="true"
      />
    </div>
    <button 
      :disabled="isLoading || !nonEmptyValues(deck).length" 
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
import { areAllCardsValid, hasDuplicates } from '../utils/form';
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
  private deck: { value: string }[] = [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}];
  private rotationCard = '';
  generateDeck: any; //typescript workaround mapped Action
  isLoading!: boolean;

  public submit() {
    const values = this.nonEmptyValues();
    const isSomethingWrong = !areAllCardsValid(values) || hasDuplicates(values) || !isValidCard(this.rotationCard);
    if (isSomethingWrong) {
      return alert('Your cards are not valid');
    }
    return this.generateDeck({
      deck: values,
      rotationCard: this.rotationCard
    })
  }
  
  public nonEmptyValues() {
    return this.deck
      .map(i => i.value)
      .filter(v => v.length);
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
