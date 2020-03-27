<template>
  <div class="rectangle">
    <div class="overlay"></div>
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
      <div class="duration">
        <img alt="Clock" src="../assets/clock.svg" class="clock" />
        <div class="timeText">{{ formattedDuration }}</div>
      </div>
      <div class="duration">
        <img alt="Calories" src="../assets/calories.svg" class="clock" />
        <div class="timeText">{{ formattedCalories }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  props: [
    "imageName",
    "recipeName",
    "isPremium",
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
      stars: []
    };
  },
  mounted: function() {
    this.setStars(this.score);
  },
  computed: {
    formattedRecipeName: function() {
      return this.recipeName;
    },
    formattedDuration: function() {
      if (this.duration < 60) {
        return this.duration + "min";
      } else {
        return (
          Math.trunc(this.duration / 60) + "h " + (this.duration % 60) + "min"
        );
      }
    },
    formattedRatingCount: function() {
      if (this.ratingCount > 1 || this.ratingCount == 0) {
        return this.ratingCount + " ratings";
      } else {
        return this.ratingCount + " rating";
      }
    },
    formattedCalories: function() {
      if (!this.energyUnits || this.energyUnits == "calories") {
        return this.calories + " calories";
      } else {
        return this.calories * 4.184 + " kJ";
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
  color: #0c0c0a;
  margin-right: 16px;
  margin-left: 16px;
  margin-top: 8px;
}

.duration {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.timeText {
  font-family: "proxima-nova";
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;
  color: #393c40;
}

.clock {
  width: 16px;
  height: 16px;
}
.ratings {
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 8px;
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
  margin-top: 4px;
}
</style>

<style scoped>
button {
  background: lightsteelblue;
}
</style>
