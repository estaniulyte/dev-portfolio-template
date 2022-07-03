<template>
  <v-app>
    <AppBar/>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
export default {
  name: 'App',

  components: {
    AppBar
},

  data: () => ({
    //
  }),
};
</script>

<style>
.v-main {
	background: linear-gradient(-45deg, #0a0a22,  #380f57, #0b0524, #130639);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
