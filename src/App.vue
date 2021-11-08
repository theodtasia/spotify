<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh">
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img src="./assets/spotify.png" class="h-10" />
        </div>
        <ul id="apage" class="mx-2">
          <li
            v-for="(page, index) in pages"
            :key="page.id"
            :class="[
              'w - full',
              'h - full',
              'justify-center',
              'p-3',
              'text-lightest',
            ]"
          >
            <font-awesome-icon
              :icon="['fa', page.icon]"
              class="fa-lg icon alt mx-4"
            />
            <button @click="(setID = page.id), setPage(index)">
              <p>{{ page.name }}</p>
            </button>
          </li>
        </ul>
      </div>
      <div class="w-full h-full relative bg-blue-400">
        <div class="w-full sticky top-0 bg-yellow-500 p-2"></div>
      </div>
    </div>

    <div class="w-full bg-light" style="height: 12vh"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      pages: [
        { id: "home", name: "Home", icon: "home" },
        { id: "search", name: "Search", icon: "search" },
        { id: "library", name: "Library", icon: "music" },
      ],
      setID: "home",
    };
  },
  methods: {
    async setPage(index) {
      for (var i = 0; i < this.pages.length; i++) {
        if (i == index) {
          var li = document.getElementById("apage").querySelectorAll("li")[
            index
          ];
          li.classList.add("bg-light");
          li.classList.remove("text-lightest");
          li.classList.add("text-white");
        } else {
          li = document.getElementById("apage").querySelectorAll("li")[i];
          li.classList.remove("bg-light");
          li.classList.remove("text-white");
          li.classList.add("text-lightest");
        }
      }
    },
  },
};
</script>

<style></style>
