<template>
  <ItemMusicTop :playlist="state.playlist" />
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/item/ItemMusicTop";
export default {
  setup() {
    const state = reactive({
      playlist: {},
    });
    onMounted(async () => {
      const id = useRoute().query.id;

      const res = await getMusicItemList(id);
      state.playlist = res.data.playlist;
      console.log(res);
    });
    return { state };
  },
  components: {
    ItemMusicTop,
  },
};
</script>