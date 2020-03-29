<template>
  <div class="time-calorie-info">
    <div class="info" v-if="time" id="time">
      <img
        alt="Time"
        class="svg"
        src="../assets/clock.svg"
        v-if="!chosenStyle || chosenStyle === 'style1'"
      />
      <div class="info-text" :style="textStyle">{{ formattedTime }}</div>
    </div>
    <span class="middle-dot" v-if="chosenStyle === 'style2'">·</span>
    <div class="info" v-if="calories" id="calories">
      <img
        alt="Calories"
        class="svg"
        src="../assets/calories.svg"
        v-if="!chosenStyle || chosenStyle === 'style1'"
      />
      <div class="info-text" :style="textStyle">{{ formattedCalories }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeCalorieInfo",
  props: ["calories", "time", "energyUnits", "chosenStyle"],
  computed: {
    formattedCalories: function() {
      if (!this.energyUnits || this.energyUnits == "calories") {
        return (
          this.calories + (this.chosenStyle == "style1" ? " calories" : " kcal")
        );
      } else {
        return Math.round(this.calories * 4.184) + " kJ";
      }
    },
    formattedTime: function() {
      if (this.time < 60) {
        return this.time + " min";
      } else {
        return Math.trunc(this.time / 60) + "h " + (this.time % 60) + "min";
      }
    },
    textStyle() {
      return !this.chosenStyle || this.chosenStyle == "style1"
        ? "{;color: #393c40; margin-left: 4px; font-size: 12px; margin-left: 5px; margin-right: 15px;}"
        : "{;margin-left: 6px; color: #ffffff; font-size: 14px;}";
    }
  }
};
</script>

<style>
.time-calorie-info {
  display: flex;
  align-items: center;
}

.info {
  align-items: center;
  display: flex;
}

.info-text {
  font-family: "proxima-nova";
}

.middle-dot {
  margin-left: 4px;
  margin-right: -2px;
  color: #ffffff;
  font-size: 32px;
  line-height: 14px;
}

.svg {
  height: 16px;
  width: 16px;
}
</style>
