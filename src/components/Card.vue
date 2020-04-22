<template>
  <div class="card">
    <div class="card__top">
      <label :class="{ red: suit() === 'H' | suit() === 'D' }">{{ value() }}</label>
      <label class="red" v-if="suit() === 'H'">&hearts;</label>
      <label class="red" v-else-if="suit() === 'D'">&diams;</label>
      <label class="black" v-else-if="suit() === 'C'">&clubs;</label>
      <label class="black" v-else-if="suit() === 'S'">&spades;</label>
    </div>
    <div class="card__bottom">
      <label :class="{ red: suit() === 'H' | suit() === 'D' }">{{ value() }}</label>
      <label class="red" v-if="suit() === 'H'">&hearts;</label>
      <label class="red" v-else-if="suit() === 'D'">&diams;</label>
      <label class="black" v-else-if="suit() === 'C'">&clubs;</label>
      <label class="black" v-else-if="suit() === 'S'">&spades;</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getCardValue, getCardSuit } from '../utils/sorting';

@Component({
  name: 'Card',
})
export default class Card extends Vue {
  @Prop() code!: string;

  public value(): string {
    return getCardValue(this.code);
  }
  
  public suit(): string {
    return getCardSuit(this.code);
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: space-between;
    padding: 2.5px 10px;
    background-color: white;
    height: 250px;
    width: 125px;
    font-size: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--light-grey);
    font-weight: 600;
  }

  .card__top {
    text-align: left;
  }

  .card__bottom {
    text-align: right;
    transform: scaleY(-1);
  }

  .card__bottom label:first-child, .card__top label:first-child {
    margin-right: 5px;
  }

  .red {
    color: red;
  }

  .black {
    color: black;
  }

</style>