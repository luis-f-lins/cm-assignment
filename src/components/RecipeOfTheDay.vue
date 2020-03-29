<template>
  <div
    class="card"
    @click="$emit('click')"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="hover-overlay" v-if="hover"></div>
    <div class="overlay"></div>
    <img alt="Recipe Photo" class="photo" v-bind:src="getImgUrl(imageName)" />
    <div class="text">RECIPE OF THE DAY</div>
    <div class="recipe-title">{{ recipeTitle }}</div>
    <Ratings
      class="rating-container"
      v-bind:score="this.score"
      v-bind:showRatingCount="false"
    />
    <TimeCalorieInfo
      class="time-calorie-container"
      v-bind:time="this.time"
      v-bind:calories="this.calories"
      v-bind:energyUnits="this.energyUnits"
      v-bind:chosenStyle="'style2'"
    />
    <NutritionalValue
      class="nutritional-value-container"
      v-bind:carbs="this.carbs"
      v-bind:fats="this.fats"
      v-bind:proteins="this.proteins"
      v-bind:chosenStyle="'style2'"
    />
    <img
      alt="Learn More"
      class="learn-more-button"
      src="../assets/learn-more-button.svg"
    />
  </div>
</template>

<script>
import NutritionalValue from "./NutritionalValue.vue";
import Ratings from "./Ratings.vue";
import TimeCalorieInfo from "./TimeCalorieInfo.vue";
import getImgUrl from "../lib/assets-loader.js";

export default {
  name: "RecipeOfTheDay",
  components: { NutritionalValue, Ratings, TimeCalorieInfo },
  props: [
    "calories",
    "carbs",
    "energyUnits",
    "fats",
    "imageName",
    "proteins",
    "recipeTitle",
    "score",
    "time"
  ],
  data() {
    return {
      hover: false
    };
  },
  methods: {
    getImgUrl: getImgUrl
  }
};
</script>

<style scoped>
.card {
  background: #d8d8d8;
  border-radius: 12px;
  margin: auto;
  height: 218px;
  position: relative;
  width: 375px;
}

.card:hover {
  cursor: pointer;
}

.hover-overlay {
  background: #ffffff;
  border-radius: 12px;
  height: 218px;
  opacity: 0.2;
  position: absolute;
  width: 375px;
}

.learn-more-button {
  float: right;
  position: relative;
  right: 20px;
  top: -160px;
}

.nutritional-value-container {
  left: 20px;
  position: relative;
  top: -135px;
}

.overlay {
  background: #000000;
  background-blend-mode: multiply;
  border-radius: 12px;
  height: 218px;
  mix-blend-mode: normal;
  opacity: 0.45;
  position: absolute;
  width: 375px;
}

.photo {
  border-radius: 12px;
  height: 218px;
  width: 375px;
}

.rating-container {
  left: 27px;
  position: relative;
  top: -175px;
}

.recipe-title {
  color: #ffffff;
  font-family: "proxima-nova";
  font-size: 24px;
  font-weight: 500;
  height: 52px;
  left: 27px;
  line-height: 26px;
  position: relative;
  text-align: left;
  top: -175px;
  width: 328px;
}

.text {
  color: #1bc98e;
  font-family: "proxima-nova";
  font-size: 14px;
  font-weight: 600;
  left: 27px;
  line-height: 16px;
  position: absolute;
  top: 30px;
}

.time-calorie-container {
  left: 23px;
  position: relative;
  top: -175px;
}
</style>
