<template>
	<header class="header">
		<ul class="nav-links">
			<li class="nav-link">
				<router-link class="upward" to="/Comments">All Coments</router-link>
			</li>
			<li class="nav-link">
				<router-link class="forward" to="/Create">Create discussion</router-link>
			</li>
			<li class="nav-link">
				<router-link class="forward" to="/Login" v-if="!isAuthenticated">Login</router-link>
				<button @click="doLogout" v-else>Logout</button>
			</li>
		</ul>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import axios from 'axios';

export default defineComponent({
  data() {
    return {
      isAuthenticated: false, // Передпоставляючи, що ви маєте змінну, яка позначає аутентифікацію користувача
    };
  },
  methods: {
	doLogout() {
  axios.post("/api/logout") // Викликати API для виходу (ваш шлях може бути іншим)
    .then((response) => {
      // Успішний вихід
      this.isAuthenticated = false; // Оновити стан аутентифікації
    })
    .catch((error) => {
      // Обробка помилки виходу
      console.error(error);
    });
}

  },
});
</script>


<style lang="less" scoped>
	.header {
		margin-top: 10px;
		width: auto;
		margin: 0 auto;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

.nav-links{
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.nav-links li{
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #000;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}

</style>