<template>
  <card :model="model"></card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ICard } from "../model/deck";
import Card from "../components/Card.vue";

@Component({
  components: {
    Card,
  },
})
export default class CardView extends Vue {
  model: ICard = {
    id: 'card_a',
    textA: "あ",
    textB: "a"
  };
}
</script>

<style lang="scss" scoped></style>
