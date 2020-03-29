<template>
  <div class="nutritional-value">
    <img alt="carbs" src="../assets/carbs.svg" class="circle" />
    <span class="nutritional-value-text" :style="textStyle">{{ carbs }}g</span>
    <img alt="proteins" src="../assets/proteins.svg" class="circle" />
    <span class="nutritional-value-text" :style="textStyle"
      >{{ proteins }}g</span
    >
    <img alt="fats" src="../assets/fats.svg" class="circle" />
    <span class="nutritional-value-text" :style="textStyle">{{ fats }}g</span>
  </div>
</template>

<script>
export default {
  name: "NutritionalValue",
  props: ["carbs", "fats", "proteins", "chosenStyle"],
  computed: {
    textStyle() {
      return this.chosenStyle == "style1"
        ? "{;color: #393c40; margin-left: 4px; font-size: 12px;}"
        : "{;margin-left: 6px; color: #ffffff; font-size: 14px; font-weight: 400;}";
    }
  }
};
</script>

<style>
.circle {
  height: 6px;
  margin-left: 8px;
  width: 6px;
}

.nutritional-value {
  align-items: center;
  display: flex;
}

.nutritional-value-text {
  font-family: "proxima-nova";
}
</style>
