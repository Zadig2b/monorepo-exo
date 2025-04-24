const BASE_URL = "https://jsonplaceholder.typicode.com";
export async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok)
            throw new Error("Erreur lors de la récupération des utilisateurs");
        return await response.json();
    }
    catch (error) {
        console.error("fetchUsers:", error);
        return [];
    }
}
export async function fetchPostsByUserId(userId) {
    try {
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
        if (!response.ok)
            throw new Error(`Erreur lors de la récupération des posts pour l'utilisateur ${userId}`);
        return await response.json();
    }
    catch (error) {
        console.error("fetchPostsByUserId:", error);
        return [];
    }
}
