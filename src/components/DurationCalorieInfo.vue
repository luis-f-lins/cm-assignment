<template>
  <div class="durationCalorieInfo">
    <div class="duration">
      <img alt="Clock" src="../assets/clock.svg" class="clock" />
      <div class="timeText">{{ formattedDuration }}</div>
    </div>
    <div class="duration">
      <img alt="Calories" src="../assets/calories.svg" class="clock" />
      <div class="timeText">{{ formattedCalories }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DurationCalorieInfo",
  props: ["duration", "calories"],
  computed: {
    formattedCalories: function() {
      if (!this.energyUnits || this.energyUnits == "calories") {
        return this.calories + " calories";
      } else {
        return this.calories * 4.184 + " kJ";
      }
    },
    formattedDuration: function() {
      if (this.duration < 60) {
        return this.duration + "min";
      } else {
        return (
          Math.trunc(this.duration / 60) + "h " + (this.duration % 60) + "min"
        );
      }
    }
  }
};
</script>

<style>
.duration {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.durationCalorieInfo {
  display: flex;
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
</style>
