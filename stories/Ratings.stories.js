import { withKnobs, boolean, number } from "@storybook/addon-knobs";

import Ratings from "../src/components/Ratings.vue";

export default {
  title: "Ratings",
  component: Ratings,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Ratings },
  props: {
    ratingCount: { default: number("Rating count", 200) },
    score: { default: number("Recipe score", 3.5) },
    showRatingCount: { default: boolean("Show rating count", true) }
  },
  template: `
  <Ratings
  v-bind:ratingCount="ratingCount"
  v-bind:score="score"
  v-bind:showRatingCount="showRatingCount"
/>`
});
