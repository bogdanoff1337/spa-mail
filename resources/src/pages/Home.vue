<template>
  <div class="container">
    <h1>Коментарі</h1>
    <div class="row">
      <div class="col-md-8">
        <ul class="comments">
          <li v-for="comment in comments" :key="comment.id">
            <strong>{{ comment.username }}</strong>
            <p>{{ comment.email }}</p>
            <p>{{ comment.created_at }}</p>
            <a href="#">Відповісти</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      homePage: "",
      captcha: "",
      text: "",
    };
  },
  mounted() {
    // генеруємо нову CAPTCHA
    this.captcha = Math.random().toString(36).substring(7);
  },
  methods: {
    // перевірка введених даних
    checkData() {
      // перевірка імені користувача
      if (!this.username.match(/^[a-zA-Z0-9]+$/)) {
        return false;
      }
      // перевірка електронної адреси
      if (!this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/)) {
        return false;
      }
      // перевірка CAPTCHA
      if (this.captcha !== this.$refs.captcha.value) {
        return false;
      }
      // перевірка тексту
      if (!this.text) {
        return false;
      }

      return true;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.row {
  margin: 0 -15px;
}

.col-md-8 {
  width: 70%;
}

.col-md-4 {
  width: 30%;
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
  font-size: 18px;
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
  margin-top: 20px;
}

.comments li .date {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.comments li .reply {
  text-decoration: none;
  color: #000;
  font-size: 12px;
}

.comments li .reply:hover {
  text-decoration: underline;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ccc;
  padding: 10px;
}

.table th {
  background-color: #f9f9f9;
}

.table tr:hover {
  background-color: #f5f5f5;
}

.comments li .username {
  font-size: 20px;
  font-weight: bold;
}

.comments li .date {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
}

.comments li .reply {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.comments li .reply:hover {
  text-decoration: underline;
}



</style>