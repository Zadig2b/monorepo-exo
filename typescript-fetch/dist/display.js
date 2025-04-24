export function displayUser(user) {
    console.log(`👤 Utilisateur : ${user.name}`);
    console.log(`📧 Email : ${user.email}`);
    console.log(`🆔 ID : ${user.id} | 👨‍💻 Pseudo : ${user.username}`);
}
export function displayPost(post) {
    console.log(`\n📌 ${post.title}`);
    console.log(`📝 ${post.body}`);
}
export function displayPostsForUser(user, posts) {
    console.log(`\n====== 📚 Articles de ${user.name} ======`);
    if (posts.length === 0) {
        console.log("Aucun post pour cet utilisateur.");
    }
    else {
        posts.forEach(displayPost);
    }
}
