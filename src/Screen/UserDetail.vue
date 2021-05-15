<template>
  <div>
    <div>
      <div v-if="id <= 2">
        <user-detail-card :inputChild="userDatas[id]"></user-detail-card>
      </div>

      <div v-else><button @click="backToUsersScreen">返回前頁</button></div>
    </div>
  </div>
</template>

<script>
import UserDetailCard from "../components/VueDetailCard.vue";
import { useRoute } from "vue-router";
export default {
  inject: ["userDatas"],
  components: {
    UserDetailCard,
  },
  setup() {
    const {
      params: { id },
    } = useRoute();
    console.log(useRoute().params);
    console.log(useRoute().path);
    return {
      id,
    };
  },
  methods: {
    backToUsersScreen() {
      this.$router.push("/user");
    },
  },
};
</script>

<style></style>
