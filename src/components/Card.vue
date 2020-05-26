<template>
  <v-card class="mx-auto" outlined>
    <v-card-title v-show="model.title">{{ model.title }}</v-card-title>
    <v-card-subtitle v-show="model.subtitle">{{
      model.subtitle
    }}</v-card-subtitle>

    <v-card-text>
    <div class="card-container">
      <div class="card">
        <div class="card-front">
          <div v-show="model.textA">{{ model.textA }}</div>
        </div>
        <div class="card-back">
          <div v-show="model.textB">{{ model.textB }}</div>
        </div>
      </div>
    </div>
    </v-card-text>

    <v-card-actions>Action</v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ICard } from "../model/deck";

@Component
export default class Card extends Vue {
  @Prop({ required: true }) model!: ICard;
}
</script>

<style lang="scss" scoped>
.card-container {
  background-color: transparent;
  perspective: 1000px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-container:hover .card {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-front {
}

.card-back {
  transform: rotateY(180deg);
}
</style>
