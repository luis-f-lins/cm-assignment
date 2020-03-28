<template>
  <div class="timeCalorieInfo">
    <div class="info" v-if="time">
      <img alt="Time" class="svg" src="../assets/clock.svg" />
      <div class="infoText">{{ formattedTime }}</div>
    </div>
    <div class="info" v-if="calories">
      <img alt="Calories" class="svg" src="../assets/calories.svg" />
      <div class="infoText">{{ formattedCalories }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeCalorieInfo",
  props: ["calories", "time", "energyUnits"],
  computed: {
    formattedCalories: function() {
      if (!this.energyUnits || this.energyUnits == "calories") {
        return this.calories + " calories";
      } else {
        return Math.round(this.calories * 4.184) + " kJ";
      }
    },
    formattedTime: function() {
      if (this.time < 60) {
        return this.time + "min";
      } else {
        return Math.trunc(this.time / 60) + "h " + (this.time % 60) + "min";
      }
    }
  }
};
</script>

<style>
.timeCalorieInfo {
  display: flex;
}

.info {
  align-items: center;
  display: flex;
}

.infoText {
  color: #393c40;
  font-family: "proxima-nova";
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;
  margin-right: 15px;
}

.svg {
  height: 16px;
  width: 16px;
}
</style>
