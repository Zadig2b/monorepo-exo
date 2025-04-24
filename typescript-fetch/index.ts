import { fetchUsers, fetchPostsByUserId } from "./api.js";
import { displayUser, displayPostsForUser } from "./display.js";
import { User } from "./types";

async function main(): Promise<void> {
  const users: User[] = await fetchUsers();

  for (const user of users) {
    displayUser(user);
    const posts = await fetchPostsByUserId(user.id);
    displayPostsForUser(user, posts);
  }
}

main();
