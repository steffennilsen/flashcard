<template>
  <div class="text-center">
    <v-card class="mx-auto my-6 card" outlined>
      <v-card-title v-show="model.title">{{ model.title }}</v-card-title>
      <v-card-subtitle v-show="model.subtitle">{{
        model.subtitle
      }}</v-card-subtitle>

      <v-card-text class="display-2">
        <div class="transform-container">
          <div class="tranform-inner-container" v-bind:class="{ rotate: showSideB }">
            <div class="transform-front">
                {{ model.textA }}
            </div>
            <div class="transform-back">
                {{ model.textB }}
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" v-on:click="flip">Flip</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ICard } from "../model/deck";

@Component
export default class Card extends Vue {
  @Prop({ required: true }) model!: ICard;
  public showSideB = false;

  public flip() {
    this.showSideB = !this.showSideB;
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 600px;
}

.transform-container {
  background-color: transparent;
  perspective: 1000px;
  min-height: 200px;
}

.tranform-inner-container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.tranform-inner-container.rotate {
  transform: rotateY(180deg);
}

.transform-front,
.transform-back {
  margin-top: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.transform-front {
}

.transform-back {
  transform: rotateY(180deg);
}
</style>
