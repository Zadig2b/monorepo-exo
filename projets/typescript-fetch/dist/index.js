import { fetchUsers, fetchPostsByUserId } from "./api.js";
import { renderUser } from "./display.js";
async function main() {
    const container = document.getElementById("user-list");
    if (!container)
        return;
    const users = await fetchUsers();
    for (const user of users) {
        const posts = await fetchPostsByUserId(user.id);
        const card = renderUser(user, posts);
        container.appendChild(card);
    }
}
main();
