import { withKnobs, number, radios } from "@storybook/addon-knobs";

import TimeCalorieInfo from "../src/components/TimeCalorieInfo.vue";

export default {
  title: "TimeCalorieInfo",
  component: TimeCalorieInfo,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { TimeCalorieInfo },
  props: {
    calories: { default: number("Calories", 489) },
    time: { default: number("Prep time", 24) },
    energyUnits: {
      default: radios("Energy unit", ["calories", "kilojaules"], "calories")
    }
  },
  template: `
  <TimeCalorieInfo
  v-bind:calories="calories"
  v-bind:time="time"
  v-bind:energyUnits="energyUnits"
/>`
});
