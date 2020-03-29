import { mount } from "@vue/test-utils";
import TimeCalorieInfo from "../../src/components/TimeCalorieInfo";

describe("TimeCalorieInfo.vue", () => {
  describe("when chosen style is style1", () => {
    it("renders the component with two svgs and two text elements", () => {
      const wrapper = mount(TimeCalorieInfo, {
        propsData: {
          calories: 200,
          chosenStyle: "style1",
          time: 24,
          energyUnits: "calories"
        }
      });
      expect(wrapper.findAll(".svg").length).toBe(2);
      expect(wrapper.findAll(".info-text").length).toBe(2);
    });
  });

  describe("when chosen style is style2", () => {
    it("renders the component two text elements and a middle dot", () => {
      const wrapper = mount(TimeCalorieInfo, {
        propsData: {
          calories: 200,
          chosenStyle: "style2",
          time: 24,
          energyUnits: "calories"
        }
      });
      expect(wrapper.findAll(".middle-dot").length).toBe(1);
      expect(wrapper.findAll(".info-text").length).toBe(2);
    });
  });

  describe("when the selected energy unit is kilojaules", () => {
    const calories = 200;
    const caloriesInKJ = Math.round(calories * 4.184);

    const wrapper = mount(TimeCalorieInfo, {
      propsData: {
        calories,
        time: 24,
        energyUnits: "kilojaules"
      }
    });

    it("renders calories in kilojaules", () => {
      expect(wrapper.find("#calories").text()).toContain(caloriesInKJ);
    });
  });

  describe("when calories prop is undefined", () => {
    const wrapper = mount(TimeCalorieInfo, {
      propsData: {
        time: 24,
        energyUnits: "kilojaules"
      }
    });

    it("renders time element", () => {
      expect(wrapper.find("#time").exists()).toBe(true);
    });

    it("does not render calorie element", () => {
      expect(wrapper.find("#calories").exists()).toBe(false);
    });
  });

  describe("when time prop is undefined", () => {
    const wrapper = mount(TimeCalorieInfo, {
      propsData: {
        calories: 200,
        energyUnits: "kilojaules"
      }
    });

    it("renders calorie element", () => {
      expect(wrapper.find("#calories").exists()).toBe(true);
    });

    it("does not render time element", () => {
      expect(wrapper.find("#time").exists()).toBe(false);
    });
  });
});
