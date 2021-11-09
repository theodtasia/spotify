<template>
  <div class="w-40 sm:w-56 bg-black h-full flex-none">
    <div class="p-6">
      <img src="../assets/spotify.png" class="h-10" />
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
          'opacity-75',
          'hover:opacity-100',
        ]"
      >
        <font-awesome-icon
          :icon="['fa', page.icon]"
          class="fa-lg icon alt mx-4"
        />
        <button @click="(setID = page.id), setPage(index)">
          <router-link :to="page.name"> {{ page.name }} </router-link>
        </button>
      </li>
    </ul>
    <div class="m-5">
      <h1 class="text-xs text-lightest tracking-widest uppercase mb-3">
        PLaylists
      </h1>
      <button
        class="
          flex
          items-center
          justify-start
          opacity-75
          hover:opacity-100
          mb-2
        "
      >
        <img class="h-8 w-8 mr-3" src="../assets/plus.jpg" />
        <p class="text-sm text-white font-semibold">Add New</p>
      </button>
      <button
        class="
          flex
          items-center
          justify-start
          opacity-75
          hover:opacity-100
          mb-2
        "
      >
        <img class="h-8 w-8 mr-3" src="../assets/favorites.png" />
        <p class="text-sm text-white font-semibold">Liked Songs</p>
      </button>
      <div class="h-px w-full bg-light my-3"></div>
    </div>
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
      query: "",
      more: false,
      tracks: {},
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
