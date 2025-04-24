import { User, Post } from "./types.js";

export function displayUser(user: User): void {
  console.log(`👤 Utilisateur : ${user.name}`);
  console.log(`📧 Email : ${user.email}`);
  console.log(`🆔 ID : ${user.id} | 👨‍💻 Pseudo : ${user.username}`);
}

export function displayPost(post: Post): void {
  console.log(`\n📌 ${post.title}`);
  console.log(`📝 ${post.body}`);
}

export function displayPostsForUser(user: User, posts: Post[]): void {
  console.log(`\n====== 📚 Articles de ${user.name} ======`);
  if (posts.length === 0) {
    console.log("Aucun post pour cet utilisateur.");
  } else {
    posts.forEach(displayPost);
  }
}
