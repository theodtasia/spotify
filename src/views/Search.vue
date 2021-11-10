<template>
  <Content>
    <template v-slot:search-button>
      <div class="flex justify-center mt-20">
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
      <div class="flex justify-center text-white m-16">
        <div v-if="more" class="fixed z-100 inset-0 opacity-25 bg-black"></div>
        <div
          class="text-white"
          v-for="artist in searchResult"
          :key="artist.idArtist"
        >
          <div class="container">
            <div class="w-full shadow-xl grid grid-cols-2 gap-5">
              <div class="flex flex-wrap justify-center">
                <div class="w-6/12 sm:w-9/12 px-4">
                  <img
                    :src="artist.strArtistThumb"
                    class="
                      shadow-lg
                      rounded-full
                      max-w-full
                      h-auto
                      align-middle
                      border-none
                    "
                  />
                  <div class="text-4xl text-center mt-12">
                    {{ artist.strArtist }}
                  </div>
                </div>
              </div>

              <div class="m-2">
                <div class="container grid grid-cols-3 gap-4">
                  <div class="" v-for="index in 6" :key="index">
                    {{ info[index].title }}
                    {{ artist[info[index].item] }}
                  </div>
                </div>
                <div class="h-px w-full bg-light my-3"></div>

                <h1 class="text-2xl text-center mt-12 mb-8">Description</h1>
                <p class="text-gray-700 text-base m-2">
                  {{ artist.strBiographyEN }}
                </p>
              </div>
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
      artist: {},
      info: [
        {},
        {
          title: "Region: ",
          item: "strMood",
        },

        {
          title: "Gender: ",
          item: "strStyle",
        },
        {
          title: "Members: ",
          item: "intMembers",
        },
        {
          title: "Birth Year: ",
          item: "intBornYear",
        },
        {
          title: "Formed Year: ",
          item: "intFormedYear",
        },
        {
          title: "Label: ",
          item: "strLabel",
        },
      ],
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
