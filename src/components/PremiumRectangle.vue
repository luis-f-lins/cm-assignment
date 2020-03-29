<template>
  <div class="premium-rectangle">
    <img alt="Premium" class="premium-trophy" src="../assets/trophy.svg" />
    <div class="premium-text">Premium Recipe</div>
  </div>
</template>

<script>
export default {
  name: "PremiumRectangle"
};
</script>

<style>
.premium-rectangle {
  align-items: center;
  background: #ffffff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 20px;
  position: absolute;
  width: 117px;
}

.premium-text {
  color: rgba(255, 255, 255, 1);
  font-family: "proxima-nova";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 12px;
  margin-left: 4px;
}

.premium-trophy {
  height: 12px;
  width: 12px;
}
</style>
