<template>
  <div
    class="card"
    @click="$emit('click')"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="hover-overlay" v-if="hover"></div>
    <div class="overlay"></div>
    <PremiumRectangle class="premium-rectangle-container" />
    <img
      class="heart"
      alt="Heart Unfilled"
      src="../assets/heart-unfilled.svg"
      v-if="!isHearted"
    />
    <img
      class="filled-heart"
      alt="Heart Filled"
      src="../assets/heart-filled.svg"
      v-if="isHearted"
    />
    <img alt="Recipe Photo" class="photo" v-bind:src="getImgUrl(imageName)" />
    <div class="recipe-title">{{ recipeTitle }}</div>
    <Ratings
      class="rating-container"
      v-bind:ratingCount="this.ratingCount"
      v-bind:score="this.score"
      v-bind:showRatingCount="true"
    />
    <div class="info-line">
      <TimeCalorieInfo
        v-bind:calories="this.calories"
        v-bind:time="this.time"
        v-bind:energyUnits="this.energyUnits"
        v-bind:chosenStyle="'style1'"
      />
      <NutritionalValue
        class="nutritional-value-container"
        v-bind:carbs="this.carbs"
        v-bind:fats="this.fats"
        v-bind:proteins="this.proteins"
        v-bind:chosenStyle="'style1'"
      />
    </div>
  </div>
</template>

<script>
import TimeCalorieInfo from "./TimeCalorieInfo.vue";
import NutritionalValue from "./NutritionalValue.vue";
import PremiumRectangle from "./PremiumRectangle.vue";
import Ratings from "./Ratings.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    TimeCalorieInfo,
    NutritionalValue,
    PremiumRectangle,
    Ratings
  },
  props: [
    "calories",
    "carbs",
    "energyUnits",
    "fats",
    "imageName",
    "isHearted",
    "proteins",
    "ratingCount",
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
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  margin: auto;
  height: 318px;
  width: 343px;
}

.card:hover {
  cursor: pointer;
}

.filled-heart {
  margin-left: 307px;
  margin-top: 17px;
  position: absolute;
}

.info-line {
  align-content: space-between;
  display: flex;
  margin-left: 15px;
  margin-top: 8px;
}

.heart {
  margin-left: 304px;
  margin-top: 16px;
  position: absolute;
}

.hover-overlay {
  background: #ffffff;
  border-radius: 12px;
  opacity: 0.2;
  height: 200px;
  position: absolute;
  width: 343px;
}

.nutritional-value-container {
  margin-left: 200px;
  position: absolute;
}

.overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 200px;
  position: absolute;
  width: 343px;
}

.photo {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 200px;
  width: 343px;
}

.premium-rectangle-container {
  margin-left: 8px;
  margin-top: 172px;
  position: absolute;
}

.rating-container {
  margin-left: 16px;
  margin-top: 10px;
}

.recipe-title {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #0c0c0a;
  display: -webkit-box;
  font-family: "proxima-nova";
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  margin-right: 16px;
  margin-left: 16px;
  margin-top: 5px;
  overflow: hidden;
  text-align: left;
}
</style>
