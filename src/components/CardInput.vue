<template>
  <div class="cardInput" :class="{ rotation: isRotation }">
    <label>{{ label }}</label>
    <input @input="updateValue" :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardInput extends Vue {
  @Prop() private label!: string;
  @Prop() private placeholder!: string;
  @Prop() private isRotation?: boolean;

  updateValue(e: Event): void {
    this.$emit('input', (e.target as HTMLInputElement).value);
  }
}
</script>

<style scoped>

  .cardInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .cardInput.rotation {
    display: block;
  }

  .cardInput.rotation label {
    color: black;
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: 600;
  }

  .cardInput label {
    color: var(--light-grey);
  }

  .cardInput input {
    margin-top: .5rem;
    font-size: 1rem;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 0 1px var(--light-grey);
    border: 1px solid var(--light-grey);
  }

</style>