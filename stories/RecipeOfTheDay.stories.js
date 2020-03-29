import { action } from "@storybook/addon-actions";
import { withKnobs, number, text, radios } from "@storybook/addon-knobs";

import RecipeOfTheDay from "../src/components/RecipeOfTheDay.vue";

export default {
  title: "RecipeOfTheDay",
  component: RecipeOfTheDay,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfTheDay },
  props: {
    calories: { default: number("Calories", 269) },
    carbs: { default: number("Carbs", 2) },
    energyUnits: {
      default: radios("Energy unit", ["calories", "kilojaules"], "calories")
    },
    fats: { default: number("Fats", 43) },
    imageName: { default: text("Image name", "image-2") },
    proteins: { default: number("Proteins", 26) },
    recipeTitle: {
      default: text("Recipe name", "Keto Italian Beef With Cabbage Noodles")
    },
    score: { default: number("Recipe score", 5) },
    time: { default: number("Prep time (in minutes)", 8) }
  },
  template: `
  <RecipeOfTheDay
  @click="action"
  v-bind:calories="calories"
  v-bind:carbs="carbs"
  v-bind:time="time"
  v-bind:energyUnits="energyUnits"
  v-bind:fats="fats"
  v-bind:imageName="imageName"
  v-bind:proteins="proteins"
  v-bind:recipeTitle="recipeTitle"
  v-bind:score="score"
/>`,
  methods: { action: action("clicked") }
});
