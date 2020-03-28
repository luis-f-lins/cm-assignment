import { withKnobs, number } from "@storybook/addon-knobs";

import NutritionalValue from "../src/components/NutritionalValue.vue";

export default {
  title: "NutritionalValue",
  component: NutritionalValue,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { NutritionalValue },
  props: {
    carbs: { default: number("Carbs", 20) },
    fats: { default: number("Fats", 6) },
    proteins: { default: number("Proteins", 16) }
  },
  template: `
  <NutritionalValue
  v-bind:carbs="carbs"
  v-bind:fats="fats"
  v-bind:proteins="proteins"
/>`
});
