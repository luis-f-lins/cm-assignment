import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard";

jest.mock("../../src/lib/assets-loader", () => () => "image");

describe("PremiumRecipeCard.vue", () => {
  const recipeName =
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
      recipeName,
      score: 3.5
    }
  });

  it("renders the component with all its main parts", () => {
    expect(wrapper.find(".rectangle").exists()).toBe(true);
    expect(wrapper.find(".premiumRectangleContainer").exists()).toBe(true);
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".heart").exists()).toBe(true);
    expect(wrapper.find(".photo").exists()).toBe(true);
    expect(wrapper.find(".recipeName").text()).toBe(recipeName);
    expect(wrapper.find(".ratingContainer").exists()).toBe(true);
    expect(wrapper.find(".timeCalorieInfo").exists()).toBe(true);
    expect(wrapper.find(".nutritionalValueContainer").exists()).toBe(true);
  });

  describe("on mouse hover", () => {
    it("renders the hover overlay component", () => {
      wrapper.find(".rectangle").trigger("mouseover");
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find(".hoverOverlay").exists()).toBe(true);
      });
    });
  });
});
