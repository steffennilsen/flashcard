<template>
  <div class="text-center">
    <v-card class="mx-auto my-6" outlined>
      <v-card-title v-show="model.title">{{ model.title }}</v-card-title>
      <v-card-subtitle v-show="model.subtitle">{{
        model.subtitle
      }}</v-card-subtitle>

      <v-card-text>
        <div class="card-container">
          <div class="card" v-bind:class="{ rotate: showSideB }">
            <div class="card-front">
              <div class="display-2">
                {{ model.textA }}
              </div>
            </div>
            <div class="card-back">
              <div class="display-2">
                {{ model.textB }}
              </div>
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
.v-card {
  width: 800px;
}

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

.card.rotate {
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
