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
          v-bind:calories="this.calories[0]"
          v-bind:carbs="this.carbs[0]"
          v-bind:time="this.time[0]"
          v-bind:energyUnits="this.energyUnits"
          v-bind:fats="this.fats[0]"
          v-bind:imageName="this.imageNames[0]"
          v-bind:isHearted="this.isHearted"
          v-bind:proteins="this.proteins[0]"
          v-bind:ratingCount="this.ratingCount"
          v-bind:recipeTitle="this.recipeTitles[0]"
          v-bind:score="this.scores[0]"
        />
      </div>
      <div class="recipe-of-the-day">
        <RecipeOfTheDay
          v-bind:calories="this.calories[1]"
          v-bind:carbs="this.carbs[1]"
          v-bind:time="this.time[1]"
          v-bind:energyUnits="this.energyUnits"
          v-bind:fats="this.fats[1]"
          v-bind:imageName="this.imageNames[1]"
          v-bind:proteins="this.proteins[1]"
          v-bind:recipeTitle="this.recipeTitles[1]"
          v-bind:score="this.scores[1]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
import RecipeOfTheDay from "./components/RecipeOfTheDay.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard,
    RecipeOfTheDay
  },
  data: function() {
    return {
      calories: [489, 269],
      imageNames: ["image", "image-2"],
      carbs: [20, 2],
      time: [24, 8],
      energyUnits: "calories",
      fats: [6, 43],
      isHearted: false,
      proteins: [16, 26],
      ratingCount: 200,
      recipeTitles: [
        "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
        "Keto Italian Beef With Cabbage Noodles"
      ],
      scores: [3.5, 5]
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
}

.recipe-of-the-day {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
