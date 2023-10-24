document.getElementById('fileInput').addEventListener('change', function () {
    const file = this.files[0];
  
    if (file.type.includes('image')) {
      const imagePreview = document.getElementById('imagePreview');
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        // Обмеження розмірів зображення
        const maxWidth = 320;
        const maxHeight = 240;
        let width = img.width;
        let height = img.height;
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }
        img.width = width;
        img.height = height;
  
        // Відображення зображення в попередньому перегляді
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
      };
    } else if (file.type === 'text/plain') {
      const textPreview = document.getElementById('textPreview');
      const reader = new FileReader();
      reader.onload = function (e) {
        // Перевірка розміру текстового файлу
        if (file.size > 102400) {
          alert('Текстовий файл занадто великий. Максимальний розмір: 100 KB.');
          return;
        }
  
        // Відображення текстового файлу в попередньому перегляді
        textPreview.textContent = e.target.result;
      };
      reader.readAsText(file);
    }
  });
  
  document.getElementById('uploadButton').addEventListener('click', function () {
    // Здесь ви можете додати логіку для завантаження файлу на сервер
  });
  