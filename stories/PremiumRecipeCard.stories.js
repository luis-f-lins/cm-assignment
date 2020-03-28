import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  number,
  boolean,
  text,
  radios
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    calories: { default: number("Calories", 489) },
    carbs: { default: number("Carbs", 20) },
    duration: { default: number("Duration of recipe", 24) },
    energyUnits: {
      default: radios("Energy unit", ["calories", "kilojaules"], "calories")
    },
    fats: { default: number("Fats", 6) },
    imageName: { default: text("Image name", "image") },
    isHearted: { default: boolean("Hearted", false) },
    proteins: { default: number("Proteins", 16) },
    ratingCount: { default: number("Rating count", 200) },
    recipeName: {
      default: text(
        "Recipe name",
        "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice"
      )
    },
    score: { default: number("Recipe score", 3.5) }
  },
  template: `
  <PremiumRecipeCard
  @click="action"
  v-bind:calories="calories"
  v-bind:carbs="carbs"
  v-bind:duration="duration"
  v-bind:energyUnits="energyUnits"
  v-bind:fats="fats"
  v-bind:imageName="imageName"
  v-bind:isHearted="isHearted"
  v-bind:proteins="proteins"
  v-bind:ratingCount="ratingCount"
  v-bind:recipeName="recipeName"
  v-bind:score="score"
/>`,
  methods: { action: action("clicked") }
});
