import { mount } from "@vue/test-utils";
import PremiumRectangle from "../../src/components/PremiumRectangle";

describe("PremiumRectangle.vue", () => {
  const wrapper = mount(PremiumRectangle);

  it("renders the component with premium rectangle, trophy and text", () => {
    expect(wrapper.find(".premium-rectangle").exists()).toBe(true);
    expect(wrapper.find(".premium-text").exists()).toBe(true);
    expect(wrapper.find(".premium-trophy").exists()).toBe(true);
  });
});
