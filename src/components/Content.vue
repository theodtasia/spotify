<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh">
      <navbar></navbar>
      <div class="w-full h-full relative overflow-auto">
        <div class="w-full sticky top-0"></div>
        <slot name="search-button"></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Content",
  components: { Footer },
  data: function () {
    return {
      setID: "home",
      query: "",
      more: false,
      tracks: {},
    };
  },
};
</script>

<style></style>
