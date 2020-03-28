import { mount } from "@vue/test-utils";
import PremiumRectangle from "../../src/components/PremiumRectangle";

describe("PremiumRectangle.vue", () => {
  const wrapper = mount(PremiumRectangle);

  it("renders the component with premium rectangle, trophy and text", () => {
    expect(wrapper.find(".premiumRectangle").exists()).toBe(true);
    expect(wrapper.find(".premiumText").exists()).toBe(true);
    expect(wrapper.find(".premiumTrophy").exists()).toBe(true);
  });
});
