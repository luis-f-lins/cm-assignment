<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          v-bind:calories="this.calories"
          v-bind:carbs="this.carbs"
          v-bind:time="this.time"
          v-bind:energyUnits="this.energyUnits"
          v-bind:fats="this.fats"
          v-bind:imageName="this.imageName"
          v-bind:isHearted="this.isHearted"
          v-bind:proteins="this.proteins"
          v-bind:ratingCount="this.ratingCount"
          v-bind:recipeName="this.recipeName"
          v-bind:score="this.score"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard
  },
  data: function() {
    return {
      calories: 489,
      imageName: "image",
      carbs: 20,
      time: 24,
      energyUnits: "calories",
      fats: 6,
      isHearted: false,
      proteins: 16,
      ratingCount: 200,
      recipeName: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      score: 3.5
    };
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.premium-recipe-wrapper {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
