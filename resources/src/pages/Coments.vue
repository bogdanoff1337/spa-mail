<template>
    <form action="/comments" method="post" class="container mt-5">
  <div class="form-group">
    <label for="username">User Name</label>
    <input type="text" class="form-control" id="username" v-model="username" required>
  </div>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input type="email" class="form-control" id="email" v-model="email" required>
  </div>
  <div class="form-group">
    <label for="home-page">Home page</label>
    <input type="url" class="form-control" id="home-page" v-model="homePage">
  </div>
  <div class="form-group">
    <label for="captcha">CAPTCHA</label>
    <input type="text" class="form-control" id="captcha" v-model="captcha" required>
    <img src="/captcha" alt="CAPTCHA" class="mt-2">
  </div>
  <div class="form-group">
    <label for="text">Text</label>
    <textarea class="form-control" id="text" v-model="text" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Додати</button>
</form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [],
      };
    },
    mounted() {
      this.getComments();
    },
    methods: {
      getComments() {
        // GET /comments
        this.axios.get("/comments").then((response) => {
          this.comments = response.data;
        });
      },
    },
  };
  </script>

<style lang="less" scoped>

.container {
  width: 80%;
  margin: 0 auto;
}

.row {
  margin: 0 -15px;
}

.col-md-8 {
  width: 80%;
}

.col-md-4 {
  width: 20%;
}

.comments {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.comments li {
  margin-bottom: 10px;
}

.comments li strong {
  font-weight: bold;
}

.comments li input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.comments li input[type="submit"] {
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: 0;
  cursor: pointer;
}


</style>