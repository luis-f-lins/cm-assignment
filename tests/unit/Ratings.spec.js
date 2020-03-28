import { mount } from "@vue/test-utils";
import Ratings from "../../src/components/Ratings";

describe("Ratings.vue", () => {
  const starUnfilledSrc = "../assets/star-unfilled.svg";
  const starFilledSrc = "../assets/star-filled.svg";
  const starHalfFilledSrc = "../assets/star-half-filled.svg";

  it("renders the component with five stars and rating count", () => {
    const wrapper = mount(Ratings, {
      propsData: {
        ratingCount: 200,
        score: 0,
        showRatingCount: true
      }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll("img").length).toBe(5);
    });
    expect(wrapper.find(".ratingCount").exists()).toBe(true);
  });

  describe("when showRatingCount is set to false", () => {
    const wrapper = mount(Ratings, {
      propsData: {
        ratingCount: 200,
        score: 5,
        showRatingCount: false
      }
    });

    it("does not render rating count", () => {
      expect(wrapper.find(".ratingCount").exists()).toBe(false);
    });
  });

  describe("when score is over 5", () => {
    const wrapper = mount(Ratings, {
      propsData: {
        ratingCount: 200,
        score: 7,
        showRatingCount: false
      }
    });

    it("renders 5 filled stars", () => {
      wrapper.vm.$nextTick(() => {
        for (let i = 0; i < 5; i++) {
          expect(
            wrapper
              .findAll("img")
              .at(i)
              .attributes("src")
          ).toBe(starFilledSrc);
        }
      });
    });
  });

  describe("when score is a decimal number", () => {
    const wrapper = mount(Ratings, {
      propsData: {
        ratingCount: 200,
        score: 3.7,
        showRatingCount: false
      }
    });

    it("rounds to nearest .5 number and renders the according stars", () => {
      wrapper.vm.$nextTick(() => {
        for (let i = 0; i < 3; i++) {
          expect(
            wrapper
              .findAll("img")
              .at(i)
              .attributes("src")
          ).toBe(starFilledSrc);
        }

        expect(
          wrapper
            .findAll("img")
            .at(3)
            .attributes("src")
        ).toBe(starHalfFilledSrc);

        expect(
          wrapper
            .findAll("img")
            .at(4)
            .attributes("src")
        ).toBe(starUnfilledSrc);
      });
    });
  });
});
