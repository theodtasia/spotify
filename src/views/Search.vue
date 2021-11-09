<template>
  <Content>
    <template v-slot:search-button>
      <div class="flex justify-center lg:mt-20">
        <div class="p-4 w-30 sm:w-80 container">
          <div class="bg-white flex items-center rounded-full shadow-xl">
            <input
              class="
                rounded-l-full
                w-full
                py-3
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
              "
              id="search"
              type="text"
              placeholder="Search artist name..."
              v-model="query"
            />

            <div class="p-4">
              <button
                class="
                  bg-blue-900
                  text-white
                  rounded-full
                  p-2
                  hover:bg-blue-700
                  focus:outline-none
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                "
                @click="getSearchResults(query)"
              >
                <font-awesome-icon :icon="['fas', 'search']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Content from "../components/Content.vue";
export default {
  name: "Search",
  components: { Content },
  data() {
    return {
      query: "",
      more: false,
      tracks: {},
    };
  },

  computed: {
    ...mapGetters([
      "searchResult",
      "searchMvs",
      "searchAlbums",
      "searchTracks",
    ]),
  },
  methods: {
    ...mapActions(["getSearchResults"]),
    setTracks(id) {
      // Access tracks using id as key
      this.tracks = this.searchTracks[id];
      this.more = !this.more;
    },
  },
};
</script>

<style></style>
