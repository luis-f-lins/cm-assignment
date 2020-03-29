import { mount } from "@vue/test-utils";
import RecipeOfTheDay from "../../src/components/RecipeOfTheDay";

jest.mock("../../src/lib/assets-loader", () => () => "image");

describe("RecipeOfTheDay.vue", () => {
  const recipeTitle = "Keto Italian Beef With Cabbage Noodles";

  const wrapper = mount(RecipeOfTheDay, {
    propsData: {
      calories: 269,
      carbs: 2,
      energyUnits: "calories",
      fats: 43,
      imageName: "image",
      proteins: 26,
      recipeTitle,
      score: 5,
      time: 8
    }
  });

  it("renders the component with all its main parts", () => {
    expect(wrapper.find(".card").exists()).toBe(true);
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".photo").exists()).toBe(true);
    expect(wrapper.find(".recipe-title").text()).toBe(recipeTitle);
    expect(wrapper.find(".rating-container").exists()).toBe(true);
    expect(wrapper.find(".nutritional-value-container").exists()).toBe(true);
    expect(wrapper.find(".time-calorie-container").exists()).toBe(true);
    expect(wrapper.find(".learn-more-button").exists()).toBe(true);
  });

  describe("on mouse hover", () => {
    it("renders the hover overlay component", () => {
      wrapper.find(".card").trigger("mouseover");
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find(".hover-overlay").exists()).toBe(true);
      });
    });
  });
});
