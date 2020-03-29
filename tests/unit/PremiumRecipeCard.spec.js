import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard";

jest.mock("../../src/lib/assets-loader", () => () => "image");

describe("PremiumRecipeCard.vue", () => {
  const recipeTitle =
    "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice";

  const wrapper = mount(PremiumRecipeCard, {
    propsData: {
      calories: 489,
      imageName: "image",
      carbs: 20,
      time: 24,
      energyUnits: "calories",
      fats: 6,
      isHearted: false,
      proteins: 16,
      ratingCount: 200,
      recipeTitle,
      score: 3.5
    }
  });

  it("renders the component with all its main parts", () => {
    expect(wrapper.find(".card").exists()).toBe(true);
    expect(wrapper.find(".premium-rectangle-container").exists()).toBe(true);
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".heart").exists()).toBe(true);
    expect(wrapper.find(".photo").exists()).toBe(true);
    expect(wrapper.find(".recipe-title").text()).toBe(recipeTitle);
    expect(wrapper.find(".rating-container").exists()).toBe(true);
    expect(wrapper.findAll(".info-line").length).toBe(2);
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
