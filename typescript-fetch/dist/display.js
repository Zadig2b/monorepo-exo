export function renderUser(user, posts) {
    const div = document.createElement("div");
    div.className = "col-md-6";
    const postItems = posts.map(post => `
    <div class="border rounded p-2 mb-2 bg-white shadow-sm">
      <h5>${post.title}</h5>
      <p>${post.body}</p>
    </div>
  `).join("");
    div.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="card-title">${user.name}</h4>
        <h6 class="card-subtitle text-muted">@${user.username} • ${user.email}</h6>
        <div class="mt-3">${postItems}</div>
      </div>
    </div>
  `;
    return div;
}
