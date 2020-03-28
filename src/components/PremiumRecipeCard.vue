<template>
  <div class="rectangle" @mouseover="hover = true" @mouseleave="hover = false">
    <div v-if="hover" class="hoverOverlay"></div>
    <div class="overlay"></div>
    <div class="premiumRectangle">
      <img alt="Clock" src="../assets/trophy.svg" class="premiumTrophy" />
      <div class="premiumText">Premium Recipe</div>
    </div>
    <img
      v-if="!isHearted"
      alt="Heart Unfilled"
      src="../assets/heart-unfilled.svg"
      class="heart"
    />
    <img
      v-if="isHearted"
      alt="Heart Filled"
      src="../assets/heart-filled.svg"
      class="heart"
    />
    <img alt="Recipe Photo" v-bind:src="getImgUrl(imageName)" class="photo" />
    <div class="recipeName">{{ formattedRecipeName }}</div>
    <div class="ratings">
      <span v-for="(item, index) in stars" v-bind:key="index">
        <img
          v-if="item == 'unfilled'"
          alt="Clock"
          src="../assets/star-unfilled.svg"
          class="star"
        />
        <img
          v-if="item == 'filled'"
          alt="Clock"
          src="../assets/star-filled.svg"
          class="star"
        />
        <img
          v-if="item == 'half-filled'"
          alt="Clock"
          src="../assets/star-half-filled.svg"
          class="star"
        />
      </span>
      <span class="ratingCount">{{ formattedRatingCount }}</span>
    </div>
    <div class="secondLine">
      <DurationCalorieInfo
        v-bind:calories="this.calories"
        v-bind:duration="this.duration"
      />
      <NutritionalValue
        v-bind:fats="this.fats"
        v-bind:carbs="this.carbs"
        v-bind:proteins="this.proteins"
      />
    </div>
  </div>
</template>

<script>
import NutritionalValue from "./NutritionalValue.vue";
import DurationCalorieInfo from "./DurationCalorieInfo.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    NutritionalValue,
    DurationCalorieInfo
  },
  props: [
    "imageName",
    "recipeName",
    "isPremium",
    "isHearted",
    "score",
    "ratingCount",
    "duration",
    "calories",
    "carbs",
    "proteins",
    "fats",
    "energyUnits"
  ],
  data() {
    return {
      stars: [],
      hover: false
    };
  },
  mounted: function() {
    this.setStars(this.score);
  },
  computed: {
    formattedRecipeName: function() {
      return this.recipeName;
    },
    formattedRatingCount: function() {
      if (this.ratingCount > 1 || this.ratingCount == 0) {
        return this.ratingCount + " ratings";
      } else {
        return this.ratingCount + " rating";
      }
    }
  },
  methods: {
    setStars: function(score) {
      let rating = Math.round(score * 2) / 2;
      let output = [];

      for (var i = rating; i >= 1; i--) {
        output.push("filled");
      }

      if (i == 0.5) output.push("half-filled");

      for (let i = 5 - rating; i >= 1; i--) output.push("unfilled");

      this.stars = output;
      return null;
    },
    getImgUrl(imageName) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + imageName + ".png");
    }
  }
};
</script>

<style>
.rectangle {
  width: 343px;
  height: 318px;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  margin: auto;
}

.overlay {
  position: absolute;
  width: 343px;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.photo {
  width: 343px;
  height: 200px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.recipeName {
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  line-height: 20px;
  color: #0c0c0a;
  margin-right: 16px;
  margin-left: 16px;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.ratings {
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 10px;
}

.ratingCount {
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #1ca677;
  margin-left: 8px;
}

.secondLine {
  display: flex;
  align-content: space-between;
  margin-top: 6px;
}

.circle {
  width: 6px;
  height: 6px;
  margin-left: 8px;
}

.nutritionalValue {
  margin-left: 40px;
  display: flex;
  align-items: center;
}

.nutritionalValueText {
  font-family: "proxima-nova";
  font-size: 12px;
  line-height: 14px;
  margin-left: 4px;
  color: #393c40;
}

.premiumRectangle {
  position: absolute;
  width: 117px;
  height: 20px;
  background: #ffffff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-top: 172px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.premiumText {
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 1);
  margin-left: 4px;
}

.premiumTrophy {
  width: 12px;
  height: 12px;
}

.heart {
  position: absolute;
  margin-top: 16px;
  margin-left: 304px;
}

.hoverOverlay {
  position: absolute;
  width: 343px;
  height: 200px;
  background: #ffffff;
  opacity: 0.2;
  border-radius: 12px;
}
</style>

<style scoped>
button {
  background: lightsteelblue;
}
</style>
