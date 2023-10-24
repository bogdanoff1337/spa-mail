<template>
 <PrimaryHeader />
	<main class="main">
		<router-view />
	</main>
  <div>
    <ul class="comment-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <router-link :to="'/comment/' + comment.id" class="comment-link">{{ comment.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, title: "Ось код CSS, який ви можете додати до свого SPA-додатку , щоб форма відображалася в віконечку і всі пункти ішли по порядку:" },
        { id: 2, title: "Comment 2" },
        { id: 3, title: "Comment 3" },
        // Додайте інші коментарі зі своєї бази даних
      ],
    };
  },
};
</script>

<style scoped>


.comment-list {
  list-style: none;
  padding: 0;
  text-align: center;
}

.comment-item {
  margin-bottom: 10px;
  
}

.comment-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  transition: background-color 0.6s ease;
}

.comment-link:hover {
  color: #fff;
  background-color: #000;
}
</style>
