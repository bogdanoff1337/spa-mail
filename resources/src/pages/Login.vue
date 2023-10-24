<template>
  <div id="app">
    <div class="login-page">
      <transition name="fade">
        <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div v-if="!registerActive && !isAuthenticated" class="card login" :class="{ error: emptyFields }">
              <h1>Sign In</h1>
              <form class="form-group">
                <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                <button class="btn btn-primary" @click="doLogin">Sign In</button>
                <p>Don't have an account? <a href="#" @click="toggleRegister">Sign up here</a></p>
              </form>
            </div>

            <div v-else-if="isAuthenticated" class="user-welcome">
              <p>Welcome, {{ userName }}</p>
              <button class="btn btn-danger" @click="doLogout">Log Out</button>
            </div>

            <div v-else class="card register" :class="{ error: emptyFields }">
              <h1>Sign Up</h1>
              <form class="form-group">
                <input v-model="userReg" type="text" class="form-control" placeholder="Name" required>
                <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                <button class="btn btn-primary" @click="doRegister">Sign Up</button>
                <p>Already have an account? <a href="#" @click="toggleRegister">Sign in here</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      userReg: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      registerActive: false,
      emptyFields: false,
      userName: "", // Додайте поле для зберігання імені користувача
      isAuthenticated: false, // Додайте змінну для слідкування за статусом автентифікації
    };
  },
  methods: {
    async doLogin() {
      if (!this.emailLogin || !this.passwordLogin) {
        this.emptyFields = true;
        return;
      }

      try {
        const response = await axios.post("/api/login", {
          email: this.emailLogin,
          password: this.passwordLogin,
        });

        // Оновіть статус автентифікації
        this.isAuthenticated = true;

        // Збережіть ім'я користувача після входу
        this.userName = response.data.name;

        this.$router.push({ path: '/' });

      } catch (error) {
        console.error(error);
        this.emptyFields = true;
      }
    },
    async doRegister() {
      if (!this.userReg || !this.emailReg || !this.passwordReg || this.passwordReg !== this.confirmReg) {
        this.emptyFields = true;
        return;
      }

      try {
        const response = await axios.post("/api/register", {
          name: this.userReg,
          email: this.emailReg,
          password: this.passwordReg,
        });

        // Оновіть статус автентифікації
        this.isAuthenticated = true;

        this.userName = response.data.name;

        // Додайте вашу логіку після успішної реєстрації

      } catch (error) {
        console.error(error);
        this.emptyFields = true;
      }
    },
    doLogout() {
      // Додайте логіку виходу користувача
      // Наприклад, виклик функції виходу та оновлення isAuthenticated
      this.isAuthenticated = false;
    },
    toggleRegister() {
      this.registerActive = !this.registerActive;
      this.emptyFields = false;
    },
  },
});
</script>




  
  
  <style>
 p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}

.form-group {
 
    margin-bottom: 50px;

}

.login-page {
   align-items: center;
   display: flex;
  
}

  </style>
  