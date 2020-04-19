<template>
  <div class="cardInput">
    <label>{{ label }}</label>
    <input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardInput extends Vue {
  @Prop() private label!: string;
}
</script>

<style scoped>

  .cardInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .cardInput label {
    color: var(--light-grey);
  }

  .cardInput input {
    margin-top: .5rem;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 8px;
    border-radius: 8px;
    box-shadow: none;
    border: none;
  }

</style>