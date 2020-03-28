<template>
  <div class="ratings">
    <span v-bind:key="index" v-for="(item, index) in stars">
      <img
        alt="Clock"
        class="star"
        src="../assets/star-unfilled.svg"
        v-if="item == 'unfilled'"
      />
      <img
        alt="Clock"
        class="star"
        src="../assets/star-filled.svg"
        v-if="item == 'filled'"
      />
      <img
        alt="Clock"
        class="star"
        src="../assets/star-half-filled.svg"
        v-if="item == 'half-filled'"
      />
    </span>
    <span class="ratingCount" v-if="showRatingCount">{{
      formattedRatingCount
    }}</span>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  props: ["ratingCount", "score", "showRatingCount"],
  mounted: function() {
    this.setStars(this.score);
  },
  data() {
    return {
      stars: []
    };
  },
  computed: {
    formattedRatingCount: function() {
      if (this.ratingCount > 1 || this.ratingCount == 0) {
        return this.ratingCount + " ratings";
      } else {
        return this.ratingCount + " rating";
      }
    }
  },
  methods: {
    setStars: function(score) {
      let rating = Math.round(score * 2) / 2;
      let output = [];

      for (var i = rating; i >= 1; i--) {
        output.push("filled");
      }

      if (i == 0.5) output.push("half-filled");

      for (let i = 5 - rating; i >= 1; i--) output.push("unfilled");

      this.stars = output;
      return null;
    }
  }
};
</script>

<style>
.ratingCount {
  color: #1ca677;
  font-family: "proxima-nova";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin-left: 8px;
}

.ratings {
  align-items: center;
  display: flex;
}
</style>
