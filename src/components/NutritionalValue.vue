<template>
  <div class="nutritionalValue">
    <img alt="carbs" src="../assets/carbs.svg" class="circle" />
    <span class="nutritionalValueText">{{ carbs }} g</span>
    <img alt="proteins" src="../assets/proteins.svg" class="circle" />
    <span class="nutritionalValueText">{{ proteins }} g</span>
    <img alt="fats" src="../assets/fats.svg" class="circle" />
    <span class="nutritionalValueText">{{ fats }}g</span>
  </div>
</template>

<script>
export default {
  name: "NutritionalValue",
  props: ["carbs", "proteins", "fats"]
};
</script>

<style>
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
</style>
