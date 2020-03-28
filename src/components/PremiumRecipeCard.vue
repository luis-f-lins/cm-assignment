<template>
  <div class="rectangle" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="hoverOverlay" v-if="hover"></div>
    <div class="overlay"></div>
    <PremiumRectangle class="premiumRectangleContainer" />
    <img
      class="heart"
      alt="Heart Unfilled"
      src="../assets/heart-unfilled.svg"
      v-if="!isHearted"
    />
    <img
      class="heart"
      alt="Heart Filled"
      src="../assets/heart-filled.svg"
      v-if="isHearted"
    />
    <img alt="Recipe Photo" class="photo" v-bind:src="getImgUrl(imageName)" />
    <div class="recipeName">{{ formattedRecipeName }}</div>
    <Ratings
      class="ratingContainer"
      v-bind:ratingCount="this.ratingCount"
      v-bind:score="this.score"
      v-bind:showRatingCount="true"
    />
    <div class="infoLine">
      <DurationCalorieInfo
        v-bind:calories="this.calories"
        v-bind:duration="this.duration"
        v-bind:energyUnits="this.energyUnits"
      />
      <NutritionalValue
        class="nutritionalValueContainer"
        v-bind:carbs="this.carbs"
        v-bind:fats="this.fats"
        v-bind:proteins="this.proteins"
      />
    </div>
  </div>
</template>

<script>
import DurationCalorieInfo from "./DurationCalorieInfo.vue";
import NutritionalValue from "./NutritionalValue.vue";
import PremiumRectangle from "./PremiumRectangle.vue";
import Ratings from "./Ratings.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    DurationCalorieInfo,
    NutritionalValue,
    PremiumRectangle,
    Ratings
  },
  props: [
    "calories",
    "carbs",
    "duration",
    "energyUnits",
    "fats",
    "imageName",
    "isHearted",
    "proteins",
    "ratingCount",
    "recipeName",
    "score"
  ],
  data() {
    return {
      hover: false,
      stars: []
    };
  },
  computed: {
    formattedRecipeName: function() {
      return this.recipeName;
    }
  },
  methods: {
    getImgUrl(imageName) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + imageName + ".png");
    }
  }
};
</script>

<style>
.infoLine {
  align-content: space-between;
  display: flex;
  margin-left: 15px;
  margin-top: 6px;
}

.heart {
  margin-left: 304px;
  margin-top: 16px;
  position: absolute;
}

.hoverOverlay {
  background: #ffffff;
  border-radius: 12px;
  opacity: 0.2;
  height: 200px;
  position: absolute;
  width: 343px;
}

.nutritionalValueContainer {
  margin-left: 30px;
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

.premiumRectangleContainer {
  margin-left: 8px;
  margin-top: 172px;
  position: absolute;
}

.rectangle {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  margin: auto;
  height: 318px;
  width: 343px;
}

.ratingContainer {
  margin-left: 16px;
  margin-top: 10px;
}

.recipeName {
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
  margin-top: 4px;
  overflow: hidden;
  text-align: left;
}

.rectangle:hover {
  cursor: pointer;
}
</style>
