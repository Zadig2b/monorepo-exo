import { fetchUsers, fetchPostsByUserId } from "./api.js";
import { displayUser, displayPostsForUser } from "./display.js";
async function main() {
    const users = await fetchUsers();
    for (const user of users) {
        displayUser(user);
        const posts = await fetchPostsByUserId(user.id);
        displayPostsForUser(user, posts);
    }
}
main();
