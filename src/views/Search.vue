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
                px-1
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
                <p class="text-gray-700 text-base m-2 text-justify">
                  {{ artist.strBiographyEN }}
                </p>
              </div>
            </div>
          </div>
          <div class="container mt-20">
            <h1 class="text-white text-2xl text-center mb-10">
              Available albums
            </h1>
            <div class="h-px w-full bg-light my-3"></div>

            <div class="w-full mt-4 shadow-xl grid grid-cols-2 gap-4">
              <div
                v-for="album in searchAlbums"
                :key="album.idAlbum"
                class="m-2"
              >
                <div class="flex">
                  <img
                    :src="album.strAlbumThumb"
                    v-if="album.strAlbumThumb"
                    class="h-20 w-20 mr-3"
                  />
                  <img
                    src="../assets/album.jpg"
                    v-else
                    class="h-20 w-20 mr-3"
                  />
                  <div class="flex flex-col justify-center">
                    <h1 class="mt-0 text-xl">
                      {{ album.strAlbum }}
                    </h1>
                    <p class="text-sm">
                      Released

                      {{ album.intYearReleased }}
                    </p>
                    <button class="text-left" @click="setTracks(album.idAlbum)">
                      View album tracklist
                    </button>
                    <div
                      v-if="more"
                      class="
                        fixed
                        overflow-y-auto
                        inset-0
                        flex
                        justify-center
                        items-center
                        z-50
                        h-auto
                      "
                    >
                      <div class="absolute mx-auto w-auto max-w-2xl">
                        <div class="bg-light w-full rounded p-5">
                          <ol
                            v-for="track in tracks.list"
                            :key="track.idTrack"
                            class="text-white"
                          >
                            <li>{{ track.strTrack }}</li>
                          </ol>
                          <button
                            @click="more = !more"
                            class="
                              bg-white
                              hover:bg-gray-100
                              mt-2
                              text-gray-800
                              font-semibold
                              py-2
                              px-4
                              border border-gray-400
                              rounded
                              shadow
                            "
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-20">
            <h1 class="text-white text-2xl text-center mb-10">
              Available Music Videos
            </h1>
            <div class="h-px w-full bg-light my-3"></div>

            <div class="w-full mt-4 shadow-xl grid grid-cols-2 gap-4">
              <div v-for="mv in searchMvs" :key="mv.idTrack" class="mb-2">
                <a :href="mv.strMusicVid">
                  <button
                    class="
                      text-black
                      bg-gray-300
                      hover:bg-gray-400
                      w-full
                      h-12
                      text-left
                      rounded
                    "
                    style="outline: none"
                  >
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fas', 'play-circle']" />
                      {{ artist.strArtist }} - {{ mv.strTrack }}
                    </span>
                  </button>
                </a>
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
