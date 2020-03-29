<template>
  <div class="card" @click="$emit('click')">
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
import TimeCalorieInfo from "./TimeCalorieInfo.vue";
import NutritionalValue from "./NutritionalValue.vue";
import Ratings from "./Ratings.vue";

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
    getImgUrl(imageName) {
      var images = require("../lib/assets-loader");
      return images("./" + imageName + ".png");
    }
  }
};
</script>

<style scoped>
.card {
  background: #d8d8d8;
  border-radius: 12px;
  margin: auto;
  height: 218px;
  width: 375px;
  position: relative;
}

.card:hover {
  cursor: pointer;
  background: #ffffff;
  border-radius: 12px;
  opacity: 0.9;
}

.overlay {
  position: absolute;
  height: 218px;
  width: 375px;
  background: #000000;
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.45;
  border-radius: 12px;
}

.nutritional-value-container {
  position: relative;
  top: -135px;
  left: 20px;
}

.photo {
  border-radius: 12px;
  height: 218px;
  width: 375px;
}

.text {
  font-family: "proxima-nova";
  font-size: 14px;
  line-height: 16px;
  color: #1bc98e;
  position: absolute;
  top: 30px;
  left: 27px;
  font-weight: 600;
}

.rating-container {
  position: relative;
  top: -175px;
  left: 27px;
}

.recipe-title {
  width: 328px;
  height: 52px;
  font-family: "proxima-nova";
  font-size: 24px;
  line-height: 26px;
  color: #ffffff;
  position: relative;
  top: -175px;
  left: 27px;
  text-align: left;
  font-weight: 500;
}

.time-calorie-container {
  position: relative;
  top: -175px;
  left: 23px;
}

.learn-more-button {
  top: -160px;
  right: 20px;
  float: right;
  position: relative;
}
</style>
