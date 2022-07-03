<template>
  <v-app-bar
    class="px-10"
    elevation="0"
    color="#181818"
    height="80px"
    hide-on-scroll
    app
  >
    <v-toolbar-title>
      <h3 class="white--text text-uppercase headline">
        LOGO
      </h3>
    </v-toolbar-title>
    <v-spacer />
    <div class="d-flex align-center">
      <li
        v-for="item in navigationItems"
        :key="item.name"
        class="links pl-10"
        :style="{ 'letter-spacing': '2.2px' }"
      >
        <a>{{ item.name }}</a>
      </li>
      <v-btn
        outlined
        color="amber"
        class="ml-10 py-6 px-10"
        :style="{ 'letter-spacing': '2.2px' }"
        large
      >
        Join us
      </v-btn>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    navigationItems: [
      {
        name: "About",
      },
      {
        name: "Blog",
      },
      {
        name: "Portfolio",
      },
      {
        name: "Contact",
      },
    ]
  })
};
</script>

<style scoped lang="scss">
.links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  a {
    color: white;
  }
}

</style>