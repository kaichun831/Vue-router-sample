<template>
  <div>
    <ul>
      <li v-for="user in userDatas" :key="user.userId">
        <button @click="goUserDetial(user)">{{ user["userName"] }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["userDatas"],
  methods: {
    goUserDetial(user) {
      console.log(user["userId"]);
      console.log(user["userName"]);
      //type1
      //   this.$router.push("/user/" + user["userId"]);
      //type2
      this.$router.push({
        path: "/user/" + user["userId"],
        //Get
        // query: {
        //   name: user["userName"],
        //   age: user["userId"],
        // },
        //Post
        params: {
          name: user["userName"],
          age: user["userId"],
        },
      });
    },
  },
};
</script>

<style></style>
