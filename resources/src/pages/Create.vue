<template>
  <main>
    <form>
      <div class="form-group">
        <label for="name">User Name</label>
        <input id="name" type="text" class="form-control" pattern="[a-zA-Z0-9]+" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input id="email" type="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="home-page">Home Page</label> 
        <input id="home-page" type="url" class="form-control" />
      </div>
      <div class="form-group">
        <label for="captcha">CAPTCHA</label>
        <input id="captcha" type="text" class="form-control" pattern="[a-zA-Z0-9]+" required />
        <img src="http://example.com/captcha" alt="CAPTCHA" />
      </div>
      <input type="file" id="fileInput" accept=".jpg, .jpeg, .png, .gif, .txt">
        <button id="uploadButton">Upload</button>
        <div id="imagePreview"></div>
      <div id="textPreview"></div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
        <button type="submit" class="btn btn-primary">Send Response</button>
    </form>
  </main>
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

/* Стилі для попереднього перегляду зображення */
#imagePreview img {
  max-width: 320px;
  max-height: 240px;
}

/* Стилі для попереднього перегляду текстового файлу */
#textPreview {
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 320px;
  max-height: 240px;
  overflow: auto;
}



main {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 50px;
}

.form-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.form-modal-content {
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.form-control:focus {
  border-color: #000;
}

.form-floating {
  position: relative;
  padding-top: 10px;
}

.form-floating > label {
  position: absolute;
  top: 10px;
  left: 0;
  margin-bottom: 0;
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.2s ease-in-out;
}

.form-floating > textarea.form-control:focus + label,
.form-floating > textarea.form-control:not(:placeholder-shown) + label {
  opacity: 1;
}

.btn-primary {
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: 0;
  cursor: pointer;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #333;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  opacity: 0.5;
}

.close:hover {
  opacity: 1;
}

@media (max-width: 576px) {
  .form-modal {
    width: 100%;
  }
}

</style>