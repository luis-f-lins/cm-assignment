import { mount } from "@vue/test-utils";
import NutritionalValue from "../../src/components/NutritionalValue";

describe("NutritionalValue.vue", () => {
  it("renders the component with three circles and three text elements", () => {
    const wrapper = mount(NutritionalValue, {
      propsData: {
        carbs: 20,
        fats: 6,
        proteins: 16
      }
    });
    expect(wrapper.findAll(".circle").length).toBe(3);
    expect(wrapper.findAll(".nutritional-value-text").length).toBe(3);
  });
});
