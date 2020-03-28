<template>
  <div class="durationCalorieInfo">
    <div class="info">
      <img alt="Duration" class="svg" src="../assets/clock.svg" />
      <div class="infoText">{{ formattedDuration }}</div>
    </div>
    <div class="info">
      <img alt="Calories" class="svg" src="../assets/calories.svg" />
      <div class="infoText">{{ formattedCalories }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DurationCalorieInfo",
  props: ["calories", "duration", "energyUnits"],
  computed: {
    formattedCalories: function() {
      console.log(this.energyUnits);
      if (!this.energyUnits || this.energyUnits == "calories") {
        return this.calories + " calories";
      } else {
        return Math.round(this.calories * 4.184) + " kJ";
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
.durationCalorieInfo {
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
