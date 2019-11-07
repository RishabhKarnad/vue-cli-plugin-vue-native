<template>
  <view class="container">
    <text>{{ message }}</text>
    <button title="Press me!" @press="exclaim" />
  </view>
</template>

<script>
export default {
  data: () => ({
    message: "Hello, world"
  }),
  methods: {
    exclaim() {
      this.message += "!";
    }
  }
};
</script>

<style>
.container {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
