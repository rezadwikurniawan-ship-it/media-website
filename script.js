const data = [
  {
    title: "Berita Pertama",
    content: "Ini isi berita pertama"
  },
  {
    title: "Teknologi AI",
    content: "AI berkembang sangat cepat"
  }
];

const container = document.getElementById("news");

data.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>
  `;
});
